import type { ReactNode } from "react";
import { ParticleField } from "@/components/site/particle-field";
import { Container } from "@/components/site/primitives";

/**
 * Compact inner-page hero with the particle field behind it. Used on every
 * page except the home page (which has its own full-height hero).
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
    <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-16 md:pt-40 md:pb-24">
      <ParticleField className="opacity-60" />
      <div
        aria-hidden
        className="glow-blue pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[620px] -translate-x-1/2 opacity-40"
      />
      <Container className="relative z-10">
        {subtitle && (
          <p className="mb-4 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-wide text-fgcl-500">
            {subtitle}
          </p>
        )}
        <h1 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {lead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
