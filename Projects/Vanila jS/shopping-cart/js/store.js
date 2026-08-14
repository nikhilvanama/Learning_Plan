// ============================================================
// store.js — THE STATE ENGINE (the "brain")
// ------------------------------------------------------------
// Two rules make this file the most important one:
//
//   1. STATE IS THE ONLY TRUTH.
//      state = { items: [{ id, qty }], coupon }
//      Everything on screen is *derived* from this object.
//      We never store totals — we always recompute them.
//
//   2. EVERY UPDATE RETURNS A **NEW** STATE (immutability).
//      No function here mutates its input — they build a new
//      object with spread. This is exactly how React state and
//      Redux reducers work; learn it here, reuse it there.
//
// Note: no DOM code in this file, no document, no querySelector.
// That's deliberate — pure logic is trivial to test and reuse.
// ============================================================

import { PRODUCTS, COUPONS, GST_RATE } from "./products.js";

const STORAGE_KEY = "vanillacart-v1";

// ---------- persistence ----------

// localStorage only stores strings, so we JSON round-trip.
// The ?? fallback covers the very first visit (getItem → null).
export function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? emptyState();
  } catch {
    return emptyState();          // corrupted storage must never crash the app
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const emptyState = () => ({ items: [], coupon: null });

// ---------- update functions (all return NEW state) ----------

export function addItem(state, id) {
  const existing = state.items.find(it => it.id === id);
  const items = existing
    // already in cart → map to a new array where only that line's qty grows
    ? state.items.map(it => it.id === id ? { ...it, qty: it.qty + 1 } : it)
    // not in cart → new array with a new line appended
    : [...state.items, { id, qty: 1 }];
  return { ...state, items };
}

export function setQty(state, id, qty) {
  // qty 0 (or lower) means "remove the line" — one rule covers the − button
  if (qty < 1) return removeItem(state, id);
  const capped = Math.min(qty, 99);
  return {
    ...state,
    items: state.items.map(it => it.id === id ? { ...it, qty: capped } : it),
  };
}

export function removeItem(state, id) {
  return { ...state, items: state.items.filter(it => it.id !== id) };
}

export function clearCart() {
  return emptyState();
}

// Returns { state, ok } so the caller can toast success or failure.
export function applyCoupon(state, code) {
  const clean = code.trim().toUpperCase();
  if (!COUPONS[clean]) return { state, ok: false };
  return { state: { ...state, coupon: clean }, ok: true };
}

// ---------- derived data (computed, never stored) ----------

// Joins cart lines with product info and computes every number
// the UI needs. reduce() folds the lines into totals.
export function cartDetails(state) {
  const lines = state.items.map(it => {
    const product = PRODUCTS.find(p => p.id === it.id);
    return { ...product, qty: it.qty, lineTotal: product.price * it.qty };
  });

  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const discount = subtotal * (COUPONS[state.coupon] ?? 0);
  const gst      = (subtotal - discount) * GST_RATE;
  const total    = subtotal - discount + gst;
  const count    = lines.reduce((sum, l) => sum + l.qty, 0);

  return { lines, subtotal, discount, gst, total, count, coupon: state.coupon };
}
