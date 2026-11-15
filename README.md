# SAI SRINIVAS CONSTRUCTIONS

A responsive construction-company website built with React, Vite, TypeScript, Tailwind CSS and Lucide. Architectural photography and self-hosted fonts are bundled locally.

## Development

Requires Node.js 22.12+ (Node 24 is recommended for the built-in TypeScript test runner).

```sh
npm ci
npm run dev
npm run build
npm run preview
npm test
```

The production website is generated in `dist/`. Serve that directory with any static web host. No database, API key, paid service, or environment variable is required.

## Vercel deployment

Production URL: https://sai-srinivas-constructions.vercel.app

The Vercel project is `sai-srinivas-constructions` in team `kotavksprasad15-6130s-projects`. It uses Node.js 24, the Vite framework preset, `npm ci`, `npm run build`, and the `dist` output directory. The project is connected to `kotaprasad15/Sai-Srinivas-Constructions` on GitHub. The checkout also has an ignored `.vercel/project.json` linking it to this project for authenticated CLI deployments (`vercel --prod`).

Vercel's existing authentication protection remains enabled, so visitors may need authorized Vercel access. Making this deployment publicly accessible still requires approval to change that protection setting.

## Add the real business contact details

Edit **`src/config/company.ts`**:

| Field | Value to supply |
| --- | --- |
| `name` | Official company name (already populated) |
| `whatsappNumber` | Configured as `917337005866` (India: +91 7337005866) |
| `email` | Configured as `kotasri07@gmail.com` |
| `phone` | Configured as `+91 7337005866`, matching WhatsApp |
| `address` | Approved business/postal address |
| `whatsappMessage` | Optional introductory enquiry text (already populated) |

Missing contacts deliberately display “coming soon.” No fake numbers or mailboxes are used. WhatsApp and email shortcuts explain availability until configured. The enquiry form validates required fields, prepares a message, and lets the visitor review it before continuing to WhatsApp or their email application. The visitor must send the message in that application. The form also supports copying the prepared enquiry, with a selectable text fallback if clipboard access is unavailable. There is no backend submission and no fake success message. Editing a field invalidates the prepared message to avoid sending stale information. Personal information is not stored or sent to a server by the site.

## Add verified projects

Add objects to **`src/data/projects.ts`**. Keep the array empty until verified details and authorized photographs are ready. `Projects.tsx` automatically replaces the portfolio notice with reusable project cards when entries are added.

Each project requires `id`, `title`, `description`, `category`, `status` (`Ongoing` or `Completed`), `image`, and `imageAlt`. `location` is optional. Place photographs in `public/images/projects/` and reference them as `/images/projects/filename.webp`. Supply accurate image descriptions for accessibility. Only include clients, locations, budgets, dates, or other facts when authorized and verified.

The current architectural images are decorative stock photographs, not company project photographs. Credits are in **`ASSETS.md`**.

## Site structure

- `src/components/`: responsive navigation, hero, about, expertise, experience, projects, values, contact and footer.
- `src/data/services.ts`: shared service headings, descriptions and icons; also populates the enquiry selector.
- `src/data/projects.ts`: future verified project entries.
- `src/config/company.ts`: central company and contact configuration.
- `src/lib/contact.ts`: validated WhatsApp, email and telephone link builders.
- `src/styles.css`: layout, typography, responsive breakpoints and restrained motion.
- `src/components/contact.css`: contact styles.
- `tests/contact.test.ts`: missing/invalid/configured contacts and message encoding checks.
- `index.html`: SEO title, description and social metadata.

## Remaining business information

1. Business address. Telephone, WhatsApp and email are configured.
2. For each real project: approved title, summary, category, ongoing/completed status, any publishable location, photographs and image descriptions.
3. Official logo artwork if you prefer to replace the current custom architectural wordmark.
4. Final website domain before adding a canonical URL, absolute social preview image URL and sitemap. Update `index.html` metadata if the business name changes.
5. Optional future backend/email delivery requirements if you want submissions delivered directly instead of the current WhatsApp/email handoff.

## Verification

Production compilation and contact tests are run during delivery. The website includes mobile navigation with Escape handling, keyboard focus management, a skip link, native form labels/validation, reduced-motion support, responsive image sources, local font files and lazy-loaded below-the-fold images. No fabricated projects, testimonials, statistics, certifications, or endorsements are included.

Automated tests verify generated contact URLs without sending any enquiry. Actual delivery needs the real contact details. The managed browser-preview relay in the delivery environment timed out, so a visual viewport sweep and Lighthouse audit must be completed in an available browser before public launch.
