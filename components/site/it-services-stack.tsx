"use client";

import { Cpu, ServerCog, PackageCheck, type LucideIcon } from "lucide-react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { Container } from "@/components/site/primitives";
import { IT_SERVICES } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  Cpu,
  ServerCog,
  PackageCheck,
};

// Very light accents, one per card (sober corporate).
const ACCENT: Record<string, { chip: string; num: string; bar: string }> = {
  blue: { chip: "bg-primary/10 text-primary", num: "text-primary", bar: "bg-primary" },
  emerald: {
    chip: "bg-emerald-50 text-emerald-600",
    num: "text-emerald-600",
    bar: "bg-emerald-500",
  },
  amber: {
    chip: "bg-amber-50 text-amber-600",
    num: "text-amber-600",
    bar: "bg-amber-500",
  },
};

export function ItServicesStack() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-2 md:gap-12 xl:gap-16">
        <div className="md:sticky md:top-28 md:h-fit md:py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Au-delà de la digitalisation
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Nos services <span className="text-primary">IT</span>
          </h2>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground">
            FGCL ne se limite pas à la digitalisation : nous accompagnons aussi
            l&apos;ensemble de votre système d&apos;information, de l&apos;expertise
            à la distribution de matériels et logiciels.
          </p>
        </div>

        <ContainerScroll className="space-y-6 pb-6">
          {IT_SERVICES.map((s, index) => {
            const ServiceIcon = ICONS[s.icon] ?? Cpu;
            const accent = ACCENT[s.accent] ?? ACCENT.blue;
            return (
              <CardSticky
                key={s.id}
                index={index}
                incrementZ={6}
                style={{ top: `calc(7rem + ${index * 0.9}rem)` }}
                className="overflow-hidden rounded-[var(--radius)] border border-border bg-background p-8 shadow-md"
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.chip}`}
                  >
                    <ServiceIcon size={24} strokeWidth={1.75} />
                  </span>
                  <span className={`text-2xl font-bold ${accent.num}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </CardSticky>
            );
          })}
        </ContainerScroll>
      </Container>
    </section>
  );
}
