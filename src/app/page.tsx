import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FeaturedReviews } from "@/components/sections/FeaturedReviews";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Process />
      <PricingPreview />
      <FeaturedReviews />
      <FAQ />
      <ServiceArea />
      <CTASection variant="gradient" />
    </>
  );
}
