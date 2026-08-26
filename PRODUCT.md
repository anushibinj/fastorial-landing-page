# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

<!-- inferred: no interview in this unattended run; taken from existing site copy and content.json -->

People learning software engineering who want short, practical tutorials and live-coded project streams. They arrive from YouTube, LinkedIn, Twitch, or community links and need to understand who Fastorial is, what is streaming now, and where to join.

## Product Purpose

Fastorial is a marketing landing page for Anu Shibin Joseph Raj’s tech education channel. It should make a first-time visitor understand the offer (daily live-coded projects plus existing tutorial playlists), see current live work, and subscribe or join the community.

Success is a visitor who watches a playlist or joins a community channel without hunting.

## Positioning

Bite-sized, practical software-engineering lessons from a working lead engineer, not a generic “learn to code” academy.

## Operating Context

Single-page Vite + React marketing site, deployed on Firebase Hosting. Content lives in `src/data/content.json`. Analytics via Firebase in `index.html`.

## Capabilities and Constraints

- Static frontend only. No auth, no CMS, no checkout.
- All factual claims must come from `src/data/content.json`. Do not invent subscriber counts, logos, or testimonials.
- Keep Firebase analytics setup in `index.html`.
- Stack in this repo: React, TypeScript, Vite, Tailwind, shadcn/ui.

## Brand Commitments

- Name: Fastorial.
- Creator: Anu Shibin Joseph Raj (also “Shibin”).
- Voice: direct, practical, unhyped.
- Binding visual constraint from the product owner: clean and minimal like apple.com; frontend components from shadcn/ui.
- The previous gradient/blob/dark-hero look is discarded, not refined.

## Evidence on Hand

Confirmed in `src/data/content.json`:

- Hero copy, about bio, profile photo URL, LinkedIn
- LinkedIn: https://www.linkedin.com/company/fastorial
- Live projects: current and past playlists, plus upcoming product names and descriptions
- Three YouTube tutorial playlists (URL and level). Artwork is the official playlist embed, not a stored thumbnail.
- Social: YouTube, Instagram, Twitch, LinkedIn, Discord, WhatsApp, Telegram
- Stats: 10K+ students, 50+ tutorials, 5K+ community, 100% free — use only as supplied; do not inflate

No customer quotes, press, or hosted playlist artwork. Profile photo is an external URL.

## Product Principles

1. Product truth over marketing theater: show the actual live projects and playlists.
2. One obvious next step: watch on YouTube or join the community.
3. Respect the visitor’s time: short copy, no filler sections.
4. Do not fabricate social proof.

## Accessibility & Inclusion

WCAG 2.2 AA as a working floor: text contrast, keyboard access, visible focus, `prefers-reduced-motion`, tap targets ≥44px.
