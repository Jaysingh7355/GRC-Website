"use client";
import React from "react";
import { FiDownload, FiPhone, FiMapPin, FiInfo } from "react-icons/fi";
import Head from "next/head";

const BrochurePage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Brocher | varanasi Grc </title>
        <meta
          name="description"
          content="Download the official Varanasi GRC brochure to explore our GRC products including Jalis, Columns, Panels, and custom designs. Get detailed information in one place."
        />
        <meta
          name="keywords"
          content="GRC Brochure Varanasi, GRC Jali brochure, GRC product catalog, Varanasi GRC brochure download"
        />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">
            <span className="border-b-4 border-primary pb-2">
              Varanasi GRC Construction Solutions
            </span>
          </h1>
          <div className="mt-6 bg-card rounded-lg p-6 shadow-md">
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <span>
                  Gate, Kunwar Road, near Indian Oil Petrol Pump, Belawa,
                  varanasi
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-primary" />
                <div>
                  <span>Phone: +917355989418</span>
                  <span className="mx-2">|</span>
                </div>
                <FiPhone className="text-primary inline" />
                <div>
                  <span>Phone: +919108538301</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Download Card */}
          <div className="bg-card rounded-xl shadow-lg border p-6">
            <div className="text-center h-full flex flex-col justify-between">
              <div>
                <FiDownload className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Download Brochure
                </h2>
                <div className="mb-6 flex justify-center items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FiInfo className="text-primary" />
                    <span>PDF Format</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiInfo className="text-primary" />
                    <span>5.2 MB</span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="public/Brochure.pdf"
                  download
                  className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FiDownload className="w-5 h-5" />
                  Download Now
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Includes complete technical specifications
                </p>
              </div>
            </div>
          </div>

          {/* Product Highlights */}
          <div className="bg-card rounded-xl shadow-lg border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 gap-4 text-muted-foreground">
              {[
                "GRC Fins",
                "GRC Domes",
                "Decorative Elements",
                "Noise Barriers",
                "Cladding Panels",
                "Screens & Jalis",
                "Cornices & Arch",
                "Landscape Planters",
              ].map((product) => (
                <div key={product} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="bg-card rounded-xl shadow-lg border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Material Benefits
                </h3>
                <ul className="space-y-2">
                  <li>High-strength GRC</li>
                  <li>Weather resistant</li>
                  <li>Lightweight construction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Applications
                </h3>
                <ul className="space-y-2">
                  <li>Architectural facades</li>
                  <li>Interior decoration</li>
                  <li>Landscape elements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Certifications
                </h3>
                <ul className="space-y-2">
                  <li>ISO 9001:2015</li>
                  <li>Green Building</li>
                  <li>Fire Safety Rated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
