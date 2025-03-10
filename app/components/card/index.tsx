"use client";

import React from "react";

interface GrcCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const GrcCard: React.FC<GrcCardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
}) => {
  const whatsappNumber = "917355989418"; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            {buttonText}
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-right"
          >
            WhatsApp Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cardData = [
    {
      title: "GRC Cladding",
      description:
        "High-quality GRC cladding solutions for modern architecture.",
      imageUrl: "/column.png",
      buttonText: "Learn More",
    },
    {
      title: "Decorative Panels",
      description:
        "Beautiful and durable decorative GRC panels for exteriors and interiors.",
      imageUrl: "/images/decorative-panels.jpg",
      buttonText: "Explore",
    },
    {
      title: "Custom Molding",
      description:
        "Tailor-made GRC molding solutions for your unique requirements.",
      imageUrl: "/images/custom-molding.jpg",
      buttonText: "View Details",
    },
    {
      title: "GRC Columns",
      description: "Classic and contemporary GRC columns for aesthetic appeal.",
      imageUrl: "/images/grc-columns.jpg",
      buttonText: "See More",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cardData.map((card, index) => (
        <GrcCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
