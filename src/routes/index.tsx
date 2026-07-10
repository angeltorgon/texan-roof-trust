import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Shield,
  Award,
  Clock,
  Star,
  ArrowRight,
  CheckCircle2,
  Hammer,
  Home,
  CloudRain,
} from "lucide-react";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import heroImg from "@/assets/hero-roof.jpg";
import rooferImg from "@/assets/roofer-working.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Texan Home Repair and Solutions — Trusted Texas Roofers" },
      {
        name: "description",
        content:
          "Family-owned Texas roofers. Free inspections, transparent estimates, lifetime workmanship warranty. Serving homeowners across Texas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Beautiful Texas home with new roof at golden hour"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:pb-28">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              The roof over your family <span className="text-accent">deserves Texan hands.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              Two decades of honest craftsmanship across the Lone Star State. Free inspections,
              straight talk, and a lifetime workmanship warranty on every job.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-[1.02]"
              >
                Get a Free Inspection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What We Do
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              Roofing & repair, done right the first time.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Home,
              title: "Roof Replacement",
              desc: "Full tear-offs and new installations using premium GAF, CertainTeed and Owens Corning systems.",
            },
            {
              icon: Hammer,
              title: "Repairs & Maintenance",
              desc: "Leak detection, shingle repair, flashing, and seasonal tune-ups to extend your roof's life.",
            },
            {
              icon: CloudRain,
              title: "Storm & Hail Damage",
              desc: "We handle the insurance claim from inspection to final invoice — at no cost to you.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl text-accent-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
          <div className="relative">
            <img
              src={rooferImg}
              alt="Roofer installing shingles"
              className="rounded-2xl shadow-[var(--shadow-elevated)]"
              width={1280}
              height={1280}
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-primary px-6 py-5 text-primary-foreground shadow-[var(--shadow-elevated)] md:block">
              <div className="font-display text-4xl font-bold text-accent">12,000+</div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/80">
                Roofs delivered
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why Texan Home Repair
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              Built on a handshake. Backed by a warranty.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We're a family company with deep roots in Texas. Our crews are full-time employees —
              never day labor — and every job is overseen by an owner. That's how we've earned the
              trust of thousands of neighbors.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Free, no-pressure inspections with a written report",
                "Transparent estimates — no hidden fees, ever",
                "Lifetime workmanship warranty on every install",
                "We answer the phone when you call. Always.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <ProjectShowcase />

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Neighbors Who Trust Us
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Real Texans. Real roofs. Real results.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah M.",
              city: "Austin, TX",
              quote:
                "After the May hailstorm, they handled everything with our insurance. New roof in 9 days. Couldn't be happier.",
            },
            {
              name: "James R.",
              city: "Houston, TX",
              quote:
                "Honest pricing and they actually showed up when they said they would. That's rare. Highly recommend.",
            },
            {
              name: "Linda T.",
              city: "Dallas, TX",
              quote:
                "The owner came out personally to inspect. Felt like family, not a sales pitch. Beautiful work.",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Ready for a roof you can <span className="text-accent">stop worrying about?</span>
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Schedule your free, no-obligation inspection today. We'll send a real expert — not a
              salesman.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Book Free Inspection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
