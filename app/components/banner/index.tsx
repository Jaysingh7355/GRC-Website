"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center bg-black">
      {/* Background Image */}
      <Image
        src="/website_banner.png" // Replace with your actual image
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full font-yantramanav text-6xl opacity-50"
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We provide the best GRC solutions for your projects.
        </p>
        <Button className="bg-primary px-6 py-3 text-lg font-semibold hover:bg-opacity-80">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
