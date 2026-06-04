import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { Container, SectionHeading, GhostCTA } from "@/components/site/primitives";
import { KEY_FIGURES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Basée à Douala, FGCL accompagne entreprises et administrations dans la traçabilité, la digitalisation des processus métiers et la sécurité des données en Afrique centrale.",
};

const PARTNERS = [
  {
    name: "Daxium",
    logo: "/logos/daxium.svg",
    text: "Plateforme no-code puissante qui permet de créer des applications métier sur mesure, rapidement et sans compétence technique.",
    href: "https://www.daxium.com/",
    cta: "En savoir plus sur Daxium",
  },
  {
    name: "Famoco",
    logo: "/logos/famoco.svg",
    text: "Terminaux mobiles sécurisés, conçus pour les environnements exigeants et les usages terrain.",
    href: "https://www.famoco.com/",
    cta: "En savoir plus sur Famoco",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        subtitle="Digitaliser. Optimiser. Sécuriser."
        title="À propos de FGCL"
        lead="Des solutions numériques fiables et accessibles pour des organisations plus performantes."
      />

      {/* Qui sommes-nous */}
      <section className="bg-navy-900 py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading title="Qui sommes-nous ?" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                Basée à Douala, FGCL accompagne entreprises et administrations dans
                la traçabilité, la digitalisation des processus métiers,
                l&apos;optimisation opérationnelle, l&apos;infogérance, la sécurité,
                l&apos;infrastructure et le matériel informatique.
              </p>
              <p>
                En s&apos;appuyant sur des plateformes no-code comme Daxium et des
                terminaux sécurisés comme Famoco, nous rendons accessible une
                expérience numérique sécurisée, simple et performante, pensée pour
                les réalités du terrain en Afrique centrale.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden
              className="glow-blue pointer-events-none absolute -inset-6 opacity-30"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/seed/fgcl-team-douala-tech/1200/900"
              alt="Équipe FGCL au travail sur des solutions numériques à Douala"
              className="relative w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-navy-950/60"
            />
          </Reveal>
        </Container>
      </section>

      {/* Partenaires technologiques */}
      <section className="border-y border-white/5 bg-navy-950 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos partenaires technologiques"
            lead="Nous nous appuyons sur des plateformes et des équipements éprouvés pour livrer vite et bien."
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {PARTNERS.map((p) => (
              <RevealItem
                key={p.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-navy-850 p-8"
              >
                <span className="flex h-16 w-fit items-center justify-center rounded-xl bg-white px-5 py-3 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    className="h-9 w-auto"
                  />
                </span>
                <p className="mt-6 flex-1 text-base leading-relaxed text-slate-300">
                  {p.text}
                </p>
                <div className="mt-7">
                  <GhostCTA href={p.href} external>
                    {p.cta}
                  </GhostCTA>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Chiffres clés */}
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
        <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_FIGURES.map((f) => (
              <Reveal key={f.label} className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-fgcl-500 md:text-6xl">
                  <Counter value={f.value} prefix={f.prefix} suffix={f.suffix} />
                </div>
                <p className="mt-3 text-sm text-slate-300">{f.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
