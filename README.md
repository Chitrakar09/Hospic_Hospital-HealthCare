# Hospic – hospital homepage (React + Vite + Tailwind)

Recreates the homepage of the Hospic Framer template.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Structure
- `tailwind.config.js` – design tokens from Framer (colors, Geist/Mona Sans, 768/1200 breakpoints, 1200px container)
- `src/index.css` – Framer text styles (Heading 1–6, Body, Highlight, Button) with Desktop/Tablet/Phone sizes
- `src/components/ui.jsx` – Section, Tag, SectionHeading, PrimaryButton (the reusable Framer components)
- `src/sections/*` – one file per homepage section, in template order
- `src/data/content.js` – all hospital copy
- `src/data/assets.js` – every image/video URL (swap for your own here)

## Breakpoints
Phone (base, 390) · Tablet (`tablet:` ≥768px) · Desktop (`desktop:` ≥1200px)
