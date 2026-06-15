import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { BUSINESS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: `Contact ${BUSINESS.name} to book your appointment. Call ${BUSINESS.phone} or fill out our online form. Located at ${BUSINESS.address}.`,
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Book Your Appointment"
        subtitle="Schedule your detailing service today. We'll confirm your appointment within 2 hours."
        showCTA={false}
        showScrollIndicator={false}
        compact
        backgroundImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Online Booking
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-2">
                  Schedule Your Detail
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 2
                  hours to confirm your appointment.
                </p>
              </div>
              <ContactForm showBookingFields />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <ul className="space-y-6">
                  <li>
                    <a
                      href={BUSINESS.phoneHref}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {BUSINESS.phone}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {BUSINESS.email}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">
                        {BUSINESS.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      {BUSINESS.hours.map((h) => (
                        <p key={h.day} className="text-muted-foreground text-sm">
                          <span className="font-medium text-foreground">
                            {h.day}:
                          </span>{" "}
                          {h.time}
                        </p>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-square min-h-[250px]">
                <iframe
                  src="https://maps.google.com/maps?q=2847+Wilson+Blvd+Arlington+VA+22201&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${BUSINESS.name} location`}
                  className="w-full h-full min-h-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
