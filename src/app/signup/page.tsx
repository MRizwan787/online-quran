"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaPhone, FaUser, FaGlobe, FaBook } from "react-icons/fa";

const SignUpPage: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    course: "",
    pricingPlan: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setServerResponse(null);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setServerResponse(data.message || "Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          gender: "",
          course: "",
          pricingPlan: "",
          message: "",
        });
      } else {
        setServerResponse("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setServerResponse("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col items-center py-10"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: "'Times New Roman', serif", // Apply Times New Roman font
      }}
    >
      <div className="w-full max-w-3xl bg-white/10 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg mb-6">
          Let's Enroll Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Your Name *</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. your full name"
                className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white/80 shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Your Number *</label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (201) 555-0123"
                className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white/80 shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Your Email *</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. youremail@xyz.com"
                className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white/80 shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Gender *</label>
            <Select onValueChange={(value) => handleSelectChange("gender", value)}>
              <SelectTrigger className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white pl-12">
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Select Your Course *</label>
            <Select onValueChange={(value) => handleSelectChange("course", value)}>
              <SelectTrigger className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white pl-12">
                <SelectValue placeholder="Select your course" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="tajweed">Recitation with Tajweed Course</SelectItem>
                <SelectItem value="memorization">Hifz e Quran Course</SelectItem>
                <SelectItem value="tafsir">Quranic Tafsir</SelectItem>
                <SelectItem value="basic_islamic_studies">Basic Islamic Studies</SelectItem>
                <SelectItem value="enhanced_islamic_studies">Enhanced Islamic Studies</SelectItem>
                <SelectItem value="namaz_duas">Namaz and Dua's Course</SelectItem>
                <SelectItem value="islamic_sciences">Islam and its Sciences</SelectItem>
                <SelectItem value="islamic_history">Islamic History Course</SelectItem>
                <SelectItem value="arabic_language">Arabic Language Course</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pricing Plan Selection */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Select a Pricing Plan *</label>
            <Select onValueChange={(value) => handleSelectChange("pricingPlan", value)}>
              <SelectTrigger className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white pl-12">
                <SelectValue placeholder="Select your pricing plan" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="demo_class">Demo Class - Free</SelectItem>
                <SelectItem value="one_day_special">One Day Special Class</SelectItem>
                <SelectItem value="two_days_per_week">2 Days Per Week</SelectItem>
                <SelectItem value="three_days_per_week">3 Days Per Week</SelectItem>
                <SelectItem value="four_days_per_week">4 Days Per Week</SelectItem>
                <SelectItem value="five_days_per_week">5 Days Per Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="e.g. I am interested in this course."
              className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white/80 shadow-lg"
              rows={4}
            />
          </div>

          {/* Submit Button (reverted to previous style) */}
           {/* Submit Button */}
           <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold hover:from-green-400 hover:to-blue-400 transition shadow-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>

        {/* Server Response */}
        {serverResponse && (
          <div className="mt-4 text-center text-white">
            <p>{serverResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
