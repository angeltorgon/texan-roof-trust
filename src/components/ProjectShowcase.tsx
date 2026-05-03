import { Star, X } from "lucide-react";
import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  { img: p1, title: "Architectural Shingle Replacement", customer: "The Hernandez Family", city: "Round Rock, TX", span: "md:col-span-2 md:row-span-2" },
  { img: p2, title: "Standing Seam Metal Roof", customer: "The Park Residence", city: "Austin, TX", span: "" },
  { img: p3, title: "Spanish Tile Restoration", customer: "Casa de Olivera", city: "San Antonio, TX", span: "" },
  { img: p4, title: "Full Tear-Off & Replacement", customer: "The Williams Family", city: "Plano, TX", span: "" },
  { img: p5, title: "Premium Ridge Cap Detail", customer: "The Nguyen Home", city: "Houston, TX", span: "" },
  { img: p6, title: "Storm Damage Restoration", customer: "The Carter Family", city: "Fort Worth, TX", span: "md:col-span-2" },
];

export function ProjectShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const project = active !== null ? projects[active] : null;

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Recent Work</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              Roofs we're proud to put our name on.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A small sample of homes across Texas that trusted us with their most important investment.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">from 800+ homeowners</span>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4">
          {projects.map((p, i) => (
            <button
              type="button"
              key={p.title}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl text-left shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${p.span}`}
              aria-label={`View larger image of ${p.title}`}
            >
              <img
                src={p.img}
                alt={`${p.title} for ${p.customer} in ${p.city}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{p.city}</div>
                <div className="mt-1 font-display text-xl font-bold leading-tight">{p.title}</div>
                <div className="mt-1 text-sm text-primary-foreground/80">{p.customer}</div>
              </figcaption>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-6xl border-0 bg-transparent p-0 shadow-none sm:max-w-6xl"
        >
          {project && (
            <>
              <DialogTitle className="sr-only">{project.title}</DialogTitle>
              <DialogDescription className="sr-only">{project.customer} — {project.city}</DialogDescription>
              <div className="relative overflow-hidden rounded-2xl bg-primary">
                <img
                  src={project.img}
                  alt={`${project.title} for ${project.customer} in ${project.city}`}
                  className="max-h-[80vh] w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-transform hover:scale-105"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/70 to-transparent p-6 text-primary-foreground sm:p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{project.city}</div>
                  <div className="mt-1 font-display text-2xl font-bold sm:text-3xl">{project.title}</div>
                  <div className="mt-1 text-primary-foreground/85">{project.customer}</div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
