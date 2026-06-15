"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SERVICES } from "@/lib/constants";

export function PricingPreview() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2">
              Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-xl">
              No hidden fees. No surprises. Premium results at competitive
              rates.
            </p>
          </div>
          <Link href="/services">
            <Button variant="outline" className="gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
