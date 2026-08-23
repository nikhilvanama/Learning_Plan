// ============================================================
// Vanilla Auth — ONE shared file, THREE sections.
//
//   1. THE "DATABASE"  — users in localStorage + password hashing
//   2. THE AUTH ENGINE — register, login, logout, session, guards
//   3. PAGE WIRING     — <body data-page="..."> decides which
//                        form this page needs wired up
//
// ⚠️ HONESTY FIRST: this is a TRAINING MODEL of auth.
// Real authentication MUST live on a server — anything in the
// browser can be opened, edited, and bypassed in DevTools.
// We build it here to learn the FLOW (register → login →
// session → guard → logout), because the flow is identical
// when you rebuild it properly with a backend in Phase 8:
//
//   localStorage users   →  a real database (MySQL)
//   SHA-256 + salt       →  bcrypt on the server
//   sessionStorage       →  an HttpOnly cookie or a JWT
//   the JS page guard    →  auth middleware on the API
// ============================================================


// ============================================================
// SECTION 1 — THE "DATABASE" + HASHING
// ============================================================

const USERS_KEY   = "auth-users-v1";     // our pretend users TABLE
const SESSION_KEY = "auth-session-v1";   // our pretend session

function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) ?? []; }
  catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// A SALT is random text mixed into the password before hashing,
// unique per user. Two users with the same password then get
// DIFFERENT hashes — which defeats precomputed "rainbow tables".
function makeSalt() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return [...bytes].map(b => b.toString(16).padStart(2, "0")).join("");
}

// Hash = one-way fingerprint. We NEVER store the password itself —
// we store SHA-256(salt + password). At login we hash what the
// user typed and compare fingerprints. There is no way back from
// the hash to the password.
// (Real servers use bcrypt — deliberately SLOW so attackers can't
// try millions of guesses per second. SHA-256 teaches the concept.)
async function hashPassword(password, salt) {
  const data   = new TextEncoder().encode(salt + password);
  const digest = await crypto.subtle.digest("SHA-256", data);   // built into the browser
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("");
}


// ============================================================
// SECTION 2 — THE AUTH ENGINE
// ============================================================

// REGISTER: validate → check email is free → hash → save.
// Returns { ok, error } so the page can show what happened.
async function register({ name, email, password, confirm }) {
  name  = name.trim();
  email = email.trim().toLowerCase();     // emails are case-insensitive

  if (name.length < 2)              return { ok: false, error: "Please enter your name." };
  if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, error: "That email doesn't look right." };
  if (password.length < 6)          return { ok: false, error: "Password must be at least 6 characters." };
  if (password !== confirm)         return { ok: false, error: "Passwords don't match." };

  const users = loadUsers();
  if (users.some(u => u.email === email))
    return { ok: false, error: "An account with this email already exists." };

  const salt = makeSalt();
  users.push({
    id: Date.now(),
    name,
    email,
    salt,
    passwordHash: await hashPassword(password, salt),   // never the password itself!
    createdAt: new Date().toISOString(),
  });
  saveUsers(users);
  return { ok: true };
}

// LOGIN: find the user → hash the attempt with THEIR salt → compare.
// Note the error is the SAME for "no such email" and "wrong
// password" — never tell an attacker which half they got right.
async function login(email, password, remember) {
  email = email.trim().toLowerCase();
  const fail = { ok: false, error: "Invalid email or password." };   // deliberately vague

  const user = loadUsers().find(u => u.email === email);
  if (!user) return fail;

  const attempt = await hashPassword(password, user.salt);
  if (attempt !== user.passwordHash) return fail;

  // Success → create the session. "Remember me" picks the storage:
  //   sessionStorage → gone when the tab closes (classic session)
  //   localStorage   → survives closing the browser
  const session = { userId: user.id, loginAt: new Date().toISOString(), remembered: !!remember };
  (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, JSON.stringify(session));
  return { ok: true };
}

// Who is logged in right now? Check both storages; return the
// session + the matching user, or null.
function getSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY) ?? localStorage.getItem(SESSION_KEY);
    const session = JSON.parse(raw);
    if (!session) return null;
    const user = loadUsers().find(u => u.id === session.userId);
    return user ? { session, user } : null;    // user deleted? session is worthless
  } catch {
    return null;
  }
}

// LOGOUT: destroy the session wherever it lives. The users
// "table" is untouched — logging out doesn't delete the account.
function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(SESSION_KEY);
}

// GUARDS — tiny but they ARE the point of the project:
// a protected page checks the session BEFORE showing anything.
function requireLogin() {
  if (!getSession()) location.href = "login.html";      // bounce!
}
function redirectIfLoggedIn() {
  if (getSession()) location.href = "dashboard.html";   // already in? skip the forms
}

// FLASH message: a one-time note passed between pages
// ("Account created!" survives the redirect, shows once, gone).
function setFlash(text) { sessionStorage.setItem("auth-flash", text); }
function takeFlash() {
  const text = sessionStorage.getItem("auth-flash");
  sessionStorage.removeItem("auth-flash");              // read once, then destroyed
  return text;
}


// ============================================================
// SECTION 3 — PAGE WIRING
// One script serves three pages; data-page says which one.
// ============================================================

// Show a message in the page's message box. type = "error" | "success"
function showMessage(text, type) {
  const box = document.querySelector("#message");
  box.textContent = text;                 // textContent — user input is never HTML
  box.className = `message ${type}`;
  box.hidden = false;
}

const page = document.body.dataset.page;

// ---------- REGISTER PAGE ----------
if (page === "register") {
  redirectIfLoggedIn();                   // logged in already? no need to sign up

  document.querySelector("#register-form").addEventListener("submit", async e => {
    e.preventDefault();
    const result = await register({
      name:     document.querySelector("#name").value,
      email:    document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      confirm:  document.querySelector("#confirm").value,
    });

    if (!result.ok) return showMessage(result.error, "error");

    // Traditional flow: after signup you LOG IN — you don't get
    // waved through. The flash survives the redirect to say why.
    setFlash("Account created! Please log in.");
    location.href = "login.html";
  });
}

// ---------- LOGIN PAGE ----------
if (page === "login") {
  redirectIfLoggedIn();

  const flash = takeFlash();              // e.g. the "Account created!" note
  if (flash) showMessage(flash, "success");

  document.querySelector("#login-form").addEventListener("submit", async e => {
    e.preventDefault();
    const result = await login(
      document.querySelector("#email").value,
      document.querySelector("#password").value,
      document.querySelector("#remember").checked,
    );

    if (!result.ok) return showMessage(result.error, "error");
    location.href = "dashboard.html";     // in!
  });
}

// ---------- DASHBOARD (PROTECTED) PAGE ----------
if (page === "dashboard") {
  requireLogin();                         // THE GUARD — runs before anything shows

  const auth = getSession();
  if (auth) {                             // (null only for the instant before redirect)
    const { user, session } = auth;

    // Greeting — textContent because the name is user-typed (XSS habit)
    document.querySelector("#greeting").textContent = `Hello, ${user.name} 👋`;

    const nice = iso => new Date(iso).toLocaleString("en-IN",
      { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

    document.querySelector("#member-since").textContent  = nice(user.createdAt);
    document.querySelector("#session-start").textContent = nice(session.loginAt);
    document.querySelector("#session-where").textContent =
      session.remembered ? "localStorage (remembered)" : "sessionStorage (this tab)";

    document.querySelector("#logout").addEventListener("click", () => {
      logout();
      location.href = "login.html";
    });
  }
}
