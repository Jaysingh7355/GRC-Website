'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/7355989418"
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed right-6 bottom-4 z-50"
            aria-label="Chat with us on WhatsApp"
        >
            <span className="bg-green-800 text-lg font-medium text-white 
                opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                click here to WhatsApp
            </span>
            <Button
                aria-label="Chat on WhatsApp"
                className="h-16 w-16 rounded-full bg-green-700 text-white shadow-lg shadow-green-400/30 transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-500/40"
                variant="default"
                size="icon"
            >
                <FaWhatsapp size={28} className="text-white" />
            </Button>
        </a>
    );
};

export default WhatsAppButton;
