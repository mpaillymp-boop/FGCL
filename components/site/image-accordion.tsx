"use client";

import { useState } from "react";

type AccordionImage = { src: string; alt: string };

/**
 * Accordéon d'images sans libellé, pleine largeur et responsive.
 * Les cartes se partagent la largeur du conteneur (flex), la carte active
 * s'élargit. Survol sur desktop, tap sur mobile. Hauteur réduite sur mobile.
 */
export function ImageAccordion({ images }: { images: readonly AccordionImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full flex-row items-stretch gap-2 sm:gap-3">
      {images.map((img, index) => (
        <button
          type="button"
          key={img.src}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
          aria-label={img.alt}
          className={`relative h-[200px] cursor-pointer overflow-hidden rounded-[var(--radius)] border border-border transition-all duration-500 ease-in-out sm:h-[300px] md:h-[380px] ${
            index === activeIndex ? "flex-[5]" : "flex-[1]"
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
