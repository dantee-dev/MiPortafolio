"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const nextTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-[var(--foreground)] shadow-sm transition hover:border-[var(--accent)] hover:bg-white/14"
      onClick={toggleTheme}
      type="button"
    >
      <Icon size={17} aria-hidden="true" />
    </button>
  );
}
