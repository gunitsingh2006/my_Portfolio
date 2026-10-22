# Gunit Singh Duggal — portfolio

A responsive single-page portfolio built with React, Vite, Tailwind CSS, Framer Motion, and GSAP. The glass navbar links to sections on the page; skills float in animated bubbles.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Easy updates

- Edit profile links, projects, skills, and experience in `src/data/portfolio.js`.
- Update section content in `src/pages/Home.jsx`, `src/pages/Experience.jsx`, and `src/pages/Contact.jsx`.
- Change colors, spacing, and responsive rules in `src/styles.css`.
- Replace `public/Gunit-Singh-Duggal-Resume.pdf` with a new PDF, keeping the same filename, to update the navbar download.
- Replace `public/gunit-profile.png` with a new portrait to update the hero image.

## Activity panels and contact protection

The GitHub contribution heatmap and the full Codolio profile are live third-party embeds, so they need an internet connection and can be affected by those services' availability or embedding policies. The Codolio profile is also linked directly if the embedded dashboard is unavailable. The activity section does not use hard-coded submission totals.

The phone reveal uses a small arithmetic check as basic spam friction. It is not a secure CAPTCHA: browser-only checks can be bypassed. For a public deployment, use Cloudflare Turnstile or hCaptcha with a server endpoint that validates tokens before returning the phone number, or leave the phone hidden and use the email link. Never put a CAPTCHA secret key in client-side code.

## Project details

The four featured project names and links come from the public GitHub profile and resume. Edit `projects` in `src/data/portfolio.js` to change the selection or descriptions.
