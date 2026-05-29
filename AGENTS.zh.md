# AI 治理

本项目重视长期系统稳定性，高于短期实现便利。

系统必须保持：

* design-system-driven
* MDX-native
* AI-maintainable
* editorial-first
* dependency-minimal

避免：

* 不必要的抽象
* 不必要的依赖
* 组件膨胀
* 重复模式
* 硬编码视觉值
* 一次性实现

---

# 每个任务开始前

实现任何变更前：

1. 重新阅读 `ARCHITECTURE.md`
2. 重新阅读 `design-system/design.md`
3. 检查现有 primitives
4. 检查现有 semantic tokens
5. 检查问题是否可以用现有系统解决
6. 避免引入不必要依赖
7. 优先扩展 primitives，而不是创建孤立组件
8. 优先使用 semantic tokens，而不是硬编码值
9. 保留内在布局行为
10. 保留纵向编辑内容流

完成以上检查前，不要开始实现。

# AI Agent 规则

本文档定义 Codex 和其他 AI agent 在本仓库中的工作方式。

## 项目身份

这是一个 MDX-native、design-system-driven、AI-maintainable 的个人出版型作品集。它应像编辑系统一样增长，而不是变成一组孤立的落地页。

除非任务明确要求其他语言，否则产品和内容语言以中文为主。

## 包管理器

只使用 pnpm。

- 精确 pnpm 版本通过 `package.json` 中的 `packageManager` 声明。
- 保留 `pnpm-lock.yaml`。
- 不得生成或提交 `package-lock.json`、`yarn.lock`、`bun.lockb`。
- 安装工作流不得使用 npm、yarn 或 bun。
- 当 pnpm 不可直接使用时，优先使用 `corepack pnpm <command>`。

## 依赖策略

依赖必须极度克制。

添加任何依赖前，先写明：

1. 为什么该依赖是必要的。
2. 考虑过哪些替代方案。
3. 为什么现有 primitives、CSS tokens、平台原生 API 或小型内部工具无法解决问题。
4. 长期维护成本是什么。

除非 `ARCHITECTURE.md` 已经包含明确理由，否则不要引入新的 UI 框架、动画库、状态管理库或主题库。如果理由缺失，必须先更新 `ARCHITECTURE.md`，并保持解释具体。

便利性不足以成为添加包的理由。

## UI 治理

实现任何新 UI 前：

1. 检查 `ARCHITECTURE.md`。
2. 检查 `design-system/design.md`。
3. 检查现有 tokens。
4. 检查现有 primitives。
5. 只有当需求可复用时才扩展设计系统。
6. 更新相关治理文档。
7. 实现 UI。

## Token 规则

组件只能消费 semantic tokens。

组件和 MDX 中禁止：

- 硬编码颜色。
- 硬编码间距。
- 硬编码字体。
- 主题特定逻辑。
- 用任意 Tailwind 类做视觉决策。
- 用内联样式做视觉决策。

使用 semantic tokens，例如 `--surface-page`、`--surface-raised`、`--text-primary`、`--text-secondary`、`--border-subtle`、`--accent-primary`、`--font-body` 和 `--font-display`。

Foundation tokens 和主题映射维护在 `/styles` 中。组件不应绕过 semantic tokens。

## Primitive 规则

创建新组件前，优先使用内部 primitives。

当前 primitives 位于 `/design-system/primitives`，用于定义布局语法：

- `Container`
- `Section`
- `Stack`
- `Flow`
- `Prose`
- `Media`
- `MediaBlock`
- `SplitHero`

Primitives 必须保持内容无关、移动优先、内在尺寸，并由 semantic tokens 驱动。

## MDX 规则

MDX 是结构化编辑内容。它可以使用获准的叙事组件，但不得拥有全局布局。

MDX 不得包含内联样式、任意 Tailwind 工具类、页面级布局逻辑或主题特定行为。

## 变更纪律

保持编辑范围贴合请求。

治理任务中不要新增功能。更新文档、包管理或维护策略时，不要重构无关代码。

TypeScript 或包相关变更后运行 `corepack pnpm typecheck`。当变更影响 Next.js 配置、MDX、路由或生产行为时，运行 `corepack pnpm build`。

## 行为建议

- 不确定时，优先选择更简单的系统。
- 每个新依赖都必须证明它的长期维护成本是合理的。
