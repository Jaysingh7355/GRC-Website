import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/noise_barrier/1.webp",
  2: "/product/noise_barrier/2.webp",
  3: "/product/noise_barrier/3.webp",
  4: "/product/noise_barrier/4.webp",
  5: "/product/noise_barrier/5.webp",
  6: "/product/noise_barrier/6.webp",
};

export default function GRCNoiseBarrier() {
  return (
    <>
      <Head>
        <title>
          GRC Noise Barrier in India | Soundproof & Durable Acoustic Walls
        </title>
        <meta
          name="description"
          content="Buy premium GRC Noise Barriers in India – strong, soundproof, and weather-resistant. Perfect for highways, railways, industrial plants, residential areas & smart city projects. Supplier of modern noise barrier solutions across India."
        />
        <meta
          name="keywords"
          content="GRC noise barrier, GRC sound barrier, acoustic wall panels India, GRC noise wall, noise barrier supplier India, noise barrier in Delhi, noise barrier in Bangalore, noise barrier in Mumbai, highway noise barrier India, railway noise barrier"
        />
        <meta property="og:title" content="GRC Noise Barrier in India" />
        <meta
          property="og:description"
          content="Durable & soundproof GRC Noise Barriers for highways, industries, railways & residential projects. Supplier of modern acoustic wall solutions across India."
        />
        <meta property="og:image" content="/product/noisebarrier/2.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-noise-barrier"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.varanasigrc.com/grc-noise-barrier"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/noise_barrier/1.webp"
            alt="GRC Noise Barrier"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Noise Barrier</h1>
              <p className="text-xl mb-8">
                Strong, Durable & Acoustic Walls for Noise Reduction
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
                src="/product/noise_barrier/2.webp"
                alt="GRC Noise Barrier Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🔇 What is a GRC Noise Barrier?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC Noise Barrier (Glass Reinforced Concrete Noise Wall)
                  </strong>{" "}
                  is a{" "}
                  <strong>
                    high-performance acoustic wall used to block and reduce
                    noise pollution
                  </strong>{" "}
                  from{" "}
                  <strong>
                    highways, railways, industries, airports, and residential
                    areas
                  </strong>
                  . These barriers combine{" "}
                  <strong>strength, durability, and sound absorption</strong> to
                  ensure a quieter and more sustainable environment. GRC panels
                  are{" "}
                  <strong>
                    weather-resistant, fireproof, lightweight, and easy to
                    install
                  </strong>
                  , making them an ideal choice for urban infrastructure and
                  smart city projects.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌍 Why Choose GRC Noise Barriers?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Noise pollution is a{" "}
                  <strong>serious challenge in modern cities</strong>. GRC Noise
                  Barriers not only{" "}
                  <strong>reduce unwanted sound transmission</strong> but also
                  provide{" "}
                  <strong>
                    aesthetic appeal, long life, and eco-friendly construction
                  </strong>
                  .
                </p>
                <p className="text-gray-700 leading-relaxed">
                  They are widely used in{" "}
                  <strong>
                    highways, metro projects, airports, factories, and
                    residential complexes
                  </strong>{" "}
                  where noise reduction is essential for{" "}
                  <strong>health, comfort, and safety</strong>.
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
                <span>Panel Thickness</span>
                <span>50–120mm</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Height</span>
                <span>Up to 6 meters</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Sound Reduction Index (STC)</span>
                <span>≥ 35–45 dB</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Compressive Strength</span>
                <span>≥ 30–40 MPa</span>
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
              "Highways & Expressways",
              "Railway Tracks",
              "Airports",
              "Industrial Plants",
              "Metro Projects",
              "Residential Colonies",
              "Factories & Warehouses",
              "Smart City Projects",
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
            Material Comparison - Noise Barriers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">GRC Noise Barrier</th>
                  <th className="text-left p-4">Metal Barrier</th>
                  <th className="text-left p-4">Concrete Wall</th>
                  <th className="text-left p-4">Wooden Barrier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Lifespan",
                    "50+ years with minimal maintenance",
                    "20–30 years (prone to rust)",
                    "40–60 years (very heavy)",
                    "10–15 years (weak & decays)",
                  ],
                  [
                    "Maintenance",
                    "Low – weather & corrosion resistant",
                    "High – needs painting & rust-proofing",
                    "Moderate – cracks may occur",
                    "High – termite & moisture issues",
                  ],
                  [
                    "Cost/m²",
                    "₹2500–5000 (balanced & long-lasting)",
                    "₹3000–6000 (expensive)",
                    "₹4000–7000 (heavy installation)",
                    "₹1500–2500 (cheap but weak)",
                  ],
                  [
                    "Noise Reduction",
                    "High – STC 35–45 dB",
                    "Medium – limited absorption",
                    "Medium – reflective but not absorbent",
                    "Low – weak sound resistance",
                  ],
                  [
                    "Weight",
                    "Lightweight – easy to install",
                    "Moderate – heavy panels",
                    "Very heavy – requires strong foundation",
                    "Light but not durable",
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
                  alt={`GRC Noise Barrier ${key}`}
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
              Get expert consultation for custom GRC Noise Barrier solutions
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
