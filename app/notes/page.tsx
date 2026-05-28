import { Container, Section, Stack } from "@/design-system/primitives";

export default function NotesPage() {
  return (
    <Section>
      <Container width="reading">
        <Stack space="lg">
          <header className="page-header">
            <span className="eyebrow">Notes</span>
            <h1 className="page-title">笔记</h1>
            <p className="page-description">
              笔记区已经预留。后续可以在 `/content/notes` 中新增短记录，并沿用同一套 MDX 治理规则。
            </p>
          </header>
          <ul className="kicker-list">
            <li>优先记录可复用的方法、项目观察和设计决策。</li>
            <li>保持轻量，但不绕开 token、primitive 和内容结构。</li>
          </ul>
        </Stack>
      </Container>
    </Section>
  );
}
