import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

import { Flow, MediaBlock } from "@/design-system/primitives";

function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="mdx-callout">
      <Flow space="sm">{children}</Flow>
    </aside>
  );
}

function Metrics({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <dl className="mdx-metrics">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    MediaBlock,
    Metrics,
    ...components
  };
}
