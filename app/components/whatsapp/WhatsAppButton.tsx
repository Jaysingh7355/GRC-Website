"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/7355989418"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
    >
      <Button
        className="w-16 h-16 rounded-full bg-green-600 text-white shadow-lg shadow-green-400/80 hover:bg-green-500 hover:shadow-green-300 transition-all flex items-center justify-center"
        variant="default"
        size="icon"
      >
        <FaWhatsapp size={28} />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
