// ============================================================
// VanillaCart — ONE file, FOUR sections.
//
//   1. DATA    — the products, coupons, tax rate
//   2. STATE   — the cart "brain": functions that change state
//   3. RENDER  — the "hands": functions that paint the screen
//   4. WIRING  — events: connect clicks to state to render
//
// The one rule that runs the whole app:
//   event  →  state function  →  update()  →  render()
// Buttons never edit the page directly. They change STATE,
// and render() redraws the page FROM that state.
// ============================================================


// ============================================================
// SECTION 1 — DATA
// (In a real app this comes from an API. Same shapes, though.)
// ============================================================

const PRODUCTS = [
  { id: 1, name: "Wireless Mouse",      price: 799,   category: "electronics", emoji: "🖱️" },
  { id: 2, name: "Mechanical Keyboard", price: 3499,  category: "electronics", emoji: "⌨️" },
  { id: 3, name: "27\" Monitor",        price: 14999, category: "electronics", emoji: "🖥️" },
  { id: 4, name: "USB-C Hub",           price: 1899,  category: "electronics", emoji: "🔌" },
  { id: 5, name: "Basmati Rice 5kg",    price: 620,   category: "grocery",     emoji: "🍚" },
  { id: 6, name: "Filter Coffee 500g",  price: 340,   category: "grocery",     emoji: "☕" },
  { id: 7, name: "Mango Box (dozen)",   price: 450,   category: "grocery",     emoji: "🥭" },
  { id: 8, name: "Cotton T-Shirt",      price: 599,   category: "fashion",     emoji: "👕" },
  { id: 9, name: "Running Shoes",       price: 2799,  category: "fashion",     emoji: "👟" },
];

const COUPONS  = { SAVE10: 0.10, WELCOME20: 0.20 };  // code → fraction off
const GST_RATE = 0.18;                               // 18% tax
const STORAGE_KEY = "vanillacart-v1";


// ============================================================
// SECTION 2 — STATE (the brain)
//
// state = { items: [{ id, qty }], coupon }
// This object is the ONLY truth. Totals are never stored —
// they are recomputed from it every time (see cartDetails).
// Every function below returns a NEW state object instead of
// editing the old one — the same habit React expects later.
// ============================================================

function emptyState() {
  return { items: [], coupon: null };
}

// Read the saved cart from localStorage (it stores strings only,
// so we JSON.parse). First visit → null → start empty.
function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? emptyState();
  } catch {
    return emptyState();      // corrupted data must never crash the app
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Add one unit of a product. Already in cart → qty + 1 on that
// line. Not in cart → append a new line.
function addItem(state, id) {
  const existing = state.items.find(it => it.id === id);
  const items = existing
    ? state.items.map(it => it.id === id ? { ...it, qty: it.qty + 1 } : it)
    : [...state.items, { id, qty: 1 }];
  return { ...state, items };
}

// Set a line's quantity. Dropping below 1 means "remove it" —
// this one rule is why the − button needs no special case.
function setQty(state, id, qty) {
  if (qty < 1) return removeItem(state, id);
  return {
    ...state,
    items: state.items.map(it => it.id === id ? { ...it, qty: Math.min(qty, 99) } : it),
  };
}

function removeItem(state, id) {
  return { ...state, items: state.items.filter(it => it.id !== id) };
}

function clearCart() {
  return emptyState();
}

// Returns { state, ok } so the caller knows whether to show a
// success or an "invalid code" toast.
function applyCoupon(state, code) {
  const clean = code.trim().toUpperCase();
  if (!COUPONS[clean]) return { state, ok: false };
  return { state: { ...state, coupon: clean }, ok: true };
}

// THE MONEY PIPELINE — computed fresh on every render:
// lines (join id→product) → subtotal → discount → GST → total
function cartDetails(state) {
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


// ============================================================
// SECTION 3 — RENDER (the hands)
//
// Given data, paint the DOM. No decisions here — just drawing.
// Pattern: build an HTML string with map().join("") and assign
// it ONCE (one reflow, and the screen always matches the state).
// ============================================================

// 14999 → "₹14,999"
function money(n) {
  return new Intl.NumberFormat("en-IN",
    { style: "currency", currency: "INR", maximumFractionDigits: 0 }
  ).format(Math.round(n));
}

function renderProducts(products) {
  const grid = document.querySelector("#product-grid");

  if (products.length === 0) {
    grid.innerHTML = `<p class="empty">No products match your search 🤷</p>`;
    return;
  }

  // data-id on the button = how the click handler knows WHICH product
  grid.innerHTML = products.map(p => `
    <article class="card">
      <div class="thumb">${p.emoji}</div>
      <h3>${p.name}</h3>
      <p class="cat">${p.category}</p>
      <p class="price">${money(p.price)}</p>
      <button class="add" data-id="${p.id}">Add to Cart</button>
    </article>
  `).join("");
}

function renderCart(details) {
  const itemsEl   = document.querySelector("#cart-items");
  const summaryEl = document.querySelector("#cart-summary");

  document.querySelector("#cart-badge").textContent = details.count;

  if (details.lines.length === 0) {
    itemsEl.innerHTML   = `<p class="empty">Cart is empty — add something!</p>`;
    summaryEl.innerHTML = "";
    return;
  }

  // Each button carries data-action (what) + data-id (which line)
  itemsEl.innerHTML = details.lines.map(l => `
    <div class="line">
      <span class="line-emoji">${l.emoji}</span>
      <div class="line-info">
        <strong>${l.name}</strong>
        <small>${money(l.price)} × ${l.qty} = ${money(l.lineTotal)}</small>
      </div>
      <div class="line-actions">
        <button data-action="dec" data-id="${l.id}">−</button>
        <span>${l.qty}</span>
        <button data-action="inc" data-id="${l.id}">+</button>
        <button data-action="remove" data-id="${l.id}" class="remove">✕</button>
      </div>
    </div>
  `).join("");

  summaryEl.innerHTML = `
    <div class="row"><span>Subtotal</span><span>${money(details.subtotal)}</span></div>
    ${details.discount > 0 ? `
      <div class="row discount">
        <span>Coupon ${details.coupon}</span><span>−${money(details.discount)}</span>
      </div>` : ""}
    <div class="row"><span>GST 18%</span><span>${money(details.gst)}</span></div>
    <div class="row total"><span>Total</span><span>${money(details.total)}</span></div>
  `;
}

// Small popup, removed after 1.8s. textContent (not innerHTML)
// because toasts can echo user input — XSS safety habit.
function toast(message) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.querySelector("#toast-zone").appendChild(el);
  setTimeout(() => el.remove(), 1800);
}


// ============================================================
// SECTION 4 — WIRING (events + the heartbeat)
// ============================================================

let state = loadState();     // the cart — persisted, survives refresh
let view  = { search: "", category: "all", sort: "default" };  // UI only — not saved

// THE HEARTBEAT — every change in the whole app flows through
// these three lines. One path = one place to debug.
function update(newState) {
  state = newState;
  saveState(state);
  render();
}

// Derive what's visible from `view`, then paint everything.
function render() {
  let visible = PRODUCTS
    .filter(p => p.name.toLowerCase().includes(view.search.toLowerCase()))
    .filter(p => view.category === "all" || p.category === view.category);

  // sort a COPY — .sort() mutates the array it's called on!
  if (view.sort === "price-asc")  visible = [...visible].sort((a, b) => a.price - b.price);
  if (view.sort === "price-desc") visible = [...visible].sort((a, b) => b.price - a.price);
  if (view.sort === "name")       visible = [...visible].sort((a, b) => a.name.localeCompare(b.name));

  renderProducts(visible);
  renderCart(cartDetails(state));
}

// Debounce: wait 300ms after the LAST keystroke before running.
// The `timer` variable survives between calls — that's a closure.
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// --- search / filter / sort ---
document.querySelector("#search").addEventListener(
  "input",
  debounce(e => { view.search = e.target.value; render(); }, 300)
);
document.querySelector("#category").addEventListener("change", e => {
  view.category = e.target.value;
  render();
});
document.querySelector("#sort").addEventListener("change", e => {
  view.sort = e.target.value;
  render();
});

// --- add to cart: ONE listener on the grid handles every Add
// button, even ones created by future re-renders (delegation) ---
document.querySelector("#product-grid").addEventListener("click", e => {
  const btn = e.target.closest("button.add");
  if (!btn) return;                        // click wasn't on an Add button
  const id = Number(btn.dataset.id);
  update(addItem(state, id));
  toast(`Added ${PRODUCTS.find(p => p.id === id).name} ✅`);
});

// --- cart actions: same delegation trick, two data attributes ---
document.querySelector("#cart-items").addEventListener("click", e => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id  = Number(btn.dataset.id);
  const qty = state.items.find(it => it.id === id)?.qty ?? 0;

  const actions = {
    inc:    () => setQty(state, id, qty + 1),
    dec:    () => setQty(state, id, qty - 1),
    remove: () => removeItem(state, id),
  };
  update(actions[btn.dataset.action]());
});

// --- coupon form: preventDefault stops the page-reload default ---
document.querySelector("#coupon-form").addEventListener("submit", e => {
  e.preventDefault();
  const code = document.querySelector("#coupon-input").value;
  const result = applyCoupon(state, code);
  update(result.state);
  toast(result.ok ? `Coupon ${code.toUpperCase()} applied 🎉` : "Invalid coupon ❌");
});

// --- clear + mobile cart toggle ---
document.querySelector("#clear-cart").addEventListener("click", () => {
  update(clearCart());
  toast("Cart cleared");
});
document.querySelector("#cart-toggle").addEventListener("click", () => {
  document.querySelector("#cart-panel").classList.toggle("open");
});

// --- first paint ---
render();
