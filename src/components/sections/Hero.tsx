"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  showScrollIndicator?: boolean;
  backgroundImage?: string;
  compact?: boolean;
}

export function Hero({
  title = BUSINESS.tagline,
  subtitle = BUSINESS.description,
  showCTA = true,
  showScrollIndicator = true,
  backgroundImage = "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80",
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        compact ? "min-h-[50vh]" : "min-h-screen"
      }`}
    >
      <Image
        src={backgroundImage}
        alt="Premium car detailing"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 container-custom text-center text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 mb-6 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>
              {BUSINESS.rating} Rating &bull; {BUSINESS.reviewCount}+ Happy
              Customers
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="xl" className="w-full sm:w-auto gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>
              <a href={BUSINESS.phoneHref}>
                <Button
                  variant="glass"
                  size="xl"
                  className="w-full sm:w-auto gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </motion.div>
          )}
        </motion.div>

        {showScrollIndicator && !compact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-white/50 animate-bounce" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
