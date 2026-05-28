import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cx } from "@/lib/cx";

type Space = "xs" | "sm" | "md" | "lg" | "xl";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  width?: "standard" | "reading" | "wide";
};

export function Container({ className, width = "standard", ...props }: ContainerProps) {
  return <div className={cx("ds-container", className)} data-width={width} {...props} />;
}

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "default" | "muted";
};

export function Section({ className, tone = "default", ...props }: SectionProps) {
  return <section className={cx("ds-section", className)} data-tone={tone} {...props} />;
}

type StackProps<T extends ElementType = "div"> = {
  as?: T;
  space?: Space;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Stack<T extends ElementType = "div">({
  as,
  className,
  space = "md",
  ...props
}: StackProps<T>) {
  const Component = as ?? "div";
  return <Component className={cx("ds-stack", className)} data-space={space} {...props} />;
}

type FlowProps<T extends ElementType = "div"> = {
  as?: T;
  space?: "sm" | "md" | "lg";
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Flow<T extends ElementType = "div">({
  as,
  className,
  space = "md",
  ...props
}: FlowProps<T>) {
  const Component = as ?? "div";
  return <Component className={cx("ds-flow", className)} data-space={space} {...props} />;
}

export function Prose({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return <article className={cx("ds-prose ds-flow", className)} {...props} />;
}

export function Media({ className, ...props }: ComponentPropsWithoutRef<"figure">) {
  return <figure className={cx("ds-media", className)} {...props} />;
}

type MediaBlockProps = ComponentPropsWithoutRef<"div"> & {
  align?: "stack" | "split";
};

export function MediaBlock({ className, align = "stack", ...props }: MediaBlockProps) {
  return <div className={cx("ds-media-block", className)} data-align={align} {...props} />;
}

export function SplitHero({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return <section className={cx("ds-split-hero", className)} {...props} />;
}
