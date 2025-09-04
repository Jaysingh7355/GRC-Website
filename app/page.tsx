import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/column/1.webp",
  2: "/product/column/2.webp",
  3: "/product/column/3.webp",
  4: "/product/column/4.webp",
  5: "/product/column/5.webp",
  6: "/product/column/6.webp",
};

export default function GRCColumns() {
  return (
    <>
      <Head>
        <title>
          GRC Columns in India | Decorative & Structural Column Designs
        </title>
        <meta
          name="description"
          content="Buy premium GRC Columns in India – strong, durable, and weather-resistant. Ideal for villas, facades, temples & heritage projects. Supplier of modern & classical GRC column designs across India."
        />
        <meta
          name="keywords"
          content="GRC column, GRC columns India, decorative GRC pillars, modern GRC columns, GRC facade columns, GRC temple columns, GRC classical columns, buy GRC columns online, column supplier India, GRC column in Varanasi, column in Delhi, column in Bangalore, column in Mumbai, column in Hyderabad, column in Lucknow, column in Jaipur, column in Ahmedabad"
        />
        <meta property="og:title" content="GRC Columns in India" />
        <meta
          property="og:description"
          content="Durable & elegant GRC Columns for facades, villas, temples & heritage restoration. Supplier of classical & modern column designs across India."
        />
        <meta property="og:image" content="/product/column/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-columns"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-columns" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/column/1.webp"
            alt="Decorative GRC Column"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Columns</h1>
              <p className="text-xl mb-8">
                Decorative & Structural Columns for Classical & Modern
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
                src="/product/column/2.webp"
                alt="GRC Column Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Column?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>GRC Column (Glass Reinforced Concrete Column)</strong>{" "}
                  is a{" "}
                  <strong>decorative or structural vertical element</strong>{" "}
                  used in architecture to support beams, arches, or roofs while
                  adding <strong>elegance and strength</strong>. Unlike
                  traditional stone or marble columns,{" "}
                  <strong>
                    GRC columns are lightweight, durable, weather-resistant, and
                    customizable
                  </strong>
                  . They are widely used in{" "}
                  <strong>
                    temples, villas, luxury facades, hotels, and heritage
                    restoration
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Columns
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Columns have been the backbone of{" "}
                  <strong>Egyptian, Greek, and Roman architecture</strong>,
                  representing{" "}
                  <strong>strength, stability, and artistic beauty</strong>.
                  Famous styles like{" "}
                  <strong>Doric, Ionic, and Corinthian</strong> defined ancient
                  temples and palaces.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the advent of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong> in the{" "}
                  <strong>20th century</strong>, architects began creating{" "}
                  <strong>
                    lightweight, customizable columns with intricate details
                  </strong>
                  . Today, GRC columns are preferred in{" "}
                  <strong>
                    religious buildings, luxury villas, government structures,
                    and cultural monuments
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
                <span>30-80mm</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Height</span>
                <span>Up to 20 ft (custom sizes available)</span>
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
              "Luxury Villas",
              "Facade Decoration",
              "Hotels & Resorts",
              "Heritage Restoration",
              "Government Buildings",
              "Banquet Halls",
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
            Material Comparison - Columns
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Column</th>
                  <th className="text-left p-4">Stone Column</th>
                  <th className="text-left p-4">Wood Column</th>
                  <th className="text-left p-4">Metal Column</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal maintenance",
                    "100+ years (but very heavy & costly)",
                    "15-25 years (prone to termites & decay)",
                    "30-40 years (risk of corrosion)",
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
                    "₹6000-15000 (affordable premium look)",
                    "₹20000-50000 (very expensive)",
                    "₹5000-10000 (cheaper but weak)",
                    "₹10000-20000 (moderate cost)",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy installation",
                    "Very heavy – needs skilled labor",
                    "Light – but less durable",
                    "Moderate – depends on thickness",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable (classical & modern)",
                    "Limited to carving styles",
                    "Custom possible but less durable",
                    "Custom possible but costly",
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
                  alt={`GRC Column ${key}`}
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
              Get expert consultation for custom GRC Column designs
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
