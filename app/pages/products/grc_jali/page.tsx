import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import Head from "next/head";

const images = {
  1: "/product/1.jpg",
  2: "/product/2.jpg",
  3: "/product/3.jpg",
  4: "/product/4.jpg",
  5: "/product/5.jpg",
  6: "/product/6.jpg",
};

export default function GRCJaliPage() {
  return (
    <>
      <Head>
        {/* Primary SEO Meta */}
        <title>
          GRC Jali in India | Decorative Concrete Screens & Modern Jali Designs
        </title>
        <meta
          name="description"
          content="Buy premium GRC Jali in India – durable, lightweight & weather-resistant. Decorative screens for facades, homes, temples, hotels & commercial projects."
        />
        <meta
          name="keywords"
          content="GRC Jali India, modern jali design, decorative jali panels, concrete jali screen, architectural jali, outdoor jali design India, GRC screens supplier, jali design for building, GRC jali manufacturer in India, jali design in Delhi Mumbai Bangalore Chennai Hyderabad Kolkata Pune Ahmedabad Jaipur Lucknow Varanasi"
        />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="Best GRC Jali Manufacturer in India"
        />
        <meta
          property="og:description"
          content="Shop premium GRC Jali designs in India – decorative screens for modern & traditional architecture."
        />
        <meta property="og:image" content="/product/jali-hero.jpg" />
        <meta
          property="og:url"
          content="https://www.varanasigrc.com/grc-jali"
        />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GRC Jali Supplier in India" />
        <meta
          name="twitter:description"
          content="Lightweight, durable, decorative GRC Jali for homes, offices, hotels & temples in India."
        />
        <meta name="twitter:image" content="/product/jali-hero.jpg" />

        <meta name="author" content="Varanasi GRC Construction" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Structured Data - Local Business / Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "GRC Jali Screens",
              image: "https://www.varanasigrc.com/product/jali-hero.jpg",
              description:
                "Premium GRC Jali in India – lightweight, durable, weather-resistant decorative screens for facades, balconies, and interiors.",
              brand: {
                "@type": "Brand",
                name: "Varanasi GRC Construction",
              },
              offers: {
                "@type": "Offer",
                url: "https://www.varanasigrc.com/grc-jali",
                priceCurrency: "INR",
                price: "2500",
                priceValidUntil: "2026-01-01",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "120",
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh]">
          <Image
            src="/product/jali-hero.jpg"
            alt="Modern GRC Jali Screen Design India"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl font-bold mb-4">
                GRC Jali Screens in India
              </h1>
              <p className="text-xl mb-8">
                Decorative & Functional Architectural Jali Designs for Homes,
                Offices & Temples
              </p>
              <Button variant="destructive" asChild>
                <a href="/pages/contact">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/product/1.jpg"
                alt="Decorative GRC Jali Panel in India"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                What is GRC Jali (Glass Reinforced Concrete Jali)?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <strong>Jali</strong> is a perforated decorative screen used
                in Indian architecture for centuries. <strong>GRC Jali</strong>{" "}
                (Glassfiber Reinforced Concrete Jali) is the modern version,
                combining concrete with glass fibers for
                <strong>
                  {" "}
                  durability, weather resistance, and lightweight installation
                </strong>
                . Ideal for{" "}
                <strong>
                  building facades, balconies, partitions, temples, and
                  landscaping
                </strong>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            ✅ Why Choose GRC Jali for Your Project?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weather Resistant",
                desc: "Withstands heat, rain & extreme temperatures across India",
                icon: "🌦️",
              },
              {
                title: "Lightweight & Strong",
                desc: "75% lighter than stone yet highly durable",
                icon: "🪶",
              },
              {
                title: "Customizable Designs",
                desc: "Choose from modern & traditional patterns",
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

        {/* Project Gallery with SEO Alts */}
        <section className="py-8 px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            🖼️ GRC Jali Design Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(images).map(([key, src]) => (
              <Card
                key={key}
                className="aspect-square relative overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Decorative GRC Jali Screen Design ${key} in India`}
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
            <h2 className="text-3xl font-bold mb-4">
              Get Best Price for GRC Jali in India
            </h2>
            <p className="mb-8">
              Contact us for{" "}
              <strong>wholesale & custom GRC Jali designs</strong> in Delhi,
              Mumbai, Bangalore, Chennai, Kolkata & all over India.
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
