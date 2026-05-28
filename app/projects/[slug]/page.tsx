import { notFound } from "next/navigation";

import { Container, Prose, Section, Stack } from "@/design-system/primitives";
import { formatChineseDate, projects } from "@/lib/content";

const entries = {
  "portfolio-system": () => import("@/content/projects/portfolio-system.mdx")
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const loadEntry = entries[slug as keyof typeof entries];

  if (!loadEntry) {
    notFound();
  }

  const { default: Content, frontmatter } = await loadEntry();

  return (
    <Section>
      <Container width="reading">
        <Stack space="xl">
          <header className="page-header">
            <span className="eyebrow">{frontmatter.category}</span>
            <h1 className="page-title">{frontmatter.title}</h1>
            <p className="page-description">{frontmatter.description}</p>
            {frontmatter.date ? <p className="page-description">{formatChineseDate(frontmatter.date)}</p> : null}
          </header>
          <Prose>
            <Content />
          </Prose>
        </Stack>
      </Container>
    </Section>
  );
}
