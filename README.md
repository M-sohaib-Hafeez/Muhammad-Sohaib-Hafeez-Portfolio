# Muhammad Sohaib Hafeez — Portfolio (merged build)

A single Vite + React portfolio combining the two source projects
(`sohaib-portfolio` and `sohaib-portfolio(1)`) into one cohesive site.

## What came from where

| Section | Layout / content | Extra merged in |
|---|---|---|
| Home (Hero) | `sohaib-portfolio(1)` | Gradient name-styling from `sohaib-portfolio`; resume link points at the updated CV |
| About | `sohaib-portfolio(1)` | — |
| Skills | `sohaib-portfolio(1)` orbit diagram | Every skill pill now links out to its official docs (new) |
| Projects | `sohaib-portfolio(1)` cards + filters | Diagonal hover sheen from `sohaib-portfolio`; WhatsApp–Jira Automation added as a full 7th project card with the updated GitHub link |
| Experience | `sohaib-portfolio` | — |
| Contact | `sohaib-portfolio` (EmailJS + mailto fallback) | — |
| Nav (left rail) | `sohaib-portfolio` (`FlightPathNav`) | — |

Colors, fonts, and spacing were unified across both sources (both already
used a near-identical dark navy / cyan / violet palette and the same
Space Grotesk + Inter + JetBrains Mono type system), so nothing should look
mismatched between sections.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — it auto-detects Vite (build command
   `vite build`, output directory `dist`). `vercel.json` is already set up
   for SPA routing.
3. (Optional) Contact form email delivery: create a free
   [EmailJS](https://www.emailjs.com/) account, then set these three
   Environment Variables in Vercel (see `.env.example`):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

   Until these are set, the contact form falls back to opening the
   visitor's email client with a pre-filled message — it still works,
   just without in-app delivery.

## Updating content

Everything text-based (projects, skills, experience, certifications,
contact info) lives in `src/data/profile.js`. Swap `public/resume.pdf`
whenever the CV is updated again.
