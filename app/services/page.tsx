import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
} from "@/components/site/primitives";
import { SERVICES, SERVICE_STEPS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Applications métier, automatisation des processus, reporting et tableaux de bord, infogérance et infrastructure. FGCL vous accompagne de bout en bout.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        subtitle="Accompagnement & solutions"
        title="Des services pensés pour vos opérations"
        lead="De la digitalisation de vos process à la formation de vos équipes, nous couvrons toute la chaîne de valeur de votre projet."
      />

      {/* Services proposés */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading title="Ce que nous faisons" />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <RevealItem
                key={s.title}
                className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Accompagnement — déroulé */}
      <section className="relative overflow-hidden border-t border-border bg-card py-20 md:py-28">
        <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <SectionHeading
            title="Comment nous vous accompagnons"
            lead="Une démarche claire, du cadrage de votre besoin jusqu'à l'adoption par vos équipes."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SERVICE_STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.05}
                className="flex gap-5 rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon name={step.icon} size={22} />
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <PrimaryCTA href="/contact">Parlons de votre projet</PrimaryCTA>
          </div>
        </Container>
      </section>
    </>
  );
}
