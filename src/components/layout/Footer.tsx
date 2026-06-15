import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Share2,
  Star,
} from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-luxury-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-bold">Elite Shine</span>
                <span className="block text-xs text-silver -mt-0.5">
                  Auto Detailing
                </span>
              </div>
            </Link>
            <p className="text-sm text-silver leading-relaxed">
              Premium car detailing services in {BUSINESS.city},{" "}
              {BUSINESS.state}. Transforming vehicles with expert care since{" "}
              {new Date().getFullYear() - BUSINESS.yearsExperience}.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-sm text-silver">
                {BUSINESS.rating} ({BUSINESS.reviewCount} reviews)
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm text-silver hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-3 text-sm text-silver hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-sm text-silver hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-silver">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                {BUSINESS.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-silver">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  {BUSINESS.hours.map((h) => (
                    <div key={h.day}>
                      <span className="font-medium text-white">{h.day}:</span>{" "}
                      {h.time}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-silver">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved.
          </p>
          <p className="text-sm text-silver">
            Licensed &amp; Insured &bull; Serving {BUSINESS.city} &amp; Beyond
          </p>
        </div>
      </div>
    </footer>
  );
}
