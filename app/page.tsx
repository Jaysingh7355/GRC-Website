"use client";

import Image from "next/image";
import Banner from "./components/banner";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import About from "./components/intro/about";
import { ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
  { id: 1, image: "/project/project.png" },
  { id: 2, image: "/project/project1.png" },
  { id: 3, image: "/project/project2.png" },
  { id: 4, image: "/project/project3.png" },
  { id: 5, image: "/project/project4.png" },
  { id: 6, image: "/project/project5.png" },
  { id: 7, image: "/project/project6.png" },
  { id: 8, image: "/project/project7.png" },
  { id: 9, image: "/project/project8.png" },
  { id: 10, image: "/project/project9.png" },
  { id: 11, image: "/project/project10.png" },
  { id: 12, image: "/project/project11.png" },
  { id: 13, image: "/project/project12.png" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalProjects = projects.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + projectsPerPage) % totalProjects
    );
  }, [totalProjects]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - projectsPerPage + totalProjects) % totalProjects
    );
  }, [totalProjects]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  return (
    <div>
      <Banner />
      <div>
        <About
          title="Why Choose Us?"
          description="Varanasi GRC is one of the most experienced GRC companies in India and a leading manufacturer and supplier of Glass Reinforced Concrete (GRC), Glass Reinforced Plastic (GRP), and Glass Reinforced Gypsum (GRG) products. We specialize in high-quality architectural and decorative solutions for villas, mosques, temples, and commercial buildings.."
          imageUrl="/slide1.png"
        />
      </div>
      <section className="py-12 bg-[hsl(var(--background))]" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[hsl(var(--primary))] mb-6">
            Our Projects
          </h2>
          <p className="text-center text-[hsl(var(--primary))] mb-10 max-w-2xl mx-auto">
            Explore our latest GRC projects, showcasing durability and aesthetic
            appeal.
          </p>

          <div className="flex items-center flex-grow mx-7 ">
            <Button onClick={prevSlide} variant="outline" className="ml-4">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {projects
                  .slice(currentIndex, currentIndex + projectsPerPage)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden w-[380px] h-[220px]"
                    >
                      <Image
                        src={project.image}
                        alt={`Project ${project.id}`}
                        width={900}
                        height={750}
                        className="w-full h-56 object-cover"
                      />
                    </motion.div>
                  ))}
              </div>
            </div>

            <Button onClick={nextSlide} variant="outline" className="mr-4">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GRC Facades",
                icon: "🏗️",
                desc: "Custom-designed exterior solutions with weather-resistant properties",
              },
              {
                title: "Architectural Elements",
                icon: "🎨",
                desc: "Decorative columns, cornices, and ornamental features",
              },
              {
                title: "Restoration",
                icon: "🔨",
                desc: "Historic building restoration using traditional techniques",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--background)) p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-[hsl(var(--primary))">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[hsl(var(--background))">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Technical Excellence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "30+ MPa", label: "Compressive Strength" },
              { value: "50+ Years", label: "Durability" },
              { value: "A1 Class", label: "Fire Rating" },
              { value: "ISO 9001", label: "Certification" },
            ].map((spec, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-100 rounded-lg"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {spec.value}
                </div>
                <div className="text-gray-700">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[hsl(var(--background))">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Client Experiences
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Aman Gupta",
                role: "Architect",
                text: "Exceptional quality and attention to detail in all GRC elements supplied",
              },
              {
                name: "Priya Sharma",
                role: "Project Manager",
                text: "Reliable timelines and professional execution for large-scale installations",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--background)) p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[hsl(var(--background))">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Material Advantages
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[hsl(var(--background))">
                  <th className="p-4 text-left">Property</th>
                  <th className="p-4">GRC</th>
                  <th className="p-4">Concrete</th>
                  <th className="p-4">Wood</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Weight (kg/m³)", "1800-2000", "2400", "500-900"],
                  ["Maintenance", "Low", "High", "High"],
                  ["Lifespan", "50+ Years", "30 Years", "15 Years"],
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
