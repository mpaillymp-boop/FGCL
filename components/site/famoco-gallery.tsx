"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/primitives";
import { FAMOCO_PRODUCTS } from "@/lib/site-data";

type Product = (typeof FAMOCO_PRODUCTS)[number];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

function Lightbox({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        className="relative w-full max-w-3xl rounded-[var(--radius)] bg-background p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto h-[55vh] w-full">
          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 90vw, 700px"
            className="object-contain"
          />
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              {product.text}
            </p>
          </div>
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius)] bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Voir sur Famoco
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white"
      >
        <X size={26} />
      </button>
    </motion.div>
  );
}

function Card({
  p,
  onOpen,
}: {
  p: Product;
  onOpen: (p: Product) => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onOpen(p)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(p)}
      tabIndex={0}
      aria-label={`Voir ${p.name}`}
      className="group relative h-72 cursor-pointer overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Image
        src={p.img}
        alt={p.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        draggable={false}
        className="object-contain p-7 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-lg font-bold text-white">{p.name}</h3>
        <span className="mt-1 inline-flex items-center gap-1 text-sm text-white/85">
          Voir le produit
          <ArrowUpRight size={15} />
        </span>
      </div>
    </motion.div>
  );
}

export function FamocoGallery() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dragConstraintTop, setDragConstraintTop] = useState(0);
  const [dragConstraintBottom, setDragConstraintBottom] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Split products in two equal rows
  const half = Math.ceil(FAMOCO_PRODUCTS.length / 2);
  const row1 = FAMOCO_PRODUCTS.slice(0, half);
  const row2 = FAMOCO_PRODUCTS.slice(half);

  useEffect(() => {
    const calc = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!containerRef.current) return;
      const cw = containerRef.current.offsetWidth;
      if (topRowRef.current) {
        setDragConstraintTop(Math.min(0, cw - topRowRef.current.scrollWidth - 32));
      }
      if (bottomRowRef.current) {
        setDragConstraintBottom(
          Math.min(0, cw - bottomRowRef.current.scrollWidth - 32)
        );
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-20 md:py-28">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Nos terminaux
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Glissez pour explorer la gamme, cliquez sur un terminal pour
          l&apos;agrandir et accéder à sa fiche.
        </p>
      </Container>

      <div ref={containerRef} className="relative mt-12 w-full">
        {/* Row 1 */}
        <motion.div
          drag={isMobile ? false : "x"}
          dragConstraints={{ left: dragConstraintTop, right: 0 }}
          dragElastic={0.05}
          className="w-max cursor-grab active:cursor-grabbing"
        >
          <motion.div
            ref={topRowRef}
            className="grid auto-cols-[16rem] grid-flow-col gap-5 px-5 md:auto-cols-[18rem] lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {row1.map((p) => (
              <Card key={p.name} p={p} onOpen={setSelected} />
            ))}
          </motion.div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          drag={isMobile ? false : "x"}
          dragConstraints={{ left: dragConstraintBottom, right: 0 }}
          dragElastic={0.05}
          className="mt-5 w-max cursor-grab active:cursor-grabbing"
        >
          <motion.div
            ref={bottomRowRef}
            className="grid auto-cols-[16rem] grid-flow-col gap-5 px-5 md:auto-cols-[18rem] lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {row2.map((p) => (
              <Card key={p.name} p={p} onOpen={setSelected} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <Lightbox product={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
