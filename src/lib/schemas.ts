import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  vehicle: z.string().min(2, "Please enter your vehicle make and model"),
  notes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
