# The Vayu Fans Document Pack

### Every document from the business flow, drawn as it appears on the SAP screen, with the printed output and the exact table rows it writes — one company, one order, start to finish

> *"You have read what a sales order is. Now look at one. The screen, the printout and the table row are three views of the same thing, and seeing all three together is the moment SAP stops being abstract."*

**SAP Docs** · Companion to *The Business Behind SAP* · Same Vayu Fans data throughout · 25 Aug 2026

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
.gui-grid{width:100%;border-collapse:collapse;font-size:8.5px;font-family:Consolas,monospace}
.gui-grid th{background:#dfe5ea;border:1px solid #c2ccd4;padding:2px 5px;text-align:left;color:#33414d;font-weight:600}
.gui-grid td{border:1px solid #d8dfe4;padding:2px 5px;color:#1a2530}
.cal{display:inline-block;min-width:14px;height:14px;line-height:14px;text-align:center;background:#bb0000;color:#fff;border-radius:50%;font-size:8.5px;font-weight:700;font-family:"Segoe UI",Arial;margin:0 2px}
.form{border:1px solid #b9c2cc;border-radius:4px;background:#fff;padding:12px 14px;margin:10px 0;font-family:"Segoe UI",Arial,sans-serif;font-size:9.5px;color:#1a2530;text-align:left;box-shadow:0 1px 3px rgba(0,0,0,.12)}
.form div,.form td,.form table{text-align:left}
.form-hd{display:flex;justify-content:space-between;border-bottom:2px solid #2b5f8e;padding-bottom:6px;margin-bottom:8px}
.form-co{font-size:13px;font-weight:700;color:#2b5f8e;letter-spacing:.4px}
.form-co small{display:block;font-size:8.5px;font-weight:400;color:#5a6772;letter-spacing:0}
.form-ti{font-size:12px;font-weight:700;color:#1a2530;text-align:right !important}
.form-ti small{display:block;font-size:8.5px;font-weight:400;color:#5a6772}
.form-two{display:flex;gap:16px;margin-bottom:8px}
.form-bx{flex:1;border:1px solid #d8dfe4;border-radius:3px;padding:6px 8px;font-size:9px;line-height:1.5}
.form-bx b{display:block;font-size:8px;text-transform:uppercase;letter-spacing:.6px;color:#5a6772;margin-bottom:2px}
.form-t{width:100%;border-collapse:collapse;font-size:9px;margin:6px 0}
.form-t th{background:#eef1f4;border-bottom:1.5px solid #2b5f8e;padding:3px 6px;text-align:left;font-size:8.5px;text-transform:uppercase;letter-spacing:.4px;color:#33414d}
.form-t td{border-bottom:1px solid #e6ebef;padding:3px 6px}
.form-t td.n,.form-t th.n{text-align:right !important;font-family:Consolas,monospace}
.form-tot{margin-left:auto;width:58%;font-size:9px;border-collapse:collapse}
.form-tot td{padding:2px 6px}
.form-tot td.n{text-align:right !important;font-family:Consolas,monospace}
.form-tot tr.g td{border-top:1.5px solid #2b5f8e;font-weight:700;font-size:10px}
.form-ft{border-top:1px solid #d8dfe4;margin-top:8px;padding-top:5px;font-size:8px;color:#5a6772;display:flex;justify-content:space-between}
</style>

## Table of Contents

- [How to Read This](#how-to-read-this)
- [Part A — The Selling Documents (O2C)](#part-a-the-selling-documents-o2c)
  - [A1. Inquiry — VA11](#a1-inquiry-va11) · [A2. Quotation — VA21](#a2-quotation-va21) · [A3. Sales Order — VA01](#a3-sales-order-va01) · [A4. Delivery — VL01N](#a4-delivery-vl01n) · [A5. Post Goods Issue — VL02N](#a5-post-goods-issue-vl02n) · [A6. Invoice — VF01](#a6-invoice-vf01) · [A7. The Printed Outputs — Delivery Note and Tax Invoice](#a7-the-printed-outputs-delivery-note-and-tax-invoice)
- [Part B — The Buying Documents (P2P)](#part-b-the-buying-documents-p2p)
  - [B1. Purchase Requisition — ME51N](#b1-purchase-requisition-me51n) · [B2. Purchase Order — ME21N](#b2-purchase-order-me21n) · [B3. The Printed Purchase Order](#b3-the-printed-purchase-order) · [B4. Goods Receipt — MIGO](#b4-goods-receipt-migo)
- [Part C — Seeing Them Linked](#part-c-seeing-them-linked)
  - [C1. The Document Flow](#c1-the-document-flow) · [C2. Every Document and Its Tables](#c2-every-document-and-its-tables)

---

# How to Read This

Every document below is shown **three ways**, because that is how you will actually meet it on a project:

| View | What it is |
|---|---|
| **The SAP screen** | What you see in the GUI when you create or display it |
| **The table rows** | What SAP actually wrote to the database — the same values, seen through `SE16N` |
| **The printout** *(where one exists)* | What the customer, vendor or driver receives on paper |

**The story is one order, followed all the way.** Dealer **Balaji Electricals** asks about ceiling fans, orders 200, they get delivered and invoiced. Alongside it, Vayu buys 500 motors from **Sundaram Motors**. Same numbers as *The Business Behind SAP*, so the two documents line up.

<p class="te"><strong>Telugu:</strong> Prathi document ni <strong>moodu vidhalu ga</strong> chupistunna, endukante project lo neeku ilage kanipistundi: (1) <strong>SAP screen</strong> — GUI lo ela kanipistundo, (2) <strong>table rows</strong> — SAP nijam ga database lo emi raasindo (<code>SE16N</code> lo chusinattu), (3) <strong>printout</strong> — customer ki, vendor ki, driver ki ye kaagitam veltundo.<br/><strong>Katha okate:</strong> dealer <strong>Balaji Electricals</strong> fans gurinchi adigi, 200 order chestadu, avi delivery ayi, bill vestaru. Pakkana Vayu <strong>Sundaram Motors</strong> nunchi 500 motors konatundi. <em>The Business Behind SAP</em> lo unna <strong>ade numbers</strong> — kabatti rendu docs kalisi chadavachu.</p>

<p class="pic"><strong>Two honest notes.</strong> These are <strong>drawings</strong>, not screenshots — real SAP screenshots are copyrighted, so every screen here is redrawn to scale with the real field names and layout. And your system will differ in detail: field positions, tab names and document types depend on configuration. The <strong>field names and table names are correct everywhere</strong>; treat the pixel layout as a guide.</p>

---

# Part A — The Selling Documents (O2C)

## A1. Inquiry — VA11

**What it is:** The customer asks *"do you make a 1200mm fan, and roughly what would 200 cost?"* No commitment on either side. Many companies skip this entirely.

<div class="gui">
  <div class="gui-title"><span>Create Inquiry: Overview</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Inquiry</span><span>Edit</span><span>Goto</span><span>Extras</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nVA11" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span></div>
  <div class="gui-app"><span class="gui-b">Sales</span><span class="gui-b">Item overview</span><span class="gui-b">Item detail</span><span class="gui-b">Ordering party</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Inquiry</span><span class="gui-in k">0010000055</span><span class="gui-lbl">Net value</span><span class="gui-in">2,90,000.00 INR</span></div>
    <div class="gui-row"><span class="gui-lbl">Sold-to party</span><span class="gui-in">200145</span><span class="gui-in" style="min-width:200px">Balaji Electricals, Hyderabad</span></div>
    <div class="gui-row"><span class="gui-lbl">Ship-to party</span><span class="gui-in">200145</span><span class="gui-in" style="min-width:200px">Balaji Electricals, Hyderabad</span></div>
    <div class="gui-row"><span class="gui-lbl">Cust. Reference</span><span class="gui-in">BAL-ENQ-88</span><span class="gui-lbl">Valid to</span><span class="gui-in">30.09.2026</span></div>
    <div style="height:6px"></div>
    <table class="gui-grid">
      <tr><th>Item</th><th>Material</th><th>Description</th><th>Order qty</th><th>Un</th><th>Net price</th><th>Plnt</th></tr>
      <tr><td>10</td><td>FAN-CEIL-1200</td><td>Ceiling Fan 1200mm White</td><td>200</td><td>EA</td><td>1,450.00</td><td>1000</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>Inquiry 0010000055 has been saved</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote to the database:**

<table class="gui-grid">
<tr><th colspan="7">VBAK &mdash; Sales Document: Header Data</th></tr>
<tr><th>MANDT</th><th>VBELN</th><th>AUART</th><th>VBTYP</th><th>KUNNR</th><th>VKORG</th><th>NETWR</th></tr>
<tr><td>100</td><td>0010000055</td><td>IN</td><td>A</td><td>0000200145</td><td>1000</td><td>290000.00</td></tr>
<tr><th colspan="7">VBAP &mdash; Sales Document: Item Data</th></tr>
<tr><th>MANDT</th><th>VBELN</th><th>POSNR</th><th>MATNR</th><th>KWMENG</th><th>WERKS</th><th>NETWR</th></tr>
<tr><td>100</td><td>0010000055</td><td>000010</td><td>FAN-CEIL-1200</td><td>200</td><td>1000</td><td>290000.00</td></tr>
</table>

**The two fields to notice:** `AUART` = `IN` is the **document type** (inquiry). `VBTYP` = `A` is the **document category**, which is what `VBFA` uses to link documents later. An inquiry, a quotation and a sales order all sit in `VBAK` — only these two fields tell them apart.

<p class="te"><strong>Telugu:</strong> <strong>Inquiry</strong> ante customer "ee fan chestara, 200 ki entha avutundi?" ani <strong>adagatam</strong> — evariki commitment ledu. Chala companies deenne <strong>vadilesthaaru</strong>.<br/><strong>Chudalsina rendu fields:</strong> <code>AUART</code> = <code>IN</code> ante <strong>document type</strong> (inquiry). <code>VBTYP</code> = <code>A</code> ante <strong>document category</strong>. Inquiry, quotation, sales order — <strong>moodu kuda `VBAK` table lo ne</strong> untai; ee rendu fields matrame vaatini veru chestai.</p>

---

## A2. Quotation — VA21

**What it is:** Vayu's **formal price offer**, valid until a date. This is *our* offer to a customer — the opposite direction from a supplier quotation in P2P.

<div class="gui">
  <div class="gui-title"><span>Create Quotation: Overview</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Quotation</span><span>Edit</span><span>Goto</span><span>Extras</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nVA21" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span></div>
  <div class="gui-app"><span class="gui-b">Create with reference</span><span class="gui-b">Item overview</span><span class="gui-b">Ordering party</span></div>
  <div class="gui-body">
    <div class="gui-tabs"><span class="gui-tab on">Sales</span><span class="gui-tab">Item overview</span><span class="gui-tab">Item detail</span><span class="gui-tab">Ordering party</span><span class="gui-tab">Procurement</span><span class="gui-tab">Shipping</span></div>
    <div class="gui-row"><span class="gui-lbl">Quotation</span><span class="gui-in k">0020000088</span><span class="gui-lbl">Net value</span><span class="gui-in">2,90,000.00 INR</span></div>
    <div class="gui-row"><span class="gui-lbl">Sold-to party</span><span class="gui-in">200145</span><span class="gui-in" style="min-width:200px">Balaji Electricals, Hyderabad</span></div>
    <div class="gui-row"><span class="gui-lbl">Cust. Reference</span><span class="gui-in">BAL-ENQ-88</span><span class="gui-lbl">Doc. date</span><span class="gui-in">01.09.2026</span></div>
    <div class="gui-row"><span class="gui-lbl">Valid from</span><span class="gui-in">01.09.2026</span><span class="gui-lbl">Valid to</span><span class="gui-in k">30.09.2026</span></div>
    <div style="height:6px"></div>
    <table class="gui-grid">
      <tr><th>Item</th><th>Material</th><th>Description</th><th>Order qty</th><th>Un</th><th>Net price</th><th>Net value</th></tr>
      <tr><td>10</td><td>FAN-CEIL-1200</td><td>Ceiling Fan 1200mm White</td><td>200</td><td>EA</td><td>1,450.00</td><td>2,90,000.00</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>Quotation 0020000088 has been saved</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote:**

<table class="gui-grid">
<tr><th colspan="8">VBAK &mdash; Sales Document: Header Data</th></tr>
<tr><th>VBELN</th><th>AUART</th><th>VBTYP</th><th>KUNNR</th><th>VKORG</th><th>VTWEG</th><th>SPART</th><th>NETWR</th></tr>
<tr><td>0020000088</td><td>QT</td><td>B</td><td>0000200145</td><td>1000</td><td>10</td><td>00</td><td>290000.00</td></tr>
</table>

**`VKORG` / `VTWEG` / `SPART` together are the sales area** — sales organisation 1000, distribution channel 10 (Dealer), division 00 (Fans). Every sales document must name one, and pricing and output determination both depend on it.

<p class="pic"><strong>The button worth knowing: "Create with reference".</strong> Rather than retyping, you press it and give the inquiry number — SAP copies the customer, materials and quantities into the quotation and records the link in <code>VBFA</code>. The same button turns a quotation into a sales order. <strong>That copy-with-link is the mechanism behind the whole document chain.</strong></p>

<p class="te"><strong>Telugu:</strong> <strong>Quotation</strong> ante manam customer ki ichhe <strong>official price offer</strong>, oka date varaku valid. (Konadam lo quotation ni <strong>supplier</strong> istadu — direction addam.)<br/><code>VKORG</code>/<code>VTWEG</code>/<code>SPART</code> moodu kalipi <strong>sales area</strong> — sales org 1000, channel 10 (dealer), division 00 (fans). Prathi sales document ki idi <strong>tappanisari</strong>.<br/><strong>Mukhyamaina button — "Create with reference".</strong> Malli antha type cheyyakunda, inquiry number ichhi ee button nokkithe, SAP customer, material, quantity anni <strong>copy chesi</strong>, <code>VBFA</code> lo <strong>link kuda raastundi</strong>. Ade button tho quotation nunchi sales order kuda create avutundi. <strong>Document chain antha ee copy-with-link valla ne</strong> pani chestundi.</p>

---

## A3. Sales Order — VA01

**What it is:** Balaji accepts. **The central O2C document** — the delivery, the invoice and the accounting entry all trace back to this number.

<div class="gui">
  <div class="gui-title"><span>Create Standard Order: Overview</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Sales document</span><span>Edit</span><span>Goto</span><span>Extras</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nVA01" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span><span class="gui-b">Orders</span></div>
  <div class="gui-app"><span class="gui-b">Create with reference</span><span class="gui-b">Item overview</span><span class="gui-b">Item detail</span><span class="gui-b">Ordering party</span><span class="gui-b">Availability</span></div>
  <div class="gui-body">
    <div class="gui-tabs"><span class="gui-tab on">Sales</span><span class="gui-tab">Item overview</span><span class="gui-tab">Item detail</span><span class="gui-tab">Ordering party</span><span class="gui-tab">Procurement</span><span class="gui-tab">Shipping</span><span class="gui-tab">Reason for rejection</span></div>
    <div class="gui-row"><span class="gui-lbl">Standard Order</span><span class="gui-in k">5000000123</span><span class="gui-lbl">Net value</span><span class="gui-in">2,90,000.00 INR</span></div>
    <div class="gui-row"><span class="gui-lbl">Sold-to party</span><span class="gui-in">200145</span><span class="gui-in" style="min-width:200px">Balaji Electricals, Hyderabad</span></div>
    <div class="gui-row"><span class="gui-lbl">Ship-to party</span><span class="gui-in">200145</span><span class="gui-in" style="min-width:200px">Balaji Electricals, Hyderabad</span></div>
    <div class="gui-row"><span class="gui-lbl">Cust. Reference</span><span class="gui-in k">BAL-PO-4471</span><span class="gui-lbl">Cust. Ref. date</span><span class="gui-in">10.09.2026</span></div>
    <div class="gui-row"><span class="gui-lbl">Req. deliv. date</span><span class="gui-in">12.09.2026</span><span class="gui-lbl">Delivery plant</span><span class="gui-in">1000</span></div>
    <div style="height:6px"></div>
    <table class="gui-grid">
      <tr><th>Item</th><th>Material</th><th>Description</th><th>Order qty</th><th>Un</th><th>Confirmed</th><th>Net price</th><th>Net value</th></tr>
      <tr><td>10</td><td>FAN-CEIL-1200</td><td>Ceiling Fan 1200mm White</td><td>200</td><td>EA</td><td>200 / 12.09</td><td>1,450.00</td><td>2,90,000.00</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>Standard Order 5000000123 has been saved</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote — three tables, not one:**

<table class="gui-grid">
<tr><th colspan="8">VBAK &mdash; header</th></tr>
<tr><th>VBELN</th><th>AUART</th><th>VBTYP</th><th>KUNNR</th><th>VKORG</th><th>ERDAT</th><th>NETWR</th><th>WAERK</th></tr>
<tr><td>5000000123</td><td>OR</td><td>C</td><td>0000200145</td><td>1000</td><td>10.09.2026</td><td>290000.00</td><td>INR</td></tr>
<tr><th colspan="8">VBAP &mdash; items</th></tr>
<tr><th>VBELN</th><th>POSNR</th><th>MATNR</th><th>KWMENG</th><th>VRKME</th><th>WERKS</th><th>NETWR</th><th>PSTYV</th></tr>
<tr><td>5000000123</td><td>000010</td><td>FAN-CEIL-1200</td><td>200</td><td>EA</td><td>1000</td><td>290000.00</td><td>TAN</td></tr>
<tr><th colspan="8">VBEP &mdash; schedule lines (the confirmed date)</th></tr>
<tr><th>VBELN</th><th>POSNR</th><th>ETENR</th><th>EDATU</th><th>WMENG</th><th>BMENG</th><th colspan="2">meaning</th></tr>
<tr><td>5000000123</td><td>000010</td><td>0001</td><td>12.09.2026</td><td>200</td><td>200</td><td colspan="2">requested 200, confirmed 200</td></tr>
</table>

**Three things ran automatically when this was saved** — and you can see two of them in the screen above:

| Check | Where you see it |
|---|---|
| **Availability check (ATP)** | The `Confirmed` column: 200 on 12.09. If stock were short it would confirm a later date or a partial quantity |
| **Pricing** | `Net price` 1,450.00, derived from the price list and the dealer's discount |
| **Credit check** | Invisible when it passes. If Balaji owed too much, the status bar would say the order is **blocked** |

<p class="te"><strong>Telugu:</strong> <strong>Sales Order (`VA01`)</strong> = O2C lo <strong>gundekaya</strong>. Delivery, invoice, accounting entry — anni ee number ni reference chestai.<br/><strong>Moodu tables lo</strong> padutundi: <code>VBAK</code> (header — customer, date, motham value), <code>VBAP</code> (items — material, quantity), <code>VBEP</code> (<strong>schedule lines</strong> — eppudu deliver cheyyagalamo aa confirmed date).<br/><strong>Save cheyyagane moodu checks automatic ga</strong> jarugutai: (1) <strong>ATP</strong> — stock unda? Screen lo <code>Confirmed</code> column lo kanipistundi. (2) <strong>Pricing</strong> — price list nunchi rate. (3) <strong>Credit check</strong> — dealer ekkuva baaki unte order <strong>block</strong> avutundi.</p>

---
## A4. Delivery — VL01N

**What it is:** The warehouse's instruction: *"these 200 fans, from plant 1000, leaving through shipping point 1000, on 13 September."* Stock is now **reserved** but has not yet left.

<div class="gui">
  <div class="gui-title"><span>Create Outbound Delivery with Order Reference</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Outbound delivery</span><span>Edit</span><span>Goto</span><span>Extras</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nVL01N" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span></div>
  <div class="gui-app"><span class="gui-b">Post Goods Issue</span><span class="gui-b">Picking</span><span class="gui-b">Item overview</span></div>
  <div class="gui-body">
    <div class="gui-tabs"><span class="gui-tab on">Item overview</span><span class="gui-tab">Picking</span><span class="gui-tab">Loading</span><span class="gui-tab">Transport</span><span class="gui-tab">Status overview</span><span class="gui-tab">Goods movement data</span></div>
    <div class="gui-row"><span class="gui-lbl">Outbound deliv.</span><span class="gui-in k">0080000456</span><span class="gui-lbl">Document date</span><span class="gui-in">13.09.2026</span></div>
    <div class="gui-row"><span class="gui-lbl">Ship-to party</span><span class="gui-in">200145</span><span class="gui-in" style="min-width:200px">Balaji Electricals, Hyderabad</span></div>
    <div class="gui-row"><span class="gui-lbl">Shipping point</span><span class="gui-in">1000</span><span class="gui-lbl">Delivery type</span><span class="gui-in">LF</span></div>
    <div class="gui-row"><span class="gui-lbl">Planned GI date</span><span class="gui-in">13.09.2026</span><span class="gui-lbl">Total weight</span><span class="gui-in">960.000 KG</span></div>
    <div style="height:6px"></div>
    <table class="gui-grid">
      <tr><th>Item</th><th>Material</th><th>Deliv. qty</th><th>Un</th><th>Picked qty</th><th>Plnt</th><th>SLoc</th><th>Batch</th></tr>
      <tr><td>10</td><td>FAN-CEIL-1200</td><td>200</td><td>EA</td><td>200</td><td>1000</td><td>FG01</td><td>&mdash;</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>Outbound Delivery 0080000456 has been saved</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote:**

<table class="gui-grid">
<tr><th colspan="7">LIKP &mdash; Delivery: Header</th></tr>
<tr><th>VBELN</th><th>LFART</th><th>VSTEL</th><th>KUNNR</th><th>LFDAT</th><th>WADAT_IST</th><th>BTGEW</th></tr>
<tr><td>0080000456</td><td>LF</td><td>1000</td><td>0000200145</td><td>13.09.2026</td><td><em>(empty &mdash; not yet issued)</em></td><td>960.000</td></tr>
<tr><th colspan="7">LIPS &mdash; Delivery: Item</th></tr>
<tr><th>VBELN</th><th>POSNR</th><th>MATNR</th><th>LFIMG</th><th>WERKS</th><th>LGORT</th><th>VGBEL</th></tr>
<tr><td>0080000456</td><td>000010</td><td>FAN-CEIL-1200</td><td>200</td><td>1000</td><td>FG01</td><td>5000000123</td></tr>
</table>

**Look at `LIPS-VGBEL`** — it holds `5000000123`, the sales order this delivery came from. That single field is how the chain stays connected, and it is also what feeds `VBFA`. **`VGBEL` = *Vorgängerbeleg*, "preceding document".**

**And notice `WADAT_IST` is empty.** That is the *actual* goods-issue date. It stays blank until PGI in A5 — which is the cleanest way to check whether a delivery has actually shipped.

<p class="te"><strong>Telugu:</strong> <strong>Delivery (`VL01N`)</strong> ante warehouse ki instruction: "ee 200 fans, plant 1000 nunchi, shipping point 1000 gunda, 13th na bayataki". Stock ippudu <strong>reserve matrame</strong> ayindi — inka taggaledu.<br/><strong>Rendu fields chudu:</strong><br/>— <code>LIPS-VGBEL</code> lo <code>5000000123</code> undi — ante <strong>e sales order nunchi ee delivery vachindo</strong>. Chain kalisi undedi ee field valla ne. (<code>VGBEL</code> = German <em>Vorgangerbeleg</em> = "mundu unna document".)<br/>— <code>LIKP-WADAT_IST</code> <strong>khali ga</strong> undi — adi <strong>nijam ga samanu vellina date</strong>. PGI ayye varaku adi khali ne. Delivery nijam ga velli poyinda ledaa ani telusukovadaniki <strong>idi ne best check</strong>.</p>

---

## A5. Post Goods Issue — VL02N

**What it is:** The single most important click in O2C. **PGI means the goods have legally left the company.** Stock drops, and the cost hits the profit and loss account — in the same second, with no separate finance entry typed by anyone.

<div class="gui">
  <div class="gui-title"><span>Change Outbound Delivery 0080000456</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Outbound delivery</span><span>Edit</span><span>Goto</span><span>Extras</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nVL02N" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span></div>
  <div class="gui-app"><span class="gui-b g" style="font-weight:700">Post Goods Issue</span><span class="gui-b">Picking</span><span class="gui-b">Item overview</span><span class="gui-b">Document flow</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Outbound deliv.</span><span class="gui-in k">0080000456</span><span class="gui-lbl">Actual GI date</span><span class="gui-in k">13.09.2026</span></div>
    <div style="height:4px"></div>
    <table class="gui-grid">
      <tr><th>Item</th><th>Material</th><th>Deliv. qty</th><th>Picked</th><th>Mvt type</th><th>Plnt</th><th>SLoc</th><th>Status</th></tr>
      <tr><td>10</td><td>FAN-CEIL-1200</td><td>200</td><td>200</td><td><strong>601</strong></td><td>1000</td><td>FG01</td><td>Complete</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>Outbound Delivery 0080000456 has been saved &mdash; goods issue posted</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**PGI creates two brand-new documents that nobody typed:**

<table class="gui-grid">
<tr><th colspan="7">MATDOC &mdash; the material document (stock movement)</th></tr>
<tr><th>MBLNR</th><th>BUDAT</th><th>BWART</th><th>MATNR</th><th>MENGE</th><th>WERKS</th><th>SHKZG</th></tr>
<tr><td>4900001234</td><td>13.09.2026</td><td>601</td><td>FAN-CEIL-1200</td><td>200</td><td>1000</td><td>H (credit / minus)</td></tr>
<tr><th colspan="7">ACDOCA &mdash; the accounting document</th></tr>
<tr><th>BELNR</th><th>BUKRS</th><th>RACCT</th><th>Description</th><th>DRCRK</th><th colspan="2">Amount</th></tr>
<tr><td>4900000078</td><td>1000</td><td>500000</td><td>Cost of Goods Sold</td><td>S (debit)</td><td colspan="2">2,36,000.00</td></tr>
<tr><td>4900000078</td><td>1000</td><td>310000</td><td>Inventory &mdash; Finished Goods</td><td>H (credit)</td><td colspan="2">2,36,000.00</td></tr>
</table>

**Read that carefully, because it is the whole idea of an ERP in six rows.** One button press in a *logistics* screen just wrote a *stock* movement and a *finance* posting. The ₹2,36,000 is the **cost** of the fans (200 × ₹1,180 standard price), not the selling price — revenue does not appear until the invoice in A6.

| Before PGI | After PGI |
|---|---|
| Stock in `1000`/`FG01`: **340** | Stock: **140** |
| `LIKP-WADAT_IST`: empty | `LIKP-WADAT_IST`: **13.09.2026** |
| No accounting entry | COGS debited, inventory credited |
| The fans are Vayu's | The fans are Balaji's goods in transit |

<p class="te"><strong>Telugu:</strong> <strong>PGI (Post Goods Issue)</strong> — O2C lo <strong>ati mukhyamaina click</strong>. Ee kshanam lo samanu <strong>legal ga company nunchi bayataki vellindi</strong>.<br/><strong>Okka button nokkite rendu kotta documents</strong> puttai, evaru type cheyyakunda:<br/>— <strong>Material document</strong> (<code>MATDOC</code>), movement type <strong>601</strong> — stock 340 nunchi <strong>140</strong> ki taggindi.<br/>— <strong>Accounting document</strong> (<code>ACDOCA</code>) — <strong>COGS Dr / Inventory Cr</strong>, ₹2,36,000.<br/><strong>Jaagratha:</strong> aa ₹2,36,000 anedi fans yokka <strong>cost</strong> (200 &times; ₹1,180), <strong>ammina rate kaadu</strong>. Revenue (₹2,90,000) invoice daggara ne vastundi.<br/><strong>Idi ne ERP yokka motham idea</strong> — <strong>logistics screen</strong> lo okka click, kani <strong>stock mariyu finance</strong> rendintlo entry padindi.</p>

---

## A6. Invoice — VF01

**What it is:** The legal invoice to Balaji. Now — and only now — **revenue** is recognised and Balaji formally owes Vayu money.

<div class="gui">
  <div class="gui-title"><span>Create Billing Document</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Billing document</span><span>Edit</span><span>Goto</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nVF01" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span></div>
  <div class="gui-app"><span class="gui-b">Item detail</span><span class="gui-b">Conditions</span><span class="gui-b">Document flow</span><span class="gui-b">Accounting</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Billing doc.</span><span class="gui-in k">0090000789</span><span class="gui-lbl">Billing type</span><span class="gui-in">F2</span></div>
    <div class="gui-row"><span class="gui-lbl">Payer</span><span class="gui-in">200145</span><span class="gui-in" style="min-width:200px">Balaji Electricals, Hyderabad</span></div>
    <div class="gui-row"><span class="gui-lbl">Billing date</span><span class="gui-in">14.09.2026</span><span class="gui-lbl">Net value</span><span class="gui-in">2,90,000.00 INR</span></div>
    <div style="height:6px"></div>
    <table class="gui-grid">
      <tr><th>Item</th><th>Material</th><th>Billed qty</th><th>Un</th><th>Net price</th><th>Net value</th><th>Tax</th></tr>
      <tr><td>10</td><td>FAN-CEIL-1200</td><td>200</td><td>EA</td><td>1,450.00</td><td>2,90,000.00</td><td>52,200.00</td></tr>
    </table>
    <div style="height:5px"></div>
    <div class="gui-row"><span class="gui-lbl">Total incl. tax</span><span class="gui-in k">3,42,200.00 INR</span></div>
  </div>
  <div class="gui-status"><span>Document 0090000789 has been saved</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote:**

<table class="gui-grid">
<tr><th colspan="7">VBRK &mdash; Billing: Header</th></tr>
<tr><th>VBELN</th><th>FKART</th><th>VBTYP</th><th>KUNRG</th><th>FKDAT</th><th>NETWR</th><th>WAERK</th></tr>
<tr><td>0090000789</td><td>F2</td><td>M</td><td>0000200145</td><td>14.09.2026</td><td>290000.00</td><td>INR</td></tr>
<tr><th colspan="7">VBRP &mdash; Billing: Item</th></tr>
<tr><th>VBELN</th><th>POSNR</th><th>MATNR</th><th>FKIMG</th><th>NETWR</th><th>AUBEL</th><th>VGBEL</th></tr>
<tr><td>0090000789</td><td>000010</td><td>FAN-CEIL-1200</td><td>200</td><td>290000.00</td><td>5000000123</td><td>0080000456</td></tr>
<tr><th colspan="7">ACDOCA &mdash; the accounting document</th></tr>
<tr><th>BELNR</th><th>RACCT</th><th>Description</th><th>DRCRK</th><th colspan="3">Amount</th></tr>
<tr><td>1000000456</td><td>140000</td><td>Trade Receivables &mdash; Balaji</td><td>S (debit)</td><td colspan="3">3,42,200.00</td></tr>
<tr><td>1000000456</td><td>400000</td><td>Sales Revenue &mdash; Fans</td><td>H (credit)</td><td colspan="3">2,90,000.00</td></tr>
<tr><td>1000000456</td><td>175000</td><td>GST Output Payable</td><td>H (credit)</td><td colspan="3">52,200.00</td></tr>
</table>

**`VBRP` carries two references** — `AUBEL` points back to the sales order and `VGBEL` to the delivery. That is why the document flow in C1 can show you the whole tree from any one of them.

<p class="te"><strong>Telugu:</strong> <strong>Invoice (`VF01`)</strong> — ippudu matrame <strong>revenue</strong> (₹2,90,000) lekka loki vastundi, mariyu Balaji official ga <strong>₹3,42,200 baaki</strong> padathadu (GST 18% kalipi).<br/><strong>Accounting entry moodu lines:</strong> Customer baaki <strong>Dr ₹3,42,200</strong> / Sales revenue <strong>Cr ₹2,90,000</strong> / GST payable <strong>Cr ₹52,200</strong>.<br/><code>VBRP</code> lo <strong>rendu references</strong> unnai — <code>AUBEL</code> = sales order, <code>VGBEL</code> = delivery. Anduke e document nunchi ayina <strong>motham chain</strong> chudochu.</p>

---

## A7. The Printed Outputs — Delivery Note and Tax Invoice

**What they are:** The screens above are what *you* see. These are what the **driver** and the **customer** receive. In SAP they are produced by **output determination** — configuration decides which form prints, when, and to which printer or e-mail.

**The delivery note — travels with the truck:**

<div class="form">
  <div class="form-hd">
    <div class="form-co">VAYU FANS PVT LTD<small>Plot 42, IDA Balanagar, Hyderabad 500037 &middot; GSTIN 36AABCV1234F1Z5</small></div>
    <div class="form-ti">DELIVERY NOTE<small>No. 0080000456 &middot; Date 13.09.2026</small></div>
  </div>
  <div class="form-two">
    <div class="form-bx"><b>Ship to</b>Balaji Electricals<br/>18-2-44, Begum Bazar<br/>Hyderabad 500012<br/>Customer 200145</div>
    <div class="form-bx"><b>Despatch details</b>Sales order: 5000000123<br/>Your ref: BAL-PO-4471<br/>Shipping point: 1000<br/>Vehicle: TS09 UB 4412</div>
  </div>
  <table class="form-t">
    <tr><th>Item</th><th>Material</th><th>Description</th><th class="n">Qty</th><th>Unit</th><th class="n">Gross wt</th></tr>
    <tr><td>10</td><td>FAN-CEIL-1200</td><td>Ceiling Fan 1200mm White</td><td class="n">200</td><td>EA</td><td class="n">960.000 KG</td></tr>
  </table>
  <div class="form-ft"><span>Goods received in good condition &mdash; receiver signature ______________________</span><span>Page 1 of 1</span></div>
</div>

**Notice what is *not* on it: no prices.** A delivery note proves *what was sent*, not what it costs. The driver and the receiving storeman have no business seeing the commercial terms. That separation is deliberate, and it is configured, not coded.

**The tax invoice — goes to the customer's accounts department:**

<div class="form">
  <div class="form-hd">
    <div class="form-co">VAYU FANS PVT LTD<small>Plot 42, IDA Balanagar, Hyderabad 500037 &middot; GSTIN 36AABCV1234F1Z5</small></div>
    <div class="form-ti">TAX INVOICE<small>No. 0090000789 &middot; Date 14.09.2026</small></div>
  </div>
  <div class="form-two">
    <div class="form-bx"><b>Bill to</b>Balaji Electricals<br/>18-2-44, Begum Bazar, Hyderabad 500012<br/>GSTIN 36AAFCB9876K1Z3 &middot; Customer 200145</div>
    <div class="form-bx"><b>References</b>Sales order: 5000000123<br/>Delivery: 0080000456<br/>Your PO: BAL-PO-4471<br/>Payment terms: 30 days net</div>
  </div>
  <table class="form-t">
    <tr><th>Item</th><th>Description</th><th>HSN</th><th class="n">Qty</th><th class="n">Rate</th><th class="n">Amount</th></tr>
    <tr><td>10</td><td>Ceiling Fan 1200mm White (FAN-CEIL-1200)</td><td>8414</td><td class="n">200 EA</td><td class="n">1,450.00</td><td class="n">2,90,000.00</td></tr>
  </table>
  <table class="form-tot">
    <tr><td>Taxable value</td><td class="n">2,90,000.00</td></tr>
    <tr><td>CGST 9%</td><td class="n">26,100.00</td></tr>
    <tr><td>SGST 9%</td><td class="n">26,100.00</td></tr>
    <tr class="g"><td>Total payable</td><td class="n">INR 3,42,200.00</td></tr>
  </table>
  <div class="form-ft"><span>Rupees three lakh forty-two thousand two hundred only &middot; E&amp;OE</span><span>For Vayu Fans Pvt Ltd</span></div>
</div>

**How these get built, and where you come in:**

| | Standard SAP | Vayu wants its own layout |
|---|---|---|
| The form | A delivered Smart Form / Adobe Form | **You build one** — a Smart Form (`SMARTFORMS`) or Adobe Form (`SFP`) |
| When it prints | **Output determination** config — `NACE` | Configured, not coded |
| Where it goes | Printer, e-mail, EDI | Configured |
| The data | Read from `LIKP`/`LIPS` or `VBRK`/`VBRP` | You write the driver program that reads it |

<p class="pic"><strong>This is the "F" in RICEF, made concrete.</strong> Almost every SAP customer wants its own invoice and delivery-note layout with its own logo, GST wording and terms. That is a <strong>Forms</strong> task, it lands on an ABAP developer, and it is one of the most common first assignments a fresher gets.</p>

<p class="te"><strong>Telugu:</strong> Paina unna screens <strong>neeku</strong> kanipistai. Ee rendu <strong>driver ki mariyu customer ki</strong> velle kaagitalu. Vaatini SAP <strong>output determination</strong> (config, <code>NACE</code>) dwara print chestundi.<br/><strong>Delivery Note lo price undadu</strong> — enduku ante adi "emi pampamo" ani matrame cheputundi. Driver ki, godown lo teesukune vaadiki <strong>rate telisi avasaram ledu</strong>. Idi kaavalane chesina separation, mariyu adi <strong>config</strong> lo ne.<br/><strong>Tax Invoice</strong> lo GST, HSN code, payment terms anni untai — adi customer accounts department ki veltundi.<br/><strong>Ikkade nee pani vastundi:</strong> deadaapu prathi company tana sonta layout kavali antundi — sonta logo, sonta GST wording. Adi <strong>Smart Form</strong> leda <strong>Adobe Form</strong> — RICEF lo "<strong>F</strong>". Fresher ki vachhe <strong>ati common modati task</strong> idi.</p>

---
# Part B — The Buying Documents (P2P)

## B1. Purchase Requisition — ME51N

**What it is:** An **internal** request — "we need 500 motors by 15 September". The supplier never sees it. Most requisitions on a real system are not typed by anyone: **MRP creates them automatically** when it works out what is short.

<div class="gui">
  <div class="gui-title"><span>Create Purchase Requisition</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Requisition</span><span>Edit</span><span>Goto</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nME51N" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span></div>
  <div class="gui-app"><span class="gui-b">Document overview on</span><span class="gui-b">Personal setting</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Purchase Req.</span><span class="gui-in k">0010000234</span><span class="gui-lbl">Doc. type</span><span class="gui-in">NB &mdash; Standard</span></div>
    <div style="height:5px"></div>
    <table class="gui-grid">
      <tr><th>Item</th><th>Material</th><th>Short text</th><th>Quantity</th><th>Un</th><th>Deliv. date</th><th>Plnt</th><th>PGr</th></tr>
      <tr><td>10</td><td>MOTOR-48W</td><td>Fan Motor 48W Single Phase</td><td>500</td><td>EA</td><td>15.09.2026</td><td>1000</td><td>P01</td></tr>
    </table>
    <div style="height:5px"></div>
    <div class="gui-tabs"><span class="gui-tab on">Item detail</span><span class="gui-tab">Valuation</span><span class="gui-tab">Source of supply</span><span class="gui-tab">Texts</span></div>
    <div class="gui-row"><span class="gui-lbl">Storage location</span><span class="gui-in">RM01</span><span class="gui-lbl">Requisitioner</span><span class="gui-in">PROD-PLAN</span></div>
    <div class="gui-row"><span class="gui-lbl">Created by</span><span class="gui-in">MRP run 08.09.2026</span><span class="gui-lbl">Val. price</span><span class="gui-in">840.00 INR</span></div>
  </div>
  <div class="gui-status"><span>Purchase requisition number 0010000234 created</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote — one table only:**

<table class="gui-grid">
<tr><th colspan="8">EBAN &mdash; Purchase Requisition (item level, no separate header table)</th></tr>
<tr><th>BANFN</th><th>BNFPO</th><th>MATNR</th><th>MENGE</th><th>MEINS</th><th>LFDAT</th><th>WERKS</th><th>EKGRP</th></tr>
<tr><td>0010000234</td><td>00010</td><td>MOTOR-48W</td><td>500</td><td>EA</td><td>15.09.2026</td><td>1000</td><td>P01</td></tr>
</table>

<p class="pic"><strong>The exception worth remembering.</strong> Every other document in this pack has a header table <em>and</em> an item table. The purchase requisition has <strong>only <code>EBAN</code></strong> — it is item-level from the start, because each line can have its own delivery date, plant and buyer. When someone asks "what is the header table for a PR?", the correct answer is "there isn't one".</p>

<p class="te"><strong>Telugu:</strong> <strong>Purchase Requisition</strong> ante <strong>lopali</strong> request — "15th ki 500 motors kavali". Supplier ki idi <strong>velladu</strong>. Nijamaina system lo veetini deadaapu <strong>evaru type cheyyaru</strong> — <strong>MRP run</strong> emi takkuva undo lekkinchi <strong>automatic ga</strong> create chestundi.<br/><strong>Gurthu pettuko:</strong> ee pack lo migilina prathi document ki <strong>header table + item table</strong> undi. PR ki matram <strong>okate table — <code>EBAN</code></strong>. Header table <strong>ledu</strong>, endukante prathi line ki sonta date, plant, buyer undochu. Interview lo "PR header table enti?" ani adigite, sariyaina jawab "<strong>ledu</strong>".</p>

---

## B2. Purchase Order — ME21N

**What it is:** The **legally binding order** sent to Sundaram Motors. The central P2P document — the goods receipt and the invoice both check themselves against it.

<div class="gui">
  <div class="gui-title"><span>Create Purchase Order</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Purchase order</span><span>Edit</span><span>Goto</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nME21N" readonly><span class="gui-b g">&check;</span><span class="gui-b">Save</span><span class="gui-b g">&larr;</span><span class="gui-b y">&uarr;</span><span class="gui-b r">&times;</span><span class="gui-b">Print preview</span></div>
  <div class="gui-app"><span class="gui-b">Document overview on</span><span class="gui-b">Messages</span><span class="gui-b">Release strategy</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Standard PO</span><span class="gui-in k">4500000456</span><span class="gui-lbl">Vendor</span><span class="gui-in">0000100234</span><span class="gui-in" style="min-width:170px">Sundaram Motors Ltd</span></div>
    <div class="gui-row"><span class="gui-lbl">Doc. date</span><span class="gui-in">08.09.2026</span><span class="gui-lbl">Purch. Org / Grp</span><span class="gui-in">1000 / P01</span></div>
    <div class="gui-row"><span class="gui-lbl">Currency</span><span class="gui-in">INR</span><span class="gui-lbl">Payment terms</span><span class="gui-in">Z030 &mdash; 30 days net</span></div>
    <div style="height:6px"></div>
    <table class="gui-grid">
      <tr><th>Itm</th><th>Material</th><th>Short text</th><th>PO qty</th><th>Un</th><th>Deliv. date</th><th>Net price</th><th>Net value</th><th>Plnt</th></tr>
      <tr><td>10</td><td>MOTOR-48W</td><td>Fan Motor 48W Single Phase</td><td>500</td><td>EA</td><td>15.09.2026</td><td>840.00</td><td>4,20,000.00</td><td>1000</td></tr>
    </table>
    <div style="height:5px"></div>
    <div class="gui-tabs"><span class="gui-tab on">Item detail</span><span class="gui-tab">Delivery schedule</span><span class="gui-tab">Conditions</span><span class="gui-tab">Purchase order history</span><span class="gui-tab">Texts</span></div>
    <div class="gui-row"><span class="gui-lbl">Storage location</span><span class="gui-in">RM01</span><span class="gui-lbl">Created from PR</span><span class="gui-in k">0010000234 / 00010</span></div>
  </div>
  <div class="gui-status"><span>Standard PO created under the number 4500000456</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote:**

<table class="gui-grid">
<tr><th colspan="7">EKKO &mdash; Purchasing Document: Header</th></tr>
<tr><th>EBELN</th><th>BSART</th><th>LIFNR</th><th>EKORG</th><th>EKGRP</th><th>WAERS</th><th>BEDAT</th></tr>
<tr><td>4500000456</td><td>NB</td><td>0000100234</td><td>1000</td><td>P01</td><td>INR</td><td>08.09.2026</td></tr>
<tr><th colspan="7">EKPO &mdash; Purchasing Document: Item</th></tr>
<tr><th>EBELN</th><th>EBELP</th><th>MATNR</th><th>MENGE</th><th>NETPR</th><th>WERKS</th><th>LGORT</th></tr>
<tr><td>4500000456</td><td>00010</td><td>MOTOR-48W</td><td>500</td><td>840.00</td><td>1000</td><td>RM01</td></tr>
<tr><th colspan="7">EKET &mdash; Delivery schedule lines</th></tr>
<tr><th>EBELN</th><th>EBELP</th><th>ETENR</th><th>EINDT</th><th>MENGE</th><th colspan="2">meaning</th></tr>
<tr><td>4500000456</td><td>00010</td><td>0001</td><td>15.09.2026</td><td>500</td><td colspan="2">all 500 due on one date</td></tr>
</table>

**The tab to remember is `Purchase order history`.** It is empty right now. After the goods receipt and the invoice it fills up from table `EKBE`, and that history is exactly what the three-way match reads.

<p class="te"><strong>Telugu:</strong> <strong>Purchase Order (`ME21N`)</strong> = supplier ki velle <strong>official, legal order</strong>. P2P lo <strong>madhya bindhuvu</strong> — goods receipt, invoice rendu deenne chusi sari chusukuntai.<br/><strong>Moodu tables:</strong> <code>EKKO</code> (header — vendor, date, currency), <code>EKPO</code> (items — material, quantity, rate), <code>EKET</code> (<strong>schedule lines</strong> — eppudu deliver cheyyalo).<br/><strong>Mukhyamaina tab: "Purchase order history".</strong> Ippudu adi <strong>khali</strong>. Goods receipt, invoice vachaka adi <code>EKBE</code> table nunchi nindutundi — <strong>three-way match chadivedi ade history ne</strong>.</p>

---

## B3. The Printed Purchase Order

**What it is:** What Sundaram Motors actually receives — by post, e-mail or EDI. Same data as the screen above, laid out as a commercial document.

<div class="form">
  <div class="form-hd">
    <div class="form-co">VAYU FANS PVT LTD<small>Plot 42, IDA Balanagar, Hyderabad 500037 &middot; GSTIN 36AABCV1234F1Z5</small></div>
    <div class="form-ti">PURCHASE ORDER<small>No. 4500000456 &middot; Date 08.09.2026</small></div>
  </div>
  <div class="form-two">
    <div class="form-bx"><b>Vendor</b>Sundaram Motors Ltd<br/>Plot 8, Ambattur Industrial Estate<br/>Chennai 600058<br/>Vendor code 100234 &middot; GSTIN 33AAKCS4321M1Z8</div>
    <div class="form-bx"><b>Deliver to</b>Vayu Fans Pvt Ltd &mdash; Plant 1000<br/>Gate 2, Raw Material Stores (RM01)<br/>IDA Balanagar, Hyderabad 500037<br/>Buyer: P01 &middot; Terms: 30 days net</div>
  </div>
  <table class="form-t">
    <tr><th>Item</th><th>Material</th><th>Description</th><th class="n">Qty</th><th class="n">Rate</th><th class="n">Value</th><th>Delivery by</th></tr>
    <tr><td>10</td><td>MOTOR-48W</td><td>Fan Motor 48W Single Phase</td><td class="n">500 EA</td><td class="n">840.00</td><td class="n">4,20,000.00</td><td>15.09.2026</td></tr>
  </table>
  <table class="form-tot">
    <tr><td>Basic value</td><td class="n">4,20,000.00</td></tr>
    <tr><td>IGST 18%</td><td class="n">75,600.00</td></tr>
    <tr class="g"><td>Order value</td><td class="n">INR 4,95,600.00</td></tr>
  </table>
  <div class="form-ft"><span>Quote our PO number on all invoices and delivery documents &middot; Subject to Hyderabad jurisdiction</span><span>For Vayu Fans Pvt Ltd</span></div>
</div>

**One line on that form does real work:** *"Quote our PO number on all invoices."* When Sundaram's invoice arrives with `4500000456` on it, the accounts clerk can enter it in `MIRO` against the PO and the three-way match runs by itself. Without the reference, somebody has to hunt for the right order by hand.

<p class="te"><strong>Telugu:</strong> Idi <strong>Sundaram Motors ki nijam ga velle kaagitam</strong> — post, email leda EDI dwara. Screen lo unna <strong>ade data</strong>, kani commercial document laaga.<br/><strong>Andulo okka line nijam ga pani chestundi:</strong> "maa PO number ni anni invoices meeda raayandi". Supplier invoice meeda <code>4500000456</code> unte, accounts vaadu <code>MIRO</code> lo PO ki against enter cheyyagaladu, mariyu <strong>three-way match automatic ga</strong> nadustundi. Aa number lekapothe, sariyaina order ni <strong>chetitho vetakali</strong>.</p>

---

## B4. Goods Receipt — MIGO

**What it is:** The truck is at the gate with 500 motors. Stores records it against the PO. **Stock goes up, and finance posts by itself.**

<div class="gui">
  <div class="gui-title"><span>Goods Receipt Purchase Order 4500000456</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Goods receipt</span><span>Edit</span><span>Goto</span><span>Settings</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nMIGO" readonly><span class="gui-b g">&check;</span><span class="gui-b">Check</span><span class="gui-b">Post</span><span class="gui-b g">&larr;</span><span class="gui-b r">&times;</span></div>
  <div class="gui-body">
    <div class="gui-row"><span class="gui-lbl">Action</span><span class="gui-in">A01 Goods Receipt</span><span class="gui-lbl">Reference</span><span class="gui-in">R01 Purchase Order</span><span class="gui-in k">4500000456</span></div>
    <div class="gui-row"><span class="gui-lbl">Movement type</span><span class="gui-in k">101</span><span class="gui-lbl">Posting date</span><span class="gui-in">15.09.2026</span><span class="gui-lbl">Delivery note</span><span class="gui-in">SM-DN-9921</span></div>
    <div style="height:6px"></div>
    <table class="gui-grid">
      <tr><th>Line</th><th>Material</th><th>Qty in UnE</th><th>Un</th><th>SLoc</th><th>Plnt</th><th>Stock type</th><th>OK</th></tr>
      <tr><td>1</td><td>MOTOR-48W</td><td>500</td><td>EA</td><td>RM01</td><td>1000</td><td>Unrestricted</td><td>&check;</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>Material document 5000012345 posted</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What it wrote — three separate things:**

<table class="gui-grid">
<tr><th colspan="7">MATDOC &mdash; the material document</th></tr>
<tr><th>MBLNR</th><th>BUDAT</th><th>BWART</th><th>MATNR</th><th>MENGE</th><th>LGORT</th><th>EBELN</th></tr>
<tr><td>5000012345</td><td>15.09.2026</td><td>101</td><td>MOTOR-48W</td><td>500</td><td>RM01</td><td>4500000456</td></tr>
<tr><th colspan="7">EKBE &mdash; PO history (this is what the three-way match reads)</th></tr>
<tr><th>EBELN</th><th>EBELP</th><th>VGABE</th><th>BELNR</th><th>MENGE</th><th colspan="2">meaning</th></tr>
<tr><td>4500000456</td><td>00010</td><td>1 (goods receipt)</td><td>5000012345</td><td>500</td><td colspan="2">500 of the 500 ordered have arrived</td></tr>
<tr><th colspan="7">ACDOCA &mdash; the accounting document</th></tr>
<tr><th>BELNR</th><th>RACCT</th><th>Description</th><th>DRCRK</th><th colspan="3">Amount</th></tr>
<tr><td>5000000091</td><td>300000</td><td>Inventory &mdash; Raw Material</td><td>S (debit)</td><td colspan="3">4,20,000.00</td></tr>
<tr><td>5000000091</td><td>191100</td><td>GR/IR Clearing Account</td><td>H (credit)</td><td colspan="3">4,20,000.00</td></tr>
</table>

**The GR/IR account is worth understanding, because beginners always ask about it.** At this moment Vayu **has the motors** but **has not received a bill**. So the debt cannot yet be booked against Sundaram Motors by name. It sits in a holding account — **GR/IR (Goods Receipt / Invoice Receipt)** — until the invoice arrives in `MIRO` and moves it to the vendor. If a GR/IR balance is still sitting there months later, it means goods arrived and no invoice ever came, or the reverse. **Clearing GR/IR is a real month-end job.**

| Step | Stock | Accounting |
|---|---|---|
| PO created | no change | **nothing** — a PO is only a commitment |
| **Goods receipt** | **+500 in RM01** | Inventory Dr / **GR/IR Cr** |
| Invoice verified (`MIRO`) | no change | **GR/IR Dr** / Vendor Cr |
| Payment (`F110`) | no change | Vendor Dr / Bank Cr |

<p class="te"><strong>Telugu:</strong> <strong>Goods Receipt (`MIGO`, movement type 101)</strong> — truck vachindi, stores 500 motors ni PO ki against record chestundi. <strong>Stock penchutundi, mariyu FI entry automatic ga</strong> padutundi.<br/><strong>Moodu vishayalu</strong> raastundi: (1) <strong>Material document</strong> (<code>MATDOC</code>) — stock movement. (2) <strong><code>EKBE</code> PO history</strong> — "500 lo 500 vachai" ani. <strong>Three-way match chadivedi idi ne.</strong> (3) <strong>Accounting document</strong>.<br/><strong>GR/IR account ante emiti?</strong> Ee kshanam lo Vayu daggara <strong>motors unnai kani bill raledu</strong>. Kabatti "Sundaram Motors ki itanta baaki" ani inka raayalemu. Anduke aa dabbu <strong>GR/IR ane madhyavarthi account</strong> lo aagi untundi. Invoice <code>MIRO</code> lo vachaka, adi vendor account loki veltundi. <strong>Nelalu gadichina GR/IR lo dabbu aagi unte</strong> — samanu vachindi kani bill raledu (leda addam). Daanni clear cheyyadam <strong>month-end lo nijamaina pani</strong>.</p>

---

# Part C — Seeing Them Linked

## C1. The Document Flow

**What it is:** Every document you have just seen stored a reference to the one before it. SAP keeps those links in table **`VBFA`**, and shows them as a tree from any document in the chain.

<div class="gui">
  <div class="gui-title"><span>Document Flow</span><span class="wc">&mdash; &square; &times;</span></div>
  <div class="gui-menu"><span>Document flow</span><span>Edit</span><span>Goto</span><span>Environment</span><span>System</span><span>Help</span></div>
  <div class="gui-tb"><input class="gui-cmd" value="/nVA03" readonly><span class="gui-b g">&check;</span><span class="gui-b">Display document</span><span class="gui-b">Status overview</span><span class="gui-b g">&larr;</span></div>
  <div class="gui-body">
    <table class="gui-grid">
      <tr><th>Document</th><th>Number</th><th>On</th><th>Status</th></tr>
      <tr><td>Inquiry</td><td>0010000055</td><td>01.09.2026</td><td>Completed</td></tr>
      <tr><td>&nbsp;&nbsp;&#9492;&#9472; Quotation</td><td>0020000088</td><td>01.09.2026</td><td>Completed</td></tr>
      <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&#9492;&#9472; Standard Order</td><td>5000000123</td><td>10.09.2026</td><td>Completed</td></tr>
      <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9500;&#9472; Outbound Delivery</td><td>0080000456</td><td>13.09.2026</td><td>Completed</td></tr>
      <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9474;&nbsp;&nbsp;&#9492;&#9472; GD goods issue:delvy</td><td>4900001234</td><td>13.09.2026</td><td>Completed</td></tr>
      <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9492;&#9472; Invoice</td><td>0090000789</td><td>14.09.2026</td><td>Completed</td></tr>
      <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9492;&#9472; Accounting document</td><td>1000000456</td><td>14.09.2026</td><td>Cleared</td></tr>
    </table>
  </div>
  <div class="gui-status"><span>Double-click any line to jump into that document</span><span><span class="sf">S4H</span><span class="sf">100</span><span class="sf">NIKHIL</span><span class="sf">OVR</span></span></div>
</div>

**What that screen is really telling you.** Seven documents. Five departments — sales, warehouse, stores, billing, accounts. Fourteen days. **Nobody re-typed anything**, and every document knows its parents and its children. That is the thing a company is actually buying when it buys an ERP.

**The rows behind it:**

<table class="gui-grid">
<tr><th colspan="6">VBFA &mdash; Sales Document Flow</th></tr>
<tr><th>VBELV (preceding)</th><th>VBELN (subsequent)</th><th>POSNV</th><th>POSNN</th><th>VBTYP_N</th><th>meaning</th></tr>
<tr><td>0010000055</td><td>0020000088</td><td>000010</td><td>000010</td><td>B</td><td>inquiry &rarr; quotation</td></tr>
<tr><td>0020000088</td><td>5000000123</td><td>000010</td><td>000010</td><td>C</td><td>quotation &rarr; order</td></tr>
<tr><td>5000000123</td><td>0080000456</td><td>000010</td><td>000010</td><td>J</td><td>order &rarr; delivery</td></tr>
<tr><td>0080000456</td><td>4900001234</td><td>000010</td><td>000001</td><td>R</td><td>delivery &rarr; goods movement</td></tr>
<tr><td>0080000456</td><td>0090000789</td><td>000010</td><td>000010</td><td>M</td><td>delivery &rarr; invoice</td></tr>
</table>

<p class="pic"><strong>The interview question this answers completely.</strong> "How would you find out whether a sales order has been invoiced?" &mdash; <em>"Open VA03 and check the document flow, which reads VBFA. In code I would select from VBFA where VBELV is the order number and VBTYP_N is 'M'."</em> You can now say that and mean it.</p>

<p class="te"><strong>Telugu:</strong> Nuvvu ippudu chusina <strong>prathi document</strong> daani mundu dani reference ni daachukundi. SAP aa links anni <code>VBFA</code> table lo unchutundi, mariyu chain lo <strong>e document nunchi ayina</strong> motham tree ni chupistundi.<br/><strong>Aa screen nijam ga cheppedi idi:</strong> <strong>Edu documents</strong>, <strong>aidu departments</strong>, <strong>padnalugu rojulu</strong> — <strong>evaru dennini malli type cheyyaledu</strong>, mariyu prathi document ki tana <strong>talli-pillalu</strong> telusu. Company ERP koneppudu nijam ga konedi <strong>ee okka screen ne</strong>.</p>

---

## C2. Every Document and Its Tables

**The whole pack on one page.** Pin this beside your practice system.

| # | Document | T-code | Header table | Item table | Key field | Type field |
|---|---|---|---|---|---|---|
| 1 | Inquiry | `VA11` | `VBAK` | `VBAP` | `VBELN` | `AUART` = `IN`, `VBTYP` = `A` |
| 2 | Quotation (sales) | `VA21` | `VBAK` | `VBAP` | `VBELN` | `AUART` = `QT`, `VBTYP` = `B` |
| 3 | **Sales order** | `VA01` | `VBAK` | `VBAP` + `VBEP` | `VBELN` | `AUART` = `OR`, `VBTYP` = `C` |
| 4 | Delivery | `VL01N` | `LIKP` | `LIPS` | `VBELN` | `LFART` = `LF`, `VBTYP` = `J` |
| 5 | Goods issue (PGI) | in `VL02N` | `MATDOC` | `MATDOC` | `MBLNR` | `BWART` = `601` |
| 6 | Invoice | `VF01` | `VBRK` | `VBRP` | `VBELN` | `FKART` = `F2`, `VBTYP` = `M` |
| 7 | Purchase requisition | `ME51N` | **none** | `EBAN` | `BANFN` | `BSART` = `NB` |
| 8 | **Purchase order** | `ME21N` | `EKKO` | `EKPO` + `EKET` | `EBELN` | `BSART` = `NB` |
| 9 | Goods receipt | `MIGO` | `MATDOC` | `MATDOC` | `MBLNR` | `BWART` = `101` |
| 10 | PO history | &mdash; | &mdash; | `EKBE` | `EBELN` | `VGABE` 1 = GR, 2 = invoice |
| 11 | Vendor invoice | `MIRO` | `RBKP` | `RSEG` | `BELNR` | &mdash; |
| 12 | Accounting document | `FB03` | `BKPF` | `ACDOCA` | `BELNR` | &mdash; |
| 13 | Document links | &mdash; | &mdash; | `VBFA` | `VBELV`/`VBELN` | `VBTYP_N` |

**Three patterns to take away, and they cover most of SAP:**

| Pattern | What it means |
|---|---|
| **Header + item** | Almost every document splits into one header row and many item rows, joined by the document number. `K` at the end of a table name usually means *Kopf* (header), `P` means *Position* (item) |
| **A type field decides behaviour** | `AUART`, `LFART`, `FKART`, `BSART`, `BWART` — one small code that tells SAP which rules to apply. This is configuration, not code |
| **A reference field links the chain** | `VGBEL` on a delivery, `AUBEL` on a billing item, `EBELN` on a material document — plus `VBFA` holding the links explicitly |

<p class="te"><strong>Telugu:</strong> <strong>Ee page ni print chesi practice system pakkana pettuko.</strong><br/><strong>Moodu patterns</strong> gurthu unchukunte SAP lo chala varaku ardham avutundi:<br/>1. <strong>Header + Item</strong> — deadaapu prathi document okka header row + chala item rows. Table peru chivara <code>K</code> unte header, <code>P</code> unte item.<br/>2. <strong>Type field</strong> — <code>AUART</code>, <code>LFART</code>, <code>FKART</code>, <code>BSART</code>, <code>BWART</code>. Ee chinna code <strong>ye rules apply avvalo</strong> cheputundi. Idi <strong>config, code kaadu</strong>.<br/>3. <strong>Reference field</strong> — <code>VGBEL</code>, <code>AUBEL</code>, <code>EBELN</code> mariyu <code>VBFA</code> — ivi <strong>chain ni kalipe</strong> fields.</p>

<p class="pic"><strong>What to do with this pack this week.</strong> Open <code>SE16N</code>, type <code>VBAK</code>, and find any sales order in your practice system. Then look up its items in <code>VBAP</code>, its delivery in <code>LIKP</code> using <code>VBFA</code>, and its invoice in <code>VBRK</code>. You will have walked a real document chain by hand, in the database, in about fifteen minutes &mdash; and after that, nothing your tutor opens will look unfamiliar.</p>

---

*Companion to **The Business Behind SAP** (the story) and **T-Codes & Tables** (the reference). This one is the pictures.*
