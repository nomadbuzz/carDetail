"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { REVIEWS } from "@/lib/constants";

export function FeaturedReviews() {
  const featured = REVIEWS.slice(0, 3);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-xl">
              Don&apos;t take our word for it — hear from vehicle owners who
              trust Elite Shine.
            </p>
          </div>
          <Link href="/reviews">
            <Button variant="outline" className="gap-2">
              All Reviews
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
