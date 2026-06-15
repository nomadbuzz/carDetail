import { BUSINESS } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    image: `${BUSINESS.url}/og-image.jpg`,
    "@id": BUSINESS.url,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2847 Wilson Blvd",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.8799,
      longitude: -77.1068,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [
      "https://www.facebook.com/eliteshineauto",
      "https://www.instagram.com/eliteshineauto",
      "https://www.yelp.com/biz/elite-shine-auto-detailing",
    ],
  };
}

export const defaultMetadata = {
  title: {
    default: `${BUSINESS.name} | Premium Auto Detailing in ${BUSINESS.city}, ${BUSINESS.state}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `${BUSINESS.name} offers premium car detailing in ${BUSINESS.city}, ${BUSINESS.state}. Interior & exterior detailing, ceramic coating, paint correction, and mobile services. Book today!`,
  keywords: [
    "car detailing",
    "auto detailing",
    "ceramic coating",
    "paint correction",
    "mobile detailing",
    BUSINESS.city,
    BUSINESS.state,
    "interior detailing",
    "exterior detailing",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Premium Auto Detailing`,
    description: BUSINESS.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - Premium Car Detailing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `${BUSINESS.name} | Premium Auto Detailing`,
    description: BUSINESS.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};
