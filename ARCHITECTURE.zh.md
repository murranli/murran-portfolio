# 个人作品集系统架构

这个项目不是传统意义上的作品集网站。

它是一个面向长期维护、由设计系统驱动、以 MDX 为原生内容格式的个人出版系统。核心目标不是视觉复杂度，而是在尽可能低的熵增下实现可持续增长。

## 系统身份

这个系统应当演进为：

设计系统
+
编辑出版系统
+
AI 可维护架构

它不应变成一组彼此割裂的页面，或一次性的视觉实验集合。

## 核心原则

### 1. 内容优先

所有 UI 都服务于内容。主要布局模型是纵向文档流。

除 Hero 区域外，页面应遵循可预测的文本与媒体叙事结构。

### 2. 设计系统驱动

任何视觉实现都不应绕过设计系统。

所有样式决策必须来自：

1. Foundation tokens
2. Semantic tokens
3. Theme mapping
4. Primitive components
5. Content

设计系统是唯一事实来源。

### 3. MDX 原生

网站由文档驱动。项目、写作、笔记以及未来内容都应以 MDX 文档存在。

MDX 是结构化编辑内容，不是布局逻辑。MDX 组件可以增强叙事流，但不能控制全局布局结构。

### 4. AI 可维护

架构必须同时能被人类和 AI agent 理解。

优先选择显式结构、语义化命名、可预测层级、低抽象复杂度和尽量少的隐藏逻辑。

## 技术栈

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- MDX
- pnpm

## 包管理

本项目只使用 pnpm。

- `package.json` 中的 `packageManager` 必须声明精确的 pnpm 版本。
- 必须保留 `pnpm-lock.yaml`。
- 不得生成或提交 `package-lock.json`、`yarn.lock`、`bun.lockb`。
- `package.json` 中的依赖版本应使用明确版本，不使用 `latest`。

## 依赖哲学

依赖必须极度克制。

新增依赖前，必须先确认需求无法通过以下方式解决：

1. 现有 primitives
2. 现有 CSS tokens
3. 浏览器或平台原生 API
4. 小型内部工具函数
5. 现有框架能力

除非本文档先补充明确的架构理由，否则不得引入 UI 框架、动画库、状态管理库或主题库。

每个拟新增依赖都必须说明：

- 为什么它是必要的。
- 考虑过哪些替代方案。
- 为什么现有系统无法解决这个问题。
- 它会带来什么长期维护成本。

## 主题架构

主题是氛围系统，不是皮肤。

一个主题定义视觉情绪、字体表达、表面行为、颜色语义和空间氛围。主题绝不能直接修改组件逻辑。

解析优先级：

1. 用户选择的偏好
2. `prefers-color-scheme`
3. 本地时间兜底
4. 默认主题

组件只能消费 semantic tokens。

## 字体排印

字体排印分为两层：

- Structural typography：稳定的字号层级、行高、阅读节奏和布局行为。
- Expressive typography：依赖主题的字体族、字体性格、特性设置和视觉语气。

字体排印参与氛围设计，但不得在未记录的情况下制造页面级例外。

## Token 层级

Foundation tokens 是底层不可变 primitives，例如间距、圆角、颜色基础值、阴影和动效。

Semantic tokens 是组件唯一可以消费的 tokens，例如：

- `--surface-page`
- `--surface-raised`
- `--surface-muted`
- `--text-primary`
- `--text-secondary`
- `--border-subtle`
- `--accent-primary`
- `--font-body`
- `--font-display`

Theme mapping 将 semantic tokens 映射到 foundation tokens 或具体主题值。

## Primitive 系统

UI 系统由 primitives 驱动，而不是由业务组件驱动。

核心 primitives：

- `Container`
- `Section`
- `Stack`
- `Flow`
- `Prose`
- `Media`
- `MediaBlock`
- `SplitHero`
- `ThemeToggle`

Primitive 规则：

- 保持与内容无关。
- 避免业务命名。
- 除非稳定 UI 机制确实需要，否则避免固定尺寸。
- 只消费 semantic tokens。
- 保持移动优先。
- 保留内在布局行为。

## MDX 治理

允许的 MDX 组件类别：

- 内容组件：图片、视频、引用、代码块、callout。
- 叙事组件：流程步骤、时间线、指标、前后对比。
- 有限布局组件：grid 和 columns，应谨慎使用。

MDX 不得包含：

- 内联样式。
- 硬编码间距。
- 任意 Tailwind 用法。
- 页面级布局逻辑。
- 主题特定逻辑。

禁止示例：

```tsx
<div style={{ color: "red" }} />
<div className="text-red-500 mt-12" />
```

## 响应式策略

系统使用流体排印、流体间距、内在布局、容器约束，以及尽量少的断点依赖。

移动端内容流是主模型。桌面布局是同一内容流的增强，而不是另一套系统。

## 动效

动效应保持克制且有目的。

避免装饰性动画、过度 transition、重型视差和复杂编排。尊重 `prefers-reduced-motion`。

## 文件结构

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

## 治理工作流

所有新增 UI 必须遵循以下流程：

1. 检查 `ARCHITECTURE.md`。
2. 检查 `design-system/design.md`。
3. 检查现有 primitives。
4. 检查现有 tokens。
5. 仅在必要时扩展系统。
6. 更新治理文档。
7. 实现。

任何组件都不应绕过这个流程。
