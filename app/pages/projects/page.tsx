// app/pages/projects/page.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { FiMail, FiPhone } from "react-icons/fi";

const projects = [
  {
    title: "Commercial Complex Facade",
    image: "project1",
    location: "Bangalore",
    category: "Commercial",
  },
  {
    title: "Residential Balcony Screens",
    image: "project2",
    location: "Chennai",
    category: "Residential",
  },
  {
    title: "Commercial Complex Facade",
    image: "project3",
    location: "Bangalore",
    category: "Commercial",
  },
  {
    title: "Residential Balcony Screens",
    image: "project4",
    location: "Chennai",
    category: "Residential",
  },
  {
    title: "Commercial Complex Facade",
    image: "project5",
    location: "Bangalore",
    category: "Commercial",
  },
  {
    title: "Residential Balcony Screens",
    image: "project6",
    location: "Chennai",
    category: "Residential",
  },
  {
    title: "Commercial Complex Facade",
    image: "project7",
    location: "Bangalore",
    category: "Commercial",
  },
  {
    title: "Residential Balcony Screens",
    image: "project8",
    location: "Chennai",
    category: "Residential",
  },
  {
    title: "Commercial Complex Facade",
    image: "project9",
    location: "Bangalore",
    category: "Commercial",
  },
  {
    title: "Residential Balcony Screens",
    image: "project10",
    location: "Chennai",
    category: "Residential",
  },
  {
    title: "Commercial Complex Facade",
    image: "project11",
    location: "Bangalore",
    category: "Commercial",
  },
  {
    title: "Residential Balcony Screens",
    image: "project12",
    location: "Chennai",
    category: "Residential",
  },
  {
    title: "Commercial Complex Facade",
    image: "project13",
    location: "Bangalore",
    category: "Commercial",
  },
  {
    title: "Residential Balcony Screens",
    image: "project14",
    location: "Chennai",
    category: "Residential",
  },
  {
    title: "Commercial Complex Facade",
    image: "project15",
    location: "Bangalore",
    category: "Commercial",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Our GRC Projects in India | Varanasi GRC</title>
        <meta
          name="description"
          content="Explore Varanasi GRC’s completed projects across India. From GRC Jalis and Columns to Panels and custom designs, we deliver durable and elegant GRC solutions nationwide."
        />
        <meta
          name="keywords"
          content="GRC projects India, GRC work Varanasi, GRC Jali projects, GRC Columns India, GRC Panels projects, Glass Reinforced Concrete India"
        />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[12vh]">
          {/* <Image
          src="/projects/hero.jpg"
          alt="Our Projects"
          fill
          className="object-cover"
          priority
        /> */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">
              Our GRC Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium Glass Fiber Reinforced Concrete Solutions for Modern
              Architecture
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-6 lg:px-16">
          {/* Filter Buttons */}

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="group relative block overflow-hidden rounded-lg hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square">
                  <Image
                    src={`/project/${project.image}.png`}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Custom GRC Solutions
          </h2>
          <p className="text-muted-foreground mb-6">
            Need bespoke architectural elements? Contact our experts
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-primary text-lg">
            <a
              href="tel:+7355989418"
              className="flex items-center gap-2 justify-center hover:text-primary/80"
            >
              <FiPhone /> +91 735989418
            </a>
            <a
              href="mailto:varanasigrcconstruction7355@gmail.com"
              className="flex items-center gap-2 justify-center hover:text-primary/80"
            >
              <FiMail /> Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
