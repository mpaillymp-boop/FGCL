"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ParticleField } from "@/components/site/particle-field";
import { Container, PrimaryCTA, GhostCTA } from "@/components/site/primitives";

const fadeUp = (i: number, reduce: boolean) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy-950">
      <ParticleField />
      <div
        aria-hidden
        className="glow-blue pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] opacity-40"
      />
      <div
        aria-hidden
        className="glow-yellow pointer-events-none absolute -bottom-20 left-10 h-[360px] w-[360px] opacity-30"
      />

      <Container className="relative z-10 py-24">
        <motion.p
          {...fadeUp(0, !!reduce)}
          className="mb-5 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-wide text-fgcl-500"
        >
          Afrique centrale · Cameroun
        </motion.p>

        <motion.h1
          {...fadeUp(1, !!reduce)}
          className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Digitaliser. Optimiser.{" "}
          <span className="text-fgcl-500">Sécuriser.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(2, !!reduce)}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          FGCL conçoit des applications métier sur mesure pour fiabiliser vos
          données et piloter votre performance en temps réel.
        </motion.p>

        <motion.div
          {...fadeUp(3, !!reduce)}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <PrimaryCTA href="/contact">Parlons de votre projet</PrimaryCTA>
          <GhostCTA href="/services">Découvrir nos services</GhostCTA>
        </motion.div>
      </Container>
    </section>
  );
}
