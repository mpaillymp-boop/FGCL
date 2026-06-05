import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/site-data";
import { Wordmark } from "@/components/site/wordmark";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <Wordmark variant="color" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Des solutions numériques fiables, accessibles et adaptées aux réalités
            opérationnelles des entreprises et administrations en Afrique centrale.
          </p>
          <p className="mt-5 text-sm font-semibold tracking-wide text-primary">
            Digitaliser. Optimiser. Sécuriser.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3.5">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone size={16} className="text-primary" strokeWidth={2} />
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" strokeWidth={2} />
              {CONTACT.cityFull}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} FGCL. Tous droits réservés.</p>
          <p>Douala, Cameroun · Afrique centrale</p>
        </div>
      </div>
    </footer>
  );
}
