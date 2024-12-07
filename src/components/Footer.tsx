import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const headingClassName =
    "text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text";

  // Social media links
  const socialLinks = [
    { href: "https://www.facebook.com", icon: FaFacebook, label: "Facebook", color: "hover:text-blue-500" },
    { href: "https://www.instagram.com", icon: FaInstagram, label: "Instagram", color: "hover:text-pink-500" },
    { href: "https://www.linkedin.com", icon: FaLinkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  ];

  return (
    <footer
      className="bg-gradient-to-b from-blue-950 via-blue-950 to-blue-920 text-white py-12"
      style={{
        fontFamily: "Times New Roman, serif",
        backgroundImage: "url('/background2.jpg')", // Add the background image here
        backgroundSize: "cover", // Ensure the image covers the footer area
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Centered Columns Section */}
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-8">
          {/* Contact Us Section */}
          <div className="text-center">
            <h2 className={headingClassName}>Contact Us</h2>
            <ul className="space-y-3 text-sm md:text-lg">
              <li className="flex items-center justify-center gap-2">
                <FaPhone className="text-yellow-300" />
                <span>+1 7137692999</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPhone className="text-yellow-300" />
                <span>+92 313 5710041</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPhone className="text-yellow-300" />
                <span>+92 321 7478223</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-yellow-300" />
                <span>m.r.sial787@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="text-center">
            <h2 className={headingClassName}>Useful Links</h2>
            <ul className="space-y-3 text-sm md:text-lg">
              <li>
                <Link
                  href="/about"
                  className="inline-block text-white hover:text-yellow-300 transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-block text-white hover:text-yellow-300 transition-all duration-200"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="inline-block text-white hover:text-yellow-300 transition-all duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors"
                  className="inline-block text-white hover:text-yellow-300 transition-all duration-200"
                >
                  Tutors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 w-full bg-blue-700" />

        {/* Follow Us Section */}
        <div className="text-center">
          <h2 className={headingClassName}>Follow Us</h2>
          <div className="flex justify-center gap-5 text-xl md:text-2xl">
            {socialLinks.map(({ href, icon: Icon, label, color }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex items-center gap-2 ${color}`}
              >
                <Icon />
                <span className="hidden sm:inline">{label}</span> {/* Visible on small screens and up */}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-4 text-white font-semibold text-sm md:text-lg text-center">
          <p>© 2024 Quran Tutoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
