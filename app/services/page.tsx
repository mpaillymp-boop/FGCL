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
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading title="Ce que nous faisons" />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <RevealItem
                key={s.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-electric-500/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600 transition-colors group-hover:bg-fgcl-500/20 group-hover:text-fgcl-600">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Accompagnement — déroulé */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-20 md:py-28">
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
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fgcl-500 text-ink">
                    <Icon name={step.icon} size={22} />
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
