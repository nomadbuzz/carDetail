"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function ServiceArea() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Service Area
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4">
            Proudly Serving {BUSINESS.city} &amp; Beyond
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide mobile and in-shop detailing throughout the greater{" "}
            {BUSINESS.city} metropolitan area.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {BUSINESS.serviceAreas.map((area, index) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {area}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-[21/9] min-h-[300px]"
        >
          <iframe
            src="https://maps.google.com/maps?q=2847+Wilson+Blvd+Arlington+VA+22201&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${BUSINESS.name} location map`}
            className="w-full h-full min-h-[300px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
