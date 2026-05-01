# Responsive Design

## Mobile-First

Start with base styles for mobile, use `min-width` queries to layer complexity. Desktop-first (`max-width`) means mobile loads unnecessary styles first.

## Breakpoints: Content-Driven

Don't chase device sizes—let content tell you where to break. Start narrow, stretch until design breaks, add breakpoint there. Three breakpoints usually suffice (640, 768, 1024px). Use `clamp()` for fluid values without breakpoints.

## Detect Input Method, Not Just Screen Size

```css
@media (pointer: fine) { /* mouse */ }
@media (pointer: coarse) { /* touch */ }
@media (hover: hover) { /* has hover */ }
@media (hover: none) { /* touch only */ }
```

## Safe Areas

```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
```

With viewport-fit:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Responsive Images

```html
<img src="hero-800.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw" alt="...">
```

## Layout Adaptation

- **Navigation**: hamburger → compact → full with labels
- **Tables**: Transform to cards on mobile
- **Progressive disclosure**: Use `<details>/<summary>`

## Testing

DevTools device emulation misses real touch interactions, CPU/memory constraints, network patterns, font rendering. Test on real devices.

---

**Avoid**: Desktop-first design. Separate mobile/desktop codebases. Ignoring tablet.