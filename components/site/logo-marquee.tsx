/**
 * Infinite right-to-left logo marquee. Logos are duplicated in the DOM so the
 * loop never shows a gap; the CSS animation pauses on hover (see globals.css).
 * Each slot has a fixed width so the track keeps its length (and the motion
 * stays visible) even if a remote logo fails to load.
 */
import { CLIENT_LOGOS } from "@/lib/site-data";

export function LogoMarquee() {
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="marquee-mask relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="marquee-track py-2">
        {loop.map((logo, i) => (
          <li
            key={`${logo.name}-${i}`}
            className="flex w-[180px] shrink-0 items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="h-10 w-auto max-w-[150px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
