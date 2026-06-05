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

/** Primary brand CTA (yellow). Label is short, single-line at desktop. */
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
    "group inline-flex items-center justify-center gap-2 rounded-lg bg-fgcl-500 px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-fgcl-500/10 transition-all hover:bg-fgcl-400 active:scale-[0.97]";
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

/** Secondary ghost CTA. `tone` adapts the stroke/text to a dark or light bg. */
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
      ? "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:border-electric-500 hover:bg-slate-50 active:scale-[0.97]"
      : "inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-electric-500/60 hover:bg-white/10 active:scale-[0.97]";
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

/** Stacked section heading: title on top, optional lead below (no split-header). */
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
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-[1.1] tracking-tight text-navy-950 sm:text-4xl md:text-5xl">
        {title}
        {highlight && <span className="text-electric-600"> {highlight}</span>}
      </h2>
      {lead && (
        <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}
