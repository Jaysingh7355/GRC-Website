"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Head from "next/head";

const products = [
  {
    name: "GRC Jali",
    image: "grc_jali",
  },
  {
    name: "GRC Screen",
    image: "grc_screen",
  },
  {
    name: "GRC Fins",
    image: "grc_fins",
  },
  {
    name: "GRC Landscape",
    image: "grc_landscape",
  },
  {
    name: "GRC Domes",
    image: "grc_domes",
  },
  {
    name: "GRC Capital",
    image: "grc_capital",
  },
  {
    name: "GRC Brackets",
    image: "grc_brackets",
  },
  {
    name: "GRC Balusters",
    image: "grc_balusters",
  },
  {
    name: "GRC Arch",
    image: "grc_arch",
  },
  {
    name: "GRC Sculpture",
    image: "grc_sculpture",
  },
  {
    name: "GRC Railing",
    image: "grc_railing",
  },
  {
    name: "GRC Pillar",
    image: "grc_pillar",
  },
  {
    name: "GRC Noise Barrier",
    image: "grc_noise_barrier",
  },
  {
    name: "GRC Mural",
    image: "grc_mural",
  },
  {
    name: "GRC Fountains",
    image: "grc_fountain",
  },
  {
    name: "GRC Sculpture And Mural",
    image: "grc_sculpture_mural",
  },
  {
    name: "GRC Planter",
    image: "grc_planter",
  },
  {
    name: "GRC Column",
    image: "grc_column",
  },
  {
    name: "GRC Cornice",
    image: "grc_cornice",
  },
  {
    name: "GRC Columns and Capital",
    image: "grc_columns_capital",
  },
  {
    name: "GRC Decorative Element",
    image: "grc_decorative_element",
  },
];

const ProductPage = () => {
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/ /g, "_")
      .replace(/[^a-z0-9_]/g, "");
  };

  return (
    <>
      <Head>
        <title>GRC Products in India | Varanasi GRC</title>
        <meta
          name="description"
          content="Buy high-quality GRC products in India from Varanasi GRC. We supply GRC Jalis, Columns, Panels, and custom GRC designs across India for homes and commercial projects."
        />
        <meta
          name="keywords"
          content="GRC products India, GRC Jali India, GRC supplier India, GRC Columns, GRC Panels, Glass Reinforced Concrete"
        />
      </Head>
      <div className="min-h-screen bg-background py-12 px-6 lg:px-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">
            Our GRC Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium Glass Fiber Reinforced Concrete Solutions for Modern
            Architecture
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md border"
            >
              <Image
                src={`/product/${product.image}.jpg`}
                alt={product.name}
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover w-full h-48"
                priority={index < 3}
                loading={index < 3 ? "eager" : "lazy"}
              />
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {product.name}
              </h2>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/pages/products/${generateSlug(product.name)}`}>
                  View Details
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Custom GRC Solutions
          </h2>
          <p className="text-muted-foreground mb-6">
            Need bespoke architectural elements? Contact our experts
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-primary text-lg">
            <a
              href="tel:+7355989418"
              className="flex items-center gap-2 justify-center hover:text-primary/80"
            >
              <FiPhone /> +91 735989418
            </a>
            <a
              href="mailto:varanasigrcconstruction7355@gmail.com"
              className="flex items-center gap-2 justify-center hover:text-primary/80"
            >
              <FiMail /> Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
