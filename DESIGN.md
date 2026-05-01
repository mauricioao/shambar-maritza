# DESIGN.md - Shambar Maritza

## Color Palette

### Strategy: Committed
Un color saturado (amber/cobre) carry 40-50% de la superficie — tradición limeña/herencia artesanal.

### Colors (OKLCH)
```
--color-bg-primary: oklch(10% 0.02 30)        /* Negro muy profundo con tinte cálido */
--color-bg-secondary: oklch(14% 0.015 30)    /* Tono大地 */
--color-bg-card: oklch(18% 0.012 30)          /* Cards */
--color-accent: oklch(65% 0.15 45)            /* Cobre/amber — el color de identidad */
--color-accent-muted: oklch(50% 0.08 45)      /* Versión menos saturada */
--color-text: oklch(95% 0.01 30)              /* Casi blanco con tinte cálido */
--color-text-muted: oklch(70% 0.015 30)       /* Gris cálido */
--color-success: oklch(45% 0.08 150)         /* Verde lima - acción positiva */
```

### Usage
- Background principal: muy oscuro, casi negro
- Acentos: cobre/amber en headlines, CTAs, highlights
- Textos: crema antiguo (#F5F0E8) - nunca blanco puro
- Énfasis: weight y size, nunca gradient text

## Typography

### Font Stack
```
--font-display: 'Cormorant Garamond', Georgia, serif  /* Títulos elegantes */
--font-body: 'DM Sans', system-ui, sans-serif         /* Body legible */
--font-mono: 'Space Grotesk', monospace               /* Datos/teléfonos */
```

### Scale
- Hero: clamp(3rem, 8vw, 6rem)
- H1: clamp(2.5rem, 5vw, 4rem)
- H2: clamp(2rem, 4vw, 3rem)
- H3: clamp(1.5rem, 3vw, 2rem)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Hierarchy
- Contraste mínimo 1.25 entre steps
- Display (hero): weight 600-700
- Headings: weight 500-600
- Body: weight 400

## Spacing System
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
```

### Rhythm
- Sections: 96px (desktop), 64px (mobile)
- Componentes: variar padding — no monotonía
- Cards: padding generoso, no spacing uniforme

## Components

### Navbar
- Sticky con backdrop blur
- Logo a izquierda
- Links centrados
- CTA WhatsApp a derecha
- Mobile: hamburger menu slide-in

### Hero
- Video/image background con overlay oscuro
- Badge superior (badge-like, no gradient)
- Title principal con gradiente en text (no gradient text)
- CTA button prominent

### Cards (Horarios, Zonas)
- NO identical card grid — variar layout
- Hover: lift + border glow
- Content: icon + time/zone + status

### Form (Ordenar)
- Dark card background
- Inputs con border subtle
- Focus state: accent border + glow
- Submit button: WhatsApp green (no monotone)

### Floating WhatsApp
- Fixed bottom-right
- Pulse animation sutil
- Tooltip en hover

## Motion

### Transitions
- Default: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out)
- Reveal: 0.8s para entrada de secciones

### Animations
- No CSS layout properties animados
- No bounce, no elastic
- Hover: scale(1.02-1.05), translateY(-4px)
- Reveal: fade + translateY(30px)

## Absolute Bans (Enforce)
- ❌ Side-stripe borders (border-left/right > 1px)
- ❌ Gradient text en títulos
- ❌ Glassmorphism decorativo
- ❌ Hero-metric template
- ❌ Identical card grids (horarios todos iguales)
- ❌ Modal como primera opción
- ❌ Em dashes en copy

## Responsive
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (adaptive)
- Desktop: > 1024px (full layout)