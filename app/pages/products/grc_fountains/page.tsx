import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/fountain/1.webp",
  2: "/product/fountain/2.webp",
  3: "/product/fountain/3.webp",
  4: "/product/fountain/4.webp",
  5: "/product/fountain/5.webp",
  6: "/product/fountain/6.webp",
};

export default function GRCFountains() {
  return (
    <>
      <Head>
        <title>
          GRC Fountains in India | Decorative Garden & Architectural Water
          Features
        </title>
        <meta
          name="description"
          content="Premium GRC Fountains in India – durable, weather-resistant, and elegant. Perfect for gardens, villas, hotels, resorts & landscaping projects. Supplier of custom-designed GRC fountains across India."
        />
        <meta
          name="keywords"
          content="GRC fountains, decorative fountains, outdoor fountains, garden fountains, wall fountains, GRC water features, custom fountains India, buy GRC fountains online, fountains supplier India, GRC fountains in Varanasi, GRC fountains in Delhi, GRC fountains in Mumbai, GRC fountains in Bangalore, GRC fountains in Hyderabad, GRC fountains in Jaipur, GRC fountains in Ahmedabad"
        />
        <meta property="og:title" content="GRC Fountains in India" />
        <meta
          property="og:description"
          content="Beautiful & durable GRC fountains for gardens, villas, hotels, and landscaping projects. Custom designs available across India."
        />
        <meta property="og:image" content="/product/fountains/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-fountains"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.varanasigrc.com/grc-fountains"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/fountain/6.webp"
            alt="Decorative GRC Fountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Fountains</h1>
              <p className="text-xl mb-8">
                Elegant Water Features for Gardens, Villas & Landscaping
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
                src="/product/fountain/5.webp"
                alt="GRC Fountain Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  💧 What are GRC Fountains?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>
                    GRC Fountains (Glass Reinforced Concrete Fountains)
                  </strong>{" "}
                  are
                  <strong>decorative water features</strong> designed for{" "}
                  <strong>
                    gardens, villas, resorts, hotels, and landscaping projects
                  </strong>
                  . They are{" "}
                  <strong>
                    weather-resistant, durable, and beautifully crafted
                  </strong>
                  , making them a perfect choice for{" "}
                  <strong>luxury exteriors and public spaces</strong>.
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of Fountains in Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fountains have been a symbol of{" "}
                  <strong>luxury, relaxation, and architectural beauty</strong>
                  since ancient times. From{" "}
                  <strong>Roman villas to Mughal gardens</strong>, fountains
                  were used to{" "}
                  <strong>
                    enhance landscapes, create tranquility, and showcase
                    grandeur
                  </strong>
                  .
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the introduction of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong>, fountains
                  can now be designed in{" "}
                  <strong>
                    custom shapes, intricate carvings, and modern styles
                  </strong>
                  , offering both <strong>elegance and durability</strong>.
                  Today, GRC fountains are a popular choice for{" "}
                  <strong>
                    residential, commercial, and hospitality projects
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
                <span>25-80mm (depending on design)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weight</span>
                <span>Varies – lightweight compared to stone</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Water Resistance</span>
                <span>High – designed for outdoor use</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Durability</span>
                <span>20+ years with minimal maintenance</span>
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
              "Garden Landscaping",
              "Luxury Villas",
              "Hotels & Resorts",
              "Commercial Plazas",
              "Public Parks",
              "Temple & Cultural Sites",
              "Outdoor Courtyards",
              "Water Feature Walls",
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
            Material Comparison - Fountains
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Fountain</th>
                  <th className="text-left p-4">Stone Fountain</th>
                  <th className="text-left p-4">Metal Fountain</th>
                  <th className="text-left p-4">Fiberglass Fountain</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Weight",
                    "Lightweight – easy to install",
                    "Very heavy – requires machinery",
                    "Moderate – prone to rust",
                    "Very light but less durable",
                  ],
                  [
                    "Durability",
                    "20+ years with proper care",
                    "50+ years but can crack",
                    "20-30 years – rust protection needed",
                    "10-15 years – prone to fading",
                  ],
                  [
                    "Maintenance",
                    "Low – weather & water resistant",
                    "Moderate – needs sealing",
                    "High – anti-rust needed",
                    "Low but less elegant",
                  ],
                  [
                    "Design Flexibility",
                    "Customizable – classical or modern",
                    "Limited to carving designs",
                    "Limited designs",
                    "Custom shapes possible but cheap look",
                  ],
                  [
                    "Cost",
                    "₹15,000 – ₹1,00,000+ (based on design)",
                    "₹50,000 – ₹3,00,000+ (expensive)",
                    "₹30,000 – ₹1,50,000",
                    "₹10,000 – ₹40,000",
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
                  alt={`GRC Fountain ${key}`}
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
              Get expert consultation for custom GRC Fountain designs
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
