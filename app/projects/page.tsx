import { ContentCard } from "@/components/content-card";
import { Container, Section, Stack } from "@/design-system/primitives";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <Section>
      <Container width="wide">
        <Stack space="xl">
          <header className="page-header">
            <span className="eyebrow">Projects</span>
            <h1 className="page-title">项目</h1>
            <p className="page-description">
              所有项目都以 MDX 文档维护，并通过统一的设计系统组件进入页面。
            </p>
          </header>
          <div className="content-grid">
            {projects.map((project) => (
              <ContentCard
                description={project.description}
                href={`/projects/${project.slug}`}
                key={project.slug}
                meta={project.category}
                title={project.title}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
