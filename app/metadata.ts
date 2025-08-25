import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Varanasi GRC",
  description:
    "Varanasi GRC provides high-quality Glass Reinforced Concrete products including planters, jali, cladding, and decorative solutions across India.",
  keywords: [
    // Core keywords
    "GRC India",
    "Glass Reinforced Concrete India",
    "Best GRC company in India",
    "GRC manufacturer India",
    "GRC supplier near me",

    // Products
    "GRC Planters India",
    "GRC Jali India",
    "GRC Cladding India",
    "GRC Columns India",
    "GRC Domes India",
    "GRC Cornices India",
    "GRC Brackets India",
    "GRC Facade India",
    "GRC Elevation design India",
    "Architectural GRC India",

    // Location + Product combos (all major states)
    "GRC in Uttar Pradesh",
    "GRC in Bihar",
    "GRC in Jharkhand",
    "GRC in Delhi",
    "GRC in Haryana",
    "GRC in Punjab",
    "GRC in Rajasthan",
    "GRC in Gujarat",
    "GRC in Maharashtra",
    "GRC in Madhya Pradesh",
    "GRC in Chhattisgarh",
    "GRC in West Bengal",
    "GRC in Assam",
    "GRC in Odisha",
    "GRC in Karnataka",
    "GRC in Kerala",
    "GRC in Tamil Nadu",
    "GRC in Telangana",
    "GRC in Andhra Pradesh",
    "GRC in Himachal Pradesh",
    "GRC in Uttarakhand",
    "GRC in Goa",
    "GRC in Tripura",
    "GRC in Meghalaya",
    "GRC in Manipur",
    "GRC in Nagaland",
    "GRC in Mizoram",
    "GRC in Arunachal Pradesh",
    "GRC in Sikkim",
    "GRC in Chandigarh",
    "GRC in Ladakh",
    "GRC in Jammu and Kashmir",
    "GRC in Andaman and Nicobar",
    "GRC in Lakshadweep",
  ],

  authors: [{ name: "Varanasi GRC" }],
  metadataBase: new URL("https://varanasigrc.com"),

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Varanasi GRC",
    description:
      "Premium Glass Reinforced Concrete products from Varanasi, delivering durable and stylish GRC solutions across India.",
    url: "https://varanasigrc.com",
    siteName: "Varanasi GRC",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Varanasi GRC Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best GRC Products in India",
    description:
      "We deliver high-quality GRC Planters, Jali, Cladding across India.",
    images: ["/your-image.png"],
  },
};
