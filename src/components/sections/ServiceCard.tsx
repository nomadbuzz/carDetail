"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Armchair,
  Car,
  Paintbrush,
  Shield,
  Truck,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Armchair,
  Car,
  Paintbrush,
  Shield,
  Truck,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`group relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${
          service.popular ? "border-primary ring-2 ring-primary/20" : ""
        }`}
      >
        {service.popular && (
          <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Most Popular
          </div>
        )}

        <CardHeader>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl">{service.name}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">
              ${service.price}
            </span>
            <span className="text-sm text-muted-foreground ml-1">+</span>
          </div>
          <Link href="/contact">
            <Button size="sm">Book Now</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
