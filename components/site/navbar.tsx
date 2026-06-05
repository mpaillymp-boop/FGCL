"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/site/wordmark";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          aria-label="FGCL, accueil"
          className="shrink-0"
        >
          <Wordmark variant={scrolled ? "color" : "white"} />
        </Link>

        {/* Desktop nav — single line */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors",
                    active
                      ? scrolled
                        ? "text-ink"
                        : "text-white"
                      : scrolled
                        ? "text-slate-600 hover:text-ink"
                        : "text-slate-200 hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-fgcl-500"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-fgcl-500 px-4 py-2 text-sm font-semibold text-ink transition-transform hover:bg-fgcl-400 active:scale-[0.97] lg:inline-flex"
        >
          Parlons de votre projet
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
            scrolled ? "text-ink hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-base",
                        active
                          ? "border-l-2 border-fgcl-500 bg-slate-50 font-semibold text-ink"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-fgcl-500 px-3 py-2.5 text-center font-semibold text-ink"
                >
                  Parlons de votre projet
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
