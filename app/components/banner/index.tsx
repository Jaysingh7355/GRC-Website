"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = ["/slide1.png", "/slide2.png", "/slide3.png", "/slide5.png"];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const navigateSlide = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    setIndex((prev) => {
      if (direction === "prev")
        return prev === 0 ? images.length - 1 : prev - 1;
      return (prev + 1) % images.length;
    });
    // Restart auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[index]}
              alt={`Banner Image ${index + 1}`}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative text-center text-white px-4 max-w-4xl z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8">
          We provide the best GRC solutions for your projects.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-lg font-semibold"
        >
          Get Started
        </Button>
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          onClick={() => navigateSlide("prev")}
          aria-label="Previous slide"
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={() => navigateSlide("next")}
          aria-label="Next slide"
          className="p-2 hover:bg--primary rounded-full transition-colors"
        >
          <ArrowRight className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
