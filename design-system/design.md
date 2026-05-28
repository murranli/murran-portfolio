# Design System Governance

This portfolio is a design-system-driven, MDX-native publishing system.

## Implementation Order

1. Check this document.
2. Check existing primitives.
3. Check existing semantic tokens.
4. Extend the system only when the need is reusable.
5. Update this document.
6. Implement the page or content.

## Token Policy

Components consume semantic tokens only. Foundation tokens live in `/styles/foundation.css`, while themes map semantic tokens in `/styles/themes.css`.

## Primitive Policy

Primitive components define layout grammar and stay content-agnostic.

Current primitives:

- `Container`
- `Section`
- `Stack`
- `Flow`
- `Prose`
- `Media`
- `MediaBlock`
- `SplitHero`
- `ThemeToggle`

## MDX Policy

MDX is structured editorial content. It may use approved content and narrative components, but it must not contain global layout logic, inline styling, hardcoded spacing, arbitrary Tailwind classes, or theme-specific behavior.
