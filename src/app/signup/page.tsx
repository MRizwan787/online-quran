import React from "react";
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white/10 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg mb-6">
          Let's Enroll Now
        </h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Your Name *</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="text"
                placeholder="e.g. your full name"
                className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg pl-12"
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
                placeholder="+1 (201) 555-0123"
                className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg pl-12"
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
                placeholder="e.g. youremail@xyz.com"
                className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg pl-12"
                required
              />
            </div>
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Gender *</label>
            <div className="relative">
              <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Select>
                <SelectTrigger className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:border-yellow-500 focus:ring-0 pl-12">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="male" className="hover:bg-yellow-500 hover:text-black">
                    Male
                  </SelectItem>
                  <SelectItem value="female" className="hover:bg-yellow-500 hover:text-black">
                    Female
                  </SelectItem>
                  <SelectItem value="other" className="hover:bg-yellow-500 hover:text-black">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Select Your Course *</label>
            <div className="relative">
              <FaBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Select>
                <SelectTrigger className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:border-yellow-500 focus:ring-0 pl-12">
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="tajweed" className="hover:bg-yellow-500 hover:text-black">
                    Recitation with Tajweed Course
                  </SelectItem>
                  <SelectItem value="memorization" className="hover:bg-yellow-500 hover:text-black">
                    Hifz e Quran Course (Quran Memorization)
                  </SelectItem>
                  <SelectItem value="tafsir" className="hover:bg-yellow-500 hover:text-black">
                    Quranic Tafsir (Explanation of the Quran)
                  </SelectItem>
                  <SelectItem value="islamic-studies" className="hover:bg-yellow-500 hover:text-black">
                    Basic and Enhanced Islamic Studies
                  </SelectItem>
                  <SelectItem value="namaz-dua" className="hover:bg-yellow-500 hover:text-black">
                    Namaz and Dua's Course
                  </SelectItem>
                  <SelectItem value="islamic-sciences" className="hover:bg-yellow-500 hover:text-black">
                    Islam and its Sciences
                  </SelectItem>
                  <SelectItem value="history" className="hover:bg-yellow-500 hover:text-black">
                    Islamic History Course
                  </SelectItem>
                  <SelectItem value="arabic" className="hover:bg-yellow-500 hover:text-black">
                    Arabic Language Course
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pricing Plan Selection */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Select Your Pricing Plan *</label>
            <div className="relative">
              <FaBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Select>
                <SelectTrigger className="w-full bg-white/20 border border-yellow-500 text-white placeholder-white focus:border-yellow-500 focus:ring-0 pl-12">
                  <SelectValue placeholder="Select your pricing plan" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="demo" className="hover:bg-yellow-500 hover:text-black">
                    Demo Class (Free)
                  </SelectItem>
                  <SelectItem value="one-day-special" className="hover:bg-yellow-500 hover:text-black">
                    One Day Special Class (20 GBP)
                  </SelectItem>
                  <SelectItem value="two-days" className="hover:bg-yellow-500 hover:text-black">
                    2 Days Per Week (25 GBP/month)
                  </SelectItem>
                  <SelectItem value="three-days" className="hover:bg-yellow-500 hover:text-black">
                    3 Days Per Week (33 GBP/month)
                  </SelectItem>
                  <SelectItem value="four-days" className="hover:bg-yellow-500 hover:text-black">
                    4 Days Per Week (40 GBP/month)
                  </SelectItem>
                  <SelectItem value="five-days" className="hover:bg-yellow-500 hover:text-black">
                    5 Days Per Week (45 GBP/month)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Message</label>
            <Textarea
              placeholder="e.g. I am interested in this course. I would like to admit this course."
              className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold hover:from-green-400 hover:to-blue-400 transition shadow-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
