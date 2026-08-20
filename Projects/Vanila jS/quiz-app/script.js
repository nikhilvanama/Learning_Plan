// ============================================================
// Vanilla Quiz — ONE file, THREE sections.
//
//   1. DATA    — the questions
//   2. STATE + RENDER — the state machine and the two screens
//   3. WIRING  — one click listener runs the whole game
//
// The big idea here is a STATE MACHINE:
// the app is always in exactly one situation, described by
//   state = { index, score, picked, finished }
// and render() looks at that object to decide WHAT to draw.
// Clicks don't change the screen — they change the STATE,
// and the screen follows. (Same rule as the cart and to-do.)
// ============================================================


// ============================================================
// SECTION 1 — DATA
// Each question: the text, four options, and WHICH option is
// correct (its position in the array: 0, 1, 2, or 3).
// ============================================================

const QUESTIONS = [
  {
    q: "Which company created JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    answer: 1,
  },
  {
    q: "What does `typeof null` return?",
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    answer: 2,
  },
  {
    q: "Which method adds an item to the END of an array?",
    options: ["shift()", "unshift()", "pop()", "push()"],
    answer: 3,
  },
  {
    q: "`1 + \"2\"` gives…",
    options: ['"12"', "3", "NaN", "an error"],
    answer: 0,
  },
  {
    q: "Which storage survives a page refresh?",
    options: ["a variable", "localStorage", "the call stack", "the DOM"],
    answer: 1,
  },
  {
    q: "One listener on a parent handling clicks from all children is called…",
    options: ["bubbling", "capturing", "event delegation", "debouncing"],
    answer: 2,
  },
];


// ============================================================
// SECTION 2 — STATE + RENDER
// ============================================================

// The state machine. `picked` matters a lot:
//   picked = null  → waiting for an answer (options clickable)
//   picked = 0..3  → answer chosen, showing green/red feedback
let state = { index: 0, score: 0, picked: null, finished: false };

function render() {
  const screen = document.querySelector("#screen");

  // ---------- SCREEN 2: the result ----------
  if (state.finished) {
    const total = QUESTIONS.length;
    const emoji = state.score === total ? "🏆" : state.score >= total / 2 ? "🎉" : "📚";
    screen.innerHTML = `
      <div class="result">
        <div class="big">${emoji}</div>
        <h1>${state.score} / ${total}</h1>
        <p>${state.score === total ? "Perfect score!" : "Keep practising — repetition is the trick."}</p>
        <button id="restart">Play again</button>
      </div>
    `;
    return;                      // finished screen drawn — stop here
  }

  // ---------- SCREEN 1: the current question ----------
  const q = QUESTIONS[state.index];
  const answered = state.picked !== null;    // are we in feedback mode?

  screen.innerHTML = `
    <p class="progress">Question ${state.index + 1} / ${QUESTIONS.length}
       <span class="score">Score: ${state.score}</span></p>

    <h1 class="question">${q.q}</h1>

    <div class="options">
      ${q.options.map((text, i) => {
        // Decide each button's colour class:
        //   before answering  → plain
        //   after answering   → the correct one is green;
        //                       a wrong pick is red; rest stay plain
        let cls = "";
        if (answered && i === q.answer) cls = "correct";
        else if (answered && i === state.picked) cls = "wrong";

        // `disabled` after answering stops double-clicks mid-feedback
        return `<button class="option ${cls}" data-i="${i}" ${answered ? "disabled" : ""}>
                  ${text}
                </button>`;
      }).join("")}
    </div>
  `;
}


// ============================================================
// SECTION 3 — WIRING
// One delegated listener on #screen runs the whole game,
// because every button we ever create lives inside it.
// ============================================================

document.querySelector("#screen").addEventListener("click", e => {

  // --- restart button (result screen) ---
  if (e.target.closest("#restart")) {
    state = { index: 0, score: 0, picked: null, finished: false };
    render();
    return;
  }

  // --- an option button (question screen) ---
  const btn = e.target.closest("button.option");
  if (!btn) return;
  if (state.picked !== null) return;         // already answered — ignore clicks

  // 1) record the pick, score it
  state.picked = Number(btn.dataset.i);
  if (state.picked === QUESTIONS[state.index].answer) state.score++;

  // 2) repaint NOW → the green/red feedback appears
  render();

  // 3) after 900ms, move on: next question, or finish
  setTimeout(() => {
    if (state.index + 1 < QUESTIONS.length) {
      state.index++;
      state.picked = null;                   // fresh question, nothing picked
    } else {
      state.finished = true;                 // that was the last one
    }
    render();
  }, 900);
});

// First paint — question 1 appears.
render();
