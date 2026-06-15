import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.url;

  const routes = [
    "",
    "/services",
    "/about",
    "/gallery",
    "/reviews",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
