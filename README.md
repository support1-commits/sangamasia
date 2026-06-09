# SANGAM Website — Full Next.js Project

South Asian Network of Agricultural Museums & Heritage

## Tech Stack
- **Next.js** 16.2.7 (App Router)
- **React** 19.2.4
- **React DOM** 19.2.4
- Pure CSS (no Tailwind dependency)
- Google Fonts: Playfair Display + DM Sans

## Project Structure

```
sangam-website/
├── app/
│   ├── globals.css          # All styles (2200+ lines)
│   ├── layout.jsx           # Root layout with metadata
│   └── page.jsx             # Main page — all sections
├── components/
│   ├── Navbar.jsx           # Fixed navbar with mobile hamburger
│   ├── HeroCarousel.jsx     # 4-slide auto-advancing hero carousel
│   ├── AboutSection.jsx     # About + stats + country grid
│   ├── ConferenceSection.jsx# CIMA 2023 conference section
│   ├── ProgrammesSection.jsx# Events grid (festival, talks, exhibitions)
│   ├── MuseumSection.jsx    # Interactive museum explorer tabs
│   ├── HeritageSection.jsx  # Documentation projects
│   ├── JoinSection.jsx      # Membership / internship / fellowship cards
│   ├── ContactSection.jsx   # Contact form + social links
│   └── Footer.jsx           # Footer with nav links + flags
├── public/
│   └── sangam-logo.png      # ← ADD YOUR LOGO HERE
├── next.config.mjs
├── package.json
└── README.md
```

## Getting Started

```bash
# 1. Add your logo
cp your-logo.png public/sangam-logo.png

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

## Sections
1. **Hero** — 4-slide carousel with agriculture themes, auto-advances every 6.5s
2. **About** — Network overview, stats, 8-country grid, AIMA partnership
3. **Conference** — CIMA 2023 typographic feature with highlights
4. **Programmes** — Film Festival 2026, exhibitions, talks, annual conference
5. **Museum** — Interactive tab explorer for 4 member museums
6. **Heritage** — Scouting & curation projects (Bundelkhand, NOIDA, CIMA exhibition)
7. **Join** — Internship, Fellowship, Partner, Member cards
8. **Contact** — Form with subject select + social media links
9. **Footer** — Full nav links, country flags, legal links

## Design System
- **Dark theme**: near-black backgrounds (#080e04 → #162208)
- **Greens**: forest (#1a3a0a), leaf (#3d7a1c), sage (#5c8a2e)
- **Ambers**: amber (#c8860a), gold (#e8c84a)
- **Text**: ivory (#f2ead8), parchment (#d4c9a8)
- **Fonts**: Playfair Display (headings, italic accents) + DM Sans (body)
- **Animations**: scroll-triggered fade-in via IntersectionObserver
