# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SeekR — a Next.js pre-registration landing page for an AI-powered travel planning tool. Collects emails via a Turnstile-protected form backed by MongoDB.

## Commands

- **Dev server:** `npm run dev` (starts on port 3000)
- **Build:** `npm run build`
- **Start production:** `npm start`
- **Lint:** `npm run lint` (ESLint with Next.js core-web-vitals + TypeScript rules)
- **Docker build:** `docker build -t seekr-webpage .`
- **Docker push:** `bash dockerpush.sh` (pushes to DigitalOcean registry)

No test framework is configured.

## Architecture

**Framework:** Next.js 16 (App Router) with React 19, TypeScript strict mode, Tailwind CSS v4.

### Key Directories

- `app/` — Next.js App Router: root layout, home page, global styles, API routes
- `ui/` — React components (all client-side with "use client")
- `lib/` — Utilities: `api.ts` (client fetch wrapper), `db.ts` (MongoDB singleton connection)
- `models/` — Mongoose schemas: `PreRegister.ts` (email collection)

### Data Flow

1. `ui/EmailForm.tsx` captures email + Cloudflare Turnstile token
2. `lib/api.ts` POSTs to `/api/subscribe`
3. `app/api/subscribe/route.ts` verifies the Turnstile token with Cloudflare, then saves to MongoDB via Mongoose
4. Duplicate emails return 409

### Styling

Tailwind utility classes with CSS variables for theming in `app/globals.css`. Dark mode via `prefers-color-scheme`. Geist Sans/Mono fonts loaded in root layout. Orange/pink/violet gradient palette.

### Animations

Uses `motion` (Framer Motion) library for staggered entrance animations and hover effects.

## Environment Variables

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile public key
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile secret (server-only)
- `MONGODB_URI` — MongoDB connection string

## Deployment

Standalone Next.js output (`output: "standalone"` in next.config.ts). Multi-stage Docker build targeting node:20-alpine. Deployed to DigitalOcean Container Registry.

## Path Alias

`@/*` maps to the project root (configured in tsconfig.json).
