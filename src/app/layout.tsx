// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Import custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Online Quran Tutoring",
  description: "Learn the Qur'an online with experienced tutors",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white`}
      >
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
