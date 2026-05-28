import Link from "next/link";

import { Container } from "@/design-system/primitives";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/projects", label: "项目" },
  { href: "/writing", label: "写作" },
  { href: "/notes", label: "笔记" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner" width="wide">
        <Link className="site-header__brand" href="/">
          <span className="site-header__mark">PP</span>
          <span>个人作品集系统</span>
        </Link>
        <nav className="site-nav" aria-label="主导航">
          <div className="site-nav__links">
            {navItems.map((item) => (
              <Link className="site-nav__link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
