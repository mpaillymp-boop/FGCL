"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/primitives";

type AccordionData = { id: number; title: string; imageUrl: string };

const FAMOCO_IMAGES: AccordionData[] = [
  { id: 1, title: "Terminaux Famoco", imageUrl: "https://i.ytimg.com/vi/N4yrC6veh8s/maxresdefault.jpg" },
  { id: 2, title: "Biométrie", imageUrl: "https://techafricanews.com/wp-content/uploads/2021/07/Famoco-biometrics.jpg" },
  { id: 3, title: "Paiement", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4wqA_1FBR4i86uDGhTyhEc3Or9ApdfMJmw&s" },
  { id: 4, title: "Contrôle d'accès", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5LGzkgv3R0iYLwgnY_-KcuCQVEzYKMCppw&s" },
  { id: 5, title: "Collecte terrain", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFv8fK_b8YS01K8JGFh0ZCglf7zvSqnqXRQ&s" },
];

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: AccordionData;
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      className={`relative h-[420px] cursor-pointer overflow-hidden rounded-[var(--radius)] transition-all duration-700 ease-in-out ${
        isActive ? "w-[340px]" : "w-[56px]"
      }`}
      onMouseEnter={onMouseEnter}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          const t = e.currentTarget;
          t.onerror = null;
          t.src = "https://placehold.co/400x450/0f1419/ffffff?text=Famoco";
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <span
        className={`absolute whitespace-nowrap text-lg font-semibold text-white transition-all duration-300 ease-in-out ${
          isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90"
        }`}
      >
        {item.title}
      </span>
    </div>
  );
};

export function FamocoAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Notre partenaire
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              L&apos;expertise Famoco, déployée par FGCL
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Famoco est une entreprise française spécialisée dans les terminaux
              mobiles sécurisés dédiés aux usages professionnels. FGCL accompagne
              les entreprises dans le choix, le déploiement, la configuration et la
              maintenance de leurs terminaux.
            </p>
            <div className="mt-8">
              <Link
                href="#terminaux"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                Découvrir nos terminaux
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-2">
              {FAMOCO_IMAGES.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
