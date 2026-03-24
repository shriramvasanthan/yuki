// auth.js — shared auth state, nav, scroll reveal, toast
import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export { auth };

export function initAuth(callbacks = {}) {
  onAuthStateChanged(auth, (user) => {
    const navAuth     = document.getElementById("nav-auth");
    const navUser     = document.getElementById("nav-user");
    const navUsername = document.getElementById("nav-username");
    const mobileLogin  = document.getElementById("mobile-login");
    const mobileLogout = document.getElementById("mobile-logout");

    if (user) {
      if (navAuth)     navAuth.style.display     = "none";
      if (navUser)     navUser.style.display     = "flex";
      if (navUsername) navUsername.textContent   = user.displayName || user.email.split("@")[0];
      if (mobileLogin)  mobileLogin.style.display  = "none";
      if (mobileLogout) mobileLogout.style.display = "block";
      if (callbacks.onLogin) callbacks.onLogin(user);
    } else {
      if (navAuth)     navAuth.style.display     = "flex";
      if (navUser)     navUser.style.display     = "none";
      if (mobileLogin)  mobileLogin.style.display  = "block";
      if (mobileLogout) mobileLogout.style.display = "none";
      if (callbacks.onLogout) callbacks.onLogout();
    }
  });

  const logoutBtn    = document.getElementById("logout-btn");
  const mobileLogout = document.getElementById("mobile-logout");
  async function doLogout() {
    await signOut(auth);
    window.location.href = "index.html";
  }
  if (logoutBtn)    logoutBtn.addEventListener("click", doLogout);
  if (mobileLogout) mobileLogout.addEventListener("click", doLogout);
}

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
});

const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu   = document.getElementById("mobile-menu");
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => mobileMenu.classList.toggle("open"));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

export function showToast(msg, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type === "success" ? "✓" : "✕"}</span> ${msg}`;
  container.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("show")));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 500);
  }, 3500);
}
