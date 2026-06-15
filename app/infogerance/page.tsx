import type { Metadata } from "next";
import {
  Headset,
  Network,
  ShieldCheck,
  Server,
  DatabaseBackup,
  KeyRound,
  MonitorSmartphone,
  Activity,
  Headphones,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { ItServicesStack } from "@/components/site/it-services-stack";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
} from "@/components/site/primitives";
import { IT_INFRA_SERVICES, IT_INFRA_VALUE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Infogérance & infrastructure IT",
  description:
    "FGCL assure l'infogérance, le support, la sécurité et l'évolution des infrastructures IT de ses clients en Afrique centrale : réseau, serveurs, sauvegarde, supervision, licences et postes de travail.",
};

const ICONS: Record<string, LucideIcon> = {
  Headset,
  Network,
  ShieldCheck,
  Server,
  DatabaseBackup,
  KeyRound,
  MonitorSmartphone,
  Activity,
  Headphones,
};

export default function InfogerancePage() {
  return (
    <>
      <PageHero
        subtitle="Socle IT & infrastructure"
        title="Un système d'information fiable pour soutenir vos opérations"
        lead="FGCL assure l'infogérance, le support, la sécurité et l'évolution des infrastructures IT de ses clients. Notre rôle est de garantir la continuité, la sécurité et la performance de votre environnement informatique, tout en accompagnant vos projets de transformation digitale."
      >
        <PrimaryCTA href="/contact">Auditer votre environnement IT</PrimaryCTA>
      </PageHero>

      {/* Nos services IT */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Nos services"
            lead="Un accompagnement complet de votre système d'information, au quotidien."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {IT_INFRA_SERVICES.map((s) => {
              const ServiceIcon = ICONS[s.icon] ?? Server;
              return (
                <RevealItem
                  key={s.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ServiceIcon size={22} strokeWidth={1.75} />
                  </span>
                  <span className="text-base font-semibold text-foreground">
                    {s.label}
                  </span>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Notre valeur */}
      <section className="border-y border-border bg-card py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Notre valeur"
            lead="Un partenaire IT de proximité, réactif et engagé sur la continuité de vos opérations."
          />
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IT_INFRA_VALUE.map((v) => (
              <RevealItem
                key={v}
                className="flex items-start gap-3 rounded-[var(--radius)] border border-border bg-background p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-foreground">{v}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Nos services IT — cartes empilées (expertise, infogérance, distribution) */}
      <ItServicesStack />

      {/* Lien avec la digitalisation */}
      <section className="bg-secondary py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Une digitalisation efficace repose sur une infrastructure fiable
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70">
            Une infrastructure sécurisée et correctement administrée est le socle
            de vos applications métiers et de vos opérations terrain.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCTA href="/contact">Auditer votre environnement IT</PrimaryCTA>
            <Link
              href="/digitalisation"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.97]"
            >
              Découvrir la digitalisation
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
