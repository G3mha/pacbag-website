# pacbag.app

The landing page for [PacBag](https://github.com/G3mha/pacbag-ios), an iOS packing list app. It's a Next.js site: one marketing page plus the three pages Apple requires a listing to link to.

Live at [pacbag.app](https://pacbag.app), deployed from `main` by Vercel.

## Pages

| Route | What it is |
|---|---|
| `/` | The landing page — what the app does, a walkthrough, an FAQ, App Store link |
| `/support` | Contact details and answers to the questions people actually ask |
| `/privacy-policy` | Required by App Store Review |
| `/labels-markings` | Trader information, required by the EU Digital Services Act |

## Running it

```bash
cd website
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build    # production build
npm run lint     # eslint
```

## Layout

```
website/
├── src/app/
│   ├── layout.tsx            Metadata, Open Graph tags, JSON-LD
│   ├── page.tsx              Assembles the landing page sections
│   ├── globals.css           Tailwind entry point
│   └── support/ privacy-policy/ labels-markings/
├── src/components/           One file per landing page section
├── src/hooks/useTilt.ts      vanilla-tilt wrapper for the phone mockup
└── public/                   Icon, App Store badge, screenshot, OG image
```

Next.js 15 with the App Router, React 19, Tailwind 4, framer-motion for the scroll animations, lucide-react for icons. No CMS and no backend — every string is in the component that renders it.

## Keeping it honest

The copy on this site should only describe things the app does. That sounds obvious, but earlier versions of this page advertised weather-based suggestions, AI packing recommendations, family sharing, 100,000 downloads and a 4.9 star rating. None of it was true; the app has no server and shipped with one review.

So before adding a claim here, check it against the app. Two places make this easy to get wrong:

- **`layout.tsx`** holds a JSON-LD `featureList` that search engines read. It's easy to edit the visible copy and leave that block advertising something else.
- **`DEVELOPMENT.md`** in the app repo has a "Not built" list. Nothing on it belongs on this page.

## Deploying

Push to `main`. Vercel builds and promotes it.

## Contact

Enricco Gemha — me@enriccogemha.dev

## License

© 2025 Enricco Gemha. All rights reserved.
