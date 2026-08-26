---
name: Fastorial
description: Apple-quiet product page for a software-engineering tutorial channel.
colors:
  paper: "#ffffff"
  mist: "#f5f5f7"
  ink: "#1d1d1f"
  muted: "#6e6e73"
  hairline: "#d2d2d7"
  link: "#0071e3"
  link-hover: "#0077ed"
  on-ink: "#ffffff"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.022em"
  lede:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.022em"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  tile: "18px"
  pill: "999px"
  photo: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  2xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.link}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.link-hover}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-on-ink:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    typography: "{typography.body}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    padding: "0 12px"
    height: "48px"
  card:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "32px"
  featured-tile:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.tile}"
---

# Design System: Fastorial

## Overview

**Creative North Star: "A product page for lessons."**

The site is meant to sit beside apple.com, not beside a SaaS starter. White and mist fields, ink chrome, one blue for action. Playlists are the product: they occupy large tiles. Type does the hierarchy. Color does almost nothing else.

Geist stands in for SF Pro because the brief asked for Apple’s quiet grotesque, not a display serif.

## Colors

Restrained: neutrals plus one accent.

### Primary
- **Link** (#0071e3): pill buttons and text links. Hover #0077ed.
- Never a page fill.

### Neutral
- **Paper** (#ffffff): default page.
- **Mist** (#f5f5f7): projects, footer, playlist cards.
- **Ink** (#1d1d1f): type, nav, featured tile, community band.
- **Muted** (#6e6e73): secondary copy.
- **Hairline** (#d2d2d7): separators only.

### Named Rules
**The One Blue Rule.** Blue is for doing. It is not decoration, not a card tint, not a gradient.

**The Tonal Field Rule.** Alternate paper, mist, and ink in full-width bands. Depth comes from those fields, not shadows.

## Typography

Geist, weight 400 and 600 only. Headlines are semibold, body is regular. Tracking sits around -0.022em to -0.03em. Display never exceeds 64px. Body measure stays near 40–58ch.

No italics as a brand device. No gradient text. Section titles often end with a period, in the Apple headline habit.

## Layout

Max content width 980px. Horizontal padding 24px. Sticky 48px nav. Scroll padding 48px so in-page anchors clear the bar. Desktop nav is a three-column grid: mark, centered links, YouTube. Mobile is mark plus sheet.

Vertical rhythm: hero and bands use 96–128px. More space above a heading than below it.

## Elevation & Depth

Flat. Tiles have no box-shadow. Nav is the only blur: `backdrop-filter: blur(20px)` on ink at 80% opacity. Hover on text links is opacity or underline, not lift shadows.

## Shapes

Pills for buttons (999px). Product tiles 18px. Creator photo is a circle. Corners on chrome stay quieter than the tiles.

## Components

Built on shadcn/ui (Button, Card, Separator, Avatar, Sheet) restyled to this system.

- **Primary button:** link blue, white type, full pill, 17px.
- **On-ink button:** white fill, ink type, used on the community band.
- **Text link:** link blue plus a ›. External links open in a new tab.
- **Lineup carousel:** each category is a horizontal, snap-scrolling row of equal-width cards. The first card’s media well is ink; the rest sit on mist. Mobile shows most of one card plus a peek of the next. Circular gray prev/next controls sit under the row, right-aligned.
- **Lineup card:** 4:3 rounded media (YouTube embed, optional still, or a type placeholder), then kicker, title, copy, and a pill plus text link. Upcoming projects use the same card without a video until an image is supplied.

## Do's and Don'ts

### Do
- Keep the page mostly paper and mist.
- Let playlist artwork come from the YouTube embed. Do not host or hardcode thumbnails.
- Use supplied stats as a quiet line, never as a hero metric row.

### Don't
- Don't bring back gradient hero blobs, glass cards, or side-stripe accents.
- Don't add eyebrows or numbered section markers.
- Don't introduce a second accent color.
- Don't blow a YouTube thumbnail across the full first viewport; keep the embed inside a tile.
