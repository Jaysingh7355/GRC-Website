"use client";
import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiCheckCircle } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    setTimeout(() => {
      setSuccess("Message sent successfully!");
      setLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl">
            <span className="block relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-1/2 w-16 h-1 bg-primary transform -translate-x-1/2" />
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
            Have questions? Get in touch with our team – we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl shadow-xl p-8 sm:p-12 border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-primary transition bg-card text-foreground"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-primary transition bg-card text-foreground"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-primary transition bg-card text-foreground"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-primary transition bg-card text-foreground"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {success && (
                <div className="mt-4 p-4 bg-green-100 rounded-lg flex items-center text-green-700 dark:bg-green-900 dark:text-green-200">
                  <FiCheckCircle className="h-5 w-5 mr-2" />
                  {success}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl shadow-xl p-8 border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <FiMapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-foreground">
                      Our Office
                    </p>
                    <p className="mt-1 text-muted-foreground">
                      Gate, Kunwar Road, near Indian Oil Petrol Pump, Belawa,
                      Varanasi, Uttar Pradesh 221206
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <FiPhone className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-foreground">Phone</p>
                    <p className="mt-1 text-muted-foreground">+91 7355989418</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <FiMail className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-foreground">Email</p>
                    <p className="mt-1 text-muted-foreground">
                      varanasigrcconstruction7355gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-xl overflow-hidden border h-70">
              <iframe
                className="w-full h-70 min-h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.6308748580063!2d82.84005807517438!3d25.511875177509697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39902b7faf875fc1%3A0xfd62b42fd1e3029f!2sVaranasi%20grc%20Construction!5e1!3m2!1sen!2sin!4v1742470005890!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
