# CrowdNest Product Guide & Overview

## 💡 Product Summary

CrowdNest is a modern platform that helps individuals, estates, and community groups **collect, manage, and track contributions or donations transparently.**

From departmental dues to estate levies or crowdfunding for causes, CrowdNest simplifies collective payments — replacing scattered WhatsApp confirmations and manual record-keeping with a clean, digital system built on **transparency, automation, and trust.**

> 🌐 100% web-based, optimized for desktop and mobile browsers — no separate mobile app required.
> 

---

## ⚙️ Core Features

The **core features** define what CrowdNest truly offers — the foundation of transparent and collective contribution management.

## 🩶 **1.  Collections (Contributions)**

The heart of **CrowdNest** — built for **structured, recurring, and group-based payments** that are automatically verified and transparently managed.

Perfect for **associations, cooperatives, resident groups, student bodies, and community projects** that depend on collective participation and accountability.

**Key Capabilities**

- Create and manage contribution or dues campaigns effortlessly.
- Enable instant, traceable payments through **CrowdNest-powered accounts and gateways**.
- Automatic verification for every transaction — no uploads or manual checks.
- Track compliance at a glance — view who has paid, pending contributors, and total funds collected.
- Export payment records and histories for transparency, audits, or reporting.
- Access dashboards that display live contribution insights and summaries.

## 🧩 **Participation Models**

CrowdNest supports two distinct participation flows — each designed for how real communities and causes operate.

Both models share the same foundation of **verified, transparent, and traceable payments.**

---

### 💠 **1. Collections, Dues & Levies**

This is the **core CrowdNest experience** — built for organized, recurring, or structured payments within a defined group.

It ensures that every contribution is **tied to a verified participant**, while keeping the process simple and automated.

# 🩶 **Contribution Participation Models**

CrowdNest supports three participation models to cover every type of community — open groups, controlled groups, and non-digital participants.

All three models create a `collection_participant` record and assign a **unique virtual payment account** for seamless, auto-verified payments.

---

## 🩶 **A. Open-Join (Open Group Collections)**

Best for open or semi-public groups (e.g., departmental dues, alumni contributions).

1. Contributor opens a shared collection link or scans a QR code.
2. Provides basic details — *name, phone, email*.
3. CrowdNest creates a `collection_participant` record and assigns a **unique virtual account number**.
4. Contributor pays via transfer or card.
5. Payment auto-verifies — no manual review or uploads needed.

> 💬 Zero friction. No account creation. Perfect for large or public-facing groups.
> 

---

## 🩶 **B. Invite-Join (Closed Collections)**

Best for controlled groups (e.g., estates, associations, cooperatives).

1. The **Collection Manager** adds participants (manually or via CSV).
2. Each added participant automatically receives their **unique virtual account number**.
3. CrowdNest sends a personalized invite link.
4. When the participant opens the link, their profile is activated and marked as *joined*.
5. They can pay anytime via their assigned account number — joining is optional for payment tracking.

> 📩 Invite-Join is ideal for communities where members are known and participation must be controlled.
> 

---

## 🩶 **C. Manager-Add (Assisted Enrollment)**

Designed for contributors who **can’t navigate tech**, don’t use the web, or prefer fully offline participation.

1. The **Collection Manager** adds the participant **on their behalf**, entering their name/phone/email.
2. CrowdNest immediately generates a **unique virtual account number** for that participant.
3. The manager shares that account number directly with them (SMS, paper, WhatsApp, etc.).
4. Participant pays via normal transfer.
5. CrowdNest auto-verifies the payment with no digital action needed from the participant.

> 🧾 Perfect for residential estates, older members, or anyone who simply wants “just give me the account number.”
> 

---

## **Why Three Models?**

Because real communities are mixed:

- Some people are digital-first.
- Some need controlled membership.
- Some cannot/will not use technology.

CrowdNest adapts to all three without sacrificing transparency, automation, or compliance tracking.

---

### 💛 **2. Donations & Crowdfunding (Pay-and-Go)**

This model is built for **open, one-off, or public-facing campaigns** — where people can donate without joining any group.

1. Donor clicks a campaign link shared publicly (on WhatsApp, X, or the web).
2. Sees campaign details — *title, goal, progress bar, and organizer*.
3. Enters amount and chooses whether to donate **anonymously** or **with name**.
4. Pays directly through integrated gateways (Paystack, Flutterwave, etc.).
5. The system instantly verifies via webhook, updates progress, and issues a receipt.

> ⚡ No sign-up, no friction — just transparent giving that updates the campaign in real time.
> 

---

### 🔒 **Unified Transparency Layer**

Even though the participation flows differ, **all payments share the same verification and audit logic:**

- Every transaction (whether from a registered contributor or an anonymous donor) is logged in the **unified payment ledger.**
- Verified records feed into each collection’s or campaign’s transparency dashboard.
- Optional identity reconciliation connects anonymous donations to future user profiles if matching contact data exists.

> 🌍 CrowdNest unifies both structured contributions and open donations under one transparent ecosystem — where every payment is verified, attributed, and visible.
> 

> 💬 CrowdNest eliminates fragmented confirmations and spreadsheets — every contribution is verified and visible in real time.
> 

---

### 🧩 **Use Case Example — Community Dues**

A cooperative sets up a ₦5,000 monthly contribution for its members.

1. The **Collection Manager** creates the “Monthly Contribution” campaign on CrowdNest.
2. The system automatically generates a unique CrowdNest account or payment link.
3. Members pay directly through transfer, card, or USSD — all payments go to the verified CrowdNest channel.
4. Every transaction is instantly verified, logged, and visible to the manager and contributors.

> ✅ Transparent, automated, and reliable — every payment is confirmed at the source, no receipts or follow-ups needed.
> 

---

## 🩶 **2. Reconciliation & Verification System**

CrowdNest’s reconciliation engine is fully automated — designed to make **every transaction verifiable, auditable, and trustworthy** from the moment it’s made.

All payments happen through **CrowdNest-managed accounts**, so verification occurs instantly via secure gateway integrations and bank APIs.

**How It Works**

1. Every collection is tied to a dedicated CrowdNest account or wallet channel.
2. Contributors pay directly to that account — using transfer, card, or USSD.
3. CrowdNest receives real-time confirmation from payment processors or banking APIs.
4. The system automatically links each verified payment to its contributor and campaign record.

> ⚙️ CrowdNest verifies payments at the point of entry — no manual uploads, no reconciliation lag.
> 

---

### **Core Verification Features**

- **Instant Verification:** All payments are confirmed immediately via gateway or bank webhook events.
- **Smart Reconciliation:** Automatic matching of payment data to the right collection, user, and reference.
- **Unified Ledger:** A transparent record system logs every verified payment across all modules.
- **Audit Trail:** Every transaction event (verification, refund, update) is logged to `audit_logs` for traceability.
- **Error Handling:** Failed, reversed, or partial payments are flagged with details for quick resolution.

---

### **Payment Record Structure**

Every verified transaction produces a standardized payment record containing:

- Transaction ID
- Payer ID
- Collection / Campaign ID
- Amount
- Status (Verified / Failed / Pending)
- Gateway / Bank Metadata
- Payment Method (Transfer / Card / USSD)
- Timestamp
- Reference Code

> 🧾 This single data model ensures one transparent source of truth across the entire system.
> 

---

## 🩶 **3. Payment Tracking & History**

Payment tracking is the **core transparency layer** of CrowdNest — ensuring that every transaction can be viewed, audited, and trusted across the platform.

- Contributors can view their full payment history — amounts, dates, verification statuses, and receipts.
- Collection Managers access a unified dashboard of all contributors, total funds, and real-time collection status.
- Exports are available in **PDF, CSV, or Excel** formats for transparency and record-keeping.
- Each collection displays verified totals, pending payments (if any), and time-stamped confirmations.
- All activity — verifications, refunds, and disbursements — is stored in `audit_logs` for accountability.

> 📊 Payment history isn’t just data — it’s a live transparency ledger that everyone involved can trust.
> 

## 🩶 4. **Transparency Feed**

### 💡 **Value Proposition**

Enable every contribution or campaign on CrowdNest to communicate *progress, impact, and accountability* directly within the platform.

The Transparency Feed turns static payment records into **living proof of participation** — showing contributors exactly how funds are used, with receipts, photos, and verified updates.

> 🧭 CrowdNest’s Transparency Feed reinforces the brand promise: “Verified, Visible, and Accountable.”
> 

---

### ⚙️ **Core Functions**

| Function | Description |  |
| --- | --- | --- |
| **Updates Stream** | Collection Managers can post progress, announcements, and expense breakdowns. |  |
| **Attachments & Proofs** | Upload receipts, invoices, or project photos. Each file is logged with a unique hash for verification. |  |
| **Status Labels** | Tag posts as *Update / Progress Report / Expense Record / Announcement* for quick scanning. |  |
| **Timestamps & Digital Signatures** | Every update carries system-generated metadata for audit integrity. |  |
| **Notifications** | Contributors receive in-app or WhatsApp alerts when a new update is published. |  |
| **Audit Logging** | All posts, edits, and deletions automatically recorded in `audit_logs` for traceability. |  |

---

---

## 🩶 5. **Reporting & Safety System**

Trust is the foundation of CrowdNest.

To protect contributors and maintain transparency across all collections and crowdfunds, CrowdNest includes a built-in **Reporting & Safety System** that allows users to flag suspicious or misleading activity directly from the platform.

> 🎯 Goal: Provide immediate visibility, control, and accountability for all contributions and campaigns.
> 

---

### **1. What It Does**

- Every collection and crowdfund includes a **“Report an Issue”** option.
- Users can flag issues such as:
    - Fraudulent or misleading information.
    - Missing or unverified payments.
    - Misuse of funds or impersonation.
- Reports go directly to the **CrowdNest Admin Team** for manual review.

> 💬 Contributors have a direct, visible way to raise concerns — no external forms or support channels needed.
> 

---

### **2. What Happens When a Report Is Made**

1. The user selects **“Report an Issue.”**
2. A short form collects the reason and optional description.
3. The system instantly notifies the **CrowdNest Admin Team**.
4. The collection or crowdfund is flagged internally for review.
5. If required, it is marked **Under Review** or **Temporarily Suspended** to stop further payments.

All actions are automatically recorded in `audit_logs` for traceability.

---

### **3. Admin Oversight**

The CrowdNest Admin Team can:

- Review reported items and supporting information.
- Pause or disable payments where risk is identified.
- Contact the collection manager for clarification.
- Reinstate campaigns once issues are resolved.

> 🧩 Every moderation action remains visible and logged — ensuring no silent or hidden changes.
> 

---

### **4. Transparency Indicators**

When a collection or crowdfund is under review:

- A banner appears:
    
    > ⚠️ “This campaign is currently under review by CrowdNest.”
    > 
- New payments are paused until verification completes.
- Contributors can still access their receipts and payment history.

---

### ✅ **Summary**

> The Reporting & Safety System ensures every collection and crowdfund on CrowdNest operates under a transparent, reviewable, and accountable framework — safeguarding contributors and protecting the platform’s integrity from the very first release.
> 

---

### 👥 **User Roles & Permissions**

| Role | Capabilities |
| --- | --- |
| **Collection Manager** | Create, edit, or pin updates; attach proofs; mark expenses as verified. |
| **Contributor** | View updates, download attachments, and receive notifications. *(Comments/reactions planned for Phase 2.)* |
| **CrowdNest Admin** | Monitor audit trail; ensure compliance with platform transparency policy. |

---

### 🩶 5. **Collection Ownership & Management (MVP 1)**

Every collection on CrowdNest is owned and managed by a single user — the **Collection Manager**.

Each user can create and manage multiple collections independently.

- Contributors can join or pay via invite links or direct invitations.
- Only the Collection Manager has administrative control (edit, verify, view reports).
- All collection activities are logged to `audit_logs` for transparency.
- **Independent collections support a limited number of contributors** (e.g., up to 100).

> ⚙️ Larger or recurring groups will soon be able to manage contributions collaboratively through advanced features coming in future updates
> 

### 📲 **User Flow**

1. Manager posts an update → attaches receipt/photo.
2. CrowdNest logs metadata to `audit_logs`.
3. Contributors receive notification and open the feed.
4. Progress percentage on the collection dashboard updates automatically.

> Example: “₦500,000 disbursed for community water project — receipt attached.”
> 
> 
> Contributors instantly see impact and evidence.
> 

---

### 🔒 **Integration Points**

- **Dashboard Module** – Feed embedded under each Collection/Campaign tab.
- **Notifications Module** – Pushes update alerts in real time.
- **Reconciliation System** – Links expenditure updates to verified disbursements.
- **Audit Logs** – Provides immutable event history for compliance.

---

## 🔧 Other Features

These features improve usability, communication, and accessibility — not the core value, but key to delivering a smooth user experience.

---

### **1. Notifications & Reminders**

Keep contributors and managers informed.

- Alerts for upcoming or overdue payments.
- Notifications when payments are verified or goals are met.
- Updates when campaigns or dues reach targets.

> 🕒 Supports engagement and compliance, not just collection.
> 

---

### **2. User Roles & Permissions**

Separate roles for effective management:

| Role | Description | Permissions |
| --- | --- | --- |
| **CrowdNest Admin (Internal)** | Platform-level administrator managing compliance, fraud checks, and user support. | Access to system-wide dashboards, data audit logs, and API monitoring. |
| **Collection Manager** | User who creates and manages contributions, dues, or campaigns. | Create collections, verify receipts, export reports, and send reminders. |
| **Contributor** | User who pays dues or donates to a campaign. | View collections, make payments, upload receipts, and download verification receipts. |

> Makes CrowdNest adaptable to estates, committees, and departments.
> 

---

### **3. Web-Optimized Experience**

CrowdNest is built for the web — **responsive, secure, and accessible from any browser.**

- No native mobile app required.
- Optimized for both desktop and mobile browsers.
- Emphasizes simplicity, clarity, and speed.

> 💻 Whether verifying payments or contributing, the web experience remains seamless.
> 

---

## 🚀 MVP 1 — What We’re Shipping

MVP 1 focuses on **launching a functional, transparent, and trust-driven payment ecosystem** that demonstrates CrowdNest’s core value: organized contributions and verifiable transparency.

**Included in MVP 1:**

✅ Contributions & Collections

✅ Reconciliation & Verification System (OCR-assisted)

✅ Payment Tracking & History

✅ Transparency Feed (per Collection / Campaign)

✅ Update Posts + Attachments

✅ Notifications on New Posts

✅ Audit Logging Integration

✅ Notifications & Reminders

✅ User Roles & Permissions

✅ Web-Optimized Experience

**Deferred to Post-MVP (Phase 2):**

⏩ Wallet & Balance System

⏩ Event & Milestone Tracking

⏩ Geo-Based Campaign Discovery

⏩ Transparency Dashboard

⏩ AI-Aided Matching Enhancements

⏩ Social Proof & Engagement Features

⏩ Comments & Reactions

⏩ AI-Generated Summaries (e.g. “This week: ₦240k spent on materials.”)

⏩ Public Transparency Dashboards

---

## 🎯 Target Users

- **Estate Residents & Managers** – manage dues and projects.
- **Associations & Cooperatives** – collect levies and contributions.
- **Departments & Student Groups** – manage event dues and payments.
- **Nonprofits & NGOs** – fundraise transparently.

---

## 🔒 Security & Privacy

- End-to-end encrypted transactions.
- Users control visibility (public or anonymous).
- **CrowdNest Admins** oversee system integrity and compliance.
- **Collection Managers** review and approve payments at collection level.

---

## 🤖 AI & Smart Intelligence (Phase 2 → 3)

CrowdNest will integrate **AI-driven systems** to make payment verification, reconciliation, and transparency faster and smarter — while keeping human oversight at the center.

The goal:

> “Let AI automate repetitive checks and insights, while humans maintain trust and control.”
> 

---

---

### 📊 1**. AI-Powered Insights & Reporting**

Once CrowdNest has enough transaction data, AI can:

- Identify **payment trends** and participation patterns.
- Recommend **optimal collection reminders** and timing.
- Auto-generate **collection summaries** like:
    
    > “Your estate dues are 84% complete — 15 contributors pending.”
    > 
- Detect **unusual transactions or duplicate behavior.**

> 💡 AI turns CrowdNest into a data-driven decision tool, not just a payments platform.
> 

---

### 💬 **3. AI Transparency Assistant (Future Vision)**

A conversational transparency tool that answers natural-language queries like:

> “How much has been raised so far?”
> 
> 
> “When was the last disbursement?”
> 

It would pull only verified data to maintain accuracy and trust.

> 🌍 Transparency becomes interactive — powered by verified data and AI.
> 

---

### ⚙️ **4. AI Ethics & Privacy Principles**

CrowdNest’s approach to AI will always be guided by:

1. **Transparency:** Users know when AI is involved.
2. **Human Oversight:** AI assists, never decides unilaterally.
3. **Privacy:** All AI processes respect consent and data protection boundaries.

> 🤝 AI in CrowdNest enhances trust — it never replaces it.
> 

---

## 🧩 Anonymous Donor Reconciliation (Data Matching System)

Even when users donate **anonymously**, CrowdNest stores secure metadata — such as phone number, email, or transaction ID — for verification and receipt purposes.

If that user later registers on the platform, the system runs a **background match** (non-AI database logic) to link their previous anonymous contributions with their new account privately.

**How It Works:**

1. Anonymous donation made (email or phone captured for receipt).
2. Data stored securely in the database.
3. When a new user signs up:
    - The system checks for existing records with the same email or phone.
    - If found, it prompts the user:
        
        > “We found previous donations associated with your contact. Would you like to add them to your account history?”
        > 
4. If confirmed, donations are linked silently — visible only to the user.

> 🔒 Public anonymity remains intact. Only the donor can see the connection in their account.
> 

**Why It Matters:**

- Restores ownership of past anonymous contributions.
- Enhances user experience and trust.
- Keeps privacy uncompromised — anonymous to the public, recognized privately.

---

### ✅ Summary

> CrowdNest’s intelligence layer uses AI for verification, insight, and transparency, while smart data logic ensures donor identity and payment integrity stay organized — both working together to build a transparent, trustworthy financial ecosystem.
> 

---

## 🌍 Vision Statement

> “CrowdNest envisions a world where collective participation — in communities, estates, or causes — is simple, transparent, and trustworthy.”
>