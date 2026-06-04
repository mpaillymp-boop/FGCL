"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import {
  MonitorSmartphone,
  Shield,
  Nfc,
  BatteryCharging,
  ScanLine,
  Lock,
} from "lucide-react";
import { Container, PrimaryCTA } from "@/components/site/primitives";

const LAYERS = [
  { icon: MonitorSmartphone, label: "Écran tactile", note: "Affichage durci, lisible en extérieur." },
  { icon: Shield, label: "Coque renforcée", note: "Conçue pour les environnements exigeants." },
  { icon: Nfc, label: "Module NFC", note: "Lecture sans contact, badges et tags." },
  { icon: BatteryCharging, label: "Batterie longue durée", note: "Une journée d'opérations terrain." },
  { icon: ScanLine, label: "Scanner", note: "Capture rapide des codes-barres." },
  { icon: Lock, label: "Système sécurisé", note: "OS verrouillé, données protégées." },
];

function Layer({
  i,
  progress,
  reduce,
}: {
  i: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const stacked = i * 9;
  const spread = (i - (LAYERS.length - 1) / 2) * 84;
  const y = useTransform(progress, [0, 0.5, 1], [stacked, spread, stacked]);
  const labelOpacity = useTransform(progress, [0.3, 0.5, 0.72], [0, 1, 0]);
  const item = LAYERS[i];
  const LayerIcon = item.icon;

  return (
    <motion.div
      style={reduce ? { top: spread } : { y }}
      className="absolute left-1/2 flex w-[260px] -translate-x-1/2 items-center"
    >
      <div className="flex h-16 w-full items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/90 px-4 shadow-xl shadow-navy-950/50 backdrop-blur-sm">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-500/15 text-glow-400">
          <LayerIcon size={18} strokeWidth={1.75} />
        </span>
        <span className="text-sm font-semibold text-white">{item.label}</span>
      </div>
      <motion.div
        style={reduce ? undefined : { opacity: labelOpacity }}
        className="absolute left-[280px] hidden w-48 md:block"
      >
        <p className="text-xs leading-relaxed text-slate-400">{item.note}</p>
      </motion.div>
    </motion.div>
  );
}

export function FamocoExploded() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.82, 0.96], [16, 0]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-navy-900">
      <div className="sticky top-0 flex h-[100dvh] flex-col items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="glow-blue pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 opacity-25"
        />
        <Container className="relative z-10 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Anatomie d&apos;un terminal Famoco
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
            Faites défiler pour découvrir chaque composant, puis voir le terminal
            se reconstituer.
          </p>
        </Container>

        <div className="relative mt-14 h-[440px] w-full">
          {LAYERS.map((_, i) => (
            <Layer key={i} i={i} progress={scrollYProgress} reduce={!!reduce} />
          ))}
        </div>

        <motion.div
          style={reduce ? undefined : { opacity: ctaOpacity, y: ctaY }}
          className="relative z-10"
        >
          <PrimaryCTA href="#terminaux">Découvrir nos terminaux Famoco</PrimaryCTA>
        </motion.div>
      </div>
    </section>
  );
}
