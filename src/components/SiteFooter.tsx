import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">
            Texan Home Repair <span className="text-accent">& Solutions</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Family-owned roofing experts protecting Texas homes.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-accent">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex flex-wrap items-center gap-2">
              <a
                href="tel:+18328209261"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" />
                (832) 820-9261
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:claims@texanhomerepairsolutions.com"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                claims@texanhomerepairsolutions.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> All of Houston, TX and surrounding areas
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Texan Home Repair and Solutions. All rights reserved.
          </span>
          <span>Licensed · Bonded · Insured</span>
        </div>
      </div>
    </footer>
  );
}
