import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lato } from "next/font/google";
import type { Metadata } from "next";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Deborah Onuegbu | Public Health Advocate & Health Communicator",
  description:
    "Deborah Onuegbu is a passionate public health practitioner focused on youth advocacy, health communication, digital health research, and environmental health across African communities.",
  keywords: [
    "Deborah Onuegbu",
    "public health",
    "health communication",
    "youth advocacy",
    "digital health",
    "environmental health",
    "African health research",
  ],
  authors: [{ name: "Deborah Onuegbu" }],
  metadataBase: new URL("https://yourdomain.com"), // replace with your actual domain
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "Deborah Onuegbu | Public Health Advocate & Health Communicator",
    description:
      "Passionate about advancing public health in Africa through youth advocacy, health communication, and digital health innovation.",
    url: "https://yourdomain.com",
    siteName: "Deborah Onuegbu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // create an OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "Deborah Onuegbu Public Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deborah Onuegbu | Public Health Advocate & Health Communicator",
    description:
      "Public health practitioner with focus on youth advocacy, digital health research, and environmental health.",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@yourtwitterhandle", // optional
  },
icons: {
  icon: "/logo.png",        // main favicon/logo
  shortcut: "/logo.png",    // shortcut version
  apple: "/logo.png",       // apple touch icon
},

  themeColor: "#065f46", // matches your emerald/green brand
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased min-h-screen bg-gradient-to-br from-green-900/20 to-white text-base`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
