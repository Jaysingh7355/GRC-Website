import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/planter/1.webp",
  2: "/product/planter/2.webp",
  3: "/product/planter/3.webp",
  4: "/product/planter/4.webp",
  5: "/product/planter/5.webp",
  6: "/product/planter/6.webp",
};

export default function GRCJaliPage() {
  return (
    <>
      <Head>
        <title>
          GRC Planters in India | Modern & Durable Planters Supplier
        </title>
        <meta
          name="description"
          content="Buy premium GRC Planters in India – lightweight, durable, and weather-resistant. Best supplier of modern & traditional planters for gardens, homes, offices, and hotels."
        />
        <meta
          name="keywords"
          content="GRC planter, planterin lower price planter supplier India, buy planter online, garden planters India, concrete planters, decorative planters, outdoor planters India planter in varanasi, planter in banglore, planter in delhi, planter in mumbai, planter in kolkata, planter in chennai, planter in hyderabad, planter in pune, planter in ahmedabad, planter in jaipur, planter in lucknow planter in kanpur, planter in nagpur, planter in indore, planter in thiruvananthapuram, planter in coimbatore, planter in visakhapatnam  planter in vadodara, planter in surat, planter in mysore, planter in hubli, planter in mangalore, planter in gorakhpur, planter in agra, planter in varanasi, planter in amritsar"
        />

        {/* Open Graph / Social Media SEO */}
        <meta property="og:title" content="GRC Planters in India" />
        <meta
          property="og:description"
          content="Lightweight and durable GRC planters for gardens, homes, hotels, and offices across India."
        />
        <meta property="og:image" content="/product/1.jpg" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-planters"
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-background  ">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/product/planter/1.webp"
            alt="GRC planter "
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">GRC Planter</h1>
              <p className="text-xl mb-8">
                Decorative yet Functional Architectural Elements for Modern
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
                src="/product/planter/2.webp"
                alt="GRC Planter"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* What is GRC Planter */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🌿 What is a GRC Planter?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A{" "}
                  <strong>
                    GRC planter (Glass Reinforced Concrete planter)
                  </strong>{" "}
                  is a modern landscaping solution made from a strong yet
                  lightweight material called GRC. Unlike traditional stone or
                  ceramic planters, GRC planters are{" "}
                  <strong>durable, weather-resistant, and customizable</strong>{" "}
                  in any shape or finish. They are widely used in{" "}
                  <strong>
                    gardens, homes, offices, hotels, and city landscaping
                    projects
                  </strong>
                  .
                </p>
              </div>

              {/* History Section */}

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📜 History of GRC Planters
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The story of GRC planters begins with the invention of{" "}
                  <strong>Glass Reinforced Concrete (GRC)</strong> in the{" "}
                  <strong>1970s in the UK</strong>. Originally, GRC was created
                  for architectural facades and decorative building elements
                  because of its strength and lightweight properties.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By the <strong>1980s–1990s</strong>, designers and landscapers
                  began using GRC for{" "}
                  <strong>planters, fountains, and garden features</strong>,
                  since it could be shaped into beautiful designs while
                  remaining durable. Over time, GRC planters became popular
                  across <strong>Europe, Asia, and the Middle East</strong> as
                  an alternative to heavy stone and fragile ceramic planters.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose GRC Planter?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weather Resistant",
                desc: "Withstands extreme temperatures (+60°C to -20°C)",
                icon: "🌦️",
              },
              {
                title: "Lightweight",
                desc: "75% lighter than traditional concrete screens",
                icon: "🪶",
              },
              {
                title: "Custom Designs",
                desc: "Create intricate patterns up to 5mm resolution",
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

        {/* Comparison Table */}
        <section className="py-16 px-6 lg:px-16  rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Material Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="p-4">GRC Jali</th>
                  <th className="p-4">Stone Jali</th>
                  <th className="p-4">Wood Jali</th>
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
                  alt={`GRC Jali Installation ${key}`}
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
