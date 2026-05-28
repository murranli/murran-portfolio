# murran-portfolio

以设计系统驱动、基于 MDX 的个人出版型作品集，强调长期维护性、中文内容体验与 AI 协作。

## 技术方向

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- MDX
- pnpm

## 项目治理

本项目不是一次性的作品集页面，而是一个 MDX-native、design-system-driven、AI-maintainable 的长期出版系统。

新增 UI 前必须先检查：

1. `ARCHITECTURE.md`
2. `design-system/design.md`
3. 现有 tokens
4. 现有 primitives

依赖必须极度克制。优先使用内部 primitive、CSS token、原生平台能力和小型内部工具，不因便利随意引入第三方库。

## 包管理

本项目只使用 pnpm。

- 使用 `package.json` 中声明的精确 `packageManager` 版本。
- 保留 `pnpm-lock.yaml`。
- 不生成 `package-lock.json`、`yarn.lock` 或 `bun.lockb`。

常用命令：

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm typecheck
corepack pnpm build
```
