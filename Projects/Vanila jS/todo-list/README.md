# ✅ Vanilla To-Do — Project #2 on the Ladder

A to-do list in **one HTML + one CSS + one JS file**. No libraries, no build, no server.

## Run it

**Double-click `index.html`.** Done.

## Features

- Add a task (button or Enter key)
- Tick it done (strikethrough) · delete it · clear all completed
- Filter **All / Active / Done**
- "3 tasks left" live counter
- Tasks **survive refresh** (localStorage)

## The one idea

```
event  →  change the todos array  →  save()  →  render()
```

Buttons never edit the page. They change the **array**, and `render()` redraws the list *from* the array. The screen can never disagree with the data.

## File structure

```
todo-list/
├── index.html     the skeleton — form, filter buttons, empty <ul>
├── style.css      styling
├── script.js      3 sections: STATE → RENDER → WIRING
├── README.md      this file
└── EXPLANATION.md every function explained (+ PDF)
```

## Concepts practiced

| Concept | Where |
| --- | --- |
| Array of objects as state | `todos = [{ id, text, done }]` |
| `filter` / `map` / `find` | everywhere |
| Event delegation | one listener on the `<ul>` |
| `data-*` attributes | `data-id` on each `<li>`, `data-filter` on buttons |
| Form submit + `preventDefault` | the add form |
| localStorage + JSON | `load()` / `save()` |
| XSS safety | `escapeHtml()` before `innerHTML` |

*Goal (from the Project Ladder): CRUD on the DOM with event delegation — the pattern every list UI uses forever.*
