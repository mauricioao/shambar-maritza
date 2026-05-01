# Interaction Design

## The Eight Interactive States

Every interactive element needs these states designed:

| State | When | Visual Treatment |
|-------|------|------------------|
| **Default** | At rest | Base styling |
| **Hover** | Pointer over (not touch) | Subtle lift, color shift |
| **Focus** | Keyboard/programmatic focus | Visible ring |
| **Active** | Being pressed | Pressed in, darker |
| **Disabled** | Not interactive | Reduced opacity, no pointer |
| **Loading** | Processing | Spinner, skeleton |
| **Error** | Invalid state | Red border, icon, message |
| **Success** | Completed | Green check, confirmation |

## Focus Rings: Do Them Right

**Never `outline: none` without replacement.** Use `:focus-visible`:

```css
button:focus { outline: none; }
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

## Form Design

**Placeholders aren't labels**—always use visible `<label>` elements. **Validate on blur**, not on every keystroke. Place errors **below** fields with `aria-describedby`.

## Loading States

**Optimistic updates**: Show success immediately, rollback on failure. **Skeleton screens > spinners**.

## The Popover API

For tooltips, dropdowns, use native popovers:

```html
<button popovertarget="menu">Open menu</button>
<div id="menu" popover>...</div>
```

## Dropdown Positioning

Use `position: fixed` with anchor positioning or portals to avoid overflow clipping.

## Keyboard Navigation

Use roving tabindex for tab groups, provide skip links for keyboard users.

## Gesture Discoverability

Swipe-to-delete needs hints—partially reveal, onboarding, or provide visible fallback.

---

**Avoid**: Removing focus indicators. Touch targets <44x44px. Generic error messages.