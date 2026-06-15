import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore our premium auto detailing services including wash & wax, interior cleaning, full detail packages, paint correction, ceramic coating, and mobile detailing.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Premium Detailing Services"
        subtitle="From basic wash to ceramic coating — we have the perfect package for your vehicle."
        showScrollIndicator={false}
        compact
        backgroundImage="https://images.unsplash.com/photo-1601362840999-7ccf3a303c3a?w=1920&q=80"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-lg text-muted-foreground">
              Every service is performed by certified technicians using premium
              products. All prices are starting rates — final pricing depends on
              vehicle size and condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
