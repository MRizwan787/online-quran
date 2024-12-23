"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { FaHome, FaStar, FaDollarSign, FaChalkboardTeacher, FaBlog } from "react-icons/fa"; // Updated Icons

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated Navigation links
  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome size={18} /> },
    { name: "Courses", href: "/courses", icon: <FaStar size={18} /> },
    { name: "Pricing", href: "/pricing", icon: <FaDollarSign size={18} /> },
    { name: "Tutors", href: "/tutors", icon: <FaChalkboardTeacher size={18} /> }, // Replaced Contact with Tutors
    { name: "Blog", href: "/blog", icon: <FaBlog size={18} /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="left-0 w-full p-2 z-50 shadow-xl"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Logo and Title Section (Centered) */}
        <div className="flex flex-col items-center mb-2">
          <Image
            src="/NoorQuran.jpg"
            alt="Noor-e-Quran Logo"
            height={80}
            width={80}
            className="object-cover rounded-full shadow-[0_0_6px_6px_rgba(255,255,255,0.5)]"
          />
          <div
            className="text-2xl text-white mt-2"
            style={{
              fontFamily: "Times New Roman, serif",
              textShadow: "2px 2px 2px black, 0 0 8px blue, 0 0 4px lightblue",
            }}
          >
            Noor-ul-Quran
          </div>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <NavigationMenu className="hidden sm:flex w-full justify-center">
          <NavigationMenuList className="flex gap-4 items-center">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-white text-lg font-medium transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105",
                    "font-serif"
                  )}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link
                href="/signup"
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                Sign Up
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger Icon for Mobile */}
        <div className="flex sm:hidden mt-2">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:hidden mt-4 bg-blue-950 p-4 rounded-lg`}
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg text-white text-lg font-medium transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/signup"
                className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
