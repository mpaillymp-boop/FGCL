import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
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
  SOLUTIONS,
  HOME_PARTNERS,
  FAMOCO_CATEGORIES,
  MISSION_CARDS,
  DIGITAL_DEFINITIONS,
  DIGITAL_BENEFITS,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* Hero — white particle network */}
      <AetherFlowHero />

      {/* Nos solutions & savoir-faire — editorial numbered list */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos solutions & savoir-faire"
            lead="Trois leviers concrets pour digitaliser, tracer et piloter vos opérations terrain."
          />
          <div className="mt-12 border-t border-border">
            {SOLUTIONS.map((e, i) => (
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

      {/* Pourquoi FGCL */}
      <section className="border-y border-border bg-card py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading title="Pourquoi FGCL" />
          <Reveal className="flex items-center">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Une expertise terrain, une proximité locale et des technologies
              éprouvées pour accompagner vos projets de A à Z :{" "}
              <span className="font-medium text-foreground">
                cadrage, déploiement, formation, support et amélioration
                continue.
              </span>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Nos partenaires technologiques */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos partenaires technologiques"
            lead="Deux références complémentaires que FGCL intègre, adapte et déploie sur votre terrain."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {HOME_PARTNERS.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 0.06}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary md:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125" />
                <div className="relative flex h-12 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="relative mt-7 text-xl font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
                {p.href.startsWith("/") ? (
                  <Link
                    href={p.href}
                    className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    En savoir plus
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    En savoir plus
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                )}
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

      {/* L'expertise Famoco, déployée par FGCL */}
      <section className="border-y border-border bg-card py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Notre partenaire
            </p>
            <SectionHeading title="L'expertise Famoco, déployée par FGCL" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Famoco est une entreprise française spécialisée dans les terminaux
              mobiles sécurisés dédiés aux usages professionnels. FGCL accompagne
              les entreprises dans le choix, le déploiement, la configuration et la
              maintenance de leurs terminaux.
            </p>
            <div className="mt-8">
              <PrimaryCTA href="/produits">Découvrir nos terminaux</PrimaryCTA>
            </div>
          </div>

          <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FAMOCO_CATEGORIES.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 0.05}
                className={cn(
                  "group relative h-72 shrink-0 overflow-hidden rounded-2xl border border-border",
                  i === 0 ? "w-60" : "w-44"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                  {c.label}
                </span>
              </Reveal>
            ))}
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
