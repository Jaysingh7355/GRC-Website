"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../lightDark/DarkModeToggle";

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
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-nowrap space-x-4 lg:space-x-6 font-semibold text-blue-700">
          <Link
            href="/"
            className="hover:text-black transition whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            className="hover:text-black transition whitespace-nowrap"
          >
            About Us
          </Link>
          <Link
            href="/pages/products"
            className="hover:text-black transition whitespace-nowrap"
          >
            GRC Products
          </Link>
          <Link
            href="/pages/projects"
            className="hover:text-black transition whitespace-nowrap"
          >
            Our Project
          </Link>
          <Link
            href="/pages/brochure"
            className="hover:text-black transition whitespace-nowrap"
          >
            Our Brochure
          </Link>
          <Link
            href="/pages/news"
            className="hover:text-black transition whitespace-nowrap"
          >
            Latest News
          </Link>
          <Link
            href="/pages/contact"
            className="hover:text-black transition whitespace-nowrap"
          >
            Contact Us
          </Link>
        </nav>

        {/* Contact Details & Button - Always Visible */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
          <a href="">
            <DarkModeToggle />
          </a>
          <a
            href="tel:+919876543210"
            className="text-blue-700 hover:text-blue-100 flex items-center whitespace-nowrap"
          >
            📞 +91 7355989418
          </a>

          <Link
            href="/pages/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button - Always Visible */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <div className="flex flex-col items-center space-y-3">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/pages/about" className="hover:text-blue-600">
              About Us
            </Link>
            <Link href="/pages/products" className="hover:text-blue-600">
              GRC Products
            </Link>
            <Link href="/pages/projects" className="hover:text-black-600">
              Our Project
            </Link>
            <Link href="/pages/brochure" className="hover:text-blue-600">
              Our Brochure
            </Link>
            <Link href="/pages/news" className="hover:text-blue-600">
              Latest News
            </Link>
            <Link href="/pages/contact" className="hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
