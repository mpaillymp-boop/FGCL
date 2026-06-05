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

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <a
              href={CONTACT.phoneHref}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-electric-500/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
                <Phone size={20} strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Appelez-nous</span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-navy-950">
                  {CONTACT.phone}
                </span>
              </span>
            </a>

            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-fgcl-500"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-fgcl-500 text-navy-950">
                <MapPin size={20} strokeWidth={1.75} />
              </span>
              <span className="flex-1">
                <span className="block text-sm text-slate-500">
                  Venez nous rencontrer
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-navy-950">
                  Bonanjo, Douala
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm text-electric-600">
                  Ouvrir dans Google Maps
                  <ExternalLink
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </span>
            </a>

            <p className="px-1 text-sm leading-relaxed text-slate-500">
              {CONTACT.addressFull}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
