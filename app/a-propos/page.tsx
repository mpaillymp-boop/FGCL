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
      <section className="bg-white py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading title="Qui sommes-nous ?" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Basée à Douala (Cameroun), FGCL accompagne entreprises et
                administrations dans la traçabilité, la digitalisation des
                processus métiers, l&apos;optimisation opérationnelle, ainsi que
                l&apos;infogérance, la sécurité, l&apos;infrastructure et le matériel
                informatique.
              </p>
              <p>
                En s&apos;appuyant sur la plateforme no-code de Daxium et les
                terminaux sécurisés de Famoco, nous rendons accessible une
                expérience numérique sécurisée, simple et performante, pensée pour
                les réalités du terrain en Afrique centrale.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/seed/fgcl-team-douala-tech/1200/900"
              alt="Équipe FGCL au travail sur des solutions numériques à Douala"
              className="relative w-full rounded-2xl border border-slate-200 object-cover shadow-xl"
            />
          </Reveal>
        </Container>
      </section>

      {/* Partenaires technologiques */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos partenaires technologiques"
            lead="Nous nous appuyons sur des plateformes et des équipements éprouvés pour livrer vite et bien."
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {PARTNERS.map((p) => (
              <RevealItem
                key={p.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="flex h-16 w-fit items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={`Logo ${p.name}`} className="h-9 w-auto" />
                </span>
                <p className="mt-6 flex-1 text-base leading-relaxed text-slate-600">
                  {p.text}
                </p>
                <div className="mt-7">
                  <GhostCTA href={p.href} external tone="light">
                    {p.cta}
                  </GhostCTA>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Chiffres clés */}
      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_FIGURES.map((f) => (
              <Reveal key={f.label} className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-electric-600 md:text-6xl">
                  <Counter value={f.value} prefix={f.prefix} suffix={f.suffix} />
                </div>
                <p className="mt-3 text-sm text-slate-600">{f.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
