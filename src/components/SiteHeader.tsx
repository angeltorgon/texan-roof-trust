import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu } from "lucide-react";
import logoDesktop from "@/assets/logo-desktop.png";
import logoMobile from "@/assets/logo-mobile.png";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const ctaButtonClass =
  "inline-flex h-10 items-center justify-center gap-1 sm:gap-2 rounded-md bg-accent px-2 sm:px-3 lg:px-4 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 py-1.5">
        <Link to="/" className="shrink-0">
          <img
            src={logoMobile}
            alt="Texan Home Repair and Solutions"
            className="h-auto w-12 object-contain sm:hidden"
            width={150}
            height={100}
          />
          <img
            src={logoDesktop}
            alt="Texan Home Repair and Solutions"
            className="hidden h-auto object-contain sm:inline sm:w-28 lg:w-32"
            width={300}
            height={100}
          />
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
          <a href="tel:+18328209261" className={ctaButtonClass}>
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(832) 820-9261</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="https://wa.me/18328209261"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaButtonClass}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-10 w-10 md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetTitle>Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-2">
                {nav.map((n) => (
                  <SheetClose key={n.to} asChild>
                    <Link
                      to={n.to}
                      className="rounded-md px-3 py-2 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary"
                      activeProps={{
                        className:
                          "rounded-md bg-secondary px-3 py-2 text-base font-medium text-accent",
                      }}
                      activeOptions={{ exact: n.to === "/" }}
                    >
                      {n.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
