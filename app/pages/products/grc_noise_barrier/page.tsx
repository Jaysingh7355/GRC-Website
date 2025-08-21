import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const images = {
  1: "/product/1.jpg",
  2: "/product/2.jpg",
  3: "/product/3.jpg",
  4: "/product/4.jpg",
  5: "/product/5.jpg",
  6: "/product/6.jpg",
};

export default function GRCNoiseBarrier() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/product/jali-hero.jpg"
          alt="GRC Jali Architectural Screen"
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
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative left-50  w-110 h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/product/1.jpg"
              alt="Traditional and Modern GRC Jali Design"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">What is GRC Jali?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <strong>Jali</strong> is a perforated decorative screen
              traditionally used in Indian architecture. Designed with intricate
              geometric or floral patterns, it allows air and light to pass
              through while maintaining privacy.
              <br />
              <br />
              <strong>GRC Jali</strong> (Glassfiber Reinforced Concrete Jali) is
              a modern adaptation of this heritage element. It combines the
              strength of concrete with lightweight glass fibers, making it
              highly durable, weather-resistant, and suitable for both
              traditional and contemporary facades.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose GRC Jali?
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
                      className={`p-4 ${cellIndex === 0 ? "font-medium" : ""}`}
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
        <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(images).map(([key, src]) => (
            <Card key={key} className="aspect-square relative overflow-hidden">
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
  );
}
