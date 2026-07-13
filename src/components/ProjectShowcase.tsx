import { Star } from "lucide-react";
import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    img: p1,
    title: "Architectural Shingle Replacement",
    customer: "The Hernandez Family",
    city: "",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: p4,
    title: "Full Tear-Off & Replacement",
    customer: "The Williams Family",
    city: "",
    span: "",
  },
  {
    img: p5,
    title: "Premium Ridge Cap Detail",
    customer: "The Nguyen Home",
    city: "",
    span: "",
  },
  {
    img: p6,
    title: "Storm Damage Restoration",
    customer: "The Carter Family",
    city: "",
    span: "md:col-span-2",
  },
];

export function ProjectShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const project = active !== null ? projects[active] : null;

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Recent Work
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              Roofs we're proud to put our name on.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A small sample of homes across Texas that trusted us with their most important
              investment.
            </p>
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
                <div className="mt-1 font-display text-xl font-bold leading-tight">{p.title}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {p.customer}
                </div>
              </figcaption>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-6xl border-0 bg-transparent p-0 shadow-none sm:max-w-6xl [&>button]:bg-background/90 [&>button]:opacity-100 [&>button]:rounded-full [&>button]:p-2 [&>button]:right-4 [&>button]:top-4">
          {project && (
            <>
              <DialogTitle className="sr-only">{project.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {project.customer} — {project.city}
              </DialogDescription>
              <div className="relative overflow-hidden rounded-2xl bg-primary">
                <img
                  src={project.img}
                  alt={`${project.title} for ${project.customer} in ${project.city}`}
                  className="max-h-[80vh] w-full object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/70 to-transparent p-6 text-primary-foreground sm:p-8">
                  <div className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                    {project.title}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.customer}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
