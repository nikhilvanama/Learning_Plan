# SAP GUI — The Complete Tour

### Every bar, button, tab and screen in the S/4HANA SAP GUI — where it lives, what it does, and the transaction codes that get you there

> *"The GUI is not the hard part of SAP. But being slow in it makes everything else look hard — and in an interview, hesitation at the command field reads as inexperience before you have written a line of ABAP."*

**SAP Docs** · Written for the S/4HANA system in your FLT practice slot · Aug 2026

---

<style>
.gui{border:1px solid #8a9aa8;border-radius:3px;overflow:hidden;font-family:"Segoe UI",Arial,sans-serif;font-size:9.5px;margin:10px 0;background:#f7f8f9;box-shadow:0 1px 3px rgba(0,0,0,.18);text-align:left}
.gui div,.gui td,.gui table{text-align:left}
.gui-title{background:linear-gradient(#4a6b85,#354a5f);color:#fff;padding:4px 8px;font-size:10px;font-weight:600;display:flex;justify-content:space-between;align-items:center}
.gui-title .wc{font-size:9px;letter-spacing:2px;opacity:.9}
.gui-menu{background:#eef1f4;border-bottom:1px solid #c8d0d8;padding:3px 8px;color:#33414d;font-size:9px}
.gui-menu span{margin-right:14px}
.gui-tb{background:#e4e9ee;border-bottom:1px solid #c8d0d8;padding:3px 6px;display:flex;align-items:center;gap:3px;flex-wrap:wrap}
.gui-cmd{background:#fff;border:1px solid #a9b4be;border-radius:2px;padding:2px 5px;width:110px;font-family:Consolas,monospace;font-size:9px;color:#0a3d62}
.gui-b{display:inline-block;min-width:17px;height:16px;line-height:16px;text-align:center;background:#f3f6f8;border:1px solid #b6c0c9;border-radius:2px;font-size:9px;color:#2b5f8e;padding:0 3px}
.gui-b.g{color:#107e3e;font-weight:700}.gui-b.r{color:#bb0000;font-weight:700}.gui-b.y{color:#e9730c;font-weight:700}
.gui-app{background:#f0f3f6;border-bottom:1px solid #d4dae0;padding:3px 6px;display:flex;gap:4px;flex-wrap:wrap}
.gui-app .gui-b{min-width:auto;padding:0 6px}
.gui-body{background:#fff;padding:9px 10px;min-height:36px}
.gui-status{background:#e4e9ee;border-top:1px solid #c8d0d8;padding:3px 8px;display:flex;justify-content:space-between;color:#44515c;font-size:8.5px}
.gui-status .sf{border-left:1px solid #c8d0d8;padding-left:7px;margin-left:7px}
.gui-row{display:flex;align-items:center;margin:3px 0;gap:6px}
.gui-lbl{width:120px;color:#33414d;text-align:right !important;font-size:9px}
.gui-in{background:#fff;border:1px solid #a9b4be;border-radius:1px;padding:2px 4px;min-width:120px;font-family:Consolas,monospace;font-size:9px;color:#000}
.gui-in.k{background:#fffbe6;border-color:#d0b45a}
.gui-rad{color:#33414d;margin:2px 0;font-size:9px}
.gui-tabs{display:flex;gap:2px;border-bottom:1px solid #c8d0d8;margin-bottom:7px}
.gui-tab{padding:3px 9px;background:#e4e9ee;border:1px solid #c8d0d8;border-bottom:none;border-radius:2px 2px 0 0;font-size:9px;color:#44515c}
.gui-tab.on{background:#fff;color:#0a3d62;font-weight:600;position:relative;top:1px}
.gui-tree{font-family:Consolas,monospace;font-size:9px;line-height:1.65;color:#2b3a45}
.gui-grid{width:100%;border-collapse:collapse;font-size:8.5px;font-family:Consolas,monospace}
.gui-grid th{background:#dfe5ea;border:1px solid #c2ccd4;padding:2px 5px;text-align:left;color:#33414d;font-weight:600}
.gui-grid td{border:1px solid #d8dfe4;padding:2px 5px;color:#1a2530}
.cal{display:inline-block;min-width:14px;height:14px;line-height:14px;text-align:center;background:#bb0000;color:#fff;border-radius:50%;font-size:8.5px;font-weight:700;font-family:"Segoe UI",Arial;margin:0 2px}
.gui-cap{font-size:9.5px;color:#5a6772;margin:-4px 0 12px;font-style:italic}
</style>

## Table of Contents

- [SAP GUI — The Complete Tour](#sap-gui-the-complete-tour)
- [How to Use This Guide](#how-to-use-this-guide)
- [Part A — What SAP GUI Actually Is](#part-a-what-sap-gui-actually-is)
  - [A1. SAP GUI in One Picture](#a1-sap-gui-in-one-picture) · [A2. The Three Flavours of SAP GUI](#a2-the-three-flavours-of-sap-gui) · [A3. The Logon Pad — Getting In](#a3-the-logon-pad-getting-in) · [A4. GUI, Fiori and Eclipse — Who Does What in S/4HANA](#a4-gui-fiori-and-eclipse-who-does-what-in-s4hana)
- [Part B — The Window, Strip by Strip](#part-b-the-window-strip-by-strip)
  - [B1. The Six Strips Every Screen Has](#b1-the-six-strips-every-screen-has) · [B2. The Menu Bar — Including the Two That Are Always There](#b2-the-menu-bar-including-the-two-that-are-always-there) · [B3. The Standard Toolbar — Every Button](#b3-the-standard-toolbar-every-button) · [B4. The Application Toolbar and the Screen Body](#b4-the-application-toolbar-and-the-screen-body) · [B5. The Status Bar — Reading What SAP Is Telling You](#b5-the-status-bar-reading-what-sap-is-telling-you)
- [Part C — Moving Around](#part-c-moving-around)
  - [C1. The Command Field — Your Fastest Tool](#c1-the-command-field-your-fastest-tool) · [C2. SAP Easy Access — The Home Screen](#c2-sap-easy-access-the-home-screen) · [C3. Sessions — Working in Two Places at Once](#c3-sessions-working-in-two-places-at-once) · [C4. Finding a Transaction Code You Do Not Know](#c4-finding-a-transaction-code-you-do-not-know) · [C5. Making SAP GUI Yours — Options and Themes](#c5-making-sap-gui-yours-options-and-themes)
- [Part D — The Transaction Code Reference](#part-d-the-transaction-code-reference)
  - [D1. Development and the ABAP Workbench](#d1-development-and-the-abap-workbench) · [D2. Data — Looking At It and Maintaining It](#d2-data-looking-at-it-and-maintaining-it) · [D3. When Something Breaks — Debugging and Monitoring](#d3-when-something-breaks-debugging-and-monitoring) · [D4. Transports, Users, and the Business Transactions You Will Meet](#d4-transports-users-and-the-business-transactions-you-will-meet)
- [Part E — Creating Your First ABAP Program](#part-e-creating-your-first-abap-program)
  - [E1. SE38 and the Program Attributes Screen](#e1-se38-and-the-program-attributes-screen) · [E2. Packages, and Why $TMP Matters](#e2-packages-and-why-tmp-matters) · [E3. Transport Requests — How Code Leaves Your System](#e3-transport-requests-how-code-leaves-your-system) · [E4. Write, Check, Activate, Run](#e4-write-check-activate-run)
- [Part F — SE80 and What Moved to Eclipse](#part-f-se80-and-what-moved-to-eclipse)
  - [F1. SE80 — The Object Navigator](#f1-se80-the-object-navigator) · [F2. SE80 vs Eclipse (ADT) — the Line You Must Know](#f2-se80-vs-eclipse-adt-the-line-you-must-know)
- [Part G — The Data Model and SE11](#part-g-the-data-model-and-se11)
  - [G1. The SAP Data Model in One Picture](#g1-the-sap-data-model-in-one-picture) · [G2. The SE11 Initial Screen — Every Option](#g2-the-se11-initial-screen-every-option) · [G3. Domains — The Technical Layer](#g3-domains-the-technical-layer) · [G4. Data Elements — The Meaning Layer](#g4-data-elements-the-meaning-layer) · [G5. Creating a Z Table, Step by Step](#g5-creating-a-z-table-step-by-step) · [G6. Views, Search Helps and Lock Objects](#g6-views-search-helps-and-lock-objects)
- [Part H — Reading Data, Debugging, and Your First Week](#part-h-reading-data-debugging-and-your-first-week)
  - [H1. SE16N — Reading Table Data Properly](#h1-se16n-reading-table-data-properly) · [H2. SM30 and the Table Maintenance Generator](#h2-sm30-and-the-table-maintenance-generator) · [H3. The ABAP Debugger](#h3-the-abap-debugger) · [H4. Your First Week, and the Keys Worth Memorising](#h4-your-first-week-and-the-keys-worth-memorising)

---

# How to Use This Guide

*This is a **map**, not a course. Keep it open beside your 9–11 practice slot: when you land on a screen you do not recognise, find it here, and the callouts will tell you what every button on it does. Parts A–C are the ones to read straight through — they cover the window itself, which never changes no matter which transaction you are in. Everything after that is reference.*

**The one thing to understand before anything else:** SAP GUI is a **shell**. Every transaction — SE11, SE38, VA03, ST22 — runs inside the *same* window, with the same title bar, the same toolbar and the same status bar. Only the middle changes. Once you know the frame, you are never fully lost in a screen you have not seen before.

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>Display Table: Dictionary: Initial Screen</span><span class="wc">— □ ✕</span></div>
  <div class="gui-menu"><span>Table</span><span>Edit</span><span>Goto</span><span>Utilities</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb">
    <input class="gui-cmd" value="/nse11" readonly>
    <span class="gui-b g">✓</span><span class="gui-b">💾</span><span class="gui-b g">←</span><span class="gui-b y">↑</span><span class="gui-b r">✕</span>
    <span class="gui-b">🖨</span><span class="gui-b">🔍</span><span class="gui-b">🔎</span><span class="gui-b">⏮</span><span class="gui-b">◀</span><span class="gui-b">▶</span><span class="gui-b">⏭</span><span class="gui-b">⊞</span><span class="gui-b">❓</span><span class="gui-b">⚙</span>
  </div>
  <div class="gui-app"><span class="gui-b">Display</span><span class="gui-b">Change</span><span class="gui-b">Create</span></div>
  <div class="gui-body">
    <div class="gui-rad">◉ Database table &nbsp; ○ View &nbsp; ○ Data type &nbsp; ○ Type Group &nbsp; ○ Domain &nbsp; ○ Search help &nbsp; ○ Lock object</div>
    <div class="gui-row"><span class="gui-lbl">Database table</span><span class="gui-in k">ZPURCH_REQ</span></div>
  </div>
  <div class="gui-status"><span>Object saved</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">SAPLSD41</span><span class="sf">OVR</span></span></div>
</div>
<figcaption>The SAP GUI frame, drawn to scale. <strong>Every</strong> transaction you ever open sits inside this same shell — title bar, menu bar, standard toolbar, application toolbar, screen body, status bar. Part B takes each strip apart.</figcaption>
</figure>

<p class="te"><strong>Telugu:</strong> Idi course kaadu, <strong>map</strong>. Nee 9–11 practice slot pakkana ee doc pettuko — teliyani screen vachinappudu ikkada vetuku. Mukhyamaina vishayam modate ardham chesuko: <strong>SAP GUI oka shell (frame) matrame</strong>. SE11 aina, SE38 aina, VA03 aina — anni <strong>ide window lo</strong> nadustayi. Paina title bar, menu, toolbar; kinda status bar — ivi eppudu marav. <strong>Madhya bhagam matrame</strong> marutundi. Ee frame telisthe, kotta screen vachina nuvvu tappipovu.</p>

**How this guide is organised:**

| Part | Covers | Read it |
|---|---|---|
| **A** | What SAP GUI is, the flavours, the Logon Pad, and where GUI sits next to Fiori and Eclipse | Straight through |
| **B** | The window taken apart strip by strip — every toolbar button, every status field | Straight through |
| **C** | Moving around — the command field, Easy Access, sessions, finding a T-code, GUI settings | Straight through |
| **D** | The transaction-code reference, grouped by what you are trying to do | Reference |
| **E** | Creating your first ABAP program in SE38 — packages and transports | When you do it |
| **F** | SE80 Object Navigator, and what moved to Eclipse in S/4HANA | Reference |
| **G** | The data model and SE11 — domains, data elements, and building a Z table end to end | When you do it |
| **H** | Reading data, and what to open when something breaks | Reference |

---

# Part A — What SAP GUI Actually Is

## A1. SAP GUI in One Picture

**Simple definition:** **SAP GUI** (Graphical User Interface) is the desktop program you install on your machine to log into an SAP system. It draws the screens, sends your keystrokes to the server, and displays whatever comes back.

<p class="te"><strong>Telugu:</strong> SAP GUI ante nee computer lo install chese <strong>oka desktop program</strong>. Idi SAP system loki login avvadaniki. Nuvvu type chesindi server ki pampistundi, server icchina jawab ni screen meeda chupistundi. <strong>Mukhyam:</strong> SAP GUI lo <strong>emi ledu</strong> — antha server lo undi. Idi kevalam oka <strong>kitiki (window)</strong> matrame.</p>

**The critical mental model — and it is different from what you are used to:** SAP GUI holds almost no logic. It is a *thin client*. Every screen you see was defined on the server, sent down as a description, and painted by the GUI. When you press Enter, your input goes back to the server, ABAP runs, and a new screen comes down.

**Anchor to what you know:** this is closer to a **server-rendered PHP page** than to a React app. In React, logic lives in the browser and you call an API for data. In SAP GUI, the "browser" is nearly empty — the server decides everything, including what the screen looks like. That is why SAP GUI feels like a page reload on every Enter: because it *is* one.

```
Your machine                          The S/4HANA server
┌──────────────┐   your keystrokes   ┌────────────────────┐
│   SAP GUI    │ ──────────────────▶ │  ABAP runtime      │
│ (draws only) │                     │  screen definition │
│              │ ◀────────────────── │  business logic    │
└──────────────┘   the next screen   │  HANA database     │
                                     └────────────────────┘
```

**Why this matters practically:** when a screen is slow, it is almost never the GUI — it is the server or your network. And when you cannot find a button, it is because the *server* did not send it, usually because of your authorizations or the mode you are in (display vs change).

**Real-world:** SAP GUI has looked broadly the same since the 1990s. That is not neglect — it is deliberate. Tens of thousands of transactions across every SAP module rely on the same frame, so SAP changes it very slowly. For you that stability is good news: what you learn this week still applies in 2035.

---

## A2. The Three Flavours of SAP GUI

**Simple definition:** SAP ships three different SAP GUI programs. They connect to the same system but differ in features and in what they run on.

<p class="te"><strong>Telugu:</strong> SAP GUI <strong>moodu rakalu</strong> untayi. Anni oke system ki connect avutayi, kaani features veru. Nuvvu Windows lo <strong>SAP GUI for Windows</strong> vaadutavu — adi anni features unnadi, industry lo standard adhe.</p>

| Flavour | Runs on | Use it when | Limitations |
|---|---|---|---|
| **SAP GUI for Windows** | Windows only | **This is the one you will use.** Full feature set, all transactions, scripting, GuiXT | Windows only |
| **SAP GUI for Java** | Windows, macOS, Linux | You are on a Mac or Linux machine | Fewer features; some controls render differently |
| **SAP GUI for HTML** (Web GUI) | Any browser, via ITS | Quick access with nothing installed; often used for occasional users | Noticeably limited; some screens behave oddly |

**What you should have:** SAP GUI for Windows, a recent release (SAP GUI 7.70 or 8.x for S/4HANA landscapes). Your institute will have told you which one — if you have it running in the 9–11 slot, you have the right one.

**Themes matter more than you expect.** SAP GUI 7.70+ ships several visual themes:

| Theme | Look |
|---|---|
| **SAP Signature** | The classic grey-blue look most screenshots show |
| **Belize / Belize Deep** | Flatter, closer to Fiori's colours |
| **Quartz Light / Dark** (GUI 8.x) | The newest, matching modern Fiori |

Your screens may look different in colour from this guide's mockups. **The layout is identical** — only the paint changes. Do not let a colour difference make you think you are on a different screen.

---

## A3. The Logon Pad — Getting In

**Simple definition:** **SAP Logon** is a separate small program that holds your list of systems. You pick one, and it launches SAP GUI connected to it.

<p class="te"><strong>Telugu:</strong> SAP Logon (Logon Pad) ante — nee systems list unna oka chinna program. Andulo nunchi oka system select chesi double-click cheste, SAP GUI open avutundi. Ikkada <strong>Client, User, Password, Language</strong> adugutundi — ee naalugu lo <strong>Client</strong> ye chala mandi ki kotta vishayam.</p>

**The logon screen has four fields. Three are obvious. One is not:**

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>SAP</span><span class="wc">— □ ✕</span></div>
  <div class="gui-menu"><span>New password</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Client</span><span class="gui-in k">100</span><span class="cal">1</span></div>
    <div class="gui-row"><span class="gui-lbl">User</span><span class="gui-in">NIKHIL</span><span class="cal">2</span></div>
    <div class="gui-row"><span class="gui-lbl">Password</span><span class="gui-in">••••••••</span><span class="cal">3</span></div>
    <div class="gui-row"><span class="gui-lbl">Language</span><span class="gui-in">EN</span><span class="cal">4</span></div>
  </div>
  <div class="gui-status"><span>&nbsp;</span><span><span class="sf">S4H</span></span></div>
</div>
<figcaption>The SAP logon screen. <span class="cal">1</span> Client — the one that confuses newcomers. <span class="cal">2</span> Your user ID. <span class="cal">3</span> Password. <span class="cal">4</span> Language, almost always EN.</figcaption>
</figure>

**Client — the concept with no web equivalent.** A **client** is a completely separate set of business data inside the *same* SAP system. Client 100 and client 200 share the same programs and the same database, but their business data is invisible to each other.

**Analogy:** one WordPress installation serving two completely separate websites from the same database, where every table has a `site_id` column and every query silently filters on it. In SAP that column is called **MANDT**, it is the first key field of nearly every table, and the system adds the filter for you automatically.

| Typical client | Purpose |
|---|---|
| **000** | SAP's master client — do not touch |
| **100 / 200 / 800** | Working clients — your practice client is one of these |
| Training systems | Often give each student a separate user in one shared client |

**Practical consequences you will hit:**

- Create a table entry in client 100 and it does *not* exist in client 200. Same system, different data.
- **Programs, tables and DDIC objects are client-independent** — they are shared across all clients. Create a Z table in client 100 and its *definition* exists everywhere; only its *rows* are per-client.
- If a colleague says "I can't see your data", the first question is always "which client are you in?"

**Know your client and system at all times.** Both are shown in the status bar (Part B6), and `System → Status` gives you the full detail — including the S/4HANA release, which is a question you will be asked in interviews.

---

## A4. GUI, Fiori and Eclipse — Who Does What in S/4HANA

**Simple definition:** S/4HANA has three front ends, and each one owns a different job. Knowing which is which prevents a lot of wasted searching.

<p class="te"><strong>Telugu:</strong> S/4HANA lo <strong>moodu</strong> front-ends unnayi — SAP GUI, Fiori, inka Eclipse (ADT). Prathi dhaaniki vere pani undi. Idi telisthe "ee vishayam ekkada cheyyali?" ane confusion poutundi. <strong>Chala mukhyamainadi:</strong> CDS views inka RAP ni <strong>SAP GUI lo cheyyalemu</strong> — avi Eclipse lo matrame.</p>

| | **SAP GUI** | **Fiori Launchpad** | **Eclipse + ADT** |
|---|---|---|---|
| **Who uses it** | Developers, consultants, power users | Business end users | Developers only |
| **Looks like** | Dense grey screens | Modern web tiles | An IDE |
| **Used for** | Classical development, config, admin, debugging | Doing daily business work | Modern ABAP development |
| **Your use** | **Daily, in the 9–11 slot** | Later, in the Fiori track | **From October, and it matters** |

**The dividing line that trips people up:**

| Object | SAP GUI (SE11/SE80) | Eclipse (ADT) |
|---|---|---|
| Tables, domains, data elements | ✅ Create and edit | ✅ Create and edit |
| Classical reports, function modules, classes | ✅ Create and edit | ✅ Create and edit |
| **CDS views** | ❌ Display only | ✅ **Only place to create them** |
| **RAP behaviour definitions** | ❌ Not at all | ✅ **Only place** |
| **ABAP Cloud development** | ❌ Not at all | ✅ **Only place** |

**This is the single most important line in Part A.** Your December portfolio app is CDS → RAP → OData → Fiori. **None of the CDS or RAP work can be done in SAP GUI.** It requires Eclipse with ABAP Development Tools, pointed at a system that supports it.

So SAP GUI is where you learn the fundamentals and where you will spend your first months on a real project — reading other people's classical code, checking tables, chasing dumps. But it is not where the modern half of your target stack gets built.

**Analogy:** SAP GUI is the workshop; ADT is the CAD station. You still go to the workshop every day, but the new designs are not drawn there.

**Action from this section:** ask your FLT instructor whether your practice system supports CDS and RAP, and whether they will cover ADT. If the answer is no to either, that gap is yours to close — and it is the highest-priority gap you have.

---

# Part B — The Window, Strip by Strip

## B1. The Six Strips Every Screen Has

**Simple definition:** every SAP GUI screen is built from the same six horizontal strips, stacked top to bottom. Learn the six and you can orient yourself on any transaction in SAP.

<p class="te"><strong>Telugu:</strong> Prathi SAP screen lo <strong>aaru pattilu (strips)</strong> untayi, paina nunchi kinda varaku. Ee aaru telisthe, e transaction open chesina nuvvu ekkada emi undo cheppagalavu. Madhya unna <strong>screen body</strong> matrame prathi transaction ki maarutundi — migilina aidu eppudu okate.</p>

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span><span class="cal">1</span> ABAP Editor: Initial Screen</span><span class="wc">— □ ✕</span></div>
  <div class="gui-menu"><span class="cal">2</span><span>Program</span><span>Edit</span><span>Goto</span><span>Utilities</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><span class="cal">3</span>
    <input class="gui-cmd" value="/nse38" readonly>
    <span class="gui-b g">✓</span><span class="gui-b">💾</span><span class="gui-b g">←</span><span class="gui-b y">↑</span><span class="gui-b r">✕</span><span class="gui-b">🖨</span><span class="gui-b">🔍</span><span class="gui-b">⊞</span><span class="gui-b">❓</span><span class="gui-b">⚙</span>
  </div>
  <div class="gui-app"><span class="cal">4</span><span class="gui-b">Display</span><span class="gui-b">Change</span><span class="gui-b">Create</span><span class="gui-b">Execute</span></div>
  <div class="gui-body"><span class="cal">5</span>
    <div class="gui-row"><span class="gui-lbl">Program</span><span class="gui-in k">ZNV_FIRST_REPORT</span></div>
    <div class="gui-rad" style="margin-top:7px">Subobjects: ◉ Source Code &nbsp; ○ Variants &nbsp; ○ Attributes &nbsp; ○ Documentation &nbsp; ○ Text elements</div>
  </div>
  <div class="gui-status"><span><span class="cal">6</span> Program ZNV_FIRST_REPORT saved</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>
<figcaption>SE38, with the six strips numbered. <span class="cal">1</span> Title bar <span class="cal">2</span> Menu bar <span class="cal">3</span> Standard toolbar + command field <span class="cal">4</span> Application toolbar <span class="cal">5</span> Screen body <span class="cal">6</span> Status bar.</figcaption>
</figure>

| # | Strip | Changes per transaction? | What it is for |
|---|---|---|---|
| **1** | **Title bar** | Text changes | Tells you which screen you are on |
| **2** | **Menu bar** | First menus change; **System** and **Help** never do | Every function the screen offers |
| **3** | **Standard toolbar** | **Never changes** | Command field + the universal buttons (save, back, exit…) |
| **4** | **Application toolbar** | **Always changes** | The most-used buttons *for this transaction* |
| **5** | **Screen body** | **Always changes** | The actual work area |
| **6** | **Status bar** | Message changes; fields do not | Messages, plus system/client/user/program |

**The practical rule:** if you are lost, **strips 3 and 6 are always the same**. The command field can take you anywhere and the status bar always tells you where you are. Those two are your anchors.

**Anchor to what you know:** strips 1–3 are the browser chrome — the title bar and address bar that never change. Strip 5 is the page content. Strip 4 is the page's own toolbar. Strip 6 is the browser status bar, except SAP's actually tells you something useful.

---

## B2. The Menu Bar — Including the Two That Are Always There

**Simple definition:** the menu bar holds every function the current screen offers. The first few menus change per transaction; the last two — **System** and **Help** — are identical everywhere in SAP.

<p class="te"><strong>Telugu:</strong> Menu bar lo aa screen lo unna <strong>anni functions</strong> untayi. Modati konni menus prathi transaction ki maarutayi, kaani <strong>System</strong> inka <strong>Help</strong> — ee rendu SAP antha okatela untayi. Application toolbar lo kanapadani options chala varaku ikkada untayi, anduke button dorakakapote <strong>menu lo vetuku</strong>.</p>

**The typical shape:** `<Object> | Edit | Goto | Utilities | Environment | System | Help`

| Menu | Usually contains |
|---|---|
| **First menu** (Program, Table, List…) | Create, change, display, activate, check, print, exit — named after the object you are working on |
| **Edit** | Cut, copy, paste, select, delete, insert lines |
| **Goto** | Jump to another part of the *same* object — attributes, technical settings, documentation |
| **Utilities** | Tools around the object — where the **Table Maintenance Generator** hides in SE11 |
| **Environment** | Related objects elsewhere — where cross-references and usage lists live |

**System — the menu worth memorising.** This one is available on every single screen:

| System → | What it does | Why you care |
|---|---|---|
| **Create Session** | Opens a second window into the same system | Work in two transactions at once |
| **End Session** | Closes the current window | |
| **User Profile → Own Data** | Your user settings, default printer, date format, parameter IDs | Set date format to DD.MM.YYYY once and forget it |
| **User Profile → Hold/Set Data** | Pre-fill screen fields for next time | Saves retyping the same test data |
| **Services → Table Maintenance** | Jump straight to SM30 | |
| **Services → Reporting** | Jump straight to SE38 | |
| **Services → ABAP Workbench** | Jump to the dev tools | |
| **List** | Save, print or download the current list output | How you get an ALV out to a spreadsheet |
| **Status…** | **The system information box** | **The most useful item in this menu — see below** |
| **Log off** | Leave the system | |

**`System → Status` is the one to know cold.** It opens a dialog telling you:

- **Client, User, Language** — where you are
- **Transaction** and **Program** — what is currently running
- **SAP release / component version** — *"S/4HANA 2023"* — the answer to a very common interview question
- **Database system** and **host** — HANA, and which server

**Interview relevance:** *"Which S/4HANA release did you work on?"* is asked constantly. `System → Status` is where the answer lives. Look it up in your practice system this week and remember the number.

**Help → the F1 route.** `Help → Application Help` opens SAP's documentation for the current screen. Useful, though in practice you will press **F1** on a field far more often (Part B4).

---

## B3. The Standard Toolbar — Every Button

**Simple definition:** the row of small icons under the menu bar. It is **identical on every screen in SAP**, which makes it the highest-value thing in this guide to learn properly.

<p class="te"><strong>Telugu:</strong> Ee toolbar <strong>SAP antha okate</strong> — e screen lo aina ivi ee buttons ye untayi. Anduke deenini <strong>gattiga nerchuko</strong>, oke sari nerchukunte SAP motham lo pani chestundi. Mukhyanga <strong>Back, Exit, Cancel</strong> — ee moodintiki teda telisi undali, kotta vaallu ikkade tappu chestaru.</p>

| Icon | Name | Key | What it does |
|---|---|---|---|
| ▭ | **Command field** | Ctrl+/ | Type a T-code to go anywhere (Part C1) |
| ✓ | **Enter / Continue** | **Enter** | Confirm input and let the server process the screen. **Not** "save". |
| 💾 | **Save** | **Ctrl+S** | Commit your work to the database |
| ← | **Back** | **F3** | Go back one screen |
| ↑ | **Exit** | **Shift+F3** | Leave the transaction completely |
| ✕ | **Cancel** | **F12** | Abandon the current screen without processing |
| 🖨 | **Print** | Ctrl+P | Send the current list to spool |
| 🔍 | **Find** | Ctrl+F | Search within the current list or code |
| 🔎 | **Find next** | Ctrl+G | Repeat the last search |
| ⏮ ◀ ▶ ⏭ | **First / Previous / Next / Last page** | Ctrl+PgUp, PgUp, PgDn, Ctrl+PgDn | Scroll long lists |
| ⊞ | **Create new session** | — | Opens another window into the same system |
| ⇗ | **Create shortcut** | — | Saves a desktop shortcut that opens straight into this transaction |
| ❓ | **Help** | **F1** | Context help for the field the cursor is in |
| ⚙ | **Customize local layout** | **Alt+F12** | GUI settings, themes, clipboard, scripting (Part C5) |

**Back vs Exit vs Cancel — the distinction that catches everyone:**

| Button | Key | Behaviour | Use when |
|---|---|---|---|
| **Back** | F3 | One screen back, staying in the transaction | You went one level too deep |
| **Exit** | Shift+F3 | Leaves the transaction entirely, back to Easy Access | You are done here |
| **Cancel** | F12 | Discards the current screen's input without processing | You typed something wrong and want out |

**The mistake to avoid:** ✓ (Enter) is **not** Save. Enter tells the server "process what I typed" — it validates, fills in derived fields, and moves you on. Your work is only in the database after **Ctrl+S**. In an editor, you additionally need **Activate** (Ctrl+F3) before anything actually runs.

**Anchor to what you know:** Enter is like submitting a form for validation. Save is like the POST that writes to the database. Activate is like a build step — the object exists but is not live until compiled. Three separate actions; web development usually collapses them into one.

---

## B4. The Application Toolbar and the Screen Body

**Simple definition:** the application toolbar holds the buttons specific to *this* transaction. The screen body is where you actually work — and two function keys inside it will save you more time than anything else in this guide.

<p class="te"><strong>Telugu:</strong> Application toolbar lo aa transaction ki matrame sambandhinchina buttons untayi — anduke idi prathi screen ki maarutundi. Screen body lo nuvvu pani chestavu. Ikkada <strong>rendu keys</strong> chala mukhyam: <strong>F1</strong> (ee field ante emiti?) inka <strong>F4</strong> (ee field lo em values pettochu?). Ee rendu ABAP developer ki roju vaade tools.</p>

**Application toolbar:** whatever the transaction's designers thought you would press most — *Display / Change / Create / Execute* in SE38, *Display / Change / Create* in SE11. If a button you expect is missing, look in the menu bar; the toolbar only shows a subset.

**Field types you will see in the screen body:**

| Element | Looks like | Note |
|---|---|---|
| **Input field** | White box | Type into it |
| **Required field** | Box with a ✓ or highlighted | Cannot proceed while empty |
| **Display-only field** | Grey, no border | Read-only in this mode |
| **Checkbox / Radio button** | ☐ / ○ | Radio = pick exactly one |
| **Tab strip** | Row of tabs | Same screen, more pages of fields |
| **Table control / ALV grid** | Spreadsheet-like | Sortable, filterable, exportable |

### F1 and F4 — the two keys that make you fast

**F4 — value help.** Put the cursor in a field and press **F4** to see the valid entries. Any field with a small dropdown arrow supports it. This is how you find a plant code, a company code, a package name, without asking anyone.

**F1 — field help, and the hidden trick.** Press **F1** on a field and you get its documentation. But the real prize is the button inside that popup:

> **F1 → Technical Information**

That shows you the **table name and field name** behind the screen field you are standing on.

**Why this matters enormously to you as an ABAP developer:** a functional consultant says "the delivery date is wrong on the purchase order". You open ME23N, click the field, press F1 → Technical Information, and it tells you the value lives in `EKET-EINDT`. Now you can write the SELECT. Without this trick you would be guessing table names or searching the internet.

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>Performance Assistant</span><span class="wc">— □ ✕</span></div>
  <div class="gui-app"><span class="gui-b">📖</span><span class="gui-b">🔧 Technical Information</span><span class="gui-b">⚙ Customizing</span></div>
  <div class="gui-body">
    <div style="font-size:9px;color:#33414d;margin-bottom:6px"><strong>Delivery Date</strong> — Date on which the goods are to be delivered.</div>
    <table class="gui-grid">
      <tr><th colspan="2">Field Data</th></tr>
      <tr><td>Table Name</td><td>EKET</td></tr>
      <tr><td>Field Name</td><td>EINDT</td></tr>
      <tr><td>Data Element</td><td>EEIND</td></tr>
      <tr><td>DE Supplement</td><td>0</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>&nbsp;</span><span><span class="sf">S4H</span><span class="sf">100</span></span></div>
</div>
<figcaption>F1 → <strong>Technical Information</strong>. This is how you find the table and field behind any screen field — the single most useful trick in SAP GUI for a developer.</figcaption>
</figure>

**Practise it this week:** open any transaction with data on screen, press F1 on three different fields, and note the table names. You will start recognising `EKKO`, `EKPO`, `MARA`, `VBAK` — the tables every ABAP interview mentions.

---

## B5. The Status Bar — Reading What SAP Is Telling You

**Simple definition:** the bottom strip. The left half shows the system's message to you; the right half shows where you are.

<p class="te"><strong>Telugu:</strong> Kinda unna patti. <strong>Yeda vaipu</strong> — system nee ki chepthunna message. <strong>Kudi vaipu</strong> — nuvvu ekkada unnavu (system, client, user, program). Message ki <strong>rangu (colour)</strong> chala mukhyam — akupacha ante ayindi, erupu ante avvaledu.</p>

**The left half — messages, and their four types:**

| Type | Colour | Meaning | What happens |
|---|---|---|---|
| **S** — Success | Green | It worked | Processing continues |
| **I** — Information | Yellow/blue | Just telling you something | Continues |
| **W** — Warning | Yellow | Something is odd, but allowed | Continues if you press Enter again |
| **E** — Error | **Red** | Invalid; fix it | **Stops** — you cannot proceed |
| **A** — Abend | Red | Fatal | Transaction terminates |

**Double-click a message** to see its long text — which usually explains far more than the one line. Most beginners never discover this and stay stuck on a red message they could have solved in ten seconds.

**The right half — the system fields.** Click the small arrow to toggle which of these show:

| Field | Example | What it tells you |
|---|---|---|
| **System** | S4H | Which SAP system you are logged into |
| **Client** | 100 | Which client — see A3 |
| **User** | NIKHIL | Who you are logged in as |
| **Program** | SAPLSD41 | The ABAP program currently running |
| **Transaction** | SE11 | The T-code you are in |
| **Response time** | 0.3 s | How long the last round trip took |
| **OVR / INS** | OVR | Overwrite or insert typing mode |

**Why the Program field is genuinely useful:** when you are debugging or trying to understand a screen you did not write, the status bar tells you the program name for free. From there, SE38 or SE80 opens the source.

**A habit worth building from day one:** after every action, glance at the status bar before doing anything else. Green means proceed. Red means read it — and double-click it. Most "SAP is broken" moments are an unread red message at the bottom of the screen.

---

# Part C — Moving Around

## C1. The Command Field — Your Fastest Tool

**Simple definition:** the small white box at the top left. Type a transaction code into it and press Enter to jump anywhere in SAP, from anywhere in SAP.

<p class="te"><strong>Telugu:</strong> Paina yeda vaipu unna chinna tella box. Andulo transaction code type chesi Enter kotte, SAP lo ekkadiki aina veltavu. <strong>Mouse tho menu lo vetakadam manesi ee box vaadu</strong> — adhe vegam. Oke jagratha: nuvvu already oka transaction lo unte, code mundu <strong>/n</strong> pettali.</p>

**The syntax — memorise these six:**

| Type this | What happens |
|---|---|
| `SE11` | Opens SE11 — **only works from the Easy Access screen** |
| `/nSE11` | Opens SE11 **in the current window**, ending what you were doing. Works from anywhere. |
| `/oSE11` | Opens SE11 in a **new window**, keeping your current one. Works from anywhere. |
| `/n` | Cancels the current transaction and returns to Easy Access |
| `/o` | Shows the list of your open sessions |
| `/i` | Ends the current session (closes this window) |

**The rule that confuses everyone at first:** from the Easy Access screen, plain `SE11` works. From *inside* a transaction, you must write `/nSE11` — otherwise SAP thinks you are typing data into the current screen. When in doubt, always type the `/n`. It works from everywhere.

**Two more you will want:**

| Type this | What happens |
|---|---|
| `/nend` | Log off, **with** a confirmation prompt |
| `/nex` | Log off **immediately, no prompt — unsaved work is lost** |
| `/h` | Switch on the debugger, then run the next action |

**Be careful with `/nex`.** It is fast and it is unforgiving. Many people type it out of habit and lose an hour of unsaved work. Use `/nend`.

**`/h` is how you start debugging** in classical SAP GUI: type `/h`, press Enter (the status bar confirms "Debugging switched on"), then trigger the action you want to inspect. The debugger opens at the first line of the next ABAP statement.

**Two conveniences worth knowing:**

- The command field has a **dropdown history** — click the small arrow to see T-codes you used recently.
- **Ctrl+/** puts the cursor straight into the command field from anywhere, so you never need the mouse.

**Anchor to what you know:** the command field is the browser address bar, and T-codes are URLs. `/n` is "navigate in this tab", `/o` is "open in a new tab". Once you see it that way it stops feeling cryptic.

---

## C2. SAP Easy Access — The Home Screen

**Simple definition:** the tree screen you land on after logging in. It is SAP's menu of every transaction you are allowed to run.

<p class="te"><strong>Telugu:</strong> Login ayyaka vachhe modati screen. Idi oka <strong>tree menu</strong> — SAP lo neeku permission unna anni transactions ikkada untayi. Kaani nija panilo evaru deenini vaadaru — andaru <strong>command field lo T-code</strong> type chestaru, endukante adi chala vegam. Kaani <strong>Favorites</strong> matram chala upayogam.</p>

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>SAP Easy Access</span><span class="wc">— □ ✕</span></div>
  <div class="gui-menu"><span>Menu</span><span>Edit</span><span>Favorites</span><span>Extras</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="" readonly><span class="gui-b g">✓</span><span class="gui-b">💾</span><span class="gui-b g">←</span><span class="gui-b y">↑</span><span class="gui-b r">✕</span><span class="gui-b">⊞</span><span class="gui-b">❓</span><span class="gui-b">⚙</span></div>
  <div class="gui-app"><span class="gui-b">⭐ Add to Favorites</span><span class="gui-b">📁 Create folder</span><span class="gui-b">🔍 Find</span></div>
  <div class="gui-body">
    <div class="gui-tree">
▼ <strong>Favorites</strong><br>
&nbsp;&nbsp;&nbsp;📄 SE11 &nbsp;— ABAP Dictionary<br>
&nbsp;&nbsp;&nbsp;📄 SE38 &nbsp;— ABAP Editor<br>
&nbsp;&nbsp;&nbsp;📄 SE80 &nbsp;— Object Navigator<br>
&nbsp;&nbsp;&nbsp;📄 ST22 &nbsp;— Runtime Errors<br>
▼ <strong>SAP Menu</strong><br>
&nbsp;&nbsp;▶ Office<br>
&nbsp;&nbsp;▶ Cross-Application Components<br>
&nbsp;&nbsp;▶ Logistics<br>
&nbsp;&nbsp;▶ Accounting<br>
&nbsp;&nbsp;▼ Tools<br>
&nbsp;&nbsp;&nbsp;&nbsp;▼ ABAP Workbench<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶ Overview<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶ Development<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶ Utilities
    </div>
  </div>
  <div class="gui-status"><span>&nbsp;</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span></span></div>
</div>
<figcaption>SAP Easy Access with Favorites at the top. Nearly everything a developer needs sits under <strong>Tools → ABAP Workbench</strong> — but typing the T-code is far faster.</figcaption>
</figure>

**The three trees:**

| Tree | What it holds |
|---|---|
| **Favorites** | Your own shortcuts — the only part most people actually use |
| **SAP Menu** | The complete standard menu, organised by business area |
| **User Menu** | Only what your assigned roles allow — often empty on a training system |

**Set up your Favorites in the first week.** Right-click *Favorites → Insert transaction*, type the code, done. Add these ten and your daily work gets noticeably faster:

`SE11` · `SE38` · `SE80` · `SE24` · `SE37` · `SE16N` · `SM30` · `ST22` · `SE09` · `SE93`

You can also drag a transaction from the SAP Menu into Favorites, and group them into folders (`Favorites → Insert folder`).

**Where developer transactions live in the SAP Menu**, if you ever want to browse rather than type:

```
Tools
 └── ABAP Workbench
      ├── Overview        →  SE80 Object Navigator, SE84 Info System
      ├── Development     →  SE38 Editor, SE11 Dictionary, SE24 Class Builder,
      │                      SE37 Function Builder, SE91 Messages
      ├── Utilities       →  SE30/SAT Runtime Analysis, ST05 SQL Trace
      └── Test            →  SE37 test, ABAP Unit
```

---

## C3. Sessions — Working in Two Places at Once

**Simple definition:** a **session** is one SAP GUI window into the system. You can have several open at once, each in a different transaction, all under the same logon.

<p class="te"><strong>Telugu:</strong> Session ante oka SAP window. Nuvvu <strong>okesari konni windows</strong> teruchukovachu — okatilo table chusukuntu, inkokatilo code raayochu. Idi chala upayogam. Generally <strong>aaru (6) varaku</strong> allow chestaru. Browser lo tabs laage anukovachu.</p>

**How to open one:**

| Method | |
|---|---|
| `/oSE11` in the command field | Opens SE11 in a new session directly |
| `/o` then pick from the list | Shows existing sessions and lets you create one |
| The ⊞ button on the standard toolbar | New session, same screen |
| `System → Create Session` | Same thing from the menu |

**The limit:** most systems allow **six** sessions per user. It is a basis setting (`rdisp/max_alt_modes`), and when you hit it SAP simply refuses to open another.

**Why this matters for you specifically:** the single most common developer workflow is *two sessions side by side* — SE38 with your code in one, SE11 or SE16N with the table in the other. Being fluent with `/o` is a small thing that visibly separates people who use SAP daily from people who have only been taught it.

**Ending sessions:**

| | |
|---|---|
| `/i` | Ends the current session |
| `System → End Session` | Same |
| `/nend` | Logs off **all** sessions, with confirmation |

**A warning about locks.** If you are editing an object in one session, SAP locks it. Trying to open the same object in a second session gives you *"Object is locked by user NIKHIL"* — locked by *yourself*. It looks like a bug and it is not. Close the other session, or open the object in display mode.

---

## C4. Finding a Transaction Code You Do Not Know

**Simple definition:** four ways to answer "what is the T-code for…?" without asking anyone.

<p class="te"><strong>Telugu:</strong> "Deeniki T-code emiti?" ani telisukovadaniki <strong>naalugu daarulu</strong>. Modati rendu roju vaade vi. Interviews lo kuda "T-code teliyakapote em chestavu?" ani adigithe, ee jawaabu manchi impression istundi.</p>

**Method 1 — `SEARCH_SAP_MENU`.** Type it in the command field. It searches the whole SAP menu for a word and returns matching transactions with their menu paths.

> Type `SEARCH_SAP_MENU`, enter `dictionary`, and it returns SE11 with the path `Tools → ABAP Workbench → Development → ABAP Dictionary`.

**Method 2 — SE93, the Transaction Maintenance tool.** SE93 is where transaction codes are defined. Put in a code to see exactly what it starts (program, screen, or method) — and use F4 with a wildcard to search:

> In SE93, type `SE1*` and press F4 to list every transaction starting with SE1.

**Method 3 — table TSTC via SE16N.** Every transaction code in the system lives in table **TSTC**, and its text in **TSTCT**. Open SE16N, table `TSTCT`, filter `TTEXT` with `*dictionary*`. This is the developer's way and it is exhaustive.

**Method 4 — the status bar.** If someone shows you a screen and you want to know how they got there, look at the **Transaction** field in the status bar, or use `System → Status`. It names the T-code you are currently in.

**The reverse question — "what does this T-code do?"** Type it into SE93 and read the description, or simply run it in a *sandbox* client. Never explore unknown transactions in a production system; some of them post documents or start jobs.

**Two naming patterns that help you guess:**

| Prefix | Area |
|---|---|
| **SE** | ABAP Workbench / development (SE11, SE38, SE80, SE93) |
| **SM** | System management / basis (SM30, SM37, SM59) |
| **SU** | User and authorization (SU01, SU53) |
| **ST** | System monitoring and trace (ST22, ST05) |
| **Z / Y** | Custom transactions built at your company |

---

## C5. Making SAP GUI Yours — Options and Themes

**Simple definition:** the ⚙ button (**Alt+F12**) opens SAP GUI's own settings. A handful of them are worth changing on day one; the rest you can ignore.

<p class="te"><strong>Telugu:</strong> ⚙ button (Alt+F12) — idi SAP GUI settings. Chala options unnayi, kaani <strong>moodu matrame</strong> ippude marchali: (1) prathi system ki vere <strong>rangu</strong> pettadam — production lo pai tappu cheyyakunda undadaniki, (2) dropdown lo <strong>technical keys</strong> chupinchadam — developer ki chala avasaram, (3) input <strong>history</strong> on cheyyadam.</p>

**The Alt+F12 menu** gives you: *Options, New Visual Design, Clipboard, Character Set, Quick Cut and Paste, Activate GuiXT, Script Recording and Playback, Default Size, Hardcopy, Create Shortcut, About*.

**Under Options, the tabs are:**

| Tab | Holds |
|---|---|
| **Visual Design** | Theme, fonts, **colours in system**, branding image |
| **Interaction Design** | Visualization, notifications, sounds, control settings |
| **Accessibility & Scripting** | Accessibility mode, GUI scripting on/off |
| **Multilingual Settings** | Language and I18N |
| **Local Data** | **History**, cache, configuration files |
| **Traces** | GUI and performance traces (basis use) |
| **Security** | Security rules for file access and scripting |

### The three settings to change today

**1. Colour-code your systems.** *Visual Design → Color Settings → Color in System.* Give each system a distinct colour — for example green for development, yellow for quality, **red for production**.

This is not decoration. It is the standard professional habit that stops someone running a test program in production because two windows looked identical. Interviewers notice when a candidate mentions it, because it signals project discipline rather than classroom learning.

**2. Show technical keys in dropdowns.** *Interaction Design → Visualization 1 → "Show keys within dropdown lists"* (and "Sort by keys").

By default, a dropdown shows *"Standard Purchase Order"*. With this on, it shows *"NB — Standard Purchase Order"*. As an ABAP developer you need the key **NB**, because that is what is stored in the table and what your code will compare against. Leave this on permanently.

**3. Turn on input history.** *Local Data → History → On.* SAP GUI then autocompletes fields you have typed before, which on a system where you retype the same table names all day saves real time.

**Worth knowing, not changing yet:**

- **Quick Cut and Paste** — select text and it copies automatically. Convenient, but it can overwrite your clipboard unexpectedly.
- **Script Recording and Playback** — records your clicks into a script. Sometimes disabled for security. Useful much later for repetitive test data entry.
- **Default Size** — resets the window to SAP's standard dimensions.

---

# Part D — The Transaction Code Reference

## D1. Development and the ABAP Workbench

**Simple definition:** the transactions you will live in every morning. Learn the first six by heart; the rest you can look up.

<p class="te"><strong>Telugu:</strong> Ivi nuvvu roju vaade T-codes. <strong>Modati aaru</strong> — SE11, SE38, SE80, SE24, SE37, SE16N — ivi baaga gurthupettuko, roju kavali. Migilinavi avasaram vachinappudu chusukovachu. Table lo <strong>★</strong> unnavi mukhyamainavi.</p>

| T-code | Name | What you use it for |
|---|---|---|
| **SE11** ★ | ABAP Dictionary | Tables, views, data elements, domains, search helps, lock objects |
| **SE38** ★ | ABAP Editor | Write, run and debug reports and programs |
| **SE80** ★ | Object Navigator | The all-in-one workbench — browse a package and edit anything in it |
| **SE24** ★ | Class Builder | Global classes and interfaces (OO ABAP) |
| **SE37** ★ | Function Builder | Function modules and function groups |
| **SE93** | Transaction Maintenance | Create a Z transaction code; look up what any T-code runs |
| **SE91** | Message Maintenance | Message classes — the texts your programs raise |
| **SE84** | Repository Information System | Search the whole repository by object type, author, package |
| **SE39** | Split-Screen Editor | Compare two programs side by side |
| **SA38** | ABAP Program Execution | Run a report by name without opening the editor |
| **ABAPDOCU** | ABAP Documentation & Examples | **SAP's built-in tutorial with runnable example programs** |
| **SE18 / SE19** | BAdI Definition / Implementation | Enhancements — extending standard SAP without modifying it |
| **CMOD / SMOD** | Customer enhancement projects | The older enhancement framework; still found in old systems |
| **SE41 / SE51** | Menu Painter / Screen Painter | Classical Dynpro UI — legacy, but you will read it |
| **SE71 / SMARTFORMS** | Form painters | Printed output — legacy, skim only |

**Start with ABAPDOCU this week.** It is SAP's own documentation *with executable examples* built into the system. Every syntax topic has a demo program you can run and modify. For someone with 2 hours of system time a day, it is the cheapest practice material available and almost nobody at your stage knows it exists.

**SE80 vs the individual transactions:** SE80 can do almost everything SE38, SE11, SE24 and SE37 do, in one window with a navigation tree. Many developers live in SE80 alone. Learn both — SE80 for browsing and understanding a package, the individual T-codes for going straight to one object.

---

## D2. Data — Looking At It and Maintaining It

**Simple definition:** the transactions for reading table contents and letting users maintain them.

<p class="te"><strong>Telugu:</strong> Table lo em data undo chudataniki, inka users ki data maintain cheyyaniche screens ki — ee T-codes. <strong>SE16N</strong> roju vaadutavu. Kaani <strong>jagratha</strong> — production system lo data chudatam parledu, kaani <strong>marchadam</strong> chala prammadam.</p>

| T-code | Name | Use |
|---|---|---|
| **SE16N** ★ | General Table Display | The everyday data browser — flexible selection, easy export |
| **SE16** | Data Browser | The classic version; still everywhere |
| **SE16H** | HANA-optimised Table Display | Adds aggregation and grouping, S/4HANA only |
| **SM30** ★ | Table Maintenance | The screen end users get to maintain a Z table's contents |
| **SM31** | Table Maintenance (older) | Legacy equivalent |
| **SM34** | View Cluster Maintenance | Several related tables maintained together |
| **SE54** | Generate Table Maintenance Dialog | Creates the SM30 screen for your Z table |
| **SE14** | Database Utility | Adjust/activate the database object after a table change |
| **SE13** | Technical Settings | Buffering, size category — usually reached from inside SE11 |

**The `&SAP_EDIT` warning.** You will eventually hear that typing `&SAP_EDIT` in SE16N turns on direct table editing. Three things to know:

1. It bypasses all business logic and validation.
2. It is **logged and audited** on any well-run system.
3. On most production systems it is disabled outright.

Do not use it, and do not mention it as a solution in an interview. The correct answer to "how do I change this data?" is always *"through the transaction that owns it, or a maintenance dialog"*.

**Exporting data you have selected:** in SE16N or any ALV list, use `List → Export → Spreadsheet`, or the export icon on the ALV toolbar. This is how you get data out for analysis, and how you will build test data sets.

---

## D3. When Something Breaks — Debugging and Monitoring

**Simple definition:** the transactions you open when a program fails, a job did not run, or a user says "it says I have no authorization".

<p class="te"><strong>Telugu:</strong> Emaina fail aithe, ee T-codes teruchali. <strong>ST22</strong> (dump vachinapudu), <strong>SU53</strong> (authorization problem), <strong>SM37</strong> (job run avvaledu) — ee moodu chala takkuva mandi ki telusu, kaani interviews lo <strong>tappaka</strong> adugutaru. "Production lo problem vasthe em chestavu?" ane prasnaki ivi ye jawaabu.</p>

| T-code | Name | Open it when |
|---|---|---|
| **ST22** ★ | ABAP Runtime Errors (Short Dumps) | A program crashed — this tells you the exact line and why |
| **SU53** ★ | Authorization Check | A user gets "no authorization" — shows the exact object that failed |
| **SM37** ★ | Job Overview | A background job did not produce its output |
| **SM36** | Define Background Job | Schedule a job |
| **SM12** | Lock Entries | "Object locked by another user" — see who holds it |
| **SM13** | Update Records | An update terminated after the user saw "saved" |
| **SM21** | System Log | System-level errors around a given time |
| **SLG1** | Application Log | Business-application logs written by programs |
| **ST05** | Performance / SQL Trace | Find the slow SQL statement |
| **SAT** (old **SE30**) | Runtime Analysis | Find where a program spends its time |
| **SM50 / SM66** | Work Process Overview | See what is running right now |
| **SM59** | RFC Destinations | Connections to other systems |

**How to read a short dump in ST22** — this is a genuinely useful skill and takes ten minutes to learn:

1. Open ST22, pick today, double-click the dump.
2. **Error analysis** — what went wrong in plain language.
3. **Source Code Extract** — the exact line, with the failing statement highlighted.
4. **Active Calls / Events** — the call stack: which program called which.
5. **Chosen variables** — what the variables contained at the moment of failure.

The most common dumps you will cause yourself while learning:

| Dump | Usually means |
|---|---|
| `CX_SY_ZERODIVIDE` | Divided by zero |
| `CX_SY_CONVERSION_NO_NUMBER` | Tried to move text into a numeric field |
| `TABLE_INVALID_INDEX` | Read an internal table row that does not exist |
| `CX_SY_OPEN_SQL_DB` | A malformed SELECT |
| `DBIF_RSQL_INVALID_CURSOR` | Usually a nested SELECT gone wrong |
| `TIME_OUT` | A dialog step ran longer than the limit (default around 10 minutes) |

**Deliberately cause one this week.** Write a two-line program that divides by zero, run it, then find your own dump in ST22 and read all five sections. Doing this once makes ST22 familiar rather than frightening — and "walk me through how you'd investigate a dump" is a stock interview question.

---

## D4. Transports, Users, and the Business Transactions You Will Meet

**Simple definition:** how your code moves between systems, who is allowed to do what, and the handful of business transactions an ABAP developer needs to recognise.

<p class="te"><strong>Telugu:</strong> Nee code DEV nunchi QA, PROD ki ela veltundo — adi <strong>transport</strong>. Inka nuvvu ABAP developer aina, business transactions konni telisi undali — endukante nuvvu vetike data avi create chestayi. <strong>ME23N</strong> tho purchase order chudu, F1 kotti table peru telusuko — appudu nee SELECT ela raayalo ardham avutundi.</p>

**Transports — moving your work:**

| T-code | Name | Use |
|---|---|---|
| **SE09** ★ | Transport Organizer | Your requests and tasks — release them from here |
| **SE10** | Transport Organizer | The same tool, different entry screen |
| **SE01** | Transport Organizer (extended) | Full view, including imports |
| **SE03** | Transport Organizer Tools | Search objects in requests, set system change options |
| **STMS** | Transport Management System | The basis view — imports into QA and production |

**The landscape your code travels through:**

```
   DEV                QAS                 PRD
┌─────────┐  transport ┌─────────┐  transport ┌─────────┐
│ you code│ ─────────▶ │ testing │ ─────────▶ │  live   │
│ SE38/11 │            │  by QA  │            │  users  │
└─────────┘            └─────────┘            └─────────┘
     ▲
  your transport request is created here
```

**Users and authorizations:**

| T-code | Name | Use |
|---|---|---|
| **SU01** | User Maintenance | Create users, assign roles (usually basis, not you) |
| **SU3** | Own User Data | **Your** settings — date format, decimal notation, default printer |
| **SU53** | Authorization Check | The last failed check for a user |
| **PFCG** | Role Maintenance | Building authorization roles |
| **SUIM** | User Information System | Who has which authorization |

**Set your own defaults in SU3 today** — date format `DD.MM.YYYY`, decimal notation, and time zone. It takes a minute and removes a small daily annoyance.

**Business transactions worth recognising** — you do not need to *use* these, but you need to know what data they create, because your reports will read it:

| Area | Create / Change / Display | What it makes |
|---|---|---|
| **Sales (SD)** | VA01 / VA02 / **VA03** | Sales orders → tables `VBAK`, `VBAP` |
| **Purchasing (MM)** | ME21N / ME22N / **ME23N** | Purchase orders → `EKKO`, `EKPO`, `EKET` |
| **Purchase requisition** | ME51N / **ME53N** | Requisitions → `EBAN` |
| **Material master** | MM01 / MM02 / **MM03** | Materials → `MARA`, `MARC`, `MARD` |
| **Business Partner** | **BP** | Customers and vendors → `BUT000`, `KNA1`, `LFA1` |
| **Goods movement** | MIGO | Material documents → `MKPF`, `MSEG` |
| **Billing** | VF01 / **VF03** | Invoices → `VBRK`, `VBRP` |
| **Accounting document** | **FB03** | Journal entries → **`ACDOCA`** in S/4HANA |
| **Stock overview** | MMBE | Current stock by plant |

### Three S/4HANA changes that come up in interviews

| Change | Detail |
|---|---|
| **Business Partner is mandatory** | Customer (XD01) and vendor (FK01) masters are replaced by the single **BP** transaction. `KNA1` and `LFA1` still exist underneath, but BP is the entry point. |
| **The Universal Journal** | Finance tables `BSEG`/`BKPF` and the old totals tables are consolidated into **`ACDOCA`**, one line-item table for all of finance. |
| **Material number is 40 characters** | Extended from 18. Old code assuming 18 breaks. |

Knowing these three signals that you learned *S/4HANA*, not ECC — which is exactly the filter hiring managers are applying in 2026.

---

# Part E — Creating Your First ABAP Program

## E1. SE38 and the Program Attributes Screen

**Simple definition:** SE38 is the ABAP Editor. Creating a program there means naming it, filling in an attributes screen, then writing code.

<p class="te"><strong>Telugu:</strong> SE38 lo program create cheyyadam moodu adugulu: (1) peru ivvadam — <strong>Z</strong> tho modalu, (2) <strong>Attributes</strong> screen nimpadam, (3) code raayadam. Attributes screen lo chala fields untayi, kaani <strong>rendu matrame</strong> mukhyam — Title inka Type. Migilinavi default ye sari.</p>

**Step 1 — name it.** Open SE38, type the name, click **Create**.

**Program names must start with Z or Y.** That is the customer namespace — everything SAP delivers starts with something else, so a Z prefix guarantees you never collide with, or accidentally modify, standard SAP code. Maximum 30 characters. A useful convention: `Z<initials>_<what it does>`, for example `ZNV_CARRIER_LIST`.

**Step 2 — the attributes screen.** It looks intimidating. Only two fields matter today.

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>ABAP: Program Attributes — ZNV_CARRIER_LIST — Create</span><span class="wc">— □ ✕</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="" readonly><span class="gui-b g">✓</span><span class="gui-b">💾</span><span class="gui-b g">←</span><span class="gui-b r">✕</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Title</span><span class="gui-in k" style="min-width:220px">List of airline carriers</span><span class="cal">1</span></div>
    <div class="gui-row"><span class="gui-lbl">Original language</span><span class="gui-in">EN</span></div>
    <div class="gui-row" style="margin-top:8px"><span class="gui-lbl">Type</span><span class="gui-in k">Executable program</span><span class="cal">2</span></div>
    <div class="gui-row"><span class="gui-lbl">Status</span><span class="gui-in">Test program</span></div>
    <div class="gui-row"><span class="gui-lbl">Application</span><span class="gui-in"></span></div>
    <div class="gui-row"><span class="gui-lbl">Authorization group</span><span class="gui-in"></span></div>
    <div class="gui-row" style="margin-top:8px"><span class="gui-lbl">☑ Unicode checks active</span></div>
    <div class="gui-row"><span class="gui-lbl">☑ Fixed point arithmetic</span></div>
  </div>
  <div class="gui-status"><span>&nbsp;</span><span><span class="sf">S4H</span><span class="sf">100</span></span></div>
</div>
<figcaption>The Program Attributes screen. <span class="cal">1</span> <strong>Title</strong> — required, and it is what appears in every program list. <span class="cal">2</span> <strong>Type</strong> — "Executable program" for a report. Leave the rest at their defaults.</figcaption>
</figure>

**The Type field, decoded:**

| Type | What it is | You will use it |
|---|---|---|
| **Executable program** (Type 1) | A report you can run with F8 | **Now — this is your default** |
| **Include program** (I) | A code fragment pulled into another program | Later |
| **Module pool** (M) | Classical screen program (Dynpro) | Legacy |
| **Function group** (F) | Container for function modules | Via SE37 instead |
| **Class pool** (K) | Global class | Via SE24 instead |
| **Interface pool** (J) | Global interface | Via SE24 instead |
| **Subroutine pool** (S) | External subroutines | Legacy |

**Status** — set it to *Test program* for practice work. It is informational, but it signals intent to anyone browsing the system, and on real projects it keeps your experiments out of production program lists.

**Leave these two ticked:** *Unicode checks active* and *Fixed point arithmetic*. They are on by default in modern systems and turning them off causes subtle bugs.

---

## E2. Packages, and Why $TMP Matters

**Simple definition:** every repository object must live in a **package** — a folder that also decides whether the object can be transported to other systems.

<p class="te"><strong>Telugu:</strong> Program save chesinappudu SAP <strong>Package</strong> adugutundi. Rendu options: <strong>$TMP</strong> (Local object) leda oka nijamaina Z package. Teda: <strong>$TMP lo unnavi vere system ki vellav</strong> — nee machine lone untayi. Practice ki $TMP sare, kaani nija project lo eppudu Z package ye.</p>

After you save, SAP asks for a package. You have two answers:

| Choice | Meaning | Consequence |
|---|---|---|
| **$TMP** (or the **Local Object** button) | A temporary, personal package | **Cannot be transported.** Stays in this system forever. No transport request needed. |
| **A Z package** (e.g. `ZNV_PRACTICE`) | A real package | Transportable. SAP will ask for a transport request. |

**Which to use while learning:**

- **Pure syntax practice** — `$TMP` is fine and saves you a step every time.
- **Anything you might want to keep, show, or move** — a real Z package.
- **Your December portfolio app** — **a real Z package, always.** Objects in `$TMP` cannot be transported, and building a portfolio piece somewhere it can never leave is a mistake you discover far too late.

**Creating your own package:** in SE80, choose *Package* from the dropdown, type `ZNV_PRACTICE`, press Enter, and confirm creation. It asks for a short description and a *software component* (`HOME` for customer development) and a transport layer. Do this once in your first week and put everything real in it.

**Anchor to what you know:** a package is a folder plus a deployment flag. `$TMP` is like working in a directory that is in `.gitignore` — fine for scratch work, useless for anything you need to ship.

---

## E3. Transport Requests — How Code Leaves Your System

**Simple definition:** a **transport request** is a numbered container that records every change you make, so those changes can be moved to the test and production systems together.

<p class="te"><strong>Telugu:</strong> Nuvvu marchina prathi object oka <strong>transport request</strong> lo record avutundi. Aa request ni <strong>release</strong> cheste, adi DEV nunchi QA, taruvata PROD ki veltundi. Idi SAP lo <strong>deployment</strong> vidhaanam. Git lo commit + push laaga anukovachu — kaani ikkada okesari motham velthundi.</p>

When you save an object in a real package, SAP shows the request dialog:

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>Prompt for Workbench request</span><span class="wc">— □ ✕</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Object</span><span class="gui-in" style="min-width:200px">R3TR PROG ZNV_CARRIER_LIST</span></div>
    <div class="gui-row" style="margin-top:8px"><span class="gui-lbl">Request</span><span class="gui-in k">S4HK900123</span></div>
    <div class="gui-row"><span class="gui-lbl">Short description</span><span class="gui-in" style="min-width:200px">Practice reports — Nikhil</span></div>
  </div>
  <div class="gui-app"><span class="gui-b">Own Requests</span><span class="gui-b">Create Request</span><span class="gui-b g">✓</span><span class="gui-b r">✕</span></div>
  <div class="gui-status"><span>&nbsp;</span><span><span class="sf">S4H</span><span class="sf">100</span></span></div>
</div>
<figcaption>The transport request prompt. Pick an existing request from <strong>Own Requests</strong>, or make a new one with <strong>Create Request</strong>.</figcaption>
</figure>

**The two kinds of request:**

| Kind | Contains | Created from |
|---|---|---|
| **Workbench request** | Repository objects — programs, tables, classes, CDS views | Development work |
| **Customizing request** | Configuration settings, client-specific | IMG / SPRO configuration |

**The structure:** a request contains **tasks**, one per developer. Your objects sit in your task; the request is released as a whole once every task inside it is released.

```
Request  S4HK900123  "Purchase requisition app"
   ├── Task S4HK900124  (NIKHIL)   → ZNV_CARRIER_LIST, ZPURCH_REQ
   └── Task S4HK900125  (COLLEAGUE)→ ZCL_PR_HANDLER
```

**Releasing** (in SE09): release your task first, then the request. Once released it moves toward QA. You cannot edit objects in a released request — you create a new one.

**Anchor to what you know:** a task is your commit, the request is the pull request, and releasing is the merge and deploy. The important difference is that SAP transports *objects in their current state*, not diffs — and there is no easy revert. That is why releasing to production is a controlled, scheduled activity everywhere.

**Interview relevance:** *"Walk me through how your code gets to production"* is a standard question. The answer is: create/attach a workbench request in DEV, release your task and request in SE09, basis imports it into QAS via STMS, it is tested, then imported into PRD. Saying that fluently marks you as someone who has seen a project.

---

## E4. Write, Check, Activate, Run

**Simple definition:** four separate steps. Web development collapses them into one; ABAP does not, and skipping one is the most common beginner frustration.

<p class="te"><strong>Telugu:</strong> Naalugu <strong>vere vere</strong> adugulu: (1) raayadam, (2) <strong>Save</strong> Ctrl+S, (3) <strong>Activate</strong> Ctrl+F3, (4) <strong>Run</strong> F8. Chala mandi <strong>Activate marchipotaru</strong> — appudu "code marchanu kaani marpu raledu" ani confuse avutaru. Save ante database lo pettadam, Activate ante <strong>run avvadaniki siddham cheyyadam</strong>.</p>

| Step | Key | What it does | If you skip it |
|---|---|---|---|
| **1. Write** | — | Type the code | — |
| **2. Syntax check** | **Ctrl+F2** | Checks for errors without saving | You find errors later, more slowly |
| **3. Save** | **Ctrl+S** | Stores the source in the database | The code is lost |
| **4. Activate** | **Ctrl+F3** | Compiles it into a runnable version | **Your changes do not take effect** |
| **5. Run** | **F8** | Executes it | — |

**The trap: Save is not Activate.** A saved-but-inactive program keeps running its *last activated* version. You change a line, save, run — and nothing changes. Every ABAP beginner loses time to this at least once. If your change did not take effect, press **Ctrl+F3** first.

**Your first program — type this, do not paste it:**

```abap
REPORT znv_carrier_list.

DATA: lt_carriers TYPE TABLE OF scarr,
      ls_carrier  TYPE scarr.

SELECT * FROM scarr INTO TABLE lt_carriers.

LOOP AT lt_carriers INTO ls_carrier.
  WRITE: / ls_carrier-carrid, ls_carrier-carrname, ls_carrier-currcode.
ENDLOOP.
```

`SCARR` is SAP's demo flight-data table and exists on virtually every training system, so this runs without you creating anything first.

**Then rewrite it in modern ABAP** — this is the version a 2026 interviewer wants to see:

```abap
REPORT znv_carrier_list.

SELECT carrid, carrname, currcode
  FROM scarr
  INTO TABLE @DATA(lt_carriers).

LOOP AT lt_carriers INTO DATA(ls_carrier).
  WRITE: / ls_carrier-carrid, ls_carrier-carrname, ls_carrier-currcode.
ENDLOOP.
```

**What changed, and why it matters:**

| Old | Modern (7.4+) | Why |
|---|---|---|
| `SELECT *` | Named column list | Only fetch what you need |
| Separate `DATA:` declarations | `@DATA(...)` inline declaration | Less code, type derived automatically |
| No escape character | `@` before host variables | Required in modern Open SQL |

**Write both versions in your practice slot this week.** Being able to say *"I write modern ABAP, and here is the difference"* is a small, concrete thing that separates you from a candidate taught only the 2005 syntax — which, per Part B2 of your Launch Plan, is exactly the risk with institute courses.

---

# Part F — SE80 and What Moved to Eclipse

## F1. SE80 — The Object Navigator

**Simple definition:** SE80 is the one-window workbench. A navigation tree on the left, an editor on the right, and access to almost every object type SAP has — tables, programs, classes, function groups — without switching transactions.

<p class="te"><strong>Telugu:</strong> SE80 ante <strong>anni okate chota</strong>. Yeda vaipu tree, kudi vaipu editor. SE11, SE38, SE24, SE37 — ivi anni SE80 lopala nunche cheyyochu. <strong>Package peru ista chaalu</strong> — aa package lo unna anni objects tree lo kanapadutayi. Oka project ni ardham chesukovadaniki idi best tool.</p>

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>Object Navigator</span><span class="wc">— □ ✕</span></div>
  <div class="gui-menu"><span>Object</span><span>Edit</span><span>Goto</span><span>Utilities</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nse80" readonly><span class="gui-b g">✓</span><span class="gui-b">💾</span><span class="gui-b g">←</span><span class="gui-b y">↑</span><span class="gui-b r">✕</span><span class="gui-b">⊞</span><span class="gui-b">⚙</span></div>
  <div class="gui-body">
    <table style="width:100%;border-collapse:collapse"><tr>
      <td style="width:44%;vertical-align:top;border-right:1px solid #d4dae0;padding-right:8px">
        <div class="gui-row" style="margin-bottom:5px"><span class="gui-in" style="min-width:70px">Package ▾</span><span class="cal">1</span></div>
        <div class="gui-row" style="margin-bottom:7px"><span class="gui-in k" style="min-width:105px">ZNV_PRACTICE</span></div>
        <div class="gui-tree"><span class="cal">2</span><br>
▼ 📦 ZNV_PRACTICE<br>
&nbsp;&nbsp;▼ 📁 Dictionary Objects<br>
&nbsp;&nbsp;&nbsp;&nbsp;▼ Database Tables<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📄 ZPURCH_REQ<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📄 ZPURCH_REQ_ITEM<br>
&nbsp;&nbsp;&nbsp;&nbsp;▶ Data Elements<br>
&nbsp;&nbsp;&nbsp;&nbsp;▶ Domains<br>
&nbsp;&nbsp;&nbsp;&nbsp;▶ Views<br>
&nbsp;&nbsp;▼ 📁 Class Library<br>
&nbsp;&nbsp;&nbsp;&nbsp;📄 ZCL_PR_HANDLER<br>
&nbsp;&nbsp;▼ 📁 Programs<br>
&nbsp;&nbsp;&nbsp;&nbsp;📄 ZNV_CARRIER_LIST<br>
&nbsp;&nbsp;▶ 📁 Function Groups<br>
&nbsp;&nbsp;▶ 📁 Transactions
        </div>
        <div style="margin-top:8px"><span class="gui-tab on">Repository Browser</span><span class="gui-tab">Info System</span><span class="gui-tab">Transport Org.</span><span class="cal">4</span></div>
      </td>
      <td style="vertical-align:top;padding-left:9px">
        <div class="gui-tabs"><span class="gui-tab on">Source Code</span><span class="gui-tab">Attributes</span><span class="gui-tab">Text Elements</span><span class="gui-tab">Documentation</span><span class="cal">3</span></div>
        <div style="font-family:Consolas,monospace;font-size:8.5px;color:#1a2530;line-height:1.6">
1 &nbsp;REPORT znv_carrier_list.<br>
2<br>
3 &nbsp;SELECT carrid, carrname, currcode<br>
4 &nbsp;&nbsp;&nbsp;FROM scarr<br>
5 &nbsp;&nbsp;&nbsp;INTO TABLE @DATA(lt_carriers).<br>
6<br>
7 &nbsp;LOOP AT lt_carriers INTO DATA(ls_car).<br>
8 &nbsp;&nbsp;&nbsp;WRITE: / ls_car-carrid, ls_car-carrname.<br>
9 &nbsp;ENDLOOP.
        </div>
      </td>
    </tr></table>
  </div>
  <div class="gui-status"><span>Object activated</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span></span></div>
</div>
<figcaption>SE80. <span class="cal">1</span> Object-type dropdown — Package, Program, Class, Function Group… <span class="cal">2</span> The tree of everything in that package. <span class="cal">3</span> Editor tabs for the selected object. <span class="cal">4</span> Browser tabs at the bottom left.</figcaption>
</figure>

**The object-type dropdown (callout 1)** is what makes SE80 powerful. Choose what you want to browse by:

| Choose | Then type | You get |
|---|---|---|
| **Package** | `ZNV_PRACTICE` | **Everything** in that package, grouped by type |
| **Program** | `ZNV_CARRIER_LIST` | One program with its includes and screens |
| **Class/Interface** | `ZCL_PR_HANDLER` | The class with its methods and attributes |
| **Function Group** | `ZNV_FG01` | The group with its function modules |
| **Local Objects** | — | Everything you put in `$TMP` |

**Browsing by package is the skill worth building.** When you join a project in January and someone says "the requisition enhancement is in package `ZMM_PROC`", SE80 with that package name shows you the entire thing — every table, class, program and transaction — in one tree. That is how you understand unfamiliar code quickly, and it is much faster than opening objects one at a time.

**The bottom-left tabs (callout 4):**

| Tab | Use |
|---|---|
| **Repository Browser** | The default tree |
| **Repository Information System** | Search by object type, author, package, date (also SE84) |
| **Transport Organizer** | Your requests, inside SE80 |
| **Tag / MIME Repository** | Web content — rarely needed |

**Useful habits in SE80:**

- **Double-click any object** in the tree to open it on the right.
- **Right-click a package → Create** to add an object directly into it, so it lands in the right package automatically.
- **Where-used list** (Ctrl+Shift+F3) on any object shows everywhere it is referenced — indispensable before you change something.

**Where-used is the one to remember.** Before modifying a data element, a table or a method, run the where-used list. If it returns forty programs, your "small change" is not small. Interviewers ask about impact analysis; this is the tool that answers it.

---

## F2. SE80 vs Eclipse (ADT) — the Line You Must Know

**Simple definition:** S/4HANA development is split. Classical objects can be built in SAP GUI or Eclipse. Modern objects — CDS, RAP, ABAP Cloud — can **only** be built in Eclipse.

<p class="te"><strong>Telugu:</strong> Idi ee doc lo <strong>chala mukhyamaina point</strong>. Purathana (classical) objects — tables, reports, classes — SE80 lo cheyyochu. Kaani <strong>CDS views, RAP, ABAP Cloud</strong> — ivi <strong>Eclipse (ADT) lo matrame</strong>. Nee December portfolio app motham CDS + RAP. Ante <strong>Eclipse nerchukoka tappadu</strong>. SE80 lo aa pani jarugadu.</p>

| Object | SE80 / SE11 | Eclipse + ADT |
|---|---|---|
| Database tables, domains, data elements | ✅ | ✅ |
| Classical reports, includes | ✅ | ✅ |
| Classes, interfaces, function modules | ✅ | ✅ |
| Classical Dynpro screens | ✅ | ❌ |
| SAPscript / Smart Forms | ✅ | ❌ |
| **CDS views** | ⚠️ Display only | ✅ **Create and edit — only here** |
| **CDS annotations / metadata extensions** | ❌ | ✅ |
| **RAP behaviour definitions & implementations** | ❌ | ✅ **Only here** |
| **Service definitions & bindings** | ❌ | ✅ **Only here** |
| **ABAP Cloud development** | ❌ | ✅ **Only here** |

**What ADT is:** *ABAP Development Tools* — a set of plugins for **Eclipse**. You install Eclipse, add the ADT plugins from SAP's update site, then create an "ABAP project" pointing at your system using the same client, user and password you use in SAP GUI.

**What it feels like:** a real IDE. Code completion, inline errors, quick fixes, refactoring, project search, Git-style comparison. After SE38, it is a noticeable relief — and it will feel familiar coming from VS Code.

**Why SAP GUI is still worth all of Part A to E:**

1. **Existing code lives there.** Every project has years of classical ABAP, and reading it is most of your first year.
2. **Configuration, debugging and monitoring are GUI-only.** ST22, SM37, SU53, SM30, SE93 — none of these have an ADT equivalent.
3. **Your FLT course teaches it**, and your practice system is a GUI system.
4. **Interviews test it.** "Which transaction shows short dumps?" is a real screening question.

**The practical plan for you:**

| Now → December | Then |
|---|---|
| SAP GUI daily in the 9–11 slot — ABAP, DDIC, debugging, the fundamentals | **Install Eclipse + ADT by early October**, when the Fiori and RAP work starts |

**The honest warning, repeated because it decides your December:** if your FLT system is a classical one without CDS and RAP support, you cannot build the portfolio app on it. Ask early, and if the answer is no, set up the free **BTP ABAP Environment trial** — that is what it is for.

---

# Part G — The Data Model and SE11

## G1. The SAP Data Model in One Picture

**Simple definition:** SAP does not let a table field simply be "CHAR 10". Every field points at a **data element** (what it *means*), which points at a **domain** (what it *technically is*). Three layers where SQL has one.

<p class="te"><strong>Telugu:</strong> SQL lo oka column ki direct ga <code>VARCHAR(10)</code> ani raastam. SAP lo <strong>moodu layers</strong> untayi: <strong>Domain</strong> (technical — type, length, valid values), <strong>Data Element</strong> (meaning — field label, documentation), inka <strong>Field</strong> (table lo actual column). Modata idi ekkuva anipistundi, kaani deeni valla <strong>oke sari define chesi vandala tables lo vaadochu</strong> — label marchali ante oke chota marchali.</p>

```
   DOMAIN                    DATA ELEMENT                FIELD              TABLE
┌──────────────┐          ┌──────────────────┐       ┌───────────┐      ┌────────────┐
│ ZDOM_PRSTAT  │          │  ZDE_PR_STATUS   │       │  STATUS   │      │ ZPURCH_REQ │
│              │  used by │                  │ used  │           │  in  │            │
│ CHAR, len 1  │ ───────▶ │ Short: Status    │ ────▶ │ ZDE_PR_   │ ───▶ │ REQ_ID     │
│ Values:      │          │ Med:   PR Status │  by   │ STATUS    │      │ STATUS  ◀──│
│  N = New     │          │ Long:  Requisi-  │       │           │      │ TOTAL      │
│  A = Approved│          │        tion Sts. │       └───────────┘      └────────────┘
│  R = Rejected│          │ Documentation    │
└──────────────┘          └──────────────────┘
  TECHNICAL                   SEMANTIC                  USAGE
  "what type is it"        "what does it mean"      "where it lives"
```

| Layer | Answers | Holds |
|---|---|---|
| **Domain** | *What type is it, and which values are legal?* | Data type, length, decimals, value range, value table, conversion routine |
| **Data element** | *What does this mean to a user?* | Field labels (short/medium/long/heading), documentation (the F1 help), search help |
| **Field** | *Where is it used?* | A column in a table or structure, typed by a data element |

**Why three layers instead of one — the argument that makes it click:** define the domain `ZDOM_PRSTAT` once, and every status field in every table you ever build shares the same type, the same length and the same legal values. Change the label on the data element and **every screen in the system** that shows that field updates — because the F1 help and the field label are read from the data element, not hard-coded on the screen.

**Anchor to what you know:** the domain is a TypeScript type; the data element is that type plus i18n labels and documentation; the field is a variable declared with it. You already know why shared types beat repeating `string` everywhere — this is the same argument, applied across a system with 90,000 tables.

**A practical shortcut you will see:** a field can also use a **predefined type** (CHAR 10) directly with no data element. It works, and it is fine for a throwaway structure. **Do not do it in a real table** — you lose labels, F1 documentation and search help, and reviewers will flag it.

---

## G2. The SE11 Initial Screen — Every Option

**Simple definition:** SE11's first screen is a list of radio buttons. Each one opens a different kind of dictionary object.

<p class="te"><strong>Telugu:</strong> SE11 modati screen lo <strong>edu radio buttons</strong> untayi. Prathi okkati vere rakam object teruchutundi. Nuvvu ekkuva vaade vi <strong>Database table</strong> inka <strong>Domain / Data type</strong>.</p>

| Radio button | Opens | You will use it |
|---|---|---|
| **Database table** ★ | Transparent tables | Constantly |
| **View** | Database, projection, maintenance and help views | Occasionally — CDS replaces most of this |
| **Data type** ★ | Sub-options: **Data element**, **Structure**, **Table type** | Constantly |
| **Type Group** | A set of related types (legacy) | Rarely |
| **Domain** ★ | Technical type definitions | Often |
| **Search help** | F4 value help definitions | Sometimes |
| **Lock object** | Enqueue/dequeue for concurrent access | Sometimes |

**The three things under "Data type":**

| | What it is | Analogy |
|---|---|---|
| **Data element** | A single typed, labelled field | One typed variable |
| **Structure** | A group of fields with no database table behind it | An interface / object shape |
| **Table type** | A definition of an internal table of some row type | `Array<T>` |

**The three buttons on the initial screen:** *Display* (read-only), *Change* (edit), *Create* (new). You will spend most of your first months in **Display** — reading SAP's standard tables to understand what data exists.

**A habit to build now:** whenever you meet a new table name in code or in an F1 → Technical Information popup, open it in SE11 Display and read its fields. Ten minutes a day of this over four months is how people end up "just knowing" that `EKKO` is the purchase order header and `EKPO` its items.

---

## G3. Domains — The Technical Layer

**Simple definition:** a **domain** defines the raw type of a field — its data type, length, and optionally the exact list of values it is allowed to hold.

<p class="te"><strong>Telugu:</strong> Domain ante field yokka <strong>technical roopam</strong> — e type, entha length, enni decimals, inka <strong>e values allow chestamu</strong>. Value range pettinappudu, aa list lo lenidi enter cheyyaleru — validation code raayakundane. Idi chala shakti vantidi.</p>

**The two tabs:**

**Definition tab** — the type itself:

| Field | Means |
|---|---|
| **Data Type** | CHAR, NUMC, DEC, CURR, QUAN, DATS, TIMS, INT4, LANG, CLNT, STRING… |
| **No. of Characters** | Length |
| **Decimal Places** | For DEC, CURR, QUAN |
| **Output Length** | How wide it displays |
| **Convers. Routine** | A conversion exit — e.g. `ALPHA` pads a number with leading zeros |
| **Value Table** | A table whose entries are the legal values |

**Value Range tab** — the legal values:

| Option | Use |
|---|---|
| **Single values** | A short fixed list: `N = New`, `A = Approved`, `R = Rejected` |
| **Intervals** | A numeric range |
| **Value table** | A table of legal entries, when the list is long or maintained by users |

**Fixed values give you three things for free:** F4 help on every screen using the field, automatic input validation, and readable text instead of a bare code. No ABAP required.

**The most common ABAP data types you will meet:**

| Type | Holds | Note |
|---|---|---|
| **CHAR** | Text, fixed length | Padded with spaces |
| **NUMC** | Digits only, stored as text | Keeps leading zeros — used for document numbers |
| **STRING** | Variable-length text | No padding |
| **DATS** | Date, 8 chars `YYYYMMDD` | Always this format internally |
| **TIMS** | Time, 6 chars `HHMMSS` | |
| **DEC / CURR / QUAN** | Packed decimals | CURR needs a currency field; QUAN needs a unit field |
| **INT4** | Integer | |
| **CLNT** | Client, 3 chars | The `MANDT` field |
| **LANG** | Language key | |

**The `ALPHA` conversion routine is worth understanding early.** A NUMC(10) material number `100` is stored as `0000000100` but shown as `100`. When your SELECT returns nothing for a document number that clearly exists, the missing leading zeros are usually why. The fix is `CONVERSION_EXIT_ALPHA_INPUT` or the newer `|{ lv_num ALPHA = IN }|`.

---

## G4. Data Elements — The Meaning Layer

**Simple definition:** a **data element** wraps a domain and adds what a *human* needs — the labels shown on screens and the documentation shown by F1.

<p class="te"><strong>Telugu:</strong> Data element ante domain ki <strong>manishi ardham chesukune bhaagam</strong> kalapadam — screen meeda kanapade <strong>label</strong>, inka F1 kotte vachhe <strong>documentation</strong>. Domain "CHAR 1" ani cheptundi; data element "idi Requisition Status" ani cheptundi.</p>

**The three tabs:**

**Data Type tab** — what it is built on. Either an **elementary type** (a domain) or a **reference type**. Point it at your domain.

**Field Label tab** — four labels, and SAP picks the one that fits the space available:

| Label | Length | Where it shows |
|---|---|---|
| **Short** | 10 chars | Narrow columns |
| **Medium** | 20 chars | Standard forms |
| **Long** | 40 chars | Wide forms |
| **Heading** | 55 chars | Report column headers |

Fill in all four. Leaving them blank produces screens that show a field name instead of a label, which looks unfinished.

**Further Characteristics tab** — the search help attachment, and the *change document* flag if changes to this field should be logged.

**Documentation — the part almost nobody fills in.** Click *Documentation* and write what the field means. That text is exactly what appears when a user presses **F1** on the field. On real projects this is the difference between a system people can use and one where every field prompts a support ticket.

**Naming conventions worth adopting now:**

| Object | Pattern | Example |
|---|---|---|
| Domain | `Z<AREA>_<NAME>` | `ZPR_STATUS` |
| Data element | `ZDE_<NAME>` | `ZDE_PR_STATUS` |
| Table | `Z<AREA>_<NAME>` | `ZPURCH_REQ` |

Any consistent scheme works. Consistency is what gets noticed in a code review — not which scheme you picked.

---

## G5. Creating a Z Table, Step by Step

**Simple definition:** the full walkthrough — from SE11's initial screen to an activated, usable table. This is the exercise your course will set, and the one you should be able to do without notes by October.

<p class="te"><strong>Telugu:</strong> Idi <strong>full walkthrough</strong> — SE11 nunchi modalu, activate varaku. Ee panini nuvvu <strong>chusi kakunda</strong> cheyyagalagali October ki. Rendu chotla kotta vaallu ekkuva tappu chestaru: (1) modati field <strong>MANDT</strong> pettadam marchipovadam, (2) <strong>Technical Settings</strong> nimpakapovadam — appudu activate avvadu.</p>

**Step 1 — Create.** SE11 → *Database table* → `ZPURCH_REQ` → **Create**. Table names: `Z` or `Y` prefix, **maximum 16 characters**.

**Step 2 — Short description.** One line describing what it holds.

**Step 3 — Delivery and Maintenance tab.**

| Field | Choose | Why |
|---|---|---|
| **Delivery Class** | **A** | Application table — master and transaction data. This is your default. |
| **Data Browser / Table View Maint.** | **Display/Maintenance Allowed** | Required if you want an SM30 maintenance screen later |

The other delivery classes: **C** customizing, **L** temporary data, **G** protected customizing, **E** control table, **S** and **W** system tables. For custom application data, **A** is nearly always right.

**Step 4 — Fields tab.** The first field is always the client:

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>Dictionary: Maintain Table — ZPURCH_REQ</span><span class="wc">— □ ✕</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="" readonly><span class="gui-b g">✓</span><span class="gui-b">💾</span><span class="gui-b g">←</span><span class="gui-b">🎩</span><span class="gui-b g">⚡</span></div>
  <div class="gui-body">
    <div class="gui-tabs"><span class="gui-tab">Attributes</span><span class="gui-tab">Delivery and Maintenance</span><span class="gui-tab on">Fields</span><span class="gui-tab">Entry help/check</span><span class="gui-tab">Currency/Quantity Fields</span></div>
    <table class="gui-grid">
      <tr><th>Field</th><th>Key</th><th>Init</th><th>Data element</th><th>Type</th><th>Len</th><th>Short Description</th></tr>
      <tr><td>MANDT</td><td>☑</td><td>☑</td><td>MANDT</td><td>CLNT</td><td>3</td><td>Client</td></tr>
      <tr><td>REQ_ID</td><td>☑</td><td>☑</td><td>ZDE_PR_ID</td><td>CHAR</td><td>10</td><td>Requisition number</td></tr>
      <tr><td>REQUESTER</td><td>☐</td><td>☐</td><td>ZDE_PR_USER</td><td>CHAR</td><td>12</td><td>Requested by</td></tr>
      <tr><td>REQ_DATE</td><td>☐</td><td>☐</td><td>ZDE_PR_DATE</td><td>DATS</td><td>8</td><td>Requisition date</td></tr>
      <tr><td>TOTAL_AMT</td><td>☐</td><td>☐</td><td>ZDE_PR_AMT</td><td>CURR</td><td>15</td><td>Total value</td></tr>
      <tr><td>CURRENCY</td><td>☐</td><td>☐</td><td>WAERS</td><td>CUKY</td><td>5</td><td>Currency</td></tr>
      <tr><td>STATUS</td><td>☐</td><td>☐</td><td>ZDE_PR_STATUS</td><td>CHAR</td><td>1</td><td>Status</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>&nbsp;</span><span><span class="sf">S4H</span><span class="sf">100</span></span></div>
</div>
<figcaption>The Fields tab. <strong>MANDT</strong> is always the first key field. The 🎩 icon in the toolbar opens Technical Settings; ⚡ activates.</figcaption>
</figure>

**The rules for this tab:**

- **MANDT first, always** — key + initial, data element `MANDT`. Without it your table is client-independent and every client sees the same rows. This is the single most common beginner mistake.
- **Key fields must come first**, contiguously, before any non-key field.
- Tick **Initial Values** on key fields.
- Give each field a **data element**, not a predefined type.

**Step 5 — Currency/Quantity Fields tab.** If you used a **CURR** or **QUAN** field, this tab is **mandatory**. A currency amount is meaningless without a currency, so SAP forces you to say which field holds it:

| Field | Reference table | Reference field |
|---|---|---|
| `TOTAL_AMT` | `ZPURCH_REQ` | `CURRENCY` |

Skip this and activation fails with an error that does not obviously point here. It is the second most common beginner mistake.

**Step 6 — Technical Settings.** Click the 🎩 icon (or *Goto → Technical Settings*):

| Setting | Choose | Meaning |
|---|---|---|
| **Data Class** | `APPL0` master / `APPL1` transaction / `APPL2` customizing | Which tablespace it lives in |
| **Size Category** | 0–9 | Expected number of rows; SAP sizes the initial extent from it |
| **Buffering** | Not allowed / allowed but off / **switched on** | Whether rows are cached on the app server |

**Buffering guidance:** switch it on only for small, rarely-changed tables — configuration and lookup data. Never buffer a table that is written constantly; you get stale reads. For a transactional table like this one, leave buffering off.

**Step 7 — Enhancement Category.** *Extras → Enhancement Category* → usually **"Can be enhanced (deep)"**. Skipping it produces a warning on activation.

**Step 8 — Indexes** (optional). *Goto → Indexes* to add a secondary index if you will frequently select on non-key fields. Same trade-off as any database: faster reads, slower writes.

**Step 9 — Activate** (**Ctrl+F3**). This creates the actual database table. The status must read *Active*.

**Then check your work:** open SE16N on `ZPURCH_REQ`. An empty result list with your column headings means the table exists and is correct.

---

## G6. Views, Search Helps and Lock Objects

**Simple definition:** the remaining three SE11 object types — combining tables, providing F4 help, and preventing two users editing the same record.

<p class="te"><strong>Telugu:</strong> SE11 lo migilina moodu: <strong>View</strong> (tables kalipi chudadam), <strong>Search help</strong> (F4 kotte vachhe list), <strong>Lock object</strong> (iddaru okesari oke record marchakunda aapadam). Ivi roju vaadaru, kaani interviews lo adugutaru — muriyu ardham chesukovadam sulabham.</p>

### Views — combining tables

| View type | What it does | Still used? |
|---|---|---|
| **Database view** | An inner join across tables, defined in DDIC | Yes, but **CDS views replace it** for new work |
| **Projection view** | A subset of one table's fields | Occasionally |
| **Maintenance view** | Lets users maintain several related tables together via SM30 | Yes |
| **Help view** | Used inside a search help | Rarely built by hand |

**The important context for 2026:** for new development, **CDS views** (built in Eclipse, Part F2) have superseded classical database views. They do everything a database view does plus associations, annotations, expressions and parameters — and they are what RAP is built on. Learn classical views enough to *read* them; build CDS views for anything new.

### Search helps — the F4 popup

A **search help** defines what appears when a user presses F4 on a field.

| Kind | What it is |
|---|---|
| **Elementary** | One search path — a table or view, with selection and display fields |
| **Collective** | Several elementary search helps offered as tabs in one popup |

**How it gets attached:** to a data element (so every field using it inherits the help), to a table field, or to a screen field directly. Attaching at the **data element** level is best — define once, works everywhere.

**The simplest alternative:** if your domain has **fixed values** (G3), you get F4 help automatically with no search help needed. Use that whenever the list is short and static.

### Lock objects — preventing collisions

**The problem:** two users open the same requisition and both save. Without locking, one silently overwrites the other.

**The mechanism:** create a lock object named `EZPURCH_REQ` (lock objects start with **E**) over your table. Activating it generates two function modules automatically:

| Generated | Call it |
|---|---|
| `ENQUEUE_EZPURCH_REQ` | Before you start changing a record |
| `DEQUEUE_EZPURCH_REQ` | After you save or cancel |

| Lock mode | Meaning |
|---|---|
| **E** — Exclusive | One user only; the standard choice |
| **S** — Shared | Many readers, no writer |
| **X** — Exclusive, non-cumulative | Cannot be requested twice, even by the same program |

**Where you will meet locks in practice:** the message *"Object is locked by user X"*. Transaction **SM12** shows current locks and who holds them — including the case from Part C3 where you have locked something against yourself in another session.

**Anchor to what you know:** this is pessimistic locking, the same idea as `SELECT … FOR UPDATE` in SQL, or the version-column optimistic locking you met in the REST API notes. SAP defaults to pessimistic locking because a user may sit on an edit screen for ten minutes.

---

# Part H — Reading Data, Debugging, and Your First Week

## H1. SE16N — Reading Table Data Properly

**Simple definition:** SE16N shows you the contents of any table. It is the transaction you will open most often after SE11, and using it well is a genuine time-saver.

<p class="te"><strong>Telugu:</strong> SE16N tho e table lo aina data chudochu. SE11 tarvaata nuvvu ekkuva vaade T-code idhe. Chala mandi kevalam table peru ista, Execute kottutaru. Kaani <strong>selection fields, output fields, sorting, export</strong> — ivi telisthe pani chala vegam avutundi.</p>

<figure class="fig">
<div class="gui">
  <div class="gui-title"><span>General Table Display</span><span class="wc">— □ ✕</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nse16n" readonly><span class="gui-b g">✓</span><span class="gui-b g">←</span><span class="gui-b y">↑</span><span class="gui-b r">✕</span><span class="gui-b">⚙</span></div>
  <div class="gui-app"><span class="gui-b">⚡ Execute (F8)</span><span class="gui-b">Number of Entries</span><span class="gui-b">Output Fields</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Table</span><span class="gui-in k">ZPURCH_REQ</span></div>
    <div class="gui-row" style="margin-top:8px"><span class="gui-lbl">Requisition no.</span><span class="gui-in">PR0000001</span><span style="font-size:9px;color:#5a6772">to</span><span class="gui-in"></span><span class="gui-b">➡</span></div>
    <div class="gui-row"><span class="gui-lbl">Status</span><span class="gui-in">N</span><span style="font-size:9px;color:#5a6772">to</span><span class="gui-in"></span><span class="gui-b">➡</span></div>
    <div class="gui-row" style="margin-top:8px"><span class="gui-lbl">Maximum no. of hits</span><span class="gui-in">500</span></div>
  </div>
  <div class="gui-status"><span>&nbsp;</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span></span></div>
</div>
<figcaption>SE16N's selection screen. Each field takes a range (from–to) and the ➡ button opens multiple selection — several values, exclusions, patterns.</figcaption>
</figure>

**Things worth knowing that most people never use:**

| Feature | How | Why |
|---|---|---|
| **Multiple selection** (the ➡ button) | Click the arrow beside any field | Enter several single values, ranges, or *exclude* values |
| **Wildcards** | `*` and `+` in a text field | `PR*` finds everything starting with PR |
| **Number of Entries** | Button on the toolbar | Counts rows without fetching them — fast on huge tables |
| **Output Fields** | Button on the toolbar | Choose which columns to show; huge tables become readable |
| **Sort and filter** | ALV toolbar on the result list | Same grid controls as everywhere in SAP |
| **Export** | `List → Export → Spreadsheet` | Get the data into Excel |
| **Layouts** | Save your column selection | Reuse it tomorrow instead of rebuilding |

**Always set a maximum hit count.** The default is usually 500. Removing it on a table with fifty million rows produces a `TIME_OUT` dump and, on a shared system, an annoyed basis team.

**SE16 vs SE16N vs SE16H:**

| | Note |
|---|---|
| **SE16** | The classic Data Browser. Present on every system, including very old ones. |
| **SE16N** ★ | More flexible selection and output. **Your default.** |
| **SE16H** | S/4HANA only — adds grouping, aggregation and totals, pushed down to HANA |

**Try SE16H once this week** if your system is S/4HANA. Being able to say *"I used SE16H to aggregate in the database rather than pulling rows"* connects directly to the code-to-data principle that CDS and HANA are built on.

---

## H2. SM30 and the Table Maintenance Generator

**Simple definition:** your Z table has no user interface. The **Table Maintenance Generator** creates one automatically, and users then reach it through SM30.

<p class="te"><strong>Telugu:</strong> Nuvvu Z table kattavu — kaani andulo data pettadaniki users ki <strong>screen ledu</strong>. <strong>Table Maintenance Generator</strong> aa screen ni automatic ga tayaru chestundi. Tarvaata users <strong>SM30</strong> lo aa table peru isthe, data add/edit/delete cheyyochu. Idi oke sari cheyyali, code raayanavasaram ledu.</p>

**Generating it — from inside SE11 with your table open:**

> `Utilities → Table Maintenance Generator`

| Field | Enter | Note |
|---|---|---|
| **Authorization Group** | `&NC&` or a real group | `&NC&` means "no group" — fine for practice |
| **Function Group** | e.g. `ZNV_PR_MAINT` | Created if it does not exist |
| **Maintenance type** | **One step** (or two step) | One step = a single editable list. Start here. |
| **Overview screen** | e.g. `0001` | Any free screen number |

Then click **Create**. SAP generates the screens and the function group for you.

**Prerequisite:** the table's *Data Browser/Table View Maint.* setting (Part G5, step 3) must be **Display/Maintenance Allowed**. If it is not, the generator refuses.

**Using it:** `/nSM30` → enter `ZPURCH_REQ` → **Maintain**. You get an editable list with New Entries, Save, and Delete.

**One step vs two step:**

| Type | Screens | Use when |
|---|---|---|
| **One step** | A single overview list, editable in place | Few fields — your default |
| **Two step** | An overview list plus a detail screen per row | Many fields per record |

**SM34 — view clusters** group several related maintenance views into one guided sequence (header, then items, then texts). You will meet it on real projects; you rarely build one early on.

**Why this matters beyond the mechanics:** the December portfolio app needs a way to get test data into your tables. SM30 is the two-minute answer, and it lets you focus your effort on the CDS and RAP layers rather than on building a data-entry screen.

---

## H3. The ABAP Debugger

**Simple definition:** the tool that stops a running program at a chosen line so you can inspect every variable and step through the logic. Per your Launch Plan, this is the skill that separates you fastest — most of a consultant's job is reading running code, not writing new code.

<p class="te"><strong>Telugu:</strong> Debugger ante — program madhyalo <strong>aapi</strong>, prathi variable lo em undo chudadam, line by line munduku vellatam. Nija SAP job lo <strong>kotta code raayadam kanna, unna code lo tappu vetakadam ekkuva</strong>. Idi Chrome DevTools laage — nuvvu ade already chesavu, kevalam keys veru.</p>

**Three ways to start it:**

| Method | How | Use when |
|---|---|---|
| **`/h`** | Type `/h`, Enter, then do the action | You are inside a transaction and want to stop at the next step |
| **Session breakpoint** | In the editor, click the stop icon beside a line (or Ctrl+Shift+F12) | You know exactly which line |
| **`BREAK-POINT.`** | Write the statement in the code | Temporary; **never leave it in transported code** |

**The step controls — the four keys that are the whole tool:**

| Key | Name | Does |
|---|---|---|
| **F5** | Step into | Execute one line; go *inside* a call |
| **F6** | Execute | Execute one line; step *over* a call |
| **F7** | Return | Run to the end of the current routine and come back out |
| **F8** | Continue | Run on until the next breakpoint or the end |

**Anchor to what you know:** these are exactly Chrome DevTools' step-into, step-over, step-out and resume. Same four operations, same mental model — only the keys differ.

**The debugger's desktops (tabs across the top):**

| Tab | Shows |
|---|---|
| **Standard** | Source code plus a small variable watch list |
| **Structures** | A structure's fields expanded |
| **Tables** | **Internal table contents, row by row** — the one you will use most |
| **Objects** | Object instances and their attributes |
| **Break./Watchpoints** | Everything currently set |

**Watching a variable:** type its name into the variable column and its value appears beside it. Double-click an internal table to open it in the Tables tab and see every row.

**Watchpoints — the underused feature.** A breakpoint stops at a *line*; a **watchpoint** stops when a *variable changes value*. When a field ends up wrong and you have no idea which of two hundred lines did it, set a watchpoint on that field and run. The debugger stops exactly at the guilty statement.

**Changing values at runtime.** In change mode you can edit a variable mid-execution — useful for testing a branch you cannot otherwise reach. It requires debug-change authorization and is normally forbidden in production, for obvious reasons.

**The weekly drill, from your Launch Plan:** take code you wrote, introduce one bug on purpose, wait a day, then find it using **only** the debugger. Do this every Friday morning in your 9–11 slot. By December, *"walk me through how you would debug this"* becomes a question you look forward to.

---

## H4. Your First Week, and the Keys Worth Memorising

**Simple definition:** the closing checklist — what to do in your practice slot this week, and the shortcuts that pay for themselves fastest.

<p class="te"><strong>Telugu:</strong> Ee week nee 9–11 slot lo cheyyalsina panula list. Prathi okkati chinna pani, kaani anni kalisi neeku SAP GUI meeda <strong>manchi pattu</strong> istayi. Chivarilo unna keyboard shortcuts — avi <strong>gurthupettukunte</strong> nee vegam rettimpu avutundi.</p>

### This week's checklist

- ☐ Log in and note your **system ID and client** from the status bar
- ☐ Open `System → Status` and **write down the S/4HANA release** — you will be asked this in interviews
- ☐ Set your date format in **SU3**
- ☐ Turn on **"Show keys within dropdown lists"** (Alt+F12 → Options → Interaction Design)
- ☐ Set a **colour for this system** so you never confuse it with another
- ☐ Add ten transactions to **Favorites** (Part C2)
- ☐ Press **F1 → Technical Information** on five fields in ME23N or VA03; note the table names
- ☐ Run `SEARCH_SAP_MENU` once, to know it exists
- ☐ Open **ABAPDOCU** and run one example program
- ☐ Create `ZNV_CARRIER_LIST` in SE38 and run it (Part E4)
- ☐ Rewrite it using inline declarations and a named column list
- ☐ Cause a divide-by-zero dump, then find it in **ST22** and read all five sections
- ☐ Create your **Z package**, and put everything real in it from now on
- ☐ Ask FLT: **what release is this system, does it support CDS and RAP, and does my access continue after December?**

That last item is the most important line on the page. It determines whether your December portfolio app can be built where you are already practising, or whether you need the free BTP trial as well.

### The keyboard shortcuts that matter

| Key | Does | Where |
|---|---|---|
| **Enter** | Process the screen | Everywhere |
| **Ctrl+S** | Save | Everywhere |
| **F3** | Back | Everywhere |
| **Shift+F3** | Exit transaction | Everywhere |
| **F12** | Cancel | Everywhere |
| **Ctrl+/** | Jump to the command field | Everywhere |
| **F1** | Field help → **Technical Information** | Any field |
| **F4** | Value help | Any field |
| **F8** | Execute | Reports, selection screens |
| **Ctrl+F2** | Syntax check | Editors |
| **Ctrl+F3** | **Activate** | Editors, SE11 |
| **Ctrl+Shift+F3** | **Where-used list** | Any object |
| **Ctrl+F** | Find | Lists, code |
| **F5 / F6 / F7 / F8** | Debugger: into / over / out / continue | Debugger |
| **Alt+F12** | Customize local layout | Everywhere |

**Three to learn first, if you learn nothing else:** **Ctrl+/** (go anywhere), **F1 → Technical Information** (find the table behind any field), and **Ctrl+F3** (activate — the step everyone forgets).

### Where this fits in the bigger plan

SAP GUI is the ground floor. It is where you will spend your 9–11 slot until December, where your FLT course lives, and where you will read other people's classical ABAP for your entire first year on a project.

But remember the line from Part F2: **the modern half of your target stack is not built here.** CDS views, RAP behaviour definitions and service bindings all live in Eclipse with ADT, and your December portfolio app depends on them. SAP GUI gets you fluent in the fundamentals and employable in the interview room. Eclipse is where October onward happens.

Get fast here first. Everything else is easier afterwards.

---