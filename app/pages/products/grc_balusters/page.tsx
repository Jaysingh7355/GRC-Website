import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/balusters/1.webp",
  2: "/product/balusters/2.webp",
  3: "/product/balusters/3.webp",
  4: "/product/balusters/4.webp",
  5: "/product/balusters/5.webp",
  6: "/product/balusters/6.webp",
};

export default function GRCBlaster() {
  return (
    <>
      <Head>
        <title>
          GRC Balusters in India | Durable & Decorative Balcony & Staircase
          Designs
        </title>
        <meta
          name="description"
          content="Buy premium GRC Balusters in India – lightweight, durable, and weather-resistant. Perfect for staircases, balconies, terraces, parapets & railings. Supplier of modern & traditional baluster designs across India."
        />
        <meta
          name="keywords"
          content="GRC baluster, GRC balusters India, decorative GRC balusters, modern GRC railing, GRC staircase balusters, GRC balcony balusters, GRC parapet balusters, buy GRC baluster online, baluster supplier India, baluster in Varanasi, baluster in Delhi, baluster in Bangalore, baluster in Mumbai, baluster in Hyderabad, baluster in Lucknow, baluster in Jaipur, baluster in Ahmedabad"
        />

        {/* Open Graph / Social Media SEO */}
        <meta property="og:title" content="GRC Balusters in India" />
        <meta
          property="og:description"
          content="Lightweight, durable & weather-resistant GRC Balusters for staircases, balconies, and terraces. Supplier of modern & classic designs across India."
        />
        <meta property="og:image" content="/product/balusters/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-balusters"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.varanasigrc.com/grc-balusters"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/balusters/2.webp"
            alt="GRC balusters Architectural Screen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Jali Screens</h1>
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

        <section className="py-16 px-6 lg:px-16 ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/product/balusters/2.webp"
                alt="GRC Balusters Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Baluster?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC Baluster (Glass Reinforced Concrete Baluster)
                  </strong>
                  is a vertical decorative element used in
                  <strong>
                    {" "}
                    railings, staircases, balconies, and parapets
                  </strong>
                  . Traditionally made from stone, wood, or cast iron, modern
                  balusters crafted from GRC are{" "}
                  <strong>
                    lightweight, durable, weather-resistant, and customizable
                  </strong>{" "}
                  in a wide range of designs. They combine heritage charm with
                  the benefits of modern technology, making them ideal for both{" "}
                  <strong>classic and contemporary architecture</strong>.
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Balusters
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The concept of <strong>balusters</strong> dates back to
                  <strong> ancient Greek and Roman architecture</strong>, where
                  they were carved in stone and marble for palaces and
                  monuments. During the <strong>Renaissance in Italy</strong>,
                  balusters became a defining element in grand staircases,
                  terraces, and balconies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In the <strong>20th century</strong>, traditional stone was
                  replaced with cast stone and plain concrete. By the
                  <strong> 1960s–1970s</strong>, the invention of
                  <strong> Glass Reinforced Concrete (GRC)</strong>{" "}
                  revolutionized architecture, allowing the creation of{" "}
                  <strong>lightweight yet durable balusters</strong>. Today, GRC
                  balusters are widely used across the world for
                  <strong>
                    {" "}
                    heritage restoration, luxury villas, hotels, and modern
                    infrastructure projects
                  </strong>
                  .
                </p>
              </div>
            </div>
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
            Common Applications
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Building Facades",
              "Window Screens",
              "Partition Walls",
              "Balcony Railings",
              "Entrance Gates",
              "Landscape Features",
              "Religious Architecture",
              "Cultural Centers",
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

        <section className="py-16 px-6 lg:px-16 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Material Comparison - Balusters
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Baluster </th>
                  <th className="text-left p-4">Stone Baluster </th>
                  <th className="text-left p-4">Wood Baluster</th>
                  <th className="text-left p-4">Metal Baluster </th>
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
                    "High – frequent cleaning & sealing required",
                    "High – polishing, termite protection",
                    "Moderate – needs anti-rust coating",
                  ],
                  [
                    "Cost/m²",
                    "₹2500-4000 (affordable & premium look)",
                    "₹8000-12000 (very expensive)",
                    "₹1500-3000 (cheaper but short life)",
                    "₹4000-7000 (moderate cost)",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy handling",
                    "Very heavy – difficult to transport",
                    "Moderate – lighter than stone",
                    "Moderate – depends on thickness",
                  ],
                  [
                    "Installation",
                    "Easy & quick – reduces labor cost",
                    "Complex – requires skilled labor",
                    "Moderate – carpentry skills required",
                    "Moderate – welding & fitting required",
                  ],
                  [
                    "Design Flexibility",
                    "Highly customizable with intricate designs",
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
                          cellIndex === 0 ? "font-medium " : ""
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
                  alt={`GRC Blusters ${key}`}
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
