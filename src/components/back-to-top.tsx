"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";

export function BackToTop() {
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 hover:bg-transparent"
      onClick={() => window?.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon className="size-5" />
    </Button>
  );
}
