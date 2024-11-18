import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  // Reusable className for the heading gradient
  const headingClassName =
    "text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text";

  return (
    <footer
      className="bg-gradient-to-b from-blue-950 via-blue-950 to-blue-920 text-white py-12"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Centered Columns Section */}
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-8">
          {/* Contact Us Section */}
          <div className="text-center">
            <h2 className={headingClassName}>Contact Us</h2>
            <ul className="space-y-3 text-lg">
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
            <ul className="space-y-3 text-lg">
              {["About Us", "Our Blogs", "FAQs", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="inline-block text-white hover:text-yellow-300 transition-all duration-200"
                    style={{ width: "fit-content", margin: "0 auto" }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 w-full bg-blue-700" />

        {/* Follow Us Section */}
        <div className="text-center">
          <h2 className={headingClassName}>Follow Us</h2>
          <div className="flex justify-center gap-5 text-2xl">
            <Link href="https://www.facebook.com" target="_blank" className="hover:text-blue-500">
              <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-blue-400">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-4 text-white font-semibold text-lg lg:text-xl text-center">
          <p>© 2024 Quran Tutoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
