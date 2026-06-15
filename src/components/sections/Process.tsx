"use client";

import { motion } from "framer-motion";
import { Calendar, Wrench, Star, type LucideIcon } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Wrench,
  Star,
};

export function Process() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4">
            Simple. Professional. Effective.
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting your vehicle detailed has never been easier. Three steps to
            showroom perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 overflow-hidden">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || Calendar;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="relative mx-auto mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto shadow-xl shadow-primary/30">
                    <Icon className="h-10 w-10" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-luxury-black text-white text-sm font-bold">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
