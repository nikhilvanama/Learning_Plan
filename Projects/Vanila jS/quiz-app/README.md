# ❓ Vanilla Quiz — Project #3 on the Ladder

A quiz game in **one HTML + one CSS + one JS file**. Six JS questions, instant right/wrong colours, score screen, play again.

## Run it

**Double-click `index.html`.** Done.

## Features

- One question at a time with four options
- Click → the correct answer flashes **green**, a wrong pick flashes **red**
- Auto-advances to the next question after 0.9s
- Progress ("Question 3 / 6") and live score
- Result screen with emoji verdict + **Play again**

## The one idea — a state machine

```js
state = { index, score, picked, finished }
```

The app is always in exactly one situation described by this object, and `render()` draws whatever the state says:

| State | What you see |
| --- | --- |
| `finished: false, picked: null` | current question, clickable options |
| `finished: false, picked: 2` | same question, green/red feedback, options disabled |
| `finished: true` | the score screen |

Clicks never touch the screen — they change the **state**, then `render()` redraws. Same rule as the to-do and the cart.

## File structure

```
quiz-app/
├── index.html     one <div id="screen"> — JS draws everything inside it
├── style.css      styling incl. .correct / .wrong feedback colours
├── script.js      3 sections: DATA → STATE+RENDER → WIRING
├── README.md      this file
└── EXPLANATION.md every function explained (+ PDF)
```

## Concepts practiced

| Concept | Where |
| --- | --- |
| State machine | the `state` object |
| Conditional rendering | `render()` branches on `finished` |
| `map` with logic inside | option buttons get `correct`/`wrong` classes |
| Event delegation | ONE listener on `#screen` runs the whole game |
| `setTimeout` | the 0.9s feedback pause |
| Guarding double-clicks | `if (state.picked !== null) return` + `disabled` |

*Goal (from the Project Ladder): state transitions — the mental model behind every wizard, checkout, and game.*
