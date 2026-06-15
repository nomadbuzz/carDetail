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
      className={`relative flex w-full items-center justify-center overflow-hidden ${
        compact ? "min-h-[50vh]" : "min-h-[100dvh] sm:min-h-screen"
      }`}
    >
      <Image
        src={backgroundImage}
        alt="Premium car detailing"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 w-full container-custom text-center text-white pt-20 pb-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full glass-card px-3 py-2 mb-6 text-xs sm:text-sm">
            <Star className="h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400" />
            <span className="text-center">
              {BUSINESS.rating} Rating &bull; {BUSINESS.reviewCount}+ Happy
              Customers
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] mb-6 text-balance break-words px-1">
            {title}
          </h1>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty px-1">
            {subtitle}
          </p>

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex w-full flex-col items-stretch sm:items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>
              <a href={BUSINESS.phoneHref} className="w-full sm:w-auto">
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
