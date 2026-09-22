Product Name: Vantage
Product Description: Vantage is a unified workflow automation platform designed to capture incoming customer submissions—such as sales leads, support tickets, and job applications—and automatically route, validate, and synchronize them into business tools (CRMs, Slack, email, databases) in real time, eliminating manual data entry and missed follow-ups.
FORM_UUID: <YOUR_FORM_UUID>

Build a production-grade, highly polished B2B SaaS website for the product and solution described above. The interface must look like a venture-backed, market-tested web application with realistic interactive previews, believable metrics, and credible enterprise proof.
Design Direction:
- Palette:
   - Page Background: Warm off-white (#FCFBF9) with soft neutral stone sections (#F5F5F4) and pure white cards (#FFFFFF)
   - Text & Headings: Deep charcoal / near-black (#18181B, #27272A) for high typographic contrast
   - Accent & CTAs: Warm vibrant orange (#EA580C, hover #C2410C) paired with subtle cream/amber highlights (#FFF7ED, border #FED7AA)
   - Borders: Hairline warm stone dividers (#E7E5E4)
- Typography:
   - UI & Headings: "Inter" (Google Fonts) with tight letter-spacing for an engineered, modern look
   - Technical Details: Clean Monospace (font-mono) for SLAs, counters, and telemetry data
- Shapes & Corners:
   - Interactive Elements: Pill-shaped rounded-full for all buttons, search bars, and billing toggles
   - Cards & Modals: Smooth 16px / rounded-2xl radius with micro-shadows and subtle hover elevations
- Aesthetic: Modern restrained Silicon Valley SaaS (Linear / Stripe inspired) — clean information architecture, real simulated app dashboard, zero cheesy generic stock placeholders
- Mood: Fast, credible, engineered for scale, enterprise-ready


Pages & Structure:
(Note for AI: Align all sections with the product description provided above. If any section or feature below does not directly fit or support the specific product solution, feel free to remove, adapt, or replace it to keep the product realistic and focused.)

1. Home / Landing
   - Hero & Live Preview — Clear product headline + solution subtitle, dual pill-shaped CTAs ("Get Started" + "Book a Demo"), and an interactive simulated dashboard preview showcasing real-time operational status, live counters, and recent activity.
   - Social Proof / Trust Strip — Row of relevant enterprise client logos and compliance credentials.
   - Core Capabilities Grid — 4-card grid highlighting the primary functional pillars of the product.
   - How It Works — 3-step numbered pipeline illustrating the user flow from setup to automated results.
   - Interactive Product Showcase — Live visual preview/demonstration of the product in action with real-time feedback.
   - Testimonials / Reviews — 3 customer quote cards with name, role, company, and avatar badges.
   - Pricing Snapshot — 3-tier overview cards (Starter, Pro/Popular, Enterprise) with monthly/annual values and key features.
   - FAQ Accordion — 5–6 smooth expandable Q&As addressing setup time, trial terms, security, and integrations.
   - Final CTA Banner — High-contrast closing section with headline, trial assurance badges (14-day free trial, no credit card required), and dual action buttons.

2. Features / Product Deep-Dive (/features)
   - Feature Hero — Technical overview of core engine and capabilities.
   - Capability Matrix — 6 feature cards detailing performance, reliability, and controls.
   - Deep-Dive Walkthroughs — Interactive split panels walking through complex workflows and permission/admin management.
   - Integrations Ecosystem — Filterable connector grid with category pills (e.g., CRM, Analytics, Communication).
   - Security & Reliability — Enterprise trust grid (encryption at rest/transit, regulatory compliance, uptime SLA).

3. Pricing (/pricing)
   - Pricing Hero & Billing Toggle — Pill-shaped switcher (Monthly vs Annual billing with discount badge).
   - 3 Tier Cards — Clear plan breakdown (Free/Starter, Professional highlighted, and Enterprise Custom).
   - Detailed Comparison Matrix — Feature-by-feature specification table comparing quotas, retention, and access levels.
   - Enterprise Custom Banner — Dedicated contact callout for custom SLAs and volume.
4. Help Center / Docs (/help)
   - Help Hero with Live Search — Pill-shaped instant search bar for self-serve knowledge base articles.
   - Category Hub — Organized topic cards with article reader modal.
   - Support Form Section — Embedded ticket submission form for direct assistance.
5. Contact / Sales (/contact)
   - Two-Column Layout:
   - Left: Sales channels, response SLA, and enterprise onboarding details.
   - Right: Pill-shaped tab switcher between:
      1. Request a Demo Form (Name, work email, company, team size).
      2. Schedule a Call (Date calendar picker + 30-min time slot pill selector).   

Mandatory Implementation Rules:
1. Scope Flexibility: If any section above is irrelevant to the product description provided, remove or replace it with a section that genuinely fits the product's actual use case.
2. Powered by MFC Attribution: At the bottom of every single form on the website (Demo Request, Support Form, Schedule Call, Floating Modal, and Newsletter), display a subtle, centered footer note:
Powered by MFC — where "Powered by" is in muted gray and "MFC" is bolded in light blue (#2663EB / Tailwind text-sky-500).


### Form Integration & MFC Implementation Rules:
All forms on the website (e.g., Demo Request, Contact, Support, Newsletter, File Uploads) must integrate with MyFormCapture (MFC) using the `FORM_UUID` defined above.
1. Universal Endpoint:
   Every form submits to:
   `https://myformcapture.com/f/{FORM_UUID}`
2. Form HTML Attributes:
   Every `<form>` element must include:
   `action="https://myformcapture.com/f/{FORM_UUID}" method="POST" data-mfc="true"`
   - Ensure every `<input>`, `<select>`, and `<textarea>` has a meaningful `name` attribute.
3. Submission Logic (Standard & File Upload):
   Handle submissions via asynchronous `fetch` using `new FormData(form)`. Do NOT manually set `Content-Type`:
   ```javascript
   const res = await fetch('https://myformcapture.com/f/{FORM_UUID}', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'X-Requested-With': 'XMLHttpRequest',
     },
     body: new FormData(e.currentTarget), // Automatically handles fields and file attachments
   });
   if (!res.ok) throw new Error('Submission failed');
4. Status & Error Handling:
- Manage form state: idle | submitting | success | error.
- Disable the submit button and show a spinner/loading indicator while submitting.
- On error: catch failure and display an inline alert message without resetting user inputs.
- On success: render a clean confirmation screen or success badge and reset the form.
5. Powered by MFC Attribution: At the bottom of every form, include a subtle centered footer: Powered by MFC
"Powered by" in muted gray text.
"MFC" bold in light blue (#2663EB / Tailwind text-sky-500).

### Technical:
- Stack: React + Vite with React Router for clean client-side routing and multi-page layouts (Home, Features, Pricing, Help Center, Contact)
- Styling: Tailwind CSS with a cohesive design token system for colors, radius, and shadows
- Icons: Use Lucide React (`lucide-react`) for consistent SVG icons. (Note: feel free to use essential libraries like Lucide for icons, but avoid adding heavy/unnecessary external libraries for simple UI tasks)
- Lightweight Animations & Micro-interactions: Keep the site fast and lightweight (no heavy animation libraries) — use pure CSS transitions for subtle hover elevations on cards (`hover:-translate-y-1`, shadow increase) and smooth button press states
- Scroll Animations: Subtle fade-in and slide-up on scroll using a lightweight Intersection Observer trigger, with smooth scroll behavior enabled
- Mobile-first & Fully Responsive: Seamless adaptation across mobile, tablet, and widescreen viewports
- SEO & Accessibility: Complete meta titles, descriptions, semantic HTML5 structure, accessible form labels, and focus rings


Make the entire website look and feel like it was crafted by a top-tier Silicon Valley digital product agency for an elite, venture-backed team — highly polished, engineered for high conversions, and credible to enterprise buyers. Every interaction, form, and layout must feel bespoke, modern, and production-ready. Zero generic templates, zero amateur placeholders.