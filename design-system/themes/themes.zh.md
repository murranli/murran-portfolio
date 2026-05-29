# 主题映射

主题将 semantic tokens 映射到 foundation tokens。

源文件：`/styles/themes.css`

当前主题：

- `dawn`：浅色编辑阅读氛围。
- `ink`：深色阅读氛围。

解析优先级：

1. 用户选择的偏好。
2. `prefers-color-scheme`。
3. 本地时间兜底。
4. 默认 `dawn` 主题。
