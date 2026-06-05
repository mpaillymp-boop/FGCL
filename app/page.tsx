import { ArrowRight, Check } from "lucide-react";
import { HomeHero } from "@/components/site/home-hero";
import { AfricaScene } from "@/components/site/africa-scene";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
  GhostCTA,
} from "@/components/site/primitives";
import {
  EXPERTISES,
  MISSION_CARDS,
  DIGITAL_DEFINITIONS,
  DIGITAL_BENEFITS,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Section 2 — Nos expertises rapides */}
      <section className="border-b border-slate-200 bg-slate-50 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos expertises"
            lead="Quatre leviers concrets pour digitaliser vos opérations et fiabiliser vos données."
          />
          <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERTISES.map((e) => (
              <RevealItem
                key={e.title}
                className="group relative bg-white p-7 transition-colors hover:bg-slate-50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600 transition-colors group-hover:bg-fgcl-500/20 group-hover:text-fgcl-600">
                  <Icon name={e.icon} size={24} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-ink">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Section — La donnée connectée (Afrique → Cameroun) */}
      <AfricaScene />

      {/* Section 3 — Notre mission */}
      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              title="Transformer vos défis opérationnels en avantages compétitifs"
              lead="Nous accompagnons les entreprises dans leur transformation digitale grâce à des solutions innovantes, simples et rapides à déployer."
            />
            <div className="mt-8 hidden lg:block">
              <PrimaryCTA href="/contact">Parlons de votre projet</PrimaryCTA>
            </div>
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {MISSION_CARDS.map((m) => (
              <RevealItem
                key={m.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-electric-500/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
                  <Icon name={m.icon} size={22} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Section 4 — Ils nous font confiance */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <Container>
          <p className="text-center text-sm font-medium text-slate-500">
            Ils nous font confiance
          </p>
        </Container>
        <div className="mt-10">
          <LogoMarquee />
        </div>
      </section>

      {/* Section 5 — Digitalisation des entreprises */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <SectionHeading
            title="La digitalisation au service des entreprises en Afrique centrale"
            lead="De nombreuses organisations fonctionnent encore avec des processus papier et des suivis manuels difficiles à exploiter. Nous accompagnons cette transition de manière progressive et pragmatique."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {DIGITAL_DEFINITIONS.map((d) => (
              <Reveal
                key={d.term}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-electric-600">
                  {d.term}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{d.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-ink">
              Pourquoi passer au digital ?
            </h3>
            <RevealGroup className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIGITAL_BENEFITS.map((b) => (
                <RevealItem
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fgcl-500 text-ink">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-slate-700">{b}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* CTA final — bande bleu nuit de clôture */}
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div
          aria-hidden
          className="glow-blue pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 opacity-30"
        />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Prêt à fiabiliser vos données et piloter votre performance ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-300">
            Discutons de votre projet. Notre équipe vous propose une solution
            adaptée à vos réalités terrain.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCTA href="/contact">Parlons de votre projet</PrimaryCTA>
            <GhostCTA href="/produits">
              Voir nos produits
              <ArrowRight size={16} />
            </GhostCTA>
          </div>
        </Container>
      </section>
    </>
  );
}
