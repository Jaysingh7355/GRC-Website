import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/brackets/1.webp",
  2: "/product/jali/2.webp",
  3: "/product/panel/3.webp",
  4: "/product/motif/4.webp",
  5: "/product/dome/5.webp",
  6: "/product/arch/6.webp",
};

export default function GRCDecorativeElements() {
  return (
    <>
      <Head>
        <title>
          GRC Decorative Elements in India | Brackets, Jalis, Panels & Motifs
        </title>
        <meta
          name="description"
          content="Buy premium GRC Decorative Elements in India – including brackets, jalis, panels, domes & motifs. Durable, elegant, and weather-resistant. Perfect for facades, villas, temples & heritage projects."
        />
        <meta
          name="keywords"
          content="GRC decorative elements, GRC brackets, GRC jali, GRC panels, GRC motifs, GRC domes, decorative GRC India, GRC architecture, GRC facade elements, GRC Varanasi, GRC supplier India"
        />
        <meta property="og:title" content="GRC Decorative Elements in India" />
        <meta
          property="og:description"
          content="Premium GRC Decorative Elements – brackets, jalis, panels, domes, and motifs. Lightweight, durable, and elegant designs for facades, interiors, temples & luxury architecture."
        />
        <meta property="og:image" content="/product/decorative/hero.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-decorative-elements"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.varanasigrc.com/grc-decorative-elements"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/decorative/hero.webp"
            alt="Decorative GRC Elements"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">
                GRC Decorative Elements
              </h1>
              <p className="text-xl mb-8">
                Brackets, Jalis, Panels, Domes & Motifs for Timeless
                Architecture
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
                src="/product/decorative/2.webp"
                alt="GRC Decorative Element"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What are GRC Decorative Elements?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>GRC Decorative Elements</strong> include brackets,
                  jalis, panels, domes, motifs, finials, and other custom
                  designs crafted from{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong>. These
                  elements are{" "}
                  <strong>
                    lightweight, durable, weather-resistant, and highly
                    customizable
                  </strong>
                  . They enhance{" "}
                  <strong>
                    facades, interiors, temples, villas, hotels, and heritage
                    buildings
                  </strong>
                  , offering timeless beauty with modern strength.
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of Decorative Elements
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Decorative architectural elements have been used since{" "}
                  <strong>ancient civilizations</strong> to add{" "}
                  <strong>character, symbolism, and grandeur</strong> to
                  buildings. From{" "}
                  <strong>Indian temples to Roman palaces</strong>, brackets,
                  jalis, and motifs defined cultural heritage.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the advent of{" "}
                  <strong>GRC technology in the 20th century</strong>,
                  architects can now design{" "}
                  <strong>
                    intricate yet lightweight elements that combine tradition
                    with modern innovation
                  </strong>
                  . GRC decorative elements are now widely used in{" "}
                  <strong>
                    heritage restoration, luxury homes, temples, hotels, and
                    commercial projects
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
                <span>10-40mm (depending on element)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weight</span>
                <span>Varies by design (Lightweight)</span>
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
              "Facade Decoration",
              "Temple Architecture",
              "Luxury Villas",
              "Hotels & Resorts",
              "Heritage Restoration",
              "Commercial Buildings",
              "Interior Partitions (Jali)",
              "Custom Motifs & Panels",
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
            Material Comparison - Decorative Elements
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Elements</th>
                  <th className="text-left p-4">Stone</th>
                  <th className="text-left p-4">Wood</th>
                  <th className="text-left p-4">Plaster</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal wear",
                    "100+ years (but very heavy & costly)",
                    "15-20 years (prone to decay)",
                    "10-15 years (prone to cracks)",
                  ],
                  [
                    "Maintenance",
                    "Low – durable & weather resistant",
                    "High – polishing & sealing required",
                    "High – termite & moisture protection",
                    "Moderate – fragile surface",
                  ],
                  [
                    "Cost",
                    "Affordable & elegant",
                    "Very expensive",
                    "Moderate (less durable)",
                    "Cheap but weak",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy to install",
                    "Very heavy – requires skilled labor",
                    "Light but weak",
                    "Lightweight but brittle",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable (intricate & modern)",
                    "Limited carving styles",
                    "Custom but less durable",
                    "Custom possible but fragile",
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
                  alt={`GRC Decorative Element ${key}`}
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
              Get expert consultation for custom GRC Decorative Elements
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
