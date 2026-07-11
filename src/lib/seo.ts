const SITE_URL = "https://texanhomerepairsolutions.com";
const SITE_NAME = "Texan Home Repair and Solutions";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/texan-roof-social.jpg`;

type SeoArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
};

type JsonLd = Record<string, unknown>;

const makeUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export function buildSeoMeta({ title, description, path, keywords }: SeoArgs) {
  const canonical = makeUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: SITE_NAME },
      {
        name: "keywords",
        content:
          keywords ??
          "Texas roofing, Houston roofing contractor, roof repair, roof replacement, storm damage roofing, free roof inspection",
      },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:alt", content: `${SITE_NAME} roofing project` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function buildLocalBusinessJsonLd(path = "/"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/#roofingcontractor`,
    name: SITE_NAME,
    url: makeUrl(path),
    telephone: "+1-832-820-9261",
    email: "claims@texanhomerepairsolutions.com",
    areaServed: ["Houston", "Texas"],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 29.7604,
        longitude: -95.3698,
      },
      geoRadius: 120000,
    },
    image: [DEFAULT_OG_IMAGE],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    sameAs: ["https://wa.me/18328209261"],
  };
}

export function buildServiceJsonLd(path: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Residential roofing and repair",
    provider: {
      "@type": "RoofingContractor",
      name: SITE_NAME,
      url: makeUrl(path),
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Storm and Hail Damage Repair" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Gutter and Drainage Installation" },
        },
      ],
    },
  };
}

export function buildImageGalleryJsonLd(path: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${SITE_NAME} Project Gallery`,
    url: makeUrl(path),
    description:
      "Portfolio of completed roofing projects across Houston and surrounding Texas communities.",
  };
}

export function buildFaqJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide free roof inspections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every inspection is free and includes a written summary of roof condition and recommendations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with insurance claims after storm damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We document storm damage and work directly with your insurance carrier from inspection to project completion.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Houston and surrounding communities across Texas.",
        },
      },
    ],
  };
}

export function stringifyJsonLd(data: JsonLd) {
  return JSON.stringify(data);
}

export const seoConfig = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  defaultOgImage: DEFAULT_OG_IMAGE,
};
