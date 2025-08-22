import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/arch/1.webp",
  2: "/product/arch/2.webp",
  3: "/product/arch/3.webp",
  4: "/product/arch/4.webp",
  5: "/product/arch/5.webp",
  6: "/product/arch/6.webp",
};

export default function GRCARch() {
  return (
    <>
      <Head>
        <title>
          GRC Arches | Decorative & Architectural GRC Arch Designs in India
        </title>
        <meta
          name="description"
          content="Discover premium GRC arches for building facades, entrances, temples, and cultural landmarks. Durable, lightweight & customizable GRC arch designs across India."
        />
        <meta
          name="keywords"
          content="GRC arch, GRC arches India, decorative GRC arches, architectural GRC arch designs, GRC entrance arch, GRC temple arch, GRC facade arch, GRC products India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-arches" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/arch/1.webp"
            alt="GRC Arch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Arch</h1>
              <p className="text-xl mb-8">
                Decorative yet Functional Architectural Elements for Modern
                Facades
              </p>
              <Button variant="link" className="text-white" asChild>
                <a href="/pages/contact">Get Custom Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-6 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/product/arch/2.webp"
                alt="GRC Arch"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* What is GRC Arch */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛 What is a GRC Arch?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A <strong>GRC Arch (Glass Reinforced Concrete Arch)</strong>{" "}
                  is a modern architectural element crafted from GRC, a material
                  known for being{" "}
                  <strong>lightweight, durable, and versatile</strong>. Unlike
                  traditional stone or brick arches, GRC arches provide the same
                  classical beauty while being much easier to install and
                  maintain. They are widely used in{" "}
                  <strong>
                    villas, temples, resorts, commercial buildings, and
                    heritage-style projects
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Arches
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Arches have been a symbol of architecture for thousands of
                  years, originally built with{" "}
                  <strong>stone, brick, or wood</strong>. While these materials
                  were strong, they were also heavy and required significant
                  structural support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the invention of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong> in the{" "}
                  <strong>1970s</strong>, arches became easier to produce and
                  install. GRC allowed architects to design{" "}
                  <strong>lightweight, intricate, and durable arches</strong>{" "}
                  that could replicate traditional styles while adapting to
                  modern needs. Today, GRC arches are popular in{" "}
                  <strong>India, the Middle East, and Europe</strong>, blending
                  heritage design with modern engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose GRC Jali?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weather Resistant",
                desc: "Withstands extreme temperatures (+60°C to -20°C)",
                icon: "🌦️",
              },
              {
                title: "Lightweight",
                desc: "75% lighter than traditional concrete screens",
                icon: "🪶",
              },
              {
                title: "Custom Designs",
                desc: "Create intricate patterns up to 5mm resolution",
                icon: "🎨",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Technical Details</h2>
            <div className="grid gap-6">
              <div className="flex justify-between border-b pb-2">
                <span>Thickness</span>
                <span>15-25mm</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weight</span>
                <span>25-40 kg/m²</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Compressive Strength</span>
                <span>≥30 MPa</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Fire Rating</span>
                <span>Class A1 (Non-combustible)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Common Applications of GRC Arches
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Entrance Arches",
              "Temple & Religious Arches",
              "Garden & Landscape Arches",
              "Building Facade Arches",
              "Decorative Interior Arches",
              "Balcony & Veranda Arches",
              "Heritage Style Arches",
              "Custom Designed Arches",
            ].map((arch, index) => (
              <Badge
                key={index}
                variant="outline"
                className="py-2 px-4 text-sm rounded-full"
              >
                {arch}
              </Badge>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6 lg:px-16 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Material Comparison – Arches
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="">
                  <th className="text-left p-4">Feature</th>
                  <th className="p-4">GRC Arch</th>
                  <th className="p-4">Stone Arch</th>
                  <th className="p-4">Wood Arch</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lifespan", "50+ years", "100+ years", "20-25 years"],
                  [
                    "Maintenance",
                    "Low",
                    "High (prone to erosion)",
                    "High (prone to termites/rot)",
                  ],
                  ["Cost/m²", "₹3000-5000", "₹10000-20000", "₹2500-4000"],
                  ["Weight", "Lightweight", "Very Heavy", "Moderate"],
                  [
                    "Installation",
                    "Easy & Fast",
                    "Complex & Time-consuming",
                    "Moderate",
                  ],
                  [
                    "Design Flexibility",
                    "High (any style, modern or traditional)",
                    "Limited (carving only)",
                    "Moderate",
                  ],
                ].map((row, index) => (
                  <tr key={index} className="border-t">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 ${
                          cellIndex === 0
                            ? "font-medium text-gray-800"
                            : "text-gray-700"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8 px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(images).map(([key, src]) => (
              <Card
                key={key}
                className="aspect-square relative overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`GRC arch  ${key}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </Card>
            ))}
          </div>
          ;
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="py-10 px-12 lg:px-16 bg-muted/60 rounded-2xl  shadow-lg m-8 border-2
         "
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
            <p className="mb-8">
              Get expert consultation for custom GRC Jali designs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" asChild>
                <a href="tel:+7355989418">📞 Call +91 735598 9418</a>
              </Button>
              <Button variant="link" asChild>
                <a href="mailto:varanasigrcconstruction7355@gmail.com">
                  ✉️ Email Inquiry
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
