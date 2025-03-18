"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../lightDark/DarkModeToggle";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 h-20 flex items-center transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-6">
        {/* Logo - Fixed position */}
        <div className="flex-shrink-0">
          <Link href="/" className="relative group">
            <Image
              src="/logo.png"
              alt="GRC Logo"
              width={50}
              height={50}
              className="rounded-full object-cover h-[50px] w-[50px] transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu - Fixed layout */}
        <nav className="hidden lg:flex flex-nowrap items-center gap-4 xl:gap-6 font-yantramanav font-medium text-foreground text-base mx-4">
          <Link
            href="/"
            className="hover:text-primar transition whitespace-nowrap py-2"
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            className="hover:text-primar transition whitespace-nowrap py-2"
          >
            About Us
          </Link>
          <Link
            href="/pages/products"
            className="hover:text-primar transition whitespace-nowrap py-2"
          >
            our Products
          </Link>
          <Link
            href="/pages/projects"
            className="hover:text-primar transition whitespace-nowrap py-2"
          >
            Our Project
          </Link>
          <Link
            href="/pages/brochure"
            className="hover:text-primar transition whitespace-nowrap py-2"
          >
            Our Brochure
          </Link>
          <Link
            href="/pages/news"
            className="hover:text-primar transition whitespace-nowrap py-2"
          >
            Latest News
          </Link>
          <Link
            href="/pages/contact"
            className="hover:text-primar transition whitespace-nowrap py-2"
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop Contact Section - Fixed position */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
          <ModeToggle />
          <a
            href="tel:+919876543210"
            className="text-foreground hover:text-primar flex items-center whitespace-nowrap text-base"
          >
            📞 +91 7355989418
          </a>
          <Link
            href="/pages/contact"
            className="text-foreground px-4 py-2 rounded-lg  transition whitespace-nowrap text-base"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button - Fixed position */}
        <button
          className="lg:hidden p-2 rounded-lg focus:outline-none transition-transform duration-300 flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="w-6 h-6 relative">
            <span
              className={`block absolute h-0.5 w-full bg-current rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-current rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-current rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="bg-gray-100   flex flex-col items-center space-y-3 p-4">
          {/* Mobile menu items */}
          {[
            ["Home", "/"],
            ["About Us", "/pages/about"],
            ["our Products", "/pages/products"],
            ["Our Project", "/pages/projects"],
            ["Our Brochure", "/pages/brochure"],
            ["Latest News", "/pages/news"],
            ["Contact Us", "/pages/contact"],
          ].map(([title, url]) => (
            <Link
              key={url}
              href={url}
              className=" w-full text-center py-2 hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {title}
            </Link>
          ))}

          <div className="flex flex-col items-center space-y-4 w-full pt-4 border-t">
            <ModeToggle />
            <a
              href="tel:+919876543210"
              className="text-primary  hover:text-primary-foreground  flex items-center whitespace-nowrap py-2"
            >
              📞 +91 7355989418
            </a>
            <Link
              href="/pages/contact"
              className=" px-6 py-2 rounded-lg transition w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
