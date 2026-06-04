import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
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

const d = 0.01;
const bbox = [
  CONTACT.lng - d,
  CONTACT.lat - d,
  CONTACT.lng + d,
  CONTACT.lat + d,
].join("%2C");
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${CONTACT.lat}%2C${CONTACT.lng}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        subtitle="Nous contacter"
        title="Parlons de votre projet"
        lead="Notre équipe est à votre écoute pour comprendre vos besoins et vous proposer la solution adaptée."
      />

      <section className="bg-navy-900 py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="space-y-4">
              <a
                href={CONTACT.phoneHref}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-850 p-5 transition-colors hover:border-electric-500/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/12 text-glow-400">
                  <Phone size={20} strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">Appelez-nous</span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                    {CONTACT.phone}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-850 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-fgcl-500/15 text-fgcl-500">
                  <MapPin size={20} strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">
                    Venez nous rencontrer
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                    {CONTACT.address}
                  </span>
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Carte FGCL - Bonanjo, Douala"
                src={mapSrc}
                loading="lazy"
                className="h-[320px] w-full grayscale-[0.2]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
