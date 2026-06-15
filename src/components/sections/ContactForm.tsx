"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { SERVICES } from "@/lib/constants";
import type { FormStatus } from "@/types";

interface ContactFormProps {
  showBookingFields?: boolean;
}

export function ContactForm({ showBookingFields = false }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="John Smith"
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(703) 555-0147"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service *</Label>
          <select
            id="service"
            {...register("service")}
            className="flex h-11 w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — {s.priceLabel}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-sm text-red-500">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {showBookingFields ? "Additional Notes" : "Message"} *
        </Label>
        <Textarea
          id="message"
          placeholder={
            showBookingFields
              ? "Vehicle details, preferred location, special requests..."
              : "Tell us about your vehicle and what you're looking for..."
          }
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-600 dark:text-green-400"
        >
          <CheckCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Thank you! We&apos;ll get back to you within 2 hours.
          </p>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-600 dark:text-red-400"
        >
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Something went wrong. Please try again or call us directly.
          </p>
        </motion.div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            {showBookingFields ? "Book Appointment" : "Send Message"}
          </>
        )}
      </Button>
    </motion.form>
  );
}
