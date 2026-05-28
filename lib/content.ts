export type ContentSummary = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
};

export const projects: ContentSummary[] = [
  {
    slug: "portfolio-system",
    title: "个人作品集系统",
    description: "一个由设计系统、MDX 内容和主题治理共同驱动的长期作品集框架。",
    category: "系统架构",
    date: "2026-05-28"
  }
];

export const writing: ContentSummary[] = [
  {
    slug: "design-governance",
    title: "设计治理先于页面实现",
    description: "记录这个作品集如何通过 token、primitive 和 MDX 规则降低长期维护熵。",
    category: "设计系统",
    date: "2026-05-28"
  }
];

export function formatChineseDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}
