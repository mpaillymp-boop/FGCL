/**
 * "Ils nous font confiance" — two rows of real client logos scrolling in
 * opposite directions (inspired by the integration-hero carousel), themed to
 * the FGCL palette. Each row is duplicated for a seamless loop and pauses on
 * hover (see globals.css).
 */
import { TRUST_LOGOS } from "@/lib/site-data";

const ROW1 = TRUST_LOGOS.slice(0, 7);
const ROW2 = TRUST_LOGOS.slice(7);

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-20 w-44 shrink-0 items-center justify-center rounded-[var(--radius)] border border-border bg-background px-5 shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="max-h-12 w-auto max-w-[130px] object-contain"
      />
    </div>
  );
}

export function TrustCarousel() {
  const row1 = [...ROW1, ...ROW1];
  const row2 = [...ROW2, ...ROW2];

  return (
    <div className="trust-mask relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="animate-scroll-left gap-6">
        {row1.map((logo, i) => (
          <LogoCard key={`r1-${i}`} {...logo} />
        ))}
      </div>
      <div className="animate-scroll-right mt-6 gap-6">
        {row2.map((logo, i) => (
          <LogoCard key={`r2-${i}`} {...logo} />
        ))}
      </div>
    </div>
  );
}
