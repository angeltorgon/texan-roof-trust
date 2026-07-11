import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Home, Hammer, CloudRain, Wrench, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import {
  buildLocalBusinessJsonLd,
  buildSeoMeta,
  buildServiceJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    buildSeoMeta({
      title: "Roof Replacement and Repair Services in Houston, TX",
      description:
        "Explore Houston roofing services including roof replacement, leak repairs, storm and hail restoration, gutters, and free inspections.",
      path: "/services",
      keywords:
        "roof replacement Houston TX, roof repair Houston, storm damage roofing services, gutter installation Houston",
    }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    desc: "Complete tear-offs and new installations using premium asphalt, metal, tile and synthetic systems from GAF, CertainTeed and Owens Corning.",
  },
  {
    icon: Hammer,
    title: "Roof Repairs",
    desc: "Targeted repairs for leaks, missing shingles, damaged flashing, and worn boots. Most repairs completed same-day.",
  },
  {
    icon: CloudRain,
    title: "Storm & Hail Damage",
    desc: "Free storm assessments with detailed photo reports. We work directly with your insurance carrier from claim to completion.",
  },
  {
    icon: Wrench,
    title: "Gutters & Drainage",
    desc: "Seamless aluminum gutter installation, gutter guards, and downspout repairs to keep water moving away from your foundation.",
  },
  {
    icon: Sparkles,
    title: "Maintenance Plans",
    desc: "Annual and bi-annual tune-ups that catch small problems before they become big ones. Extends roof life by 5–7 years on average.",
  },
  {
    icon: ShieldCheck,
    title: "Free Inspections",
    desc: "Comprehensive 21-point inspection with a written report and transparent recommendations. No high-pressure sales — ever.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(buildServiceJsonLd("/services")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(buildLocalBusinessJsonLd("/services")),
        }}
      />
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Services
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-foreground md:text-6xl">
            Every roof. Every season. <span className="text-accent">Every Texan.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From minor repairs to full replacements, our crews bring two decades of craftsmanship to
            your home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-(--shadow-card) transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl text-accent-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-primary p-12 text-primary-foreground md:p-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Not sure what you need?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Book a free inspection — we'll give you the straight story and only recommend what
                your roof actually needs.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Schedule Inspection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
