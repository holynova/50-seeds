# Changelog

## 1.3.0 - 2026-08-25

### Features
- Add 50 curated Painting & Illustration Styles seeds (Japanese Woodblock Print, City Pop Aesthetic, 80s Retro Anime Cel, etc.), expanding the catalog to 51 categories and 2,550 seeds.
- Introduce 5-core-dimension categorization system (`creator`, `visual`, `narrative`, `space`, `mood`) for intuitive exploration.
- Enhance 2-slot prompt combiner with dedicated in-stage dropdown selectors, single/double category modes, seed pinning, and multiple export presets (A + B, AI Comma, Midjourney preset).

### Fixes
- Fix state divergence across tab switching: selected category and dimension filters remain 100% persistent when toggling between Combiner and Library views.
- Decouple left sidebar into a pure catalog navigation bar across the entire application, eliminating slot hijacking.
- Eliminate excessive system emojis and AI slop patterns in favor of a cohesive Darkroom inline SVG vector icon system and OKLCH color dots.
- Redesign dimension filter tabs with industrial darkroom segmented capsules, high-contrast active fills, and tabular count badges.
- Fix sidebar scrolling edge case where bottom-most categories were clipped on certain viewports.
