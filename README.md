# pacbag.app

The [PacBag](https://pacbag.app) website, built with Next.js and TypeScript. Includes the app overview, support, privacy policy, terms, and trader information.

The app's optional AI server lives in [pacbag-ios/backend](https://github.com/G3mha/pacbag-ios/tree/main/backend), not in this repository. Packing data uses Core Data and iCloud; AI estimates send data through that server to Anthropic after consent.

## Run locally

```bash
git clone https://github.com/G3mha/pacbag-website.git
cd pacbag-website/website
npm ci
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` for a production build.

Pages are in `website/src/app/`; shared sections are in `website/src/components/`. The privacy policy is at `/privacy`; `/privacy-policy` redirects there.

## Keeping it honest

Website copy should match the app release being promoted. Check the visible text and the JSON-LD feature list in `layout.tsx`. AI estimates are optional; they are not destination-based packing recommendations.

Pushes to `main` deploy through Vercel.

© 2025 Enricco Gemha. All rights reserved.
