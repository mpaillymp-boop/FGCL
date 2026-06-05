import { ArrowRight, Check } from "lucide-react";
import AetherFlowHero from "@/components/ui/aether-flow-hero";
import { TrustCarousel } from "@/components/site/trust-carousel";
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

export default function HomePage() {
  return (
    <>
      {/* Hero — white particle network */}
      <AetherFlowHero />

      {/* Nos expertises — editorial numbered list */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos expertises"
            lead="Quatre leviers concrets pour digitaliser vos opérations et fiabiliser vos données."
          />
          <div className="mt-12 border-t border-border">
            {EXPERTISES.map((e, i) => (
              <Reveal
                key={e.title}
                delay={i * 0.04}
                className="grid items-baseline gap-3 border-b border-border py-8 md:grid-cols-[auto_1fr_1.6fr] md:gap-10"
              >
                <span className="text-sm font-semibold text-primary">0{i + 1}</span>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  {e.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Notre mission */}
      <section className="bg-card py-20 md:py-28">
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
                className="rounded-[var(--radius)] border border-border bg-background p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={m.icon} size={22} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ils nous font confiance */}
      <section className="border-y border-border bg-background py-16 md:py-20">
        <Container>
          <p className="text-center text-sm font-medium text-muted-foreground">
            Ils nous font confiance
          </p>
        </Container>
        <div className="mt-10">
          <TrustCarousel />
        </div>
      </section>

      {/* Digitalisation des entreprises */}
      <section className="bg-card py-20 md:py-28">
        <Container>
          <SectionHeading
            title="La digitalisation au service des entreprises en Afrique centrale"
            lead="De nombreuses organisations fonctionnent encore avec des processus papier et des suivis manuels difficiles à exploiter. Nous accompagnons cette transition de manière progressive et pragmatique."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {DIGITAL_DEFINITIONS.map((d) => (
              <Reveal
                key={d.term}
                className="rounded-[var(--radius)] border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold text-primary">{d.term}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.text}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground">
              Pourquoi passer au digital ?
            </h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIGITAL_BENEFITS.map((b, i) => (
                <Reveal
                  key={b}
                  delay={i * 0.04}
                  className="flex items-start gap-3 rounded-[var(--radius)] border border-border bg-background p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-foreground">{b}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA final — dark band */}
      <section className="bg-secondary py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Prêt à fiabiliser vos données et piloter votre performance ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70">
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
