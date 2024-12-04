// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Online Quran Tutoring",
  description: "Learn the Qur'an online with experienced tutors",
  icons: {
    icon: "/favicon.ico", // Favicon added here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-cover bg-fixed`}
        style={{
          backgroundImage: "url('/background3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navbar Component */}
        <Navbar />
        {/* Main Content */}
        <main>{children}</main>
        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
