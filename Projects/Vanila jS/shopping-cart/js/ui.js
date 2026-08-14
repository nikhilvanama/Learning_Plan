// ============================================================
// ui.js — THE RENDER LAYER (the "hands")
// ------------------------------------------------------------
// One job: given data, paint the DOM. No business logic here —
// these functions never decide anything, they just draw what
// store.js computed. The pattern throughout is:
//
//     build an HTML string with map().join("") → set it once
//
// One innerHTML assignment per render is far cheaper than many
// little DOM edits (fewer reflows — the Phase 3 lesson), and
// because we re-render whole sections from state, the screen can
// never drift out of sync with the data. (React's virtual DOM
// automates exactly this idea.)
//
// SAFETY: product names are OUR data, so template literals are
// fine here. The moment strings come from USERS, you switch to
// textContent — innerHTML + user input = XSS.
// ============================================================

// Indian-format currency: 14999 → "₹14,999"
export const money = n =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })
    .format(Math.round(n));

// ---------- product grid ----------

// data-id on the button is how the click handler knows WHICH
// product was clicked — the id rides along on the element itself.
export function renderProducts(products) {
  const grid = document.querySelector("#product-grid");

  if (products.length === 0) {
    grid.innerHTML = `<p class="empty">No products match your search 🤷</p>`;
    return;
  }

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

// ---------- cart panel ----------

export function renderCart(details) {
  const itemsEl   = document.querySelector("#cart-items");
  const summaryEl = document.querySelector("#cart-summary");
  const badgeEl   = document.querySelector("#cart-badge");

  badgeEl.textContent = details.count;

  if (details.lines.length === 0) {
    itemsEl.innerHTML   = `<p class="empty">Cart is empty — add something!</p>`;
    summaryEl.innerHTML = "";
    return;
  }

  // Each line carries data-id + data-action; the ONE listener in
  // app.js reads both and knows exactly what to do.
  itemsEl.innerHTML = details.lines.map(l => `
    <div class="line">
      <span class="line-emoji">${l.emoji}</span>
      <div class="line-info">
        <strong>${l.name}</strong>
        <small>${money(l.price)} × ${l.qty} = ${money(l.lineTotal)}</small>
      </div>
      <div class="line-actions">
        <button data-action="dec" data-id="${l.id}" aria-label="Decrease">−</button>
        <span>${l.qty}</span>
        <button data-action="inc" data-id="${l.id}" aria-label="Increase">+</button>
        <button data-action="remove" data-id="${l.id}" class="remove" aria-label="Remove">✕</button>
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

// ---------- toast notifications ----------

// Creates a small popup, lets CSS animate it in, removes it after
// 1.8s. Element creation + timed removal in eight lines.
export function toast(message) {
  const zone = document.querySelector("#toast-zone");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;          // textContent: toasts can echo user input (coupon codes)
  zone.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}
