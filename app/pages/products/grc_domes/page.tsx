import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/domes/1.webp",
  2: "/product/domes/2.webp",
  3: "/product/domes/3.webp",
  4: "/product/domes/4.webp",
  5: "/product/domes/5.webp",
  6: "/product/domes/6.webp",
};

export default function GRCDomes() {
  return (
    <>
      <Head>
        <title>
          GRC Domes in India | Architectural & Decorative Dome Structures
        </title>
        <meta
          name="description"
          content="Buy premium GRC Domes in India – elegant, durable, and weather-resistant. Perfect for temples, mosques, palaces, villas & heritage restoration projects. Supplier of classical & modern dome designs across India."
        />
        <meta
          name="keywords"
          content="GRC dome, GRC domes India, decorative GRC dome, modern GRC domes, classical GRC dome, mosque dome, temple dome, palace dome, buy GRC dome online, dome supplier India, domes in Varanasi, domes in Delhi, domes in Bangalore, domes in Mumbai, domes in Hyderabad, domes in Lucknow, domes in Jaipur, domes in Ahmedabad"
        />
        <meta property="og:title" content="GRC Domes in India" />
        <meta
          property="og:description"
          content="Elegant, durable & weather-resistant GRC Domes for temples, palaces, mosques, villas, and heritage architecture. Supplier of classical & modern dome designs across India."
        />
        <meta property="og:image" content="/product/domes/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-domes"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-domes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/domes/1.webp"
            alt="Decorative GRC Dome"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Domes</h1>
              <p className="text-xl mb-8">
                Architectural & Decorative Dome Structures for Temples, Palaces
                & Villas
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
                src="/product/domes/2.webp"
                alt="GRC Dome Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Dome?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A <strong>GRC Dome (Glass Reinforced Concrete Dome)</strong>{" "}
                  is an
                  <strong> architectural and decorative structure</strong>{" "}
                  widely used in
                  <strong>
                    temples, mosques, palaces, villas, hotels, and cultural
                    monuments
                  </strong>
                  . Traditionally built from heavy stone or brick, modern GRC
                  domes are
                  <strong>
                    lightweight, durable, weather-resistant, and customizable
                  </strong>
                  , making them ideal for both classical and contemporary
                  architecture.
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of Domes
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Domes have been a{" "}
                  <strong>symbol of grandeur and spirituality</strong>
                  since{" "}
                  <strong>
                    ancient Roman, Byzantine, and Mughal architecture
                  </strong>
                  . They crowned{" "}
                  <strong>palaces, mosques, temples, and monuments</strong>
                  as a mark of beauty and power.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the invention of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong>
                  in the <strong>20th century</strong>, architects could design
                  <strong>large yet lightweight domes</strong> with
                  <strong>intricate detailing</strong>, making them a popular
                  choice for
                  <strong>
                    religious structures, luxury villas, and heritage
                    restoration projects
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
                <span>20-60mm</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weight</span>
                <span>
                  Varies by size (lightweight compared to stone domes)
                </span>
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
              "Temple Architecture",
              "Mosques & Minarets",
              "Palaces & Forts",
              "Luxury Villas",
              "Hotels & Resorts",
              "Cultural Monuments",
              "Heritage Restoration",
              "Government Buildings",
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
            Material Comparison - Domes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Dome</th>
                  <th className="text-left p-4">Stone Dome</th>
                  <th className="text-left p-4">Brick Dome</th>
                  <th className="text-left p-4">Plaster Dome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal wear",
                    "100+ years (but very heavy & cracks over time)",
                    "40-60 years (requires regular maintenance)",
                    "10-15 years (prone to cracks & damage)",
                  ],
                  [
                    "Maintenance",
                    "Very Low – durable & weather resistant",
                    "High – sealing & polishing required",
                    "Moderate – prone to leakage & plastering",
                    "High – surface damage & repainting needed",
                  ],
                  [
                    "Cost",
                    "₹2000-6000/sq.ft (affordable & elegant)",
                    "₹8000-15000/sq.ft (very expensive)",
                    "₹3000-5000/sq.ft (moderate)",
                    "₹1000-2000/sq.ft (cheap but weak)",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy to install",
                    "Very heavy – requires strong foundation",
                    "Heavy – increases structural load",
                    "Lightweight but fragile",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable (classical & modern styles)",
                    "Limited – only traditional carvings",
                    "Moderate – restricted shapes",
                    "Limited – fragile for detailing",
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
                  alt={`GRC Dome ${key}`}
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
              Get expert consultation for custom GRC Dome designs
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
