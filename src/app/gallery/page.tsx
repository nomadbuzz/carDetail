import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { GALLERY_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our before and after vehicle transformations. See the Elite Shine difference on luxury cars, SUVs, classics, and daily drivers.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Our Work Speaks for Itself"
        subtitle="Real transformations on real vehicles. Browse our portfolio of before and after results."
        showCTA={false}
        showScrollIndicator={false}
        compact
        backgroundImage="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-4">
              Before &amp; After Transformations
            </h2>
            <p className="text-lg text-muted-foreground">
              Click any image to view the full before and after comparison in
              our interactive lightbox viewer.
            </p>
          </div>

          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
