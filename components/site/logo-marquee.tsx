/**
 * Infinite right-to-left logo marquee. Logos are duplicated in the DOM so the
 * loop never shows a gap; the CSS animation pauses on hover (see globals.css).
 * Logos are normalized to white via filter so they read on the navy surface,
 * matching the brief ("logos en blanc selon le rendu final").
 */
import { CLIENT_LOGOS } from "@/lib/site-data";

export function LogoMarquee() {
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="marquee-mask relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="marquee-track items-center gap-16 py-2">
        {loop.map((logo, i) => (
          <li key={`${logo.name}-${i}`} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="h-9 w-auto max-w-[150px] object-contain opacity-60 brightness-0 invert transition-all duration-300 hover:opacity-100 hover:brightness-100 hover:invert-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
