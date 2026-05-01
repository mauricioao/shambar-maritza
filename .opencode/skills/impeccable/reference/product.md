# Product register

When design SERVES the product: app UIs, admin dashboards, settings panels, data tables, tools.

## The product slop test

Would a user fluent in the category's best tools sit down and trust this interface, or pause at every subtly-off component?

## Typography

- **System fonts are legitimate**: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui`
- **One family is often right** — a well-tuned sans carries headings, buttons, labels, body, data.
- **Fixed rem scale, not fluid**
- **Tighter scale ratio** — 1.125–1.2 between steps

## Color

Product defaults to Restrained (tinted neutrals + one accent ≤10%).

- State-rich semantic vocabulary: hover, focus, active, disabled, loading, error, warning, success

## Layout

- Predictable grids — consistency IS an affordance
- Familiar patterns are features — don't reinvent for flavor
- Responsive behavior is structural (collapse sidebar, responsive table)

## Components

Every interactive component needs: default, hover, focus, active, disabled, loading, error.

- Skeleton states for loading
- Empty states that teach the interface

## Motion

- 150–250 ms on most transitions
- Motion conveys state, not decoration
- No orchestrated page-load sequences

## Product bans

- Decorative motion
- Inconsistent component vocabulary
- Display fonts in UI labels
- Reinventing standard affordances

## Product permissions

- System fonts
- Standard navigation patterns
- Density — tables with many rows
- Consistency over surprise