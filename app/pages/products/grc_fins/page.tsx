import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/fines/1.webp",
  2: "/product/fines/2.webp",
  3: "/product/fines/3.webp",
  4: "/product/fines/4.webp",
  5: "/product/fines/5.webp",
  6: "/product/fines/6.webp",
};

export default function GRCFins() {
  return (
    <>
      <Head>
        <title>
          GRC Fins in India | Decorative & Functional Architectural Facade
          Elements
        </title>
        <meta
          name="description"
          content="Premium GRC Fins in India – lightweight, durable, and elegant. Perfect for facades, sunshades, privacy screens, villas & modern architectural projects. Supplier of custom GRC fins across India."
        />
        <meta
          name="keywords"
          content="GRC fins, GRC facade fins, architectural fins, modern GRC fins, GRC sunshade fins, decorative fins, buy GRC fins online, fins supplier India, GRC fins in Varanasi, GRC fins in Delhi, GRC fins in Mumbai, GRC fins in Bangalore, GRC fins in Hyderabad, GRC fins in Jaipur, GRC fins in Ahmedabad"
        />
        <meta property="og:title" content="GRC Fins in India" />
        <meta
          property="og:description"
          content="Durable & decorative GRC Fins for facades, sunshades, and architectural designs. Supplier of modern & custom fins across India."
        />
        <meta property="og:image" content="/product/fines/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-fins"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-fins" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/fines/1.webp"
            alt="Decorative GRC Fins"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Fins</h1>
              <p className="text-xl mb-8">
                Decorative & Functional Architectural Facade Elements
              </p>
              <Button variant="link" className="text-white" asChild>
                <a href="/pages/contact">Get Custom Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 lg:px-16 ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/product/fines/2.webp"
                alt="GRC Fins Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What are GRC Fins?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>GRC Fins (Glass Reinforced Concrete Fins)</strong> are
                  <strong> vertical or horizontal facade elements</strong> used
                  to provide{" "}
                  <strong>sun shading, privacy, and aesthetic appeal</strong>
                  to buildings. They are{" "}
                  <strong>lightweight, durable, and highly customizable</strong>
                  , making them ideal for{" "}
                  <strong>
                    modern architecture, villas, commercial spaces, and
                    institutional projects
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of Fins in Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Architectural fins have been used since the mid-20th century
                  as <strong>functional sunshades and design elements</strong>{" "}
                  in modernist architecture. They became popular for their
                  ability to{" "}
                  <strong>
                    control light, improve energy efficiency, and add rhythm
                  </strong>
                  to facades.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the advent of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong>, fins can now
                  be produced in{" "}
                  <strong>custom shapes, sizes, and textures</strong>, combining
                  functionality with <strong>modern aesthetics</strong>. Today,
                  GRC fins are a preferred choice for{" "}
                  <strong>
                    urban facades, institutions, commercial complexes, and
                    residential projects
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Technical Details</h2>
            <div className="grid gap-6">
              <div className="flex justify-between border-b pb-2">
                <span>Thickness</span>
                <span>20-50mm</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weight</span>
                <span>20-40 kg/m²</span>
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

        {/* Applications */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Common Applications
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Facade Design",
              "Sun Shading",
              "Privacy Screens",
              "Commercial Buildings",
              "Residential Villas",
              "Institutional Projects",
              "Hotels & Resorts",
              "Urban Architecture",
            ].map((app, index) => (
              <Badge
                key={index}
                variant="outline"
                className="py-2 px-4 text-sm rounded-full"
              >
                {app}
              </Badge>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 px-6 lg:px-16 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Material Comparison - Fins
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Fins</th>
                  <th className="text-left p-4">Aluminium Fins</th>
                  <th className="text-left p-4">Wooden Fins</th>
                  <th className="text-left p-4">Steel Fins</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal wear",
                    "30-40 years (prone to denting)",
                    "10-15 years (susceptible to decay)",
                    "40-50 years (can rust if not treated)",
                  ],
                  [
                    "Maintenance",
                    "Very Low – weather & fire resistant",
                    "Moderate – prone to oxidation",
                    "High – termite & moisture protection needed",
                    "High – anti-rust treatment required",
                  ],
                  [
                    "Cost/m²",
                    "₹2000-4000 (affordable & durable)",
                    "₹4000-6000 (expensive)",
                    "₹1500-2500 (cheaper but less durable)",
                    "₹3000-5000 (costly & heavy)",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy to install",
                    "Very light but less rigid",
                    "Light – but weak over time",
                    "Heavy – requires strong structure",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable (shapes, textures, patterns)",
                    "Customizable but limited textures",
                    "Custom designs possible but not durable",
                    "Limited – requires heavy fabrication",
                  ],
                ].map((row, index) => (
                  <tr key={index} className="border-t">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 ${
                          cellIndex === 0 ? "font-medium" : ""
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

        {/* Gallery */}
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
                  alt={`GRC Fins ${key}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="py-10 px-12 lg:px-16 bg-muted/60 rounded-2xl shadow-lg m-8 border-2"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
            <p className="mb-8">
              Get expert consultation for custom GRC Fins designs
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
