import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/screen/1.webp",
  2: "/product/screen/2.webp",
  3: "/product/screen/3.webp",
  4: "/product/screen/4.webp",
  5: "/product/screen/5.webp",
  6: "/product/screen/6.webp",
};

export default function GRCScreenPage() {
  return (
    <>
      <Head>
        <title>
          GRC Screens & Jali Panels in India | Decorative & Durable Screens
        </title>
        <meta
          name="description"
          content="Premium GRC Screens & Jali Panels in India – lightweight, durable, and weather-resistant. Best supplier of modern & traditional GRC screens for facades, homes, offices, and commercial spaces."
        />
        <meta
          name="keywords"
          content="GRC screens, GRC jali, jali panels supplier India, decorative screens India, facade screens, outdoor GRC screens, buy jali online, GRC screen in Varanasi, GRC screen in Delhi, GRC screen in Bangalore, GRC screen in Mumbai, GRC screen in Hyderabad, GRC screen in Jaipur, GRC screen in Lucknow, GRC screen in Ahmedabad"
        />

        {/* Open Graph / Social Media SEO */}
        <meta
          property="og:title"
          content="GRC Screens & Jali Panels in India"
        />
        <meta
          property="og:description"
          content="Decorative and durable GRC Screens & Jali Panels for facades, homes, offices, and commercial spaces."
        />
        <meta property="og:image" content="/product/screen/1.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-screens"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/screen/1.webp"
            alt="GRC Screen Panel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Screens & Jali</h1>
              <p className="text-xl mb-8">
                Decorative and Functional Architectural Screens for Modern
                Facades
              </p>
              <Button variant="destructive">
                <a href="/pages/contact">Get Custom Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-6 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/product/screen/2.webp"
                alt="GRC Decorative Screen"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* What is GRC Screen */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Screen?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A <strong>GRC Screen (Glass Reinforced Concrete Jali)</strong>{" "}
                  is a decorative architectural element used for{" "}
                  <strong>facades, partitions, windows, and ventilation</strong>
                  . Made from strong yet lightweight GRC, these screens offer{" "}
                  <strong>
                    durability, weather resistance, and intricate design
                    flexibility
                  </strong>
                  . They are widely used in{" "}
                  <strong>
                    modern buildings, homes, hotels, offices, and religious
                    structures
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Screens
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  GRC technology emerged in the <strong>1970s in the UK</strong>
                  , first used for facades and cladding. Over time, architects
                  began using it to craft{" "}
                  <strong>jali screens and panels</strong> due to its ability to
                  create intricate patterns.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, GRC Screens are widely adopted across{" "}
                  <strong>India, the Middle East, and Europe</strong> as a
                  sustainable and aesthetic alternative to heavy stone or
                  delicate wood screens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose GRC Screens?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ventilation & Privacy",
                desc: "Provides airflow while maintaining privacy",
                icon: "🌬️",
              },
              {
                title: "Lightweight & Strong",
                desc: "70% lighter than stone yet highly durable",
                icon: "🪶",
              },
              {
                title: "Custom Designs",
                desc: "Cut into intricate jali patterns and motifs",
                icon: "🎨",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Details */}
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

        {/* Applications */}
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

        {/* Comparison Table */}
        <section className="py-16 px-6 lg:px-16 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Material Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="p-4">GRC Screen</th>
                  <th className="p-4">Stone Screen</th>
                  <th className="p-4">Wood Screen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lifespan", "50+ years", "100+ years", "15-20 years"],
                  ["Maintenance", "Low", "High", "High"],
                  ["Cost/m²", "₹2500-4000", "₹8000-12000", "₹1500-3000"],
                  ["Installation", "Easy", "Complex", "Moderate"],
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
                  alt={`GRC Screen Installation ${key}`}
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
              Get expert consultation for custom GRC Screen & Jali designs
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
