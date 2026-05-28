# Personal Portfolio System Architecture

This project is not a traditional portfolio website.

It is a long-term maintainable, design-system-driven, MDX-native personal publishing system. The core goal is not visual complexity, but sustainable growth with minimal entropy.

## System Identity

The system should evolve as:

Design System
+
Editorial Publishing System
+
AI-Maintainable Architecture

It should not become a collection of isolated pages or one-off visual experiments.

## Core Principles

### 1. Content First

All UI exists to support content. The primary layout model is vertical document flow.

Except for the hero section, pages should follow a predictable text and media narrative structure.

### 2. Design-System Driven

No visual implementation should bypass the design system.

All styling decisions must originate from:

1. Foundation tokens
2. Semantic tokens
3. Theme mapping
4. Primitive components
5. Content

The design system is the single source of truth.

### 3. MDX Native

The site is document-driven. Projects, writing, notes, and future content should exist as MDX documents.

MDX is structured editorial content, not layout logic. MDX components may enhance narrative flow, but must not control global layout structure.

### 4. AI Maintainable

The architecture must remain understandable by both humans and AI agents.

Prefer explicit structure, semantic naming, predictable hierarchy, low abstraction complexity, and minimal hidden logic.

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- MDX
- pnpm

## Package Management

This project uses pnpm only.

- `packageManager` in `package.json` must specify an exact pnpm version.
- `pnpm-lock.yaml` must be kept.
- `package-lock.json`, `yarn.lock`, and `bun.lockb` must not be generated or committed.
- Dependency versions in `package.json` should be explicit, not `latest`.

## Dependency Philosophy

Dependencies must be extremely constrained.

Before adding a dependency, confirm that the need cannot be solved with:

1. Existing primitives
2. Existing CSS tokens
3. Native browser or platform APIs
4. Small internal utilities
5. Existing framework capabilities

Do not introduce UI frameworks, animation libraries, state management libraries, or theme libraries unless this document is first updated with a clear architectural reason.

Every proposed new dependency must document:

- Why it is necessary.
- What alternatives were considered.
- Why the existing system cannot solve the problem.
- What long-term maintenance cost it introduces.

## Theme Architecture

Themes are atmosphere systems, not skins.

A theme defines visual mood, typography expression, surface behavior, color semantics, and spatial atmosphere. Themes must never directly modify component logic.

Resolution priority:

1. User-selected preference
2. `prefers-color-scheme`
3. Local time fallback
4. Default theme

Components consume semantic tokens only.

## Typography

Typography has two layers:

- Structural typography: stable scale, line height, reading rhythm, and layout behavior.
- Expressive typography: theme-dependent font family, personality, feature settings, and tone.

Typography participates in atmosphere design, but must not create page-level exceptions without documentation.

## Token Layers

Foundation tokens are low-level immutable primitives such as spacing, radius, color primitives, shadow, and motion.

Semantic tokens are the only tokens components consume, such as:

- `--surface-page`
- `--surface-raised`
- `--surface-muted`
- `--text-primary`
- `--text-secondary`
- `--border-subtle`
- `--accent-primary`
- `--font-body`
- `--font-display`

Theme mapping assigns semantic tokens to foundation tokens or concrete theme values.

## Primitive System

The UI system is primitive-driven rather than component-driven.

Core primitives:

- `Container`
- `Section`
- `Stack`
- `Flow`
- `Prose`
- `Media`
- `MediaBlock`
- `SplitHero`
- `ThemeToggle`

Primitive rules:

- Remain content-agnostic.
- Avoid business naming.
- Avoid fixed dimensions unless required by stable UI mechanics.
- Consume semantic tokens only.
- Remain mobile-first.
- Preserve intrinsic layout behavior.

## MDX Governance

Allowed MDX component categories:

- Content components: image, video, quote, code block, callout.
- Narrative components: process step, timeline, metrics, before/after.
- Limited layout components: grid and columns, used sparingly.

MDX must not contain:

- Inline styling.
- Hardcoded spacing.
- Arbitrary Tailwind usage.
- Page-level layout logic.
- Theme-specific logic.

Forbidden examples:

```tsx
<div style={{ color: "red" }} />
<div className="text-red-500 mt-12" />
```

## Responsive Strategy

The system uses fluid typography, fluid spacing, intrinsic layout, container constraints, and minimal breakpoint dependency.

Mobile flow is primary. Desktop layouts are enhancements of the same content flow rather than separate systems.

## Motion

Motion should remain subtle and purposeful.

Avoid decorative animations, excessive transitions, heavy parallax, and complex choreography. Respect `prefers-reduced-motion`.

## File Structure

```text
/app
/components
/content
  /projects
  /writing
  /notes
/design-system
  /tokens
  /themes
  /primitives
  design.md
/lib
/public
/styles
```

## Governance Workflow

All new UI must follow this process:

1. Check `ARCHITECTURE.md`.
2. Check `design-system/design.md`.
3. Check existing primitives.
4. Check existing tokens.
5. Extend the system only if necessary.
6. Update governance documentation.
7. Implement.

No component should bypass this workflow.
