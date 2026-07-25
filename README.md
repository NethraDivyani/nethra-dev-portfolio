# Nethra Divyani — Portfolio (Next.js)

A Next.js (App Router) + TypeScript + Tailwind CSS rebuild of the portfolio,
with Framer Motion animations and each project as its own case-study page.

## Structure

- `app/page.tsx` — home page (Hero, About, Skills, Projects, Contact)
- `app/projects/[slug]/page.tsx` — case-study page per project
- `components/` — Header, Hero, Terminal (typing animation), About, Skills,
  Projects, Contact, Footer, SectionReveal (scroll animation), SectionLabel
- `lib/data.ts` — all content: socials, roles, skills, and project/case-study
  data. Edit this file to update copy without touching components.
- `app/globals.css` — base styles and the background grid
- `tailwind.config.ts` — design system tokens (colors, fonts, animations)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Notes / things to double check

- Email in `lib/data.ts` (`socials.email`) — confirm it's the one you want
  public.
- Project descriptions in `lib/data.ts` were written from repo names since
  most repos don't have READMEs — skim `problem` / `approach` for each
  project and correct anything that isn't accurate, especially the Flood
  Prediction System.
- Fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono) are loaded via a
  Google Fonts `<link>` in `app/layout.tsx`. If you'd rather self-host them,
  switch to `next/font/google`.
- To deploy: this project works out of the box on Vercel
  (`vercel deploy`), or any host that supports Next.js.
