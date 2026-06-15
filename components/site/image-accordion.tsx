"use client";

import { useState } from "react";

type AccordionImage = { src: string; alt: string };

/**
 * Accordéon d'images sans libellé — dimensions et comportement identiques à
 * FamocoAccordion (h-[420px], cartes 340px / 56px, défilement contenu).
 */
export function ImageAccordion({ images }: { images: readonly AccordionImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-2">
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
  );
}
