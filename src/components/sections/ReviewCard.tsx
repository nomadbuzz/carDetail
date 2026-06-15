"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-primary/30 mb-4" />

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted"
                }`}
              />
            ))}
          </div>

          <p className="text-foreground leading-relaxed mb-6">
            &ldquo;{review.text}&rdquo;
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-muted-foreground">{review.service}</p>
            </div>
            <span className="text-xs text-muted-foreground">{review.date}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
