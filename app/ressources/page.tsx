import type { Metadata } from "next";
import { Play } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container } from "@/components/site/primitives";
import { RESOURCE_VIDEOS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Vidéos et démonstrations pour comprendre la digitalisation des process, les applications no-code et le reporting terrain avec FGCL et Daxium.",
};

export default function RessourcesPage() {
  return (
    <>
      <PageHero
        subtitle="Vidéos & démonstrations"
        title="Ressources"
        lead="Des vidéos courtes pour comprendre la digitalisation des process, les applications no-code et le suivi terrain en temps réel."
      />

      <section className="bg-navy-900 py-20 md:py-28">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCE_VIDEOS.map((v) => (
              <RevealItem key={v.id}>
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-navy-850 transition-all hover:-translate-y-1 hover:border-electric-500/40"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/40 transition-colors group-hover:bg-navy-950/20" />
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-fgcl-500 text-navy-950 shadow-lg transition-transform group-hover:scale-110">
                      <Play size={22} className="ml-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold leading-snug text-white">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">Voir sur YouTube</p>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
