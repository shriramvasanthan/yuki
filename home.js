// home.js — entry point for index.html
import { initAuth, showToast } from "./auth.js";
import { products } from "./products-data.js";
import { addToCart, updateCartBadge } from "./cart-utils.js";

initAuth();
updateCartBadge();

// Scroll reveal observer — declared BEFORE any use
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });

// Observe static elements already in DOM
document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

// Render featured products grid
const grid = document.getElementById("featured-products");
if (grid) {
  const featured = products.slice(0, 8);
  grid.innerHTML = featured.map(p => `
    <div class="product-card reveal">
      <a href="product.html?id=${p.id}">
        <div class="product-img-wrap">
          <div class="product-img-emoji">${p.emoji}</div>
          ${p.badge ? `<span class="product-badge ${p.badge === "Premium" ? "premium" : ""}">${p.badge}</span>` : ""}
        </div>
      </a>
      <div class="product-info">
        <div class="product-cat">${p.categoryLabel}</div>
        <a href="product.html?id=${p.id}"><div class="product-name">${p.name}</div></a>
        <div class="product-sub">${p.sub}</div>
        <div class="product-price">&#8377;${p.price.toLocaleString("en-IN")}</div>
        <div class="product-actions">
          <button class="btn-add-cart" data-id="${p.id}">Add to Cart</button>
          <button class="btn-buy-now" data-id="${p.id}">Buy Now</button>
        </div>
      </div>
    </div>
  `).join("");

  // Observe the newly added cards
  grid.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

  // Single event delegation — works inside ES modules (no inline onclick)
  grid.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".btn-add-cart");
    const buyBtn = e.target.closest(".btn-buy-now");

    if (addBtn) {
      const p = products.find(x => x.id === addBtn.dataset.id);
      if (p) {
        addToCart({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, sub: p.sub }, 1);
        showToast(`${p.name} added to cart`);
      }
    }
    if (buyBtn) {
      const p = products.find(x => x.id === buyBtn.dataset.id);
      if (p) {
        addToCart({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, sub: p.sub }, 1);
        window.location.href = "cart.html";
      }
    }
  });
}
