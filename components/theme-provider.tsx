"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeChoice = "system" | "dawn" | "ink";
type ResolvedTheme = "dawn" | "ink";

type ThemeContextValue = {
  choice: ThemeChoice;
  resolvedTheme: ResolvedTheme;
  setChoice: (theme: ThemeChoice) => void;
};

const storageKey = "portfolio-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "dawn";
  }

  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "ink";
  }

  if (window.matchMedia?.("(prefers-color-scheme: light)").matches) {
    return "dawn";
  }

  const hour = new Date().getHours();
  return hour >= 19 || hour < 7 ? "ink" : "dawn";
}

function applyTheme(choice: ThemeChoice) {
  const resolvedTheme = choice === "system" ? resolveSystemTheme() : choice;
  document.documentElement.dataset.theme = resolvedTheme;
  return resolvedTheme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [choice, setChoiceState] = useState<ThemeChoice>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dawn");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    const initialChoice = stored === "dawn" || stored === "ink" || stored === "system" ? stored : "system";
    setChoiceState(initialChoice);
    setResolvedTheme(applyTheme(initialChoice));
  }, []);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) {
      return;
    }

    const onChange = () => {
      if (choice === "system") {
        setResolvedTheme(applyTheme("system"));
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [choice]);

  const value = useMemo<ThemeContextValue>(() => {
    return {
      choice,
      resolvedTheme,
      setChoice(theme) {
        window.localStorage.setItem(storageKey, theme);
        setChoiceState(theme);
        setResolvedTheme(applyTheme(theme));
      }
    };
  }, [choice, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}

export function ThemeScript() {
  const code = `
    (() => {
      const key = "${storageKey}";
      const stored = window.localStorage.getItem(key);
      const valid = stored === "dawn" || stored === "ink" || stored === "system";
      const choice = valid ? stored : "system";
      const hour = new Date().getHours();
      const fallback = hour >= 19 || hour < 7 ? "ink" : "dawn";
      const resolved = choice === "system"
        ? window.matchMedia?.("(prefers-color-scheme: dark)").matches
          ? "ink"
          : window.matchMedia?.("(prefers-color-scheme: light)").matches
            ? "dawn"
            : fallback
        : choice;
      document.documentElement.dataset.theme = resolved;
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
