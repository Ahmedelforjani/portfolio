"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const newMode = theme === "light" ? "dark" : "light";

    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(newMode);
      return;
    }

    const { clientX: x, clientY: y } = event;
    const root = document.documentElement;

    root.style.setProperty("--x", `${x}px`);
    root.style.setProperty("--y", `${y}px`);

    document.startViewTransition(() => {
      setTheme(newMode);
    });
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 rounded-full"
      onClick={toggleTheme}
    >
      <SunIcon className="h-5 w-5 text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-5 w-5 text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
