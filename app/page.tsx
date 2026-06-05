import { ArrowRight, Check } from "lucide-react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { Reveal } from "@/components/site/reveal";
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

// IT / digitalization media for the cinematic scroll-expand hero.
const HERO_BG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop";
const HERO_VIDEO = "https://www.youtube.com/watch?v=WY3VlhJKWY0";

export default function HomePage() {
  return (
    <>
      {/* Hero — cinematic scroll-expansion media */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={HERO_VIDEO}
        bgImageSrc={HERO_BG}
        title="Digitaliser. Optimiser. Sécuriser."
        date="FGCL · Afrique centrale"
        scrollToExpand="Faites défiler pour agrandir"
        textBlend
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Des solutions numériques pensées pour le terrain
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            FGCL conçoit des applications métier sur mesure pour optimiser vos
            processus, fiabiliser vos données et piloter votre performance en
            temps réel.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCTA href="/contact">Parlons de votre projet</PrimaryCTA>
            <GhostCTA href="/services" tone="light">
              Découvrir nos services
            </GhostCTA>
          </div>
        </div>
      </ScrollExpandMedia>

      {/* Nos expertises — editorial numbered list */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos expertises"
            lead="Quatre leviers concrets pour digitaliser vos opérations et fiabiliser vos données."
          />
          <div className="mt-12 border-t border-slate-200">
            {EXPERTISES.map((e, i) => (
              <Reveal
                key={e.title}
                delay={i * 0.04}
                className="grid items-baseline gap-3 border-b border-slate-200 py-8 md:grid-cols-[auto_1fr_1.6fr] md:gap-10"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-electric-600">
                  0{i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-ink md:text-2xl">
                  {e.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Notre mission */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              title="Transformer vos défis opérationnels en avantages compétitifs"
              lead="Nous accompagnons les entreprises dans leur transformation digitale grâce à des solutions innovantes, simples et rapides à déployer."
            />
            <div className="mt-8">
              <PrimaryCTA href="/contact">Parlons de votre projet</PrimaryCTA>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {MISSION_CARDS.map((m, i) => (
              <Reveal
                key={m.title}
                delay={i * 0.05}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
                  <Icon name={m.icon} size={22} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ils nous font confiance */}
      <section className="border-y border-slate-200 bg-white py-16">
        <Container>
          <p className="text-center text-sm font-medium text-slate-500">
            Ils nous font confiance
          </p>
        </Container>
        <div className="mt-10">
          <LogoMarquee />
        </div>
      </section>

      {/* Digitalisation des entreprises */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="La digitalisation au service des entreprises en Afrique centrale"
            lead="De nombreuses organisations fonctionnent encore avec des processus papier et des suivis manuels difficiles à exploiter. Nous accompagnons cette transition de manière progressive et pragmatique."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {DIGITAL_DEFINITIONS.map((d) => (
              <Reveal
                key={d.term}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIGITAL_BENEFITS.map((b, i) => (
                <Reveal
                  key={b}
                  delay={i * 0.04}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fgcl-500 text-ink">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-slate-700">{b}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-ink py-24">
        <Container className="text-center">
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
