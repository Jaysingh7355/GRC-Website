import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/sculpture/1.webp",
  2: "/product/sculpture/2.webp",
  3: "/product/sculpture/3.webp",
  4: "/product/sculpture/4.webp",
  5: "/product/sculpture/5.webp",
  6: "/product/sculpture/6.webp",
};

export default function GRCSculpturePage() {
  return (
    <>
      <Head>
        <title>
          GRC Sculptures in India | Artistic & Durable Decorative Supplier
        </title>
        <meta
          name="description"
          content="Buy premium GRC Sculptures in India – durable, lightweight, and weather-resistant. Best supplier of traditional & modern sculpture designs for homes, hotels, temples, and commercial spaces."
        />
        <meta
          name="keywords"
          content="GRC sculptures, sculptures supplier India, buy sculptures online, decorative sculptures India, garden sculptures, temple sculptures, outdoor sculptures India, sculpture in Varanasi, sculpture in Bangalore, sculpture in Delhi, sculpture in Mumbai, sculpture in Kolkata, sculpture in Chennai, sculpture in Hyderabad, sculpture in Pune, sculpture in Ahmedabad, sculpture in Jaipur, sculpture in Lucknow, sculpture in Kanpur, sculpture in Nagpur, sculpture in Indore, sculpture in Thiruvananthapuram, sculpture in Coimbatore, sculpture in Visakhapatnam, sculpture in Vadodara, sculpture in Surat, sculpture in Mysore, sculpture in Hubli, sculpture in Mangalore, sculpture in Gorakhpur, sculpture in Agra, sculpture in Amritsar"
        />

        {/* Open Graph / Social Media SEO */}
        <meta property="og:title" content="GRC Sculptures in India" />
        <meta
          property="og:description"
          content="Durable and artistic GRC sculptures for gardens, temples, hotels, and cultural projects across India."
        />
        <meta property="og:image" content="/product/sculpture/1.webp" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-sculptures"
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
            src="/product/sculpture/1.webp"
            alt="GRC Sculpture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Sculptures</h1>
              <p className="text-xl mb-8">
                Artistic & Durable Sculptures for Gardens, Temples, and Cultural
                Spaces
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
                src="/product/sculpture/2.webp"
                alt="GRC Sculpture Design"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* What is GRC Sculpture */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🎭 What is a GRC Sculpture?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC Sculpture (Glass Reinforced Concrete Sculpture)
                  </strong>{" "}
                  is an artistic element crafted for{" "}
                  <strong>
                    gardens, temples, hotels, cultural buildings, and public
                    spaces
                  </strong>
                  . Made from GRC, these sculptures combine{" "}
                  <strong>durability, detail, and weather resistance</strong>{" "}
                  while enhancing the visual appeal of any project.
                </p>
              </div>

              {/* History Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Sculptures
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  GRC sculptures started becoming popular in the{" "}
                  <strong>1970s in Europe</strong> as decorative art in
                  architecture. By the <strong>1980s–1990s</strong>, GRC was
                  widely adopted for{" "}
                  <strong>
                    temple sculptures, garden statues, and cultural monuments
                  </strong>{" "}
                  due to its ability to replicate intricate designs with
                  long-lasting durability.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, GRC sculptures are widely used across{" "}
                  <strong>India, Europe, and the Middle East</strong> in{" "}
                  <strong>
                    religious, residential, and commercial projects
                  </strong>
                  , replacing traditional stone and metal sculptures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose GRC Sculptures?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weather Resistant",
                desc: "Perfect for outdoor spaces – withstands sun, rain, and humidity",
                icon: "🌦️",
              },
              {
                title: "Detailed Craftsmanship",
                desc: "Intricate patterns and artistic designs made possible with GRC",
                icon: "🎨",
              },
              {
                title: "Lightweight & Durable",
                desc: "Easy to install and long-lasting compared to stone",
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

        {/* Applications */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Common Applications
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Temple Sculptures",
              "Garden Statues",
              "Hotel & Resort Decor",
              "Cultural Monuments",
              "Public Parks",
              "Residential Villas",
              "Museums & Art Galleries",
              "Commercial Complexes",
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
                  <th className="p-4">GRC Sculpture</th>
                  <th className="p-4">Stone Sculpture</th>
                  <th className="p-4">Metal Sculpture</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lifespan", "50+ years", "100+ years", "20-30 years"],
                  ["Maintenance", "Low", "High (polishing)", "High (rusting)"],
                  ["Cost", "₹5000–50,000", "₹50,000–5 lakh", "₹20,000–2 lakh"],
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
            Sculpture Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(images).map(([key, src]) => (
              <Card
                key={key}
                className="aspect-square relative overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`GRC Sculpture Project ${key}`}
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
            <h2 className="text-3xl font-bold mb-4">Get Your GRC Sculpture</h2>
            <p className="mb-8">
              Contact us today for custom GRC sculpture designs for your project
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
