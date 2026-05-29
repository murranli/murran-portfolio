# 设计系统治理

这个作品集是一个 design-system-driven、MDX-native 的出版系统。

## 实现顺序

1. 检查本文档。
2. 检查现有 primitives。
3. 检查现有 semantic tokens。
4. 只有当需求可复用时才扩展系统。
5. 更新本文档。
6. 实现页面或内容。

## Token 策略

组件只能消费 semantic tokens。Foundation tokens 位于 `/styles/foundation.css`，主题在 `/styles/themes.css` 中映射 semantic tokens。

## Primitive 策略

Primitive 组件定义布局语法，并保持内容无关。

当前 primitives：

- `Container`
- `Section`
- `Stack`
- `Flow`
- `Prose`
- `Media`
- `MediaBlock`
- `SplitHero`
- `ThemeToggle`

## MDX 策略

MDX 是结构化编辑内容。它可以使用获准的内容组件和叙事组件，但不得包含全局布局逻辑、内联样式、硬编码间距、任意 Tailwind 类或主题特定行为。
