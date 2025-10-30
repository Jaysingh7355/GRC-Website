"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold">GRC Solutions</h2>
          <p className="mt-2 text-sm">
            Providing high-quality Glass Reinforced Concrete (GRC) solutions for
            modern infrastructure and design needs.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                GFRC Products
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/brochure" className="hover:text-white">
                Our Brochure
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white">
                Latest News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">
            Gate, Kunwar Road, near Indian Oil Petrol Pump, Belawa,
          </p>
          <p className="text-sm">Phone: +917355989418</p>
          <p className="text-sm">
            Email:varanasigrcconstruction7355@gmail.com{" "}
          </p>
          <p className="text-sm mt-3">
            <Link
              href="http://gohttps://share.google/dq8tkPxotM0CJZG00ogle.com/maps/place/GRC+BANGALORE/@13.0750363,77.618897,3393m/data=!3m1!1e3!4m6!3m5!1s0x3bae3cd4d39e8f1b:0xff691460010ad9e0!8m2!3d13.0750363!4d77.618897!16s%2Fg%2F11qgs8kzfm!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center space-x-3"
            >
              View on Google Maps
            </Link>
          </p>
          <div className="mt-3">
            <Image
              src="/mnt/data/local-seo.webp"
              alt="Google My Business"
              width={150}
              height={50}
            />
          </div>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Stay Updated
          </h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none w-full"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-white">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} GRC Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
