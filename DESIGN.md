# 50 Seeds design system

## 1. Visual theme and atmosphere

Darkroom index: a warm-black, high-density visual archive with vermilion editorial marks. It should feel like a working reference desk for image makers, not a marketing landing page.

Dark mode is the default working environment. A light mode is available from the masthead for daytime use; it keeps the same vermilion accent, density, and component vocabulary while moving the canvas and surfaces to a restrained paper-white scale.

## 2. Color palette and roles

- Canvas: `oklch(16% 0.012 55)`, page background.
- Surface: `oklch(21% 0.014 55)`, controls and active rows.
- Paper: `oklch(91% 0.022 75)`, primary text.
- Muted ink: `oklch(69% 0.018 70)`, metadata.
- Vermilion: `oklch(65% 0.19 35)`, active state and actions.
- Hairline: `oklch(93% 0.01 75 / 12%)`, separators.

## 3. Typography rules

Display uses `Avenir Next Condensed` with PingFang fallbacks for a narrow archive-label rhythm. Body uses the native system stack for fast mixed Chinese and English rendering. Large Latin numerals use negative tracking, Chinese text never does. Body line-height is 1.7.

## 4. Component styling

Buttons and filters use 2px, 6px, 12px, and pill as the fixed radius scale. Controls sit on stepped dark surfaces with hairline separators. Records are compact square index tiles in a responsive grid, with the entire tile acting as the copy action. Hover changes border, surface, and translation by 2px; press scales to 0.97. Focus uses a 2px vermilion outline.

## 5. Layout principles

Desktop uses a sticky 260px category index and a fluid square-tile grid. The compact first screen is asymmetric: a `50` mark anchors the left while the purpose and controls occupy the right. Spacing follows 4, 8, 12, 16, 24, 32, and 48px.

## 6. Depth and elevation

Depth comes from background lightness steps, never glass blur or generic card shadows. The sticky toolbar uses a solid canvas color so content never bleeds through.

## 7. Do and don't

- Do keep result actions next to the exact seed they affect.
- Do preserve bilingual names and prompts.
- Do use tabular numerals for rank and counts.
- Do explain that popularity is an editorial snapshot.
- Don't use gradients, glass effects, or purple-blue AI colors.
- Don't render all 2,500 records on first paint.
- Don't hide focus states or rely on hover alone.

## 8. Responsive behavior

Below 820px the category index becomes a horizontal, scrollable filter strip. The hero numeral becomes smaller, controls stack, and record columns collapse. Touch targets remain at least 40px. The layout is verified at 1280px, 375px, and 320px.

## 9. Agent prompt guide

- Canvas `oklch(16% 0.012 55)`, paper `oklch(91% 0.022 75)`, accent `oklch(65% 0.19 35)`.
- Create a square seed tile with rank at 11px tabular, title at 19px weight 650, English name at 11px, 13px padding, a 1px hairline border, and the full tile as the copy target.
- Create an active category pill with 42px minimum height, 999px radius, vermilion fill, near-black text, and 0.97 press scale.
- Create a search field on the stepped surface, 48px high, 6px radius, 1px hairline outline, and 2px vermilion focus ring.
