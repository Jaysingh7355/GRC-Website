"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AboutProps {
  title: string;
  description?: string;
  imageUrl?: string;
}

const About: React.FC<AboutProps> = ({
  title = "Why Choose Us?",
  description = "We provide high-quality Glass Reinforced Concrete (GRC) solutions, ensuring durability and aesthetic appeal for your projects.",
  imageUrl = "/about-image.jpg",
}) => {
  return (
    <section className="py-12 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <Image
            src={imageUrl}
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg border border-[hsl(var(--border))]"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:pl-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--primary))]">
            {title}
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            {description}
          </p>
          <Link href="/pages/about">
            <Button variant="default" className="mt-2">Learn More</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
