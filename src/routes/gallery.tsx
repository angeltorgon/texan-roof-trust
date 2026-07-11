import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildImageGalleryJsonLd,
  buildLocalBusinessJsonLd,
  buildSeoMeta,
  stringifyJsonLd,
} from "@/lib/seo";

import photo1 from "@/assets/gallery/PHOTO-2025-02-17-19-26-31.JPG";
import photo2 from "@/assets/gallery/PHOTO-2025-02-17-19-26-32.JPG";
import photo3 from "@/assets/gallery/PHOTO-2025-03-13-16-40-49.JPG";
import photo4 from "@/assets/gallery/PHOTO-2025-05-23-18-58-12.JPG";
import photo5 from "@/assets/gallery/PHOTO-2025-07-15-14-53-04.JPG";
import photo6 from "@/assets/gallery/PHOTO-2025-07-15-14-53-06.JPG";
import photo7 from "@/assets/gallery/PHOTO-2025-09-08-17-27-18.JPG";
import photo8 from "@/assets/gallery/PHOTO-2025-09-08-17-28-44.JPG";
import photo9 from "@/assets/gallery/PHOTO-2025-09-08-17-28-45.JPG";
import photo10 from "@/assets/gallery/PHOTO-2025-12-19-16-52-59.JPG";
import photo11 from "@/assets/gallery/PHOTO-2025-12-19-16-53-00.JPG";
import photo12 from "@/assets/gallery/PHOTO-2026-06-21-11-51-28.JPEG";
import photo13 from "@/assets/gallery/PHOTO-2026-06-21-11-51-32.JPEG";
import photo14 from "@/assets/gallery/PHOTO-2026-06-21-11-51-33.JPEG";
import photo15 from "@/assets/gallery/PHOTO-2026-06-21-11-51-34.JPEG";

export const Route = createFileRoute("/gallery")({
  head: () =>
    buildSeoMeta({
      title: "Roofing Project Gallery | Houston Roof Replacements and Repairs",
      description:
        "Browse real before-and-after roofing results from Houston-area homes. See our completed roof replacements, repairs, and storm restoration projects.",
      path: "/gallery",
      keywords: "roofing gallery Houston, roof replacement photos, roof repair portfolio Texas",
    }),
  component: GalleryPage,
});

const photos = [
  { src: photo1, alt: "Roof replacement in progress with new shingles being installed" },
  { src: photo2, alt: "Completed grey shingle roof with ridge vent" },
  { src: photo3, alt: "Aerial view of completed grey shingle roof installation" },
  { src: photo4, alt: "New grey shingle roof with attic ventilators" },
  { src: photo5, alt: "Close-up of new grey shingle roof with pipe flashing" },
  { src: photo6, alt: "Wide aerial view of completed grey shingle roof over neighborhood" },
  { src: photo7, alt: "Crew installing synthetic underlayment during roof replacement" },
  { src: photo8, alt: "Completed brown shingle roof on brick home at golden hour" },
  { src: photo9, alt: "Completed grey shingle roof at sunset with ventilation pipes" },
  { src: photo10, alt: "Aerial view of completed grey shingle roof from ridge" },
  { src: photo11, alt: "Close-up of grey shingle repair near gable end" },
  { src: photo12, alt: "Completed brown shingle roof with ridge cap and gutters" },
  { src: photo13, alt: "Brown shingle roof showing valley and hip details" },
  { src: photo14, alt: "Completed grey shingle roof with multiple vents" },
  { src: photo15, alt: "Dark grey shingle roof with pipe boot flashing detail" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(buildImageGalleryJsonLd("/gallery")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(buildLocalBusinessJsonLd("/gallery")),
        }}
      />
      {/* PAGE HEADER */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Work
          </span>
          <h1 className="mt-3 font-display text-5xl font-bold text-foreground md:text-6xl">
            Project Gallery
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every photo is a real job completed by our crew across the Houston area — no stock
            images, no shortcuts. See the craftsmanship we bring to every roof.
          </p>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="mb-4 overflow-hidden rounded-2xl border border-border shadow-(--shadow-card) transition-transform hover:-translate-y-1"
            >
              <img src={photo.src} alt={photo.alt} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
