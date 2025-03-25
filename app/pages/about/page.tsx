"use client";
import React from "react";
import {
  FiAward,
  FiEye,
  FiHeart,
  FiUsers,
  FiTool,
  FiGlobe,
  FiSmile,
} from "react-icons/fi";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card py-20 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-foreground mb-6">
            <span className="relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:w-24 after:h-1 after:bg-primary after:-translate-x-1/2">
              About JRC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Pioneering excellence in GRC solutions since 2015, JRC combines
            traditional craftsmanship with modern innovation to redefine
            architectural possibilities.
          </p>
        </div>
      </div>

      {/* Core Principles */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Mission Statement */}
          <div className="lg:col-span-2 bg-primary/10 p-8 rounded-2xl border border-primary/20">
            <FiAward className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              To deliver architectural solutions that harmonize structural
              integrity with aesthetic brilliance, pushing the boundaries of
              Glass Reinforced Concrete technology.
            </p>
          </div>

          {/* Vision & Values */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl border">
              <FiEye className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Vision
              </h3>
              <p className="text-muted-foreground">
                Lead the global transformation in sustainable architectural
                solutions through continuous innovation.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border">
              <FiHeart className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Values
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Quality Craftsmanship</li>
                <li>Sustainable Innovation</li>
                <li>Client-Centric Approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-card py-16 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose JRC?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiTool,
                title: "Technical Expertise",
                content: "20+ years combined experience in GRC technology",
              },
              {
                icon: FiUsers,
                title: "Custom Solutions",
                content: "Tailored designs meeting unique architectural needs",
              },
              {
                icon: FiGlobe,
                title: "Eco-Friendly",
                content: "Sustainable materials with 98% recyclability rate",
              },
              {
                icon: FiSmile,
                title: "Client Satisfaction",
                content: "95% repeat business from satisfied customers",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-muted-foreground">Completed Projects</div>
          </div>
          <div className="p-6 border-x">
            <div className="text-4xl font-bold text-primary mb-2">15M+</div>
            <div className="text-muted-foreground">SQFT Installed</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
