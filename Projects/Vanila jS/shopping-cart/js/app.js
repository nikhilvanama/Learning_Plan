// ============================================================
// app.js — THE WIRING (the entry point)
// ------------------------------------------------------------
// This is the only file the HTML loads. It:
//   1. loads saved state,
//   2. defines ONE update() path every change flows through,
//   3. wires all events (using delegation),
//   4. does the first render.
//
// The heartbeat of the whole app is three lines long:
//
//     state = <new state from a store function>
//     saveState(state)
//     render()
//
// Click, type, or submit — every interaction ends in that same
// loop. Data flows ONE way: event → store → state → render.
// When you meet React, you'll recognise this as setState.
// ============================================================

import { PRODUCTS } from "./products.js";
import * as store from "./store.js";
import { renderProducts, renderCart, toast } from "./ui.js";

// ---------- state ----------

let state = store.loadState();          // cart survives refresh (localStorage)

// UI-only state: what the user is currently searching/filtering.
// Not persisted — a fresh visit deserves a fresh search box.
let view = { search: "", category: "all", sort: "default" };

// ---------- the single update path ----------

function update(newState) {
  state = newState;
  store.saveState(state);
  render();
}

// Derives the visible product list from `view`, then paints
// everything. filter → filter → sort is the classic pipeline.
function render() {
  let visible = PRODUCTS
    .filter(p => p.name.toLowerCase().includes(view.search.toLowerCase()))
    .filter(p => view.category === "all" || p.category === view.category);

  if (view.sort === "price-asc")  visible = [...visible].sort((a, b) => a.price - b.price);
  if (view.sort === "price-desc") visible = [...visible].sort((a, b) => b.price - a.price);
  if (view.sort === "name")       visible = [...visible].sort((a, b) => a.name.localeCompare(b.name));

  renderProducts(visible);
  renderCart(store.cartDetails(state));
}

// ---------- events ----------

// SEARCH — debounced: we wait 300ms after the LAST keystroke, so
// we render once per pause instead of once per key. The timer id
// lives in a closure between calls.
const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

document.querySelector("#search").addEventListener(
  "input",
  debounce(e => { view.search = e.target.value; render(); }, 300)
);

// FILTER + SORT — plain change events on the two selects.
document.querySelector("#category").addEventListener("change", e => {
  view.category = e.target.value;
  render();
});
document.querySelector("#sort").addEventListener("change", e => {
  view.sort = e.target.value;
  render();
});

// ADD TO CART — event DELEGATION: one listener on the grid catches
// clicks from every "Add" button, including buttons created by
// future re-renders. e.target is the actual element clicked;
// closest() walks up in case an inner element caught the click.
document.querySelector("#product-grid").addEventListener("click", e => {
  const btn = e.target.closest("button.add");
  if (!btn) return;                              // click wasn't on an Add button
  const id = Number(btn.dataset.id);             // data-id="3" → 3
  update(store.addItem(state, id));
  toast(`Added ${PRODUCTS.find(p => p.id === id).name} ✅`);
});

// CART ACTIONS — same delegation trick; data-action tells us which
// button (inc / dec / remove) and data-id tells us which line.
document.querySelector("#cart-items").addEventListener("click", e => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id  = Number(btn.dataset.id);
  const qty = state.items.find(it => it.id === id)?.qty ?? 0;

  const actions = {
    inc:    () => store.setQty(state, id, qty + 1),
    dec:    () => store.setQty(state, id, qty - 1),   // qty 0 → store removes the line
    remove: () => store.removeItem(state, id),
  };
  update(actions[btn.dataset.action]());
});

// COUPON — a form submit, so Enter works too. preventDefault stops
// the browser's default full-page reload (the #1 form gotcha).
document.querySelector("#coupon-form").addEventListener("submit", e => {
  e.preventDefault();
  const code = document.querySelector("#coupon-input").value;
  const { state: next, ok } = store.applyCoupon(state, code);
  update(next);
  toast(ok ? `Coupon ${code.toUpperCase()} applied 🎉` : "Invalid coupon ❌");
});

// CLEAR CART
document.querySelector("#clear-cart").addEventListener("click", () => {
  update(store.clearCart());
  toast("Cart cleared");
});

// CART TOGGLE (mobile) — just flips a CSS class.
document.querySelector("#cart-toggle").addEventListener("click", () => {
  document.querySelector("#cart-panel").classList.toggle("open");
});

// ---------- first paint ----------

render();
