"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "gradient";
}

export function CTASection({
  title = "Ready to Transform Your Vehicle?",
  subtitle = "Book your appointment today and experience the Elite Shine difference. Same-week availability for most services.",
  variant = "default",
}: CTASectionProps) {
  return (
    <section
      className={`section-padding ${
        variant === "gradient"
          ? "premium-gradient text-white"
          : "bg-secondary"
      }`}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p
            className={`text-lg mb-8 ${
              variant === "gradient" ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="xl"
                variant={variant === "gradient" ? "default" : "luxury"}
                className="gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href={BUSINESS.phoneHref}>
              <Button
                size="xl"
                variant={variant === "gradient" ? "glass" : "outline"}
                className="gap-2"
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
