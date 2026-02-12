"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--brand)/0.08)] gradient-border h-full",
        className
      )}
    >
      <Link href={href || "#"} className="block" target="_blank">
        {image && (
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className={cn(
                "w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-105"
              )}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute top-3 right-3 rounded-full bg-background/80 p-1.5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              <ArrowUpRightIcon className="size-3.5 text-foreground" />
            </div>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className={cn("font-semibold leading-tight tracking-tight")}>
            {title}
          </h3>
          <time className="shrink-0 text-xs text-muted-foreground">
            {dates}
          </time>
        </div>

        <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>

        <div className="mt-auto space-y-3">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  className="rounded-md px-1.5 py-0.5 text-[10px] font-medium"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-center gap-1.5 pt-1">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge
                    key={idx}
                    className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] transition-colors hover:bg-primary/90"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
