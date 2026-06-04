"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/site/primitives";

// Stylized Africa silhouette (low-poly, brief explicitly asks for an Africa map
// zooming to Cameroon, which justifies a bespoke decorative path).
const AFRICA =
  "M300,150 L470,140 L560,150 L615,195 L640,300 L760,360 L700,402 L650,520 L600,640 L520,725 L500,762 L440,700 L402,600 L330,520 L300,472 L220,432 L165,392 L150,360 L210,300 L255,232 L300,150 Z";

// Cameroon focal point in SVG user units + cities revealed at full zoom.
const CAM = { x: 332, y: 470 };
const CITIES = [
  { name: "Douala", x: 318, y: 486 },
  { name: "Yaoundé", x: 345, y: 478 },
  { name: "Bafoussam", x: 326, y: 466 },
  { name: "Bamenda", x: 312, y: 458 },
  { name: "Garoua", x: 352, y: 432 },
  { name: "Bertoua", x: 366, y: 482 },
];

export function AfricaScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Zoom by interpolating the viewBox from the whole continent into Cameroon.
  const viewBox = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 0 1000 1000", `${CAM.x - 70} ${CAM.y - 70} 150 150`]
  );
  const citiesOpacity = useTransform(scrollYProgress, [0.45, 0.72], [0, 1]);
  const continentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.35]);
  const labelOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.6], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-[240vh] bg-navy-950">
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        {/* Canvas-style map */}
        <div className="absolute inset-0">
          <div
            aria-hidden
            className="glow-blue pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-30"
          />
          <motion.svg
            viewBox={reduce ? "0 0 1000 1000" : viewBox}
            className="h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="africaFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1d2c5c" />
                <stop offset="100%" stopColor="#0b1228" />
              </linearGradient>
            </defs>

            <motion.g style={reduce ? undefined : { opacity: continentOpacity }}>
              <path
                d={AFRICA}
                fill="url(#africaFill)"
                stroke="#3b82f6"
                strokeWidth="1.4"
                strokeOpacity="0.7"
              />
            </motion.g>

            {/* Cameroon focal marker */}
            <circle cx={CAM.x} cy={CAM.y} r="6" fill="#ffcb05" />
            <circle cx={CAM.x} cy={CAM.y} r="6" fill="none" stroke="#ffcb05" strokeWidth="1">
              <animate attributeName="r" from="6" to="20" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.9" to="0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* City network revealed at full zoom */}
            <motion.g style={reduce ? { opacity: 1 } : { opacity: citiesOpacity }}>
              {CITIES.map((c) =>
                CITIES.map((d) =>
                  c.name < d.name ? (
                    <line
                      key={`${c.name}-${d.name}`}
                      x1={c.x}
                      y1={c.y}
                      x2={d.x}
                      y2={d.y}
                      stroke="#5b9bff"
                      strokeWidth="0.5"
                      strokeOpacity="0.55"
                      strokeDasharray="3 3"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="12"
                        to="0"
                        dur="1.6s"
                        repeatCount="indefinite"
                      />
                    </line>
                  ) : null
                )
              )}
              {CITIES.map((c) => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r="2.4" fill="#7dd3fc" />
                  <text
                    x={c.x}
                    y={c.y - 5}
                    fill="#cbd5e1"
                    fontSize="4.4"
                    textAnchor="middle"
                    className="font-[family-name:var(--font-space-grotesk)]"
                  >
                    {c.name}
                  </text>
                </g>
              ))}
            </motion.g>
          </motion.svg>
        </div>

        {/* Floating copy overlay */}
        <Container className="relative z-10">
          <div className="max-w-xl">
            <motion.p
              style={reduce ? undefined : { opacity: labelOpacity }}
              className="mb-3 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-wide text-fgcl-500"
            >
              Afrique centrale · Cameroun
            </motion.p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              De la donnée terrain à la décision, en temps réel
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
              Nous connectons vos sites, vos équipes et vos opérations. Chaque point
              lumineux est une ville où la donnée circule, se fiabilise et se pilote.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
