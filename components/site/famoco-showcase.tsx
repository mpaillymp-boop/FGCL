"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/site/primitives";
import { FAMOCO_PRODUCTS } from "@/lib/site-data";

const STATS = [
  { icon: Globe2, value: "10+", label: "pays africains servis" },
  { icon: ShieldCheck, value: "100%", label: "terminaux sécurisés" },
  { icon: Truck, value: "24/7", label: "support local FGCL" },
];

/**
 * Visual showcase between the products hero and the "Pourquoi Famoco" section.
 * Two opposite-direction infinite rows of terminal product shots, plus a small
 * stats strip — fills the previous empty space without being noisy.
 */
export function FamocoShowcase() {
  const loop1 = [...FAMOCO_PRODUCTS, ...FAMOCO_PRODUCTS];
  const loop2 = [...FAMOCO_PRODUCTS.slice().reverse(), ...FAMOCO_PRODUCTS.slice().reverse()];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Une gamme complète
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Des terminaux pensés pour le{" "}
              <span className="text-primary">terrain</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Du paiement sans contact à la traçabilité logistique, chaque
              terminal Famoco est conçu pour les environnements exigeants et
              déployé par FGCL en Afrique centrale.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {STATS.map((s) => {
                const StatIcon = s.icon;
                return (
                  <li
                    key={s.label}
                    className="rounded-[var(--radius)] border border-border bg-card p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <StatIcon size={18} strokeWidth={1.75} />
                    </span>
                    <p className="mt-3 text-xl font-bold text-foreground">
                      {s.value}
                    </p>
                    <p className="text-xs leading-snug text-muted-foreground">
                      {s.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-x-6 -top-6 -bottom-6 -z-10 rounded-[var(--radius)] bg-card" />
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="animate-scroll-left gap-4 py-3">
                {loop1.map((p, i) => (
                  <div
                    key={`a-${i}`}
                    className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[var(--radius)] border border-border bg-background"
                  >
                    <div className="relative h-20 w-20">
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="animate-scroll-right mt-3 gap-4 py-3">
                {loop2.map((p, i) => (
                  <div
                    key={`b-${i}`}
                    className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[var(--radius)] border border-border bg-background"
                  >
                    <div className="relative h-20 w-20">
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
