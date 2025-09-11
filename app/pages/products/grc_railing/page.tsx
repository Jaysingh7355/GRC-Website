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

export default function GRCRailingPage() {
  return (
    <>
      <Head>
        <title>
          GRC Railings in India | Durable & Stylish Railing Supplier
        </title>
        <meta
          name="description"
          content="Buy premium GRC Railings in India – durable, lightweight, and weather-resistant. Best supplier of modern & traditional railing designs for homes, hotels, and commercial spaces."
        />
        <meta
          name="keywords"
          content="GRC railings, railings supplier India, buy railing online, balcony railings India, concrete railings, decorative railings, outdoor railings India, railing in Varanasi, railing in Bangalore, railing in Delhi, railing in Mumbai, railing in Kolkata, railing in Chennai, railing in Hyderabad, railing in Pune, railing in Ahmedabad, railing in Jaipur, railing in Lucknow, railing in Kanpur, railing in Nagpur, railing in Indore, railing in Thiruvananthapuram, railing in Coimbatore, railing in Visakhapatnam, railing in Vadodara, railing in Surat, railing in Mysore, railing in Hubli, railing in Mangalore, railing in Gorakhpur, railing in Agra, railing in Amritsar"
        />

        {/* Open Graph / Social Media SEO */}
        <meta property="og:title" content="GRC Railings in India" />
        <meta
          property="og:description"
          content="Durable and stylish GRC railings for balconies, terraces, staircases, and commercial spaces across India."
        />
        <meta property="og:image" content="/product/railing/1.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-railings"
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
            src="/product/balusters/1.webp"
            alt="GRC Railing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Railings</h1>
              <p className="text-xl mb-8">
                Stylish & Durable Railings for Balconies, Terraces, and
                Staircases
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
                src="/product/balusters/2.webp"
                alt="GRC Railing Design"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* What is GRC Railing */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🏛️ What is a GRC Railing?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC Railing (Glass Reinforced Concrete Railing)
                  </strong>{" "}
                  is a modern architectural element designed for{" "}
                  <strong>balconies, staircases, terraces, and facades</strong>.
                  Made from durable and lightweight GRC, these railings combine
                  <strong>strength, beauty, and weather resistance</strong> to
                  provide safety while enhancing aesthetics.
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Railings
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  GRC railings originated in the{" "}
                  <strong>1970s in Europe</strong> when GRC was first used for
                  decorative facades and safety features. By the{" "}
                  <strong>1980s–1990s</strong>, architects began incorporating
                  GRC into{" "}
                  <strong>
                    balcony railings, terrace boundaries, and staircases
                  </strong>{" "}
                  due to its durability and design flexibility.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, GRC railings are widely used across{" "}
                  <strong>India, Europe, and the Middle East</strong> in both
                  <strong> residential and commercial projects</strong>,
                  replacing traditional stone and iron railings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose GRC Railings?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weather Resistant",
                desc: "Withstands rain, heat, and cold without cracking",
                icon: "🌦️",
              },
              {
                title: "Elegant Designs",
                desc: "Intricate railing patterns with modern or traditional styles",
                icon: "🎨",
              },
              {
                title: "Lightweight & Strong",
                desc: "Easy to install while maintaining structural safety",
                icon: "🏗️",
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
                <span>Height</span>
                <span>2.5–4 ft (customizable)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Thickness</span>
                <span>25–40 mm</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Weight</span>
                <span>30–50 kg/m²</span>
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
              "Balcony Railings",
              "Terrace Boundaries",
              "Staircase Railings",
              "Villa & Bungalow Projects",
              "Hotels & Resorts",
              "Commercial Complexes",
              "Religious & Cultural Buildings",
              "Public Infrastructure",
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
                  <th className="p-4">GRC Railing</th>
                  <th className="p-4">Stone Railing</th>
                  <th className="p-4">Iron Railing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lifespan", "50+ years", "100+ years", "10-15 years"],
                  ["Maintenance", "Low", "High", "High (rusting)"],
                  ["Cost/ft", "₹500–1500", "₹3000–6000", "₹800–2000"],
                  ["Installation", "Easy", "Heavy & Complex", "Moderate"],
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

        {/* Project Gallery */}
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
                  alt={`GRC Railing Project ${key}`}
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
            <h2 className="text-3xl font-bold mb-4">Get Your GRC Railing</h2>
            <p className="mb-8">
              Contact us today for custom GRC railing designs for your project
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
