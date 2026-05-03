import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Texan Home Repair and Solutions" },
      { name: "description", content: "Schedule a free roof inspection. Call (800) 555-1234 or send us a message — we respond within one business hour." },
      { property: "og:title", content: "Contact Texan Home Repair and Solutions" },
      { property: "og:description", content: "Free inspections. Honest estimates. Reach our Texas team today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get In Touch</span>
          <h1 className="mt-3 font-display text-5xl font-bold text-foreground md:text-6xl">
            Let's get a look at <span className="text-accent">your roof.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us what's going on and we'll be in touch within one business hour. Free inspections always.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl font-bold text-foreground">Reach us directly</h2>
          <ul className="mt-6 space-y-5">
            {[
              { icon: Phone, label: "Phone", val: "(800) 555-1234", href: "tel:+18005551234" },
              { icon: Mail, label: "Email", val: "hello@texanhomerepair.com", href: "mailto:hello@texanhomerepair.com" },
              { icon: MapPin, label: "Service Area", val: "All of Texas — Austin, Houston, Dallas, San Antonio & beyond" },
              { icon: Clock, label: "Hours", val: "Mon–Sat · 7am to 7pm CT" },
            ].map((c) => (
              <li key={c.label} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-foreground hover:text-accent">{c.val}</a>
                  ) : (
                    <div className="text-foreground">{c.val}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:col-span-3"
        >
          {sent ? (
            <div className="py-12 text-center">
              <div className="font-display text-3xl font-bold text-accent">Thank you!</div>
              <p className="mt-3 text-muted-foreground">We've got your message and will reach out within one business hour.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Address (optional)" name="address" />
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">How can we help?</label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell us about your roof — repair, replacement, storm damage, or just an inspection."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-accent px-7 py-4 font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.01]"
              >
                Request Free Inspection
              </button>
              <p className="text-xs text-muted-foreground">No spam. No pressure. We'll only use your info to contact you about your roof.</p>
            </div>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
