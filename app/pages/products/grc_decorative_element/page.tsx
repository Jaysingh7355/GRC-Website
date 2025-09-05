import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/cornice/1.webp",
  2: "/product/planter/2.webp",
  3: "/product/cornice/3.webp",
  4: "/product/capital/4.webp",
  5: "/product/column/5.webp",
  6: "/product/arch/6.webp",
};

export default function GRCCornice() {
  return (
    <>
      <Head>
        <title>
          GRC Cornice in India | Decorative Exterior & Interior Architectural
          Mouldings
        </title>
        <meta
          name="description"
          content="Buy premium GRC Cornice in India – elegant, durable, and weather-resistant. Perfect for facades, roof edges, interiors, villas & heritage restoration projects. Supplier of modern & classical cornice designs across India."
        />
        <meta
          name="keywords"
          content="GRC cornice, GRC cornice India, decorative GRC mouldings, modern GRC cornice, GRC facade cornice, GRC roof cornice, GRC classical mouldings, buy GRC cornice online, cornice supplier India, cornice in Varanasi, cornice in Delhi, cornice in Bangalore, cornice in Mumbai, cornice in Hyderabad, cornice in Lucknow, cornice in Jaipur, cornice in Ahmedabad"
        />
        <meta property="og:title" content="GRC Cornice in India" />
        <meta
          property="og:description"
          content="Elegant, durable & weather-resistant GRC Cornice mouldings for facades, interiors, and heritage architecture. Supplier of classical & modern cornice designs across India."
        />
        <meta property="og:image" content="/product/cornice/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-cornice"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-cornice" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/cornice/7.webp"
            alt="Decorative GRC Cornice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Cornice</h1>
              <p className="text-xl mb-8">
                Decorative Architectural Mouldings for Facades & Interiors
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
                src="/product/cornice/2.webp"
                alt="GRC Cornice Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Cornice?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC Cornice (Glass Reinforced Concrete Cornice)
                  </strong>{" "}
                  is a{" "}
                  <strong>
                    decorative moulding used at the junction of a wall and roof
                  </strong>{" "}
                  or along facades to enhance{" "}
                  <strong>architectural beauty and design</strong>.
                  Traditionally carved from stone or wood, modern GRC cornices
                  are{" "}
                  <strong>
                    lightweight, durable, weather-resistant, and highly
                    customizable
                  </strong>
                  . They are widely used in{" "}
                  <strong>
                    villas, hotels, temples, luxury residences, and heritage
                    restoration projects
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of Cornices
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cornices have been a{" "}
                  <strong>key element in classical architecture</strong> since{" "}
                  <strong>Greek and Roman times</strong>, serving both
                  structural and decorative purposes. They defined elegance in{" "}
                  <strong>temples, palaces, and royal buildings</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the development of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong> in the{" "}
                  <strong>20th century</strong>, architects gained the ability
                  to design{" "}
                  <strong>
                    intricate yet lightweight cornices for modern and heritage
                    projects
                  </strong>
                  . Today, GRC cornices are preferred for{" "}
                  <strong>
                    facades, interiors, hotels, cultural monuments, and luxury
                    homes
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
                <span>10-25 kg/m</span>
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
              "Roof Edges",
              "Temple Architecture",
              "Luxury Villas",
              "Hotels & Resorts",
              "Heritage Restoration",
              "Government Buildings",
              "Interior Mouldings",
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
            Material Comparison - Cornices
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Cornice</th>
                  <th className="text-left p-4">Stone Cornice</th>
                  <th className="text-left p-4">Wood Cornice</th>
                  <th className="text-left p-4">Plaster Cornice</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal wear",
                    "100+ years (but very heavy & cracks over time)",
                    "15-20 years (susceptible to termites & decay)",
                    "10-15 years (prone to chipping & cracks)",
                  ],
                  [
                    "Maintenance",
                    "Very Low – durable & weather resistant",
                    "High – sealing & polishing required",
                    "High – termite & moisture protection",
                    "Moderate – prone to surface damage",
                  ],
                  [
                    "Cost/m",
                    "₹1000-3000 (affordable & elegant)",
                    "₹5000-8000 (very expensive)",
                    "₹1500-2500 (cheaper but less durable)",
                    "₹800-1500 (cheap but weak)",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy to install",
                    "Very heavy – requires skilled labor",
                    "Light – but weak over time",
                    "Lightweight but brittle",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable (classical & modern styles)",
                    "Limited to carving styles",
                    "Custom designs possible but less durable",
                    "Custom designs possible but fragile",
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
                  alt={`GRC Cornice ${key}`}
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
              Get expert consultation for custom GRC Cornice designs
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
