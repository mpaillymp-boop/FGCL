import type { Metadata } from "next";
import { ArrowUpRight, Activity, Wrench, ClipboardCheck, RotateCcw } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { FamocoExploded } from "@/components/site/famoco-exploded";
import { NfcFlow } from "@/components/site/nfc-flow";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, SectionHeading } from "@/components/site/primitives";
import { FAMOCO_PRODUCTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Terminaux mobiles sécurisés Famoco, Repair Center en Afrique centrale et tags NFC / RFID personnalisés. FGCL est représentant Famoco au Cameroun.",
};

const REPAIR_STEPS = [
  { icon: Activity, label: "Diagnostic" },
  { icon: Wrench, label: "Réparation" },
  { icon: ClipboardCheck, label: "Test" },
  { icon: RotateCcw, label: "Remise en service" },
];

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        subtitle="Représentant Famoco au Cameroun"
        title="Terminaux Famoco"
        lead="Des appareils mobiles sécurisés pour la traçabilité, le paiement, le contrôle d'accès, la logistique et la collecte de données sur le terrain."
      />

      {/* Intro */}
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <Reveal className="max-w-3xl text-base leading-relaxed text-slate-300">
            <p>
              Famoco est une entreprise française spécialisée dans les terminaux
              mobiles sécurisés dédiés aux usages professionnels. FGCL accompagne
              les entreprises dans le choix, le déploiement, la configuration et la
              maintenance de leurs terminaux.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Vue éclatée au scroll */}
      <FamocoExploded />

      {/* Grille produits */}
      <section id="terminaux" className="border-y border-white/5 bg-navy-950 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos terminaux"
            lead="Une gamme complète pour chaque usage terrain. Découvrez chaque modèle sur le site Famoco."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FAMOCO_PRODUCTS.map((p) => (
              <RevealItem key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-850 transition-all hover:-translate-y-1 hover:border-electric-500/40"
                >
                  <div className="relative flex h-52 items-center justify-center bg-gradient-to-b from-navy-800 to-navy-850 p-6">
                    <div
                      aria-hidden
                      className="glow-blue pointer-events-none absolute inset-0 opacity-20"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={`Terminal ${p.name}`}
                      loading="lazy"
                      className="relative max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {p.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fgcl-500">
                      Voir le produit
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Repair Center */}
      <section className="bg-navy-900 py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              title="Repair Center Famoco en Afrique centrale"
              lead="FGCL dispose d'un centre de réparation dédié aux terminaux Famoco : maintenance, diagnostic, réparation et suivi des équipements utilisés sur le terrain."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              Notre objectif : garantir la continuité des opérations de nos clients
              grâce à un service de proximité, réactif et adapté aux contraintes
              locales.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4">
            {REPAIR_STEPS.map((s) => {
              const StepIcon = s.icon;
              return (
                <RevealItem
                  key={s.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-navy-850 p-7 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/12 text-glow-400">
                    <StepIcon size={24} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold text-white">{s.label}</span>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Tags NFC / RFID intro */}
      <section className="border-t border-white/5 bg-navy-950 py-20 md:py-24">
        <Container>
          <SectionHeading
            title="Tags NFC & RFID personnalisés"
            lead="Identifier, contrôler et suivre des équipements, des lieux, des passages ou des opérations terrain. Des tags adaptés à votre environnement : industrie, sécurité, logistique, maintenance ou contrôle d'accès."
          />
        </Container>
      </section>

      {/* Flux de données NFC au scroll */}
      <NfcFlow />
    </>
  );
}
