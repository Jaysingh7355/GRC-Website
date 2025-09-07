import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/mural/1.webp",
  2: "/product/mural/2.webp",
  3: "/product/mural/3.webp",
  4: "/product/mural/4.webp",
  5: "/product/mural/5.webp",
  6: "/product/mural/6.webp",
};

export default function GRCMurals() {
  return (
    <>
      <Head>
        <title>
          GRC Murals in India | Decorative Wall Art & Architectural Panels
        </title>
        <meta
          name="description"
          content="Premium GRC Murals in India – elegant, durable, and customizable wall art for interiors, exteriors, temples, hotels & landscaping projects. Supplier of modern & classical GRC murals across India."
        />
        <meta
          name="keywords"
          content="GRC murals, decorative wall art, architectural murals, GRC mural panels, custom GRC murals, temple murals India, buy GRC murals online, mural supplier India, GRC murals in Varanasi, GRC murals in Delhi, GRC murals in Mumbai, GRC murals in Bangalore, GRC murals in Hyderabad, GRC murals in Jaipur, GRC murals in Ahmedabad"
        />
        <meta property="og:title" content="GRC Murals in India" />
        <meta
          property="og:description"
          content="Beautiful & durable GRC murals for interiors, exteriors, temples, hotels, and landscaping projects. Custom designs available across India."
        />
        <meta property="og:image" content="/product/mural/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-murals"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.varanasigrc.com/grc-murals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/mural/1.webp"
            alt="Decorative GRC Murals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Murals</h1>
              <p className="text-xl mb-8">
                Artistic Wall Panels for Interiors, Exteriors & Cultural Spaces
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
                src="/product/mural/3.webp"
                alt="GRC Mural Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🎨 What are GRC Murals?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>GRC Murals (Glass Reinforced Concrete Murals)</strong>{" "}
                  are <strong>decorative wall art panels</strong> crafted for{" "}
                  <strong>
                    temples, hotels, luxury residences, cultural monuments, and
                    landscaping projects
                  </strong>
                  . They combine{" "}
                  <strong>
                    artistic beauty, durability, and weather-resistance
                  </strong>
                  , making them ideal for{" "}
                  <strong>
                    both indoor and outdoor architectural enhancement
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of Murals in Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Murals have been used since{" "}
                  <strong>ancient civilizations</strong> such as{" "}
                  <strong>Egypt, Greece, and India</strong> to depict{" "}
                  <strong>religious, cultural, and artistic stories</strong>.
                  They transformed plain walls into{" "}
                  <strong>narratives of history and beauty</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With <strong>GRC technology</strong>, murals can now be{" "}
                  <strong>lightweight, customizable, and long-lasting</strong>.
                  Architects and designers use them to{" "}
                  <strong>
                    enhance facades, interiors, temples, hotels, and public
                    spaces
                  </strong>
                  , blending traditional craftsmanship with{" "}
                  <strong>modern durability</strong>.
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
                <span>Lightweight panels, easier than stone murals</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Durability</span>
                <span>25+ years with minimal maintenance</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weather Resistance</span>
                <span>High – suitable for outdoor installations</span>
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
              "Temple Wall Panels",
              "Hotel & Resort Interiors",
              "Luxury Residences",
              "Cultural Monuments",
              "Garden & Landscaping Walls",
              "Corporate Buildings",
              "Public Spaces",
              "Art Installations",
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
            Material Comparison - Murals
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Mural</th>
                  <th className="text-left p-4">Stone Mural</th>
                  <th className="text-left p-4">Wood Mural</th>
                  <th className="text-left p-4">Plaster Mural</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Weight",
                    "Lightweight – easy installation",
                    "Very heavy – needs strong support",
                    "Moderate – prone to termites",
                    "Light but fragile",
                  ],
                  [
                    "Durability",
                    "25+ years with minimal care",
                    "100+ years but prone to cracks",
                    "15-20 years – termite damage possible",
                    "10-15 years – prone to chipping",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable – modern & traditional",
                    "Limited carving styles",
                    "Custom carvings possible but not durable",
                    "Custom but fragile",
                  ],
                  [
                    "Cost",
                    "₹1,500 – ₹8,000/sq.ft (based on design)",
                    "₹5,000 – ₹15,000/sq.ft",
                    "₹2,000 – ₹6,000/sq.ft",
                    "₹1,000 – ₹3,000/sq.ft",
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
                  alt={`GRC Mural ${key}`}
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
              Get expert consultation for custom GRC Mural designs
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
