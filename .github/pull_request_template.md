# Pull Request

## Summary

- 

## Change Type

- [ ] Content / MDX
- [ ] Design system / tokens / primitives
- [ ] App / routing / framework
- [ ] Governance / documentation
- [ ] Maintenance / tooling

## Governance Checklist

- [ ] I re-read `ARCHITECTURE.md`.
- [ ] I re-read `design-system/design.md`.
- [ ] I checked existing primitives before creating new UI.
- [ ] I checked existing semantic tokens before adding visual values.
- [ ] I preserved intrinsic layout behavior and vertical editorial flow.
- [ ] I avoided one-off implementations and duplicated patterns.

## Design System Checklist

- [ ] Components consume semantic tokens only.
- [ ] No hardcoded color, spacing, or font values were added.
- [ ] No arbitrary Tailwind visual decisions were added in MDX.
- [ ] New primitives or tokens, if any, are reusable and documented.

## Dependency Checklist

- [ ] No new dependency was added.
- [ ] If a dependency was added, its necessity, alternatives, and long-term maintenance cost are documented.
- [ ] No new UI framework, animation library, state management library, or theme library was introduced without architectural approval.

## Package Manager Checklist

- [ ] pnpm was used for install and lockfile changes.
- [ ] `pnpm-lock.yaml` is preserved.
- [ ] No `package-lock.json`, `yarn.lock`, or `bun.lockb` was generated.

## Verification

- [ ] `corepack pnpm typecheck`
- [ ] `corepack pnpm build`
- [ ] Browser/manual verification, if user-facing behavior changed

## Notes

- 
