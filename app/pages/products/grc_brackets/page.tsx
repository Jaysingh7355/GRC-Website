import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/bracket/1.webp",
  2: "/product/bracket/2.webp",
  3: "/product/bracket/3.webp",
  4: "/product/bracket/4.webp",
  5: "/product/bracket/5.webp",
  6: "/product/bracket/6.webp",
};

export default function GRCBrackets() {
  return (
    <>
      <Head>
        <title>
          GRC Brackets in India | Strong & Decorative Architectural Supports
        </title>
        <meta
          name="description"
          content="Buy premium GRC Brackets in India – lightweight, durable, and decorative. Perfect for facades, beams, canopies, pergolas, and heritage buildings. Supplier of modern & traditional bracket designs across India."
        />
        <meta
          name="keywords"
          content="GRC bracket, GRC brackets India, decorative GRC brackets, modern GRC support, GRC facade brackets, GRC pergola brackets, GRC heritage brackets, buy GRC bracket online, bracket supplier India, bracket in Varanasi, bracket in Delhi, bracket in Bangalore, bracket in Mumbai, bracket in Hyderabad, bracket in Lucknow, bracket in Jaipur, bracket in Ahmedabad"
        />
        <meta property="og:title" content="GRC Brackets in India" />
        <meta
          property="og:description"
          content="Strong, durable & decorative GRC Brackets for facades, beams, pergolas, and canopies. Supplier of modern & traditional designs across India."
        />
        <meta property="og:image" content="/product/bracket/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-brackets"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-brackets" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/bracket/1.webp"
            alt="Decorative GRC Brackets"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Brackets</h1>
              <p className="text-xl mb-8">
                Strong & Decorative Architectural Supports for Modern & Heritage
                Buildings
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
                src="/product/bracket/2.webp"
                alt="GRC Bracket Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Bracket?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC Bracket (Glass Reinforced Concrete Bracket)
                  </strong>{" "}
                  is a decorative and functional architectural support used in{" "}
                  <strong>
                    facades, canopies, pergolas, balconies, beams, and heritage
                    restoration projects
                  </strong>
                  . Traditionally crafted from stone, wood, or metal, modern GRC
                  brackets are{" "}
                  <strong>
                    lightweight, durable, weather-resistant, and customizable
                  </strong>
                  . They add both{" "}
                  <strong>structural strength and ornamental appeal</strong>,
                  making them popular in both{" "}
                  <strong>modern and traditional architecture</strong>.
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Brackets
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Brackets have been an essential element of{" "}
                  <strong>classical architecture</strong> since{" "}
                  <strong>Greek and Roman times</strong>, often carved in stone
                  and marble to support beams and arches. During the{" "}
                  <strong>Renaissance and Baroque periods</strong>, decorative
                  brackets became a symbol of grandeur in palaces, churches, and
                  mansions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the invention of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong> in the{" "}
                  <strong>1960s–1970s</strong>, architects gained the ability to
                  design{" "}
                  <strong>lightweight yet durable decorative brackets</strong>{" "}
                  for both heritage restoration and modern construction. Today,
                  GRC brackets are widely used in{" "}
                  <strong>
                    luxury villas, hotels, religious architecture, and
                    commercial buildings
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
                <span>15-40mm</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weight</span>
                <span>20-35 kg/m²</span>
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
              "Building Facades",
              "Balcony Supports",
              "Pergolas & Canopies",
              "Heritage Restoration",
              "Beam Supports",
              "Entrance Arches",
              "Temple & Religious Structures",
              "Luxury Villas & Hotels",
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
            Material Comparison - Brackets
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Bracket</th>
                  <th className="text-left p-4">Stone Bracket</th>
                  <th className="text-left p-4">Wood Bracket</th>
                  <th className="text-left p-4">Metal Bracket</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal wear",
                    "100+ years (but prone to cracks)",
                    "15-20 years (susceptible to termites & decay)",
                    "30-40 years (can rust or corrode)",
                  ],
                  [
                    "Maintenance",
                    "Very Low – weather resistant & durable",
                    "High – frequent sealing required",
                    "High – polishing & termite protection",
                    "Moderate – needs anti-rust coating",
                  ],
                  [
                    "Cost/unit",
                    "₹2000-4000 (affordable & stylish)",
                    "₹7000-12000 (very expensive)",
                    "₹1500-2500 (cheaper but short life)",
                    "₹4000-7000 (moderate cost)",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy installation",
                    "Very heavy – difficult to handle",
                    "Moderate – lighter than stone",
                    "Moderate – depends on thickness",
                  ],
                  [
                    "Installation",
                    "Quick & cost-effective",
                    "Complex – requires skilled stone masons",
                    "Moderate – carpentry skills required",
                    "Moderate – welding & fitting required",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable with intricate detailing",
                    "Limited design flexibility",
                    "Custom designs possible but not durable",
                    "Custom designs possible but costly",
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
                  alt={`GRC Bracket ${key}`}
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
              Get expert consultation for custom GRC Bracket designs
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
