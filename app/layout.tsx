import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider, ThemeScript } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "个人作品集系统",
    template: "%s | 个人作品集系统"
  },
  description: "一个以中文内容、MDX 发布、设计系统和长期可维护性为核心的个人作品集框架。"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <div className="site-shell">
            <SiteHeader />
            <main className="site-main">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
