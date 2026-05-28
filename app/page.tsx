import Image from "next/image";
import Link from "next/link";

import { ContentCard } from "@/components/content-card";
import { Container, Flow, Section, Stack } from "@/design-system/primitives";
import { projects, writing } from "@/lib/content";

const principles = [
  {
    title: "内容优先",
    description: "页面围绕中文叙事、作品记录和长期阅读体验展开。"
  },
  {
    title: "系统驱动",
    description: "视觉从 token、语义映射和 primitive 出发，避免一次性样式。"
  },
  {
    title: "MDX 原生",
    description: "项目、写作和笔记都以文档方式生长，减少页面复制。"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__image" aria-hidden="true">
          <Image
            src="/images/portfolio-system-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <Container width="wide">
          <div className="home-hero__content">
            <span className="eyebrow">MDX Native Portfolio</span>
            <h1 className="hero-title" id="home-title">
              个人作品集系统
            </h1>
            <p className="hero-copy">
              一个以中文内容为主、由设计系统治理、面向长期维护和 AI 协作的作品发布框架。
            </p>
            <div className="hero-actions">
              <Link className="button" data-variant="primary" href="/projects">
                查看项目
              </Link>
              <Link className="button" data-variant="secondary" href="/writing">
                阅读写作
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container width="wide">
          <Stack space="xl">
            <Flow>
              <span className="eyebrow">System Principles</span>
              <h2 className="page-title">让作品集像出版系统一样增长。</h2>
              <p className="page-description">
                初版框架把设计规范、内容结构和主题机制拆开，让新增内容时优先复用系统能力，而不是重新发明页面。
              </p>
            </Flow>

            <div className="intro-grid">
              {principles.map((item) => (
                <article className="content-card" key={item.title}>
                  <span className="content-card__meta">原则</span>
                  <span>
                    <h3 className="content-card__title">{item.title}</h3>
                    <p className="content-card__description">{item.description}</p>
                  </span>
                </article>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section tone="muted">
        <Container width="wide">
          <Stack space="lg">
            <Flow>
              <span className="eyebrow">Latest Content</span>
              <h2 className="page-title">当前内容入口</h2>
            </Flow>
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
    </>
  );
}
