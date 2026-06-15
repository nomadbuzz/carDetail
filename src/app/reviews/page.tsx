import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { CTASection } from "@/components/sections/CTASection";
import { REVIEWS, BUSINESS } from "@/lib/constants";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Read ${BUSINESS.reviewCount}+ customer reviews for ${BUSINESS.name}. See why we're rated ${BUSINESS.rating} stars in ${BUSINESS.city}, ${BUSINESS.state}.`,
};

export default function ReviewsPage() {
  return (
    <>
      <Hero
        title="Customer Reviews"
        subtitle={`Join ${BUSINESS.reviewCount}+ satisfied customers who trust Elite Shine for their vehicle care.`}
        showCTA={false}
        showScrollIndicator={false}
        compact
        backgroundImage="https://images.unsplash.com/photo-1614162692292-7a56aaa37afb?w=1920&q=80"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-5xl font-bold mb-2">{BUSINESS.rating}</p>
            <p className="text-lg text-muted-foreground">
              Based on {BUSINESS.reviewCount} verified reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
