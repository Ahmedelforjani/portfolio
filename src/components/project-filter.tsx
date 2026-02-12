"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "blockchain", label: "Blockchain" },
  { key: "web", label: "Web Apps" },
  { key: "education", label: "Education" },
] as const;

interface ProjectFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={cn(
            "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            active === cat.key
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {active === cat.key && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
