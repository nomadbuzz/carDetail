import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { BUSINESS } from "@/lib/constants";
import { ShieldCheck, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BUSINESS.name} — ${BUSINESS.yearsExperience}+ years of premium auto detailing experience in ${BUSINESS.city}, ${BUSINESS.state}. Licensed, insured, and committed to excellence.`,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle={`${BUSINESS.yearsExperience}+ years of passion for automotive perfection in ${BUSINESS.city}, ${BUSINESS.state}.`}
        showCTA={false}
        showScrollIndicator={false}
        compact
        backgroundImage="https://images.unsplash.com/photo-1520340356284-f99173d3cfb9?w=1920&q=80"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80"
                alt="Elite Shine detailing team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6">
                Born from a Love of Cars
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Elite Shine Auto Detailing was founded in {BUSINESS.city} with
                  a simple mission: deliver dealership-quality results at prices
                  everyday car owners can afford. What started as a one-man mobile
                  operation has grown into the region&apos;s most trusted detailing
                  service.
                </p>
                <p>
                  Our founder spent years working at luxury dealerships before
                  realizing that exceptional detailing shouldn&apos;t be reserved
                  for six-figure vehicles. Today, our team of certified
                  technicians treats every car — from daily drivers to exotic
                  supercars — with the same meticulous care.
                </p>
                <p>
                  We&apos;ve detailed over 5,000 vehicles and earned a{" "}
                  {BUSINESS.rating}-star rating from {BUSINESS.reviewCount}+
                  satisfied customers. But our proudest achievement is the
                  community of loyal clients who return season after season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Award className="h-7 w-7" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">
                {BUSINESS.yearsExperience}+
              </p>
              <p className="text-muted-foreground font-medium">
                Years of Experience
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="h-7 w-7" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="text-muted-foreground font-medium">
                Vehicles Detailed
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground font-medium">
                Licensed &amp; Insured
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
