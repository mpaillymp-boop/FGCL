"use client";

import { useState } from "react";

type AccordionImage = { src: string; alt: string };

/**
 * Accordéon d'images sans libellé (cartes qui s'élargissent au survol).
 * Même principe visuel que FamocoAccordion, mais sans texte sur les photos.
 */
export function ImageAccordion({ images }: { images: readonly AccordionImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-row items-center gap-3 overflow-x-auto p-2">
      {images.map((img, index) => (
        <div
          key={img.src}
          onMouseEnter={() => setActiveIndex(index)}
          className={`relative h-[360px] shrink-0 cursor-pointer overflow-hidden rounded-[var(--radius)] border border-border transition-all duration-700 ease-in-out ${
            index === activeIndex ? "w-[320px]" : "w-[56px]"
          }`}
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
  );
}
