"use client";

import { useState } from "react";

type AccordionImage = { src: string; alt: string };

/**
 * Cas d'usage en images.
 * - Mobile : grille simple (jamais de débordement horizontal).
 * - Desktop (md+) : accordéon identique à FamocoAccordion (survol).
 */
export function ImageAccordion({ images }: { images: readonly AccordionImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Mobile : grille */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius)] border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop : accordéon (comme Famoco) */}
      <div className="hidden flex-row items-center justify-center gap-3 overflow-x-auto p-2 md:flex">
        {images.map((img, index) => (
          <button
            type="button"
            key={img.src}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            aria-label={img.alt}
            className={`relative h-[420px] shrink-0 cursor-pointer overflow-hidden rounded-[var(--radius)] transition-all duration-700 ease-in-out ${
              index === activeIndex ? "w-[340px]" : "w-[56px]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </>
  );
}
