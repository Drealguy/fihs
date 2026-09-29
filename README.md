# Fountain International High School

Website for Fountain International High School, Ado-Ekiti, built with Next.js (App Router), React, and TypeScript.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

| Path | What's there |
| --- | --- |
| `app/` | One folder per page: home, `about`, `academics` (Programs), `admission`, `gallery`, `contact`. `layout.tsx` holds the header, footer, fonts, and smooth scrolling. |
| `app/globals.css` | All styles. Colours and spacing tokens are at the top (`:root`). |
| `components/` | Shared sections and UI (hero, section headings, cards, FAQ, contact form, gallery filter, icons). |
| `lib/` | Site content: programs, events, FAQs, gallery groups. Edit these to change text or photos. |
| `public/` | Images and the logo. |

## Editing content

- **Programs** (home page + Programs page): `lib/programs.ts`
- **Events** (home page carousel): `lib/events.ts`
- **FAQs** (home + Admissions): `lib/faqs.ts`
- **Gallery groups and photos**: `lib/gallery.ts`
- **Staff**: `components/StaffSection.tsx` (placeholders; add names and photos)
- **About page tabs** (Who We Are, Core Values): `app/about/page.tsx`
- **Admissions guide** (steps, dates, fees): `app/admission/page.tsx`

## Notes

- Fonts: Rethink Sans (headings) and DM Sans (body), loaded with `next/font`.
- Animations use GSAP: ScrollSmoother for desktop smooth scrolling, a pinned hero on the home page, and a shared fade-up reveal for cards (`components/SmoothScroll.tsx`). All motion is disabled for visitors who prefer reduced motion.
- The contact form has no backend: the final step opens WhatsApp or the visitor's email app with their message pre-filled.
- Most photos in `public/` are small (around 200-300px wide). Replacing them with larger originals, keeping the same file names, will make the site noticeably sharper.
