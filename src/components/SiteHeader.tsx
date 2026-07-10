import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Texan Home Repair and Solutions"
            className="h-12 w-12 object-contain"
            width={48}
            height={48}
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-primary">Texan Home Repair</div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">& Solutions</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+18328209261"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(832) 820-9261</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="https://wa.me/18328209261"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
