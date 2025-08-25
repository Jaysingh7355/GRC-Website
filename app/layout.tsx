import type { Metadata } from "next";
import { Geist, Geist_Mono, Yantramanav } from "next/font/google";
import dynamic from "next/dynamic";
import { siteMetadata } from "./metadata";
import "./globals.css";

export const meta = siteMetadata;

const Header = dynamic(() => import("@/app/components/header"));

const Footer = dynamic(() => import("@/app/components/footer"));
// import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme/ThemeProvider";
const WhatsAppButton = dynamic(
  () => import("@/app/components/whatsapp/WhatsAppButton")
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yantramanav = Yantramanav({
  variable: "--font-yantramanav",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GRC Varanasi - Best GRC Solutions",
  description:
    "GRC Varanasi  provides high-quality GRC products and solutions.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favcon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${yantramanav.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Varanasi GRC",
              url: "https://varanasigrc.com",
              logo: "https://varanasigrc.com/logo.png",
            }),
          }}
        />
      </head>
      <body className="flex flex-col  min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
