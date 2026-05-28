import { notFound } from "next/navigation";

import { Container, Prose, Section, Stack } from "@/design-system/primitives";
import { formatChineseDate, writing } from "@/lib/content";

const entries = {
  "design-governance": () => import("@/content/writing/design-governance.mdx")
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return writing.map((post) => ({ slug: post.slug }));
}

export default async function WritingDetailPage({ params }: PageProps) {
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
