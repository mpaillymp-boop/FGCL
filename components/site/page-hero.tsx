import type { ReactNode } from "react";
import { Container } from "@/components/site/primitives";

/**
 * Compact inner-page hero (light theme).
 */
export function PageHero({
  title,
  subtitle,
  lead,
  children,
}: {
  title: ReactNode;
  subtitle?: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative z-10">
        {subtitle && (
          <p className="mb-4 text-sm font-semibold tracking-wide text-primary">
            {subtitle}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
