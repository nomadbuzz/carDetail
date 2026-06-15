# Elite Shine Auto Detailing

A premium, conversion-focused car detailing business website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **6 Pages**: Home, Services, About, Gallery, Reviews, Contact
- **Premium Design**: Black, white, silver, and blue luxury automotive aesthetic
- **Fully Responsive**: Mobile-first with hamburger navigation
- **Dark Mode**: System-aware theme toggle
- **Animations**: Framer Motion scroll and entrance animations
- **Forms**: React Hook Form + Zod validation with loading/success/error states
- **Gallery**: Before/after grid with lightbox viewer
- **SEO**: Metadata, Open Graph, Local Business Schema, sitemap, robots.txt

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod
- Lucide Icons
- next-themes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customization

Update business details in `src/lib/constants.ts`:

- Business name, phone, email, address
- Service areas and pricing
- Reviews and gallery items
- Business hours

## Project Structure

```
src/
├── app/              # Pages and routing
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections and reusable blocks
│   ├── ui/           # Shadcn-style UI primitives
│   └── providers/    # Theme provider
├── lib/              # Utils, constants, schemas, SEO
└── types/            # TypeScript types
```
# carDetail
