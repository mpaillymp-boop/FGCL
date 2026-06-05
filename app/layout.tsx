import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

// V2 display font (replaces Space Grotesk). The CSS variable name is kept so
// existing `var(--font-space-grotesk)` references pick up the new font.
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "FGCL - Digitaliser. Optimiser. Sécuriser.",
    template: "%s · FGCL",
  },
  description:
    "FGCL conçoit des applications métier sur mesure pour optimiser vos processus, fiabiliser vos données et piloter votre performance en temps réel en Afrique centrale.",
  metadataBase: new URL("https://fgcl.cm"),
  openGraph: {
    title: "FGCL - Digitaliser. Optimiser. Sécuriser.",
    description:
      "Solutions numériques fiables, accessibles et adaptées aux réalités opérationnelles des entreprises en Afrique centrale.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sora.variable} ${outfit.variable}`}>
      <body className="min-h-[100dvh] bg-white text-slate-800 antialiased">
        {/* Fixed grain/scrim layer, pointer-events off, never on a scroll container */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
