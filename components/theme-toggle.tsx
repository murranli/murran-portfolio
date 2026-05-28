"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";

const labels = {
  system: "跟随系统",
  dawn: "浅色阅读",
  ink: "深色阅读"
} as const;

export function ThemeToggle() {
  const { choice, resolvedTheme, setChoice } = useTheme();
  const nextChoice = choice === "system" ? "dawn" : choice === "dawn" ? "ink" : "system";
  const Icon = choice === "system" ? Monitor : resolvedTheme === "ink" ? Moon : Sun;

  return (
    <button
      type="button"
      className="icon-button"
      aria-label={`切换主题，当前为${labels[choice]}`}
      title={`切换主题，当前为${labels[choice]}`}
      onClick={() => setChoice(nextChoice)}
    >
      <Icon aria-hidden="true" size={18} strokeWidth={2} />
    </button>
  );
}
