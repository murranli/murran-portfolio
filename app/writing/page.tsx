import { ContentCard } from "@/components/content-card";
import { Container, Section, Stack } from "@/design-system/primitives";
import { writing } from "@/lib/content";

export default function WritingPage() {
  return (
    <Section>
      <Container width="wide">
        <Stack space="xl">
          <header className="page-header">
            <span className="eyebrow">Writing</span>
            <h1 className="page-title">写作</h1>
            <p className="page-description">
              写作区用于沉淀设计系统、内容治理、项目复盘和方法论笔记。
            </p>
          </header>
          <div className="content-grid">
            {writing.map((post) => (
              <ContentCard
                description={post.description}
                href={`/writing/${post.slug}`}
                key={post.slug}
                meta={post.category}
                title={post.title}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
