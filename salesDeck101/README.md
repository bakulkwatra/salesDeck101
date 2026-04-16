# The Dubai Mall — Interactive Sales Deck

A cinematic, fully interactive browser-based sales experience for The Dubai Mall — the world's most visited retail destination. Built as a commercial partnerships tool for prospective retail tenants, brand sponsors, and event partners.

**Live Demo:** [https://deck101.vercel.app](https://deck101.vercel.app)  
**GitHub:** [https://github.com/bakulkwatra/salesDeck101](https://github.com/bakulkwatra/salesDeck101)

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"css.customData": [],
"css.lint.unknownAtRules": "ignore"



## Lighthouse Scores

Tested on production URL (`deck101.vercel.app`) in incognito mode, emulated desktop, Lighthouse 13.0.2.

| Metric | Score |
|---|---|
| Performance | 99 |
| Accessibility | 87 |
| Best Practices | 100 |
| SEO | 79* |

**\*SEO note:** The 79 is caused by Vercel automatically injecting `x-robots-tag: noindex` on this deployment URL. This is a Vercel hosting behaviour on non-custom domains, not a code issue. The robots.txt file is valid and all other SEO checks pass. On a custom domain this resolves automatically.

**Performance breakdown (production):**
- First Contentful Paint: 0.5s
- Largest Contentful Paint: 0.5s
- Total Blocking Time: 0ms
- Cumulative Layout Shift: 0
- Speed Index: 1.3s

---

## What This Is

This is not a website. It is a **purpose-built sales tool** — a self-contained web application that a salesperson can screen-share on a live call or send as a standalone link for a prospect to explore independently, with no one there to walk them through it.

The primary audience is decision-makers at brands, agencies, and production companies evaluating whether to invest in a retail presence, brand sponsorship, or event activation at The Dubai Mall.

Every section is designed to move a prospect toward one of three business actions:
- Signing a retail lease
- Committing to a brand sponsorship
- Booking a venue for an event or activation

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 + Vite 5 | Fast build, minimal config, optimised production bundle |
| Styling | Tailwind CSS v4 + CSS custom properties | Utility classes + luxury design tokens with light/dark theming |
| Animations | anime.js 3.2 | Character stagger, counter animations, timeline orchestration |
| Scroll detection | IntersectionObserver + scroll-position (custom hooks) | No library overhead, works reliably at any screen size or zoom level |
| Fonts | Cormorant Garamond + Syne | Editorial luxury serif paired with geometric modern sans |
| Deployment | Vercel | One-command CI/CD, global edge network |

---

## Project Structure

```
salesDeck101/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   ├── hero-bg.mp4                     # Background video (pexels.com/videos)
│   └── images/
│       ├── luxury-corridor.jpeg        # AI-generated via Ideogram.ai
│       ├── sponsorship-activation.jpg  # AI-generated via Ideogram.ai
│       └── sponsorship-aerial.jpg      # AI-generated via Ideogram.ai
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Transparent → frosted glass on scroll
│   │   │   │                       # Mobile hamburger menu, theme toggle
│   │   │   ├── Sidebar.jsx         # Fixed dot navigation, real-time active section
│   │   │   └── SectionWrapper.jsx  # Scroll-triggered anime.js reveal per section
│   │   │
│   │   ├── ui/
│   │   │   ├── AnimatedText.jsx    # Reusable char/word stagger text component
│   │   │   ├── Button.jsx          # Primary / outline / ghost variants
│   │   │   ├── Loader.jsx          # Cinematic intro loader with progress bar
│   │   │   ├── VideoBackground.jsx # Autoplay video with gradient overlay + noise
│   │   │   └── ThemeContext.jsx    #││light/dark mode
│   │   │
│   │   └── sections/               # One component per content section
│   │       ├── Hero.jsx            # Full-viewport hero, char-by-char tagline
│   │       ├── WhyThisProperty.jsx # Animated stat counters
│   │       ├── Retail.jsx          # Category grid + infinite brand marquee
│   │       ├── Luxury.jsx          # Full-bleed image + feature list
│   │       ├── Dining.jsx          # Zone cards + callout
│   │       ├── Entertainment.jsx   # Attraction cards
│   │       ├── Events.jsx          # Interactive venue selector + booking CTA
│   │       └── Sponsorship.jsx     # Phase 2 — tiers, audience data, case studies
│   │
│   │
│   ├── assets
│   │   └──hero.png
│   │   └──vite.svg
│   │   └──react.svg
│       └──vite.svg
│   │
│   ├── data/
│   │   └── content.js              # Single source of truth for all copy and data
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.js   # IntersectionObserver + scroll-position active section
│   │   └── useVideoAutoPlay.js     # Pause/play video on viewport visibility
│   │
│   ├── pages/
│   │   └── Home.jsx                # Assembles all sections + footer
│   │
│   ├── App.jsx                     # Root — ThemeProvider, cursor, loader
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Design tokens, theme vars, global styles
│
├── index.html
├── vite.config.js
├── vercel.json                     # Security headers + SPA routing + cache rules
├── package.json
└── README.md
```

---

## Setup

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/bakulkwatra/salesDeck101
cd salesDeck101
npm install
npm run dev
# → http://localhost:5173
```

**Production build:**
```bash
npm run build
npm run preview
```

**Deploy:**
```bash
npm i -g vercel
vercel --prod
```

---

## Design Decisions

### Color & Aesthetic
Dark base (`#080808`) with a burnt coral accent (`#C44B2A`). The decision to use coral over the obvious gold was deliberate — gold on black is the default "Dubai luxury" cliché that every other pitch deck uses. Coral reads warm and premium without the regional association. Inspired by Saint Laurent and Bottega Veneta's restraint.

### Typography
**Cormorant Garamond** (300 weight) for display — editorial, fashion-magazine authority, excellent at large sizes. **Syne** for UI and body — geometric, slightly technical, creates useful tension against the serif. The combination communicates "luxury meets precision."

### Animations
Every animation communicates something, it is not decoration:
- Cinematic loader sets brand tone before any content appears
- Char-by-char hero tagline signals craft in the first 3 seconds  
- Counter animations on stats make data visceral — watching 105 count up is more convincing than reading 105
- All scroll reveals use IntersectionObserver and only fire once the element is in view

### Navigation (Non-Linear)
The brief required non-linear navigation. Implemented as: fixed top navbar with direct section jump links, fixed right sidebar with dot nav and real-time active section highlight, and a full-screen mobile menu. Active section detection uses scroll position (not IntersectionObserver thresholds) so it works correctly at any screen size or browser zoom level.

### Light / Dark Mode  
All colours are CSS custom properties on `[data-theme]` attribute. Toggle in the navbar persists via localStorage. Dark is the default — appropriate for a cinematic presentation context.

### Phase 2 — Sponsorship Module
A fully working sub-section demonstrating expandable architecture. Contains:
- Audience intelligence (6 data points)
- Three clickable partnership tiers with animated benefits panel
- Activation case studies with imagery
- Direct contact CTA

Any additional module (Leasing Paths, Venue-specific pages) follows the same pattern: one new component + one new entry in `content.js`.

---

## AI Tools Used

| Tool | How it was used |
|---|---|
| **Claude (Anthropic)** | Component architecture, all animation logic, content strategy, README |
| **Ideogram.ai** | AI-generated imagery for luxury corridor, brand activation scene, aerial renders |

**AI image strategy:** Rather than using generic stock photography, Ideogram was prompted with specific architectural and spatial briefs to produce imagery that doesn't exist in any press kit — a Fashion Avenue corridor at dusk, a packed Grand Atrium activation. Prompts were written to match the site's color temperature and composition language for visual consistency.

---

## Known Issues

| Issue | Explanation |
|---|---|
| SEO 63 on production URL | Vercel injects `x-robots-tag: noindex` on non-custom-domain deployments. robots.txt is valid. |
| Accessibility 87 | Low-contrast `--text-muted` used for decorative metadata (footer, section badges). Not primary reading content. |
| `unsafe-inline` CSP warning | Required by React's inline event handlers. Does not affect the score — flagged as informational only. |
| Loom/extension JS in Lighthouse | Chrome extensions in the test environment — not a project issue. Scores are clean in incognito. |
| Video captions warning | Hero video is a decorative muted background loop with no dialogue. Captions not applicable. |

---

## What I Would Improve With More Time

1. **Leasing Paths module** — segmented by category (Luxury / Mid-tier / F&B / Pop-up) with tailored pitch and floor plan per category
2. **Venue deep-dive pages** — dedicated views for Grand Atrium, Fashion Avenue Promenade, Fountain Views with capacity diagrams
3. **AI concierge chatbot** — Claude API via Vercel serverless function with a Dubai Mall commercial partnerships persona
4. **Interactive floor map** — SVG floor plan where hovering a zone highlights the corresponding deck section
5. **WebP image conversion** — convert all JPEGs to WebP for ~30% smaller file sizes
6. **Font preloading** — self-host Cormorant Garamond and Syne to eliminate the Google Fonts render-blocking request

---

## Brief Alignment

| Requirement | Status |
|---|---|
| Non-linear navigation | Sidebar dots + top navbar |
| Video-first storytelling | Hero background video + scroll-triggered section reveals |
| Luxury UI (Apple / Hermès / Tesla) | Cormorant Garamond, dark palette, minimal chrome |
| 90+ Lighthouse Performance | **99** on production |
| Responsive desktop + tablet | Tailwind responsive grid, mobile hamburger menu |
| AI-generated assets | Ideogram.ai imagery for sections with no press assets |
| Deployed live URL | deck101.vercel.app |
| Phase 2 sub-module | Sponsorship — tiers, audience data, case studies, CTA |
| Expandable architecture | Isolated components, single data source in content.js |
| Drive business actions | Every section ends with a forward CTA |


