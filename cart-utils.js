// cart-utils.js — localStorage cart management

const CART_KEY = "yuki_cart";

export function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch { return []; }
}

export function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
}

export function addToCart(product, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === product.id);
  if (idx >= 0) {
    cart[idx].qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart(cart);
}

export function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

export function updateQty(id, qty) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx < 0) return;
  if (qty <= 0) { cart.splice(idx, 1); }
  else { cart[idx].qty = qty; }
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

export function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

export function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

export function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = getCartCount();
}

// Run on import so badge is always current
updateCartBadge();
