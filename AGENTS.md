# AI Agent Rules

This file defines how Codex and other AI agents should work in this repository.

## Project Identity

This is an MDX-native, design-system-driven, AI-maintainable personal publishing portfolio. It should grow like an editorial system, not a set of isolated landing pages.

Use Chinese as the primary product/content language unless a task explicitly requests otherwise.

## Package Manager

Use pnpm only.

- The exact pnpm version is declared in `package.json` via `packageManager`.
- Keep `pnpm-lock.yaml`.
- Do not generate or commit `package-lock.json`, `yarn.lock`, or `bun.lockb`.
- Do not run npm, yarn, or bun for install workflows.
- Prefer `corepack pnpm <command>` when pnpm is not directly available.

## Dependency Policy

Dependencies must be extremely constrained.

Before adding any dependency, write down:

1. Why the dependency is necessary.
2. What alternatives were considered.
3. Why existing primitives, CSS tokens, native platform APIs, or small internal utilities cannot solve the problem.
4. The long-term maintenance cost.

Do not introduce new UI frameworks, animation libraries, state management libraries, or theme libraries unless `ARCHITECTURE.md` already contains a clear reason. If the reason is missing, update `ARCHITECTURE.md` first and keep the explanation specific.

Convenience is not enough reason to add a package.

## UI Governance

Before implementing any new UI:

1. Check `ARCHITECTURE.md`.
2. Check `design-system/design.md`.
3. Check existing tokens.
4. Check existing primitives.
5. Extend the design system only when a need is reusable.
6. Update the relevant governance document.
7. Implement the UI.

## Token Rules

Components can consume semantic tokens only.

Forbidden in components and MDX:

- Hardcoded colors.
- Hardcoded spacing.
- Hardcoded fonts.
- Theme-specific logic.
- Arbitrary Tailwind classes for visual decisions.
- Inline styles for visual decisions.

Use semantic tokens such as `--surface-page`, `--surface-raised`, `--text-primary`, `--text-secondary`, `--border-subtle`, `--accent-primary`, `--font-body`, and `--font-display`.

Foundation tokens and theme mappings are maintained in `/styles`. Components should not reach around semantic tokens.

## Primitive Rules

Prefer internal primitives before creating new components.

Current primitives live in `/design-system/primitives` and define layout grammar:

- `Container`
- `Section`
- `Stack`
- `Flow`
- `Prose`
- `Media`
- `MediaBlock`
- `SplitHero`

Primitives must stay content-agnostic, mobile-first, intrinsically sized, and semantic-token driven.

## MDX Rules

MDX is structured editorial content. It may use approved narrative components, but it must not own global layout.

MDX must not include inline styling, arbitrary Tailwind utilities, page-level layout logic, or theme-specific behavior.

## Change Discipline

Keep edits scoped to the request.

Do not add functionality during governance tasks. Do not refactor unrelated code while updating documentation, package management, or maintenance policy.

Run `corepack pnpm typecheck` after TypeScript or package changes. Run `corepack pnpm build` when changes affect Next.js configuration, MDX, routing, or production behavior.
