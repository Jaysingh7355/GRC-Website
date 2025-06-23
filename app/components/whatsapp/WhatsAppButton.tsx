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
        className="w-16 h-16 rounded-full bg-green-700 hover:bg-green-700 text-white shadow-lg hover:shadow-xl shadow-green-400/30 hover:shadow-green-500/40 transition-all"
        variant="default"
        size="icon"
      >
        <FaWhatsapp size={28} className="text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
