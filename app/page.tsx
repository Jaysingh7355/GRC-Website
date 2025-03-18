"use client";

import Image from "next/image";
import CardGrid from "./components/card";
import Banner from "./components/banner";
import { motion } from "framer-motion";
import { useState } from "react";
import About from "./components/intro/about";
interface StatProps {
  value: number;
  label: string;
}

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

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + projectsPerPage) % totalProjects
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - projectsPerPage + totalProjects) % totalProjects
    );
  };
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
      <section className="py-12 bg-black" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our Projects
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore our latest GRC projects, showcasing durability and aesthetic
            appeal.
          </p>

          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              priv
            </button>
            <div className="grid md:grid-cols-3 gap-8">
              {projects
                .slice(currentIndex, currentIndex + projectsPerPage)
                .map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={`Project ${project.id}`}
                      width={900}
                      height={750}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <CardGrid />
    </div>
  );
}
