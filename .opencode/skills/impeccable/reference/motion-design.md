# Motion Design

## Duration: The 100/300/500 Rule

| Duration | Use Case |
|----------|----------|
| **100-150ms** | Instant feedback, button press, toggle |
| **200-300ms** | State changes, menu open, tooltip |
| **300-500ms** | Layout changes, accordion, modal |
| **500-800ms** | Entrance animations, hero reveals |

**Exit animations are faster** — use ~75% of enter duration.

## Easing

**Don't use `ease`.** Use exponential curves:

```css
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

**Avoid bounce and elastic curves** — they feel tacky and dated.

## Premium Motion Materials

- Transform/opacity: movement, press feedback, simple reveals
- Blur/filter/backdrop-filter: focus pulls, depth, glass effects
- Clip path/masks: wipes, reveals, editorial cropping

The hard rule: avoid animating layout-driving properties (`width`, `height`, `top`, `left`).

## Staggered Animations

Use CSS custom properties: `animation-delay: calc(var(--i, 0) * 50ms)`

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Perceived Performance

- **80ms threshold**: feels instant
- **Active vs passive time**: engagement feels faster than waiting
- **Optimistic UI**: update immediately, handle failures later
- **Easing affects perceived duration**: ease-in makes tasks feel shorter

---

**Avoid**: Animating everything. Using >500ms for UI feedback. Ignoring reduced motion.