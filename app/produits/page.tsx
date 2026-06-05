import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Activity,
  Wrench,
  ClipboardCheck,
  RotateCcw,
  MonitorSmartphone,
  Shield,
  Nfc,
  BatteryCharging,
  ScanLine,
  Lock,
  Boxes,
  UserRound,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, SectionHeading } from "@/components/site/primitives";
import { FAMOCO_PRODUCTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Terminaux mobiles sécurisés Famoco, Repair Center en Afrique centrale et tags NFC / RFID personnalisés. FGCL est représentant Famoco au Cameroun.",
};

const TERMINAL_PARTS = [
  { icon: MonitorSmartphone, label: "Écran tactile", note: "Affichage durci, lisible en extérieur." },
  { icon: Shield, label: "Coque renforcée", note: "Conçue pour les environnements exigeants." },
  { icon: Nfc, label: "Module NFC", note: "Lecture sans contact, badges et tags." },
  { icon: BatteryCharging, label: "Batterie longue durée", note: "Une journée d'opérations terrain." },
  { icon: ScanLine, label: "Scanner", note: "Capture rapide des codes-barres." },
  { icon: Lock, label: "Système sécurisé", note: "OS verrouillé, données protégées." },
];

const REPAIR_STEPS = [
  { icon: Activity, label: "Diagnostic" },
  { icon: Wrench, label: "Réparation" },
  { icon: ClipboardCheck, label: "Test" },
  { icon: RotateCcw, label: "Remise en service" },
];

const NFC_FLOW = [
  { icon: Nfc, label: "Tag NFC / RFID", note: "Le point de départ : un identifiant unique." },
  { icon: Boxes, label: "Équipement", note: "Identifié, contrôlé et suivi." },
  { icon: UserRound, label: "Agent terrain", note: "Scanne et renseigne en un geste." },
  { icon: Smartphone, label: "Application mobile", note: "La donnée est captée sans ressaisie." },
  { icon: LayoutDashboard, label: "Tableau de bord", note: "Pilotage en temps réel chez FGCL." },
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
      <section className="bg-background py-16 md:py-20">
        <Container>
          <Reveal className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            <p>
              Famoco est une entreprise française spécialisée dans les terminaux
              mobiles sécurisés dédiés aux usages professionnels. FGCL accompagne
              les entreprises dans le choix, le déploiement, la configuration et la
              maintenance de leurs terminaux.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Anatomie d'un terminal */}
      <section className="border-y border-border bg-card py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Anatomie d'un terminal Famoco"
            lead="Chaque terminal réunit les composants essentiels aux opérations terrain."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TERMINAL_PARTS.map((p) => {
              const PartIcon = p.icon;
              return (
                <RevealItem
                  key={p.label}
                  className="rounded-[var(--radius)] border border-border bg-background p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <PartIcon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {p.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Grille produits */}
      <section id="terminaux" className="bg-background py-20 md:py-28">
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
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="relative h-52 bg-card">
                    <Image
                      src={p.img}
                      alt={`Terminal ${p.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-border p-6">
                    <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
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
      <section className="border-y border-border bg-card py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              title="Repair Center Famoco en Afrique centrale"
              lead="FGCL dispose d'un centre de réparation dédié aux terminaux Famoco : maintenance, diagnostic, réparation et suivi des équipements utilisés sur le terrain."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
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
                  className="flex flex-col items-center gap-3 rounded-[var(--radius)] border border-border bg-background p-7 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <StepIcon size={24} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{s.label}</span>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Tags NFC / RFID */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Tags NFC & RFID personnalisés"
            lead="Le tag est le point de départ d'une donnée terrain fiable : de l'équipement à votre tableau de bord, sans ressaisie."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {NFC_FLOW.map((n, i) => {
              const FlowIcon = n.icon;
              return (
                <Reveal
                  key={n.label}
                  delay={i * 0.06}
                  className="relative rounded-[var(--radius)] border border-border bg-card p-5 text-center"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FlowIcon size={24} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{n.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {n.note}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
