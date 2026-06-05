import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-5 lg:px-8", className)}>{children}</div>
  );
}

/** Primary CTA (theme primary = X blue). */
export function PrimaryCTA({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    "group inline-flex items-center justify-center gap-2 rounded-[var(--radius)] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.97]";
  const inner = (
    <>
      {children}
      <ArrowRight
        size={17}
        strokeWidth={2.2}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Secondary ghost CTA. `tone` adapts to a light or dark background. */
export function GhostCTA({
  href,
  children,
  external = false,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  tone?: "dark" | "light";
}) {
  const cls =
    tone === "light"
      ? "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary active:scale-[0.97]"
      : "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.97]";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Stacked section heading. */
export function SectionHeading({
  title,
  lead,
  align = "left",
  highlight,
}: {
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  highlight?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
        {highlight && <span className="text-primary"> {highlight}</span>}
      </h2>
      {lead && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}
