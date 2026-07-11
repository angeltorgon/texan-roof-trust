import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { buildLocalBusinessJsonLd, buildSeoMeta, stringifyJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoMeta({
      title: "Contact Houston Roofing Experts | Free Roof Inspection",
      description:
        "Call Texan Home Repair and Solutions at (832) 820-9261 for a free roof inspection in Houston and surrounding Texas communities.",
      path: "/contact",
      keywords:
        "contact roofing contractor Houston, free roof inspection Houston, roofing estimate Texas",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(buildLocalBusinessJsonLd("/contact")),
        }}
      />
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get In Touch
          </span>
          <h1 className="mt-3 font-display text-5xl font-bold text-foreground md:text-6xl">
            Let's get a look at <span className="text-accent">your roof.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us what's going on and we'll be in touch within one business hour. Free inspections
            always.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl font-bold text-foreground">Reach us directly</h2>
          <ul className="mt-6 space-y-5">
            {[
              { icon: Phone, label: "Phone", val: "(832) 820-9261", href: "tel:+18328209261" },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                val: "Click to message us on WhatsApp",
                href: "https://wa.me/18328209261",
              },
              {
                icon: Mail,
                label: "Email",
                val: "claims@texanhomerepairsolutions.com",
                href: "mailto:claims@texanhomerepairsolutions.com",
              },
              {
                icon: MapPin,
                label: "Service Area",
                val: "All of Houston, TX and surrounding areas",
              },
              { icon: Clock, label: "Hours", val: "Mon–Sat · 7am to 7pm CT" },
            ].map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex gap-2 rounded-lg p-2 -m-2 transition-colors hover:bg-accent/5 md:gap-4"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:h-11 md:w-11">
                      <c.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="text-foreground">{c.val}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex gap-2 md:gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:h-11 md:w-11">
                      <c.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="text-foreground">{c.val}</div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
