import type { Metadata } from "next";
import { Check, ScanLine, LayoutDashboard } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import {
  Container,
  SectionHeading,
  PrimaryCTA,
  GhostCTA,
} from "@/components/site/primitives";
import {
  DIGITAL_APPROACH,
  DAXIUM_USE_CASES,
  DAXIUM_VALUE,
  DAXIUM_SUPPORT,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Digitalisation — Applications métiers Daxium-Air",
  description:
    "FGCL crée des applications métiers web et mobiles avec Daxium-Air : formulaires, workflows, rapports automatisés, tableaux de bord, scan QR/NFC. Digitalisez vos opérations terrain en Afrique centrale.",
};

export default function DigitalisationPage() {
  return (
    <>
      <PageHero
        subtitle="Applications métiers Daxium-Air"
        title="Des applications métiers web et mobiles, rapidement déployées"
        lead="Daxium-Air permet de créer des applications métiers personnalisées pour les équipes terrain : formulaires, workflows, tâches, rapports automatisés, tableaux de bord, photos, signatures, géolocalisation et scan QR/NFC. FGCL adapte cette plateforme à vos procédures, à vos métiers et à vos contraintes d'exploitation."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryCTA href="/ressources">
            Voir un exemple d&apos;application métier
          </PrimaryCTA>
          <GhostCTA href="/contact" tone="light">
            Identifier vos premiers cas d&apos;usage
          </GhostCTA>
        </div>
      </PageHero>

      {/* Notre approche */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Notre approche"
            lead="La digitalisation utile commence par le terrain. Nous partons de vos procédures existantes, puis nous industrialisons progressivement."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIGITAL_APPROACH.map((s, i) => (
              <RevealItem
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Cas d'usage */}
      <section className="border-y border-border bg-card py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              title="Cas d'usage"
              lead="Daxium-Air s'adapte à une grande variété d'opérations terrain."
            />
            <Reveal className="mt-10 flex flex-wrap gap-3">
              {DAXIUM_USE_CASES.map((u) => (
                <span
                  key={u}
                  className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  {u}
                </span>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/img2.jpg"
              alt="Interface Daxium-Air : fiches, tâches, formulaires, listes, rapports et applications personnalisées"
              className="w-full object-cover"
            />
          </Reveal>
        </Container>
      </section>

      {/* Valeur métier */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Valeur métier"
            lead="Des bénéfices concrets, mesurables par vos équipes comme par votre direction."
          />
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DAXIUM_VALUE.map((v) => (
              <RevealItem
                key={v}
                className="flex items-start gap-3 rounded-[var(--radius)] border border-border bg-card p-5"
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

      {/* Traçabilité & pilotage */}
      <section className="border-y border-border bg-card py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-background p-8 md:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ScanLine size={24} strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Traçabilité
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Nous intégrons des identifiants QR Code, RFID ou NFC pour relier
              chaque opération à un équipement, un produit, un lieu, un
              collaborateur ou une intervention.
            </p>
          </Reveal>
          <Reveal
            delay={0.06}
            className="rounded-2xl border border-border bg-background p-8 md:p-10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <LayoutDashboard size={24} strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Pilotage
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Les données collectées deviennent des rapports automatiques, des
              alertes, des tableaux de bord et des indicateurs exploitables par
              les équipes et la direction.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Accompagnement FGCL */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            title="L'accompagnement FGCL"
            lead="Intégrateur local, nous adaptons, déployons, formons et faisons évoluer votre solution dans le temps."
          />
          <Reveal className="mt-10 flex flex-wrap gap-3">
            {DAXIUM_SUPPORT.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground"
              >
                <Check size={15} strokeWidth={2.5} className="text-primary" />
                {s}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-secondary py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Un process à digitaliser ou un flux à tracer ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70">
            Parlons-en. FGCL vous aide à identifier vos premiers cas d&apos;usage,
            cadrer un pilote et construire une solution adaptée à vos contraintes
            terrain.
          </p>
          <div className="mt-9 flex justify-center">
            <PrimaryCTA href="/contact">Demander une démo</PrimaryCTA>
          </div>
        </Container>
      </section>
    </>
  );
}
