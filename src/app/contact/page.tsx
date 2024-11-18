import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white/10 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg mb-6">
          We're Always Eager to Hear From You!
        </h2>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg pl-12"
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
                placeholder="Enter your Email Address"
                className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg pl-12"
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
                placeholder="Enter your Phone Number"
                className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg pl-12"
              />
            </div>
          </div>

          {/* Country Input */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Country</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg" />
              <Input
                type="text"
                placeholder="Enter your Country"
                className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg pl-12"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Message</label>
            <Textarea
              placeholder="Please write your message here..."
              className="w-full bg-white/20 border border-yellow-500 text-white !text-white placeholder-white/80 !placeholder-white focus:!text-white focus:!placeholder-white shadow-lg"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button className="w-full py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold hover:from-green-400 hover:to-blue-400 transition shadow-lg">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
