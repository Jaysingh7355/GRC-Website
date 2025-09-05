import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/capital/1.webp",
  2: "/product/capital/2.webp",
  3: "/product/capital/3.webp",
  4: "/product/capital/4.webp",
  5: "/product/capital/5.webp",
  6: "/product/capital/6.webp",
};

export default function GRCCapitals() {
  return (
    <>
      <Head>
        <title>
          GRC Capitals in India | Decorative Column Tops & Architectural Details
        </title>
        <meta
          name="description"
          content="Buy premium GRC Capitals in India – elegant, durable, and weather-resistant. Perfect for columns, facades, temples, villas & heritage restoration projects. Supplier of modern & classical capital designs across India."
        />
        <meta
          name="keywords"
          content="GRC capital, GRC capitals India, decorative GRC column tops, modern GRC capitals, GRC facade capitals, GRC temple capitals, GRC classical capitals, buy GRC capitals online, capital supplier India, capital in Varanasi, capital in Delhi, capital in Bangalore, capital in Mumbai, capital in Hyderabad, capital in Lucknow, capital in Jaipur, capital in Ahmedabad"
        />
        <meta property="og:title" content="GRC Capitals in India" />
        <meta
          property="og:description"
          content="Elegant, durable & weather-resistant GRC Capitals for columns, facades, and heritage architecture. Supplier of classical & modern capital designs across India."
        />
        <meta property="og:image" content="/product/capital/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-capitals"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-capitals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/capital/1.webp"
            alt="Decorative GRC Capital"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Capitals</h1>
              <p className="text-xl mb-8">
                Decorative Column Tops for Classical & Modern Architectural
                Excellence
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
                src="/product/capital/2.webp"
                alt="GRC Capital Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Capital?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC Capital (Glass Reinforced Concrete Capital)
                  </strong>{" "}
                  is the decorative topmost element of a{" "}
                  <strong>column or pillar</strong>, used to enhance both{" "}
                  <strong>structural elegance and visual appeal</strong>.
                  Traditionally crafted from stone or marble, modern GRC
                  capitals are{" "}
                  <strong>
                    lightweight, durable, weather-resistant, and customizable
                  </strong>
                  . They are commonly found in{" "}
                  <strong>
                    temples, villas, hotels, heritage restoration projects, and
                    luxury facades
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Capitals
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Capitals have been used since{" "}
                  <strong>
                    ancient Egyptian, Greek, and Roman architecture
                  </strong>
                  , symbolizing strength and artistry. Classical styles like{" "}
                  <strong>Doric, Ionic, and Corinthian</strong> defined the
                  grandeur of temples, palaces, and monuments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the development of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong> in the{" "}
                  <strong>20th century</strong>, architects gained the ability
                  to design{" "}
                  <strong>
                    intricate yet lightweight capitals for both modern and
                    heritage projects
                  </strong>
                  . Today, GRC capitals are widely used in{" "}
                  <strong>
                    cultural centers, luxury villas, religious architecture, and
                    government buildings
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
                <span>15-30 kg/unit</span>
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
              "Classical Columns",
              "Temple Architecture",
              "Facade Decoration",
              "Luxury Villas",
              "Hotels & Resorts",
              "Heritage Restoration",
              "Government Buildings",
              "Cultural Monuments",
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
            Material Comparison - Capitals
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Capital</th>
                  <th className="text-left p-4">Stone Capital</th>
                  <th className="text-left p-4">Wood Capital</th>
                  <th className="text-left p-4">Metal Capital</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal wear",
                    "100+ years (but prone to cracks & heavy weight)",
                    "15-25 years (susceptible to termites & decay)",
                    "30-40 years (can rust or corrode)",
                  ],
                  [
                    "Maintenance",
                    "Very Low – durable & weather resistant",
                    "High – sealing & polishing required",
                    "High – termite & moisture protection",
                    "Moderate – needs anti-rust coating",
                  ],
                  [
                    "Cost/unit",
                    "₹3000-6000 (affordable & elegant)",
                    "₹10000-20000 (very expensive)",
                    "₹2000-4000 (cheaper but less durable)",
                    "₹5000-9000 (moderate cost)",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy to install",
                    "Very heavy – requires skilled labor",
                    "Light – but weak over time",
                    "Moderate – depends on thickness",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable (classical & modern styles)",
                    "Limited to carving styles",
                    "Custom designs possible but less durable",
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
                  alt={`GRC Capital ${key}`}
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
              Get expert consultation for custom GRC Capital designs
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
