// ============================================================
// Vanilla To-Do — ONE file, THREE sections.
//
//   1. STATE   — the todos array + save/load
//   2. RENDER  — draw the list FROM the array
//   3. WIRING  — events: add, tick, delete, filter
//
// The rule (same as the shopping cart):
//   event → change the array → save() → render()
// We never edit the page directly. We change the DATA,
// then redraw the page from the data.
// ============================================================


// ============================================================
// SECTION 1 — STATE
// ============================================================

// Each todo is a small object:  { id: 173..., text: "buy milk", done: false }
// id comes from Date.now() — the timestamp is unique enough here.
let todos = load();

// Which filter is active: "all" | "active" | "done".
// Not saved on purpose — a fresh visit starts on "All".
let filter = "all";

function load() {
  // localStorage stores strings only → JSON.parse brings the array back.
  // First visit: getItem gives null → JSON.parse(null) gives null → ?? [] saves us.
  try {
    return JSON.parse(localStorage.getItem("todos-v1")) ?? [];
  } catch {
    return [];              // corrupted data? start clean, never crash
  }
}

function save() {
  localStorage.setItem("todos-v1", JSON.stringify(todos));
}


// ============================================================
// SECTION 2 — RENDER
// ============================================================

function render() {
  const list = document.querySelector("#todo-list");

  // 1) Decide WHICH todos to show, based on the filter.
  //    filter() returns a new array; the real `todos` is untouched.
  const visible =
    filter === "active" ? todos.filter(t => !t.done) :
    filter === "done"   ? todos.filter(t =>  t.done) :
    todos;

  // 2) Empty? Show a friendly message instead of a blank hole.
  if (visible.length === 0) {
    list.innerHTML = `<li class="empty">Nothing here 🎉</li>`;
  } else {
    // 3) Turn each todo object into an <li> string, join, paint ONCE.
    //    data-id carries the todo's id so clicks know which one.
    //    NOTE: we put the text in with textContent later? No — text is
    //    typed by YOU, but let's stay safe anyway: escape < and &.
    list.innerHTML = visible.map(t => `
      <li class="item ${t.done ? "done" : ""}" data-id="${t.id}">
        <button class="tick" aria-label="Toggle">${t.done ? "✔" : "○"}</button>
        <span class="text">${escapeHtml(t.text)}</span>
        <button class="del" aria-label="Delete">✕</button>
      </li>
    `).join("");
  }

  // 4) The "3 left" counter — count only the not-done ones.
  const left = todos.filter(t => !t.done).length;
  document.querySelector("#count").textContent =
    `${left} task${left === 1 ? "" : "s"} left`;

  // 5) Highlight the active filter button.
  document.querySelectorAll(".filters button").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.filter === filter)
  );
}

// Turn <script> into harmless text. User-typed text must never
// be pasted into innerHTML raw — this is the XSS habit.
function escapeHtml(str) {
  return str.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
}


// ============================================================
// SECTION 3 — WIRING (events)
// ============================================================

// ADD — form submit means the Enter key works too.
document.querySelector("#add-form").addEventListener("submit", e => {
  e.preventDefault();                          // stop the page-reload default!
  const input = document.querySelector("#new-task");
  const text = input.value.trim();
  if (!text) return;                           // ignore empty adds

  todos.push({ id: Date.now(), text, done: false });
  input.value = "";
  save();
  render();
});

// TICK + DELETE — ONE listener on the <ul> (event delegation).
// The <li>s are recreated on every render, so listeners on them
// would die; the <ul> survives, so its listener works forever.
document.querySelector("#todo-list").addEventListener("click", e => {
  const li = e.target.closest("li.item");
  if (!li) return;                             // clicked the empty message etc.
  const id = Number(li.dataset.id);            // which todo? the <li> tells us

  if (e.target.closest(".tick")) {
    // find the todo and flip its done flag
    const todo = todos.find(t => t.id === id);
    todo.done = !todo.done;
  } else if (e.target.closest(".del")) {
    // keep every todo EXCEPT this one
    todos = todos.filter(t => t.id !== id);
  } else {
    return;                                    // clicked the text — do nothing
  }

  save();
  render();
});

// FILTERS — one listener on the nav; data-filter says which button.
document.querySelector(".filters").addEventListener("click", e => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  filter = btn.dataset.filter;                 // filter is VIEW state — not saved
  render();
});

// CLEAR COMPLETED — throw away everything that's done.
document.querySelector("#clear-done").addEventListener("click", () => {
  todos = todos.filter(t => !t.done);
  save();
  render();
});

// First paint — draws whatever load() found in localStorage.
render();
