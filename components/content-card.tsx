import Link from "next/link";

type ContentCardProps = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export function ContentCard({ href, title, description, meta }: ContentCardProps) {
  return (
    <Link className="content-card" href={href}>
      <span className="content-card__meta">{meta}</span>
      <span>
        <h3 className="content-card__title">{title}</h3>
        <p className="content-card__description">{description}</p>
      </span>
    </Link>
  );
}
