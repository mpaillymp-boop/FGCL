"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/site/primitives";

type Node = { id: string; x: number; y: number; label: string; at: number };

const NODES: Node[] = [
  { id: "tag", x: 130, y: 250, label: "Tag NFC / RFID", at: 0.05 },
  { id: "equip", x: 400, y: 130, label: "Équipement", at: 0.28 },
  { id: "agent", x: 400, y: 370, label: "Agent terrain", at: 0.42 },
  { id: "app", x: 670, y: 250, label: "Application mobile", at: 0.62 },
  { id: "dash", x: 890, y: 250, label: "Tableau de bord FGCL", at: 0.82 },
];

const EDGES: [string, string][] = [
  ["tag", "equip"],
  ["tag", "agent"],
  ["equip", "app"],
  ["agent", "app"],
  ["app", "dash"],
];

function pos(id: string) {
  return NODES.find((n) => n.id === id)!;
}

function FlowNode({
  node,
  progress,
  reduce,
}: {
  node: Node;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const opacity = useTransform(progress, [node.at, node.at + 0.08], [0.15, 1]);
  const scale = useTransform(progress, [node.at, node.at + 0.08], [0.7, 1]);
  const brand = node.id === "tag" || node.id === "dash";
  return (
    <motion.g
      style={
        reduce
          ? undefined
          : { opacity, scale, transformBox: "fill-box", transformOrigin: "center" }
      }
    >
      <circle
        cx={node.x}
        cy={node.y}
        r="13"
        fill={brand ? "#ffcb05" : "#0e1730"}
        stroke={brand ? "#ffcb05" : "#3b82f6"}
        strokeWidth="2"
      />
      <circle cx={node.x} cy={node.y} r="4.5" fill={brand ? "#0b1228" : "#7dd3fc"} />
      <text
        x={node.x}
        y={node.y + 30}
        textAnchor="middle"
        fill="#cbd5e1"
        fontSize="15"
        className="font-[family-name:var(--font-space-grotesk)]"
      >
        {node.label}
      </text>
    </motion.g>
  );
}

export function NfcFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[260vh] bg-navy-950">
      <div className="sticky top-0 flex h-[100dvh] flex-col items-center justify-center overflow-hidden">
        <Container className="relative z-10 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Le tag, point de départ d&apos;une donnée fiable
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-400">
            Un tag identifie un équipement ou un passage. La donnée remonte de
            l&apos;agent terrain à votre tableau de bord, sans ressaisie.
          </p>
        </Container>

        <div className="mt-10 w-full max-w-5xl px-4">
          <svg viewBox="0 0 1000 500" className="h-auto w-full">
            {EDGES.map(([a, b]) => {
              const pa = pos(a);
              const pb = pos(b);
              return (
                <line
                  key={`${a}-${b}`}
                  x1={pa.x}
                  y1={pa.y}
                  x2={pb.x}
                  y2={pb.y}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeOpacity="0.55"
                  strokeDasharray="6 8"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="28"
                    to="0"
                    dur="1.1s"
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
            {NODES.map((n) => (
              <FlowNode key={n.id} node={n} progress={scrollYProgress} reduce={!!reduce} />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
