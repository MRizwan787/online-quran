"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

const ContactPage: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  // State for loading and response handling
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Thank you for reaching out! We will get back to you soon.");
        setFormData({ fullName: "", email: "", phone: "", country: "", message: "" }); // Reset form
      } else {
        setResponseMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 text-white"
      style={{
        backgroundImage: "url('/contact-background.jpg')", // Path to the Contact Page background
        backgroundSize: "cover", // Ensures the background covers the entire page
        backgroundPosition: "center", // Centers the background
        backgroundAttachment: "fixed", // Optional for a parallax effect
        fontFamily: "'Times New Roman', Times, serif", // Apply Times New Roman font globally
      }}
    >
      <div className="w-full max-w-3xl bg-white/10 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl sm:text-3xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg mb-8">
          We're Always Eager to Hear From You!
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:text-white focus:border-yellow-500 shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email Address"
                className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:text-white focus:border-yellow-500 shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Phone</label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:text-white focus:border-yellow-500 shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Country</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your Country"
                className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:text-white focus:border-yellow-500 shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please write your message here..."
              className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:text-white focus:border-yellow-500 shadow-lg"
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold hover:from-green-400 hover:to-blue-400 transition shadow-lg ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <p className="text-center text-sm mt-4 text-green-400">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
