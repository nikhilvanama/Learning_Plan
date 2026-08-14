// ============================================================
// products.js — THE DATA LAYER
// ------------------------------------------------------------
// In a real app this array would come from a backend API
// (fetch("/api/products")). Keeping it as a plain module lets
// the rest of the app practice the exact same shapes it would
// get from JSON — swap this file for a fetch call later and
// nothing else changes. That separation is the whole lesson.
// ============================================================

export const PRODUCTS = [
  { id: 1, name: "Wireless Mouse",      price: 799,    category: "electronics", emoji: "🖱️" },
  { id: 2, name: "Mechanical Keyboard", price: 3499,   category: "electronics", emoji: "⌨️" },
  { id: 3, name: "27\" Monitor",        price: 14999,  category: "electronics", emoji: "🖥️" },
  { id: 4, name: "USB-C Hub",           price: 1899,   category: "electronics", emoji: "🔌" },
  { id: 5, name: "Basmati Rice 5kg",    price: 620,    category: "grocery",     emoji: "🍚" },
  { id: 6, name: "Filter Coffee 500g",  price: 340,    category: "grocery",     emoji: "☕" },
  { id: 7, name: "Mango Box (dozen)",   price: 450,    category: "grocery",     emoji: "🥭" },
  { id: 8, name: "Cotton T-Shirt",      price: 599,    category: "fashion",     emoji: "👕" },
  { id: 9, name: "Running Shoes",       price: 2799,   category: "fashion",     emoji: "👟" },
];

// Coupon table: code → fraction off the subtotal.
// Exported so store.js can validate codes against it.
export const COUPONS = {
  SAVE10:    0.10,
  WELCOME20: 0.20,
};

// GST rate used by the totals calculation (Indian tax on the discounted amount).
export const GST_RATE = 0.18;
