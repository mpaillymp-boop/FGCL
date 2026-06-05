import type { Metadata } from "next";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Container } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Parlons de votre projet. L'équipe FGCL est à Bonanjo, Douala. Téléphone +237 243 04 45 95.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        subtitle="Nous contacter"
        title="Parlons de votre projet"
        lead="Notre équipe est à votre écoute pour comprendre vos besoins et vous proposer la solution adaptée."
      />

      <section className="bg-background py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <a
              href={CONTACT.phoneHref}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-sm transition-colors hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone size={20} strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Appelez-nous</span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                  {CONTACT.phone}
                </span>
              </span>
            </a>

            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-sm transition-colors hover:border-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MapPin size={20} strokeWidth={1.75} />
              </span>
              <span className="flex-1">
                <span className="block text-sm text-muted-foreground">
                  Venez nous rencontrer
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                  Bonanjo, Douala
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm text-primary">
                  Ouvrir dans Google Maps
                  <ExternalLink
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </span>
            </a>

            <p className="px-1 text-sm leading-relaxed text-muted-foreground">
              {CONTACT.addressFull}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
