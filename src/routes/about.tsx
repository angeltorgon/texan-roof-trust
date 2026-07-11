import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Heart, Users, MapPin, ArrowRight } from "lucide-react";
import rooferImg from "@/assets/roofer-working.jpg";
import { buildLocalBusinessJsonLd, buildSeoMeta, stringifyJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeoMeta({
      title: "About Our Houston Roofing Team | Texan Home Repair and Solutions",
      description:
        "Meet the family-owned Houston roofing team behind Texan Home Repair and Solutions. Honest inspections, high-quality work, and local Texas service values.",
      path: "/about",
      keywords:
        "about roofing company Houston, family owned roofing contractor, local Texas roofer",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(buildLocalBusinessJsonLd("/about")),
        }}
      />
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Story
            </span>
            <h1 className="mt-3 font-display text-5xl font-bold text-foreground md:text-6xl">
              Family run <span className="text-accent">Family efficient</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              With over a decade of roofing and repair experience, Texas born and Texas based, we
              take pride in delivering craftsmanship you can trust with results that last. More than
              just fixing roofs, we stand with our clients every step of the way—working directly
              with insurance providers to make sure every repair gets the coverage it deserves. Our
              reputation is built on quality, follow-through, and a relentless commitment to
              protecting your home.
            </p>
          </div>
          <img
            src={rooferImg}
            alt="Texan Home Repair roofer at work"
            className="rounded-2xl shadow-(--shadow-elevated)"
            width={1280}
            height={1280}
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What we stand for
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              Values that hold up under any storm.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Honesty First",
                desc: "If you don't need a new roof, we'll tell you. Period.",
              },
              {
                icon: Users,
                title: "Family Run",
                desc: "Owner-operated, with full-time crews.",
              },
              {
                icon: MapPin,
                title: "Local Pride",
                desc: "Born in Texas. Built for Texas weather. Loyal to Texas homes.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-8 shadow-(--shadow-card)">
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-accent-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { n: "20+", l: "Years in business" },
            { n: "12,000+", l: "Roofs installed" },
            { n: "5.0★", l: "Average rating" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-(--shadow-card)"
            >
              <div className="font-display text-5xl font-bold text-accent">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Work with our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
