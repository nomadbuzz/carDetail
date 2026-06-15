"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/types";

interface GalleryGridProps {
  items: readonly GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAfter, setShowAfter] = useState(true);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setShowAfter(true);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const navigate = (direction: "prev" | "next") => {
    if (selectedIndex === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedIndex - 1 + items.length) % items.length
        : (selectedIndex + 1) % items.length;
    setSelectedIndex(newIndex);
    setShowAfter(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={item.after}
              alt={`${item.title} - After`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground mb-2">
                {item.category}
              </span>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-white/70 text-sm">Click to view before &amp; after</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !showAfter
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    showAfter
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  After
                </button>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src={
                    showAfter
                      ? items[selectedIndex].after
                      : items[selectedIndex].before
                  }
                  alt={`${items[selectedIndex].title} - ${showAfter ? "After" : "Before"}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute top-4 left-4 rounded-full bg-black/60 px-4 py-2 text-white text-sm font-medium">
                  {showAfter ? "After" : "Before"}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => navigate("prev")}
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                  Previous
                </button>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg">
                    {items[selectedIndex].title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {selectedIndex + 1} of {items.length}
                  </p>
                </div>
                <button
                  onClick={() => navigate("next")}
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                >
                  Next
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
