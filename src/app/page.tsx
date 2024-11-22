import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaUserGraduate, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen text-white font-serif overflow-auto">
      {/* Hero Section */}
      <header className="relative text-center flex flex-col items-center gap-6 py-24 sm:py-12">
        <div className="relative w-full sm:w-3/4 md:w-1/2 mb-8 animate-fade-in">
          <Image
            src="/KhairuKum.jpg"
            alt="Learning Quran"
            width={800}
            height={533}
            style={{ width: "auto", height: "auto" }}
            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text drop-shadow-lg animate-slide-in">
          Master the Quran Online
          <br />
          with Expert Tutors
        </h1>
        <p className="text-lg sm:text-2xl font-light max-w-3xl mx-auto italic tracking-wide mt-4 animate-fade-in-delay">
          Learn the Quran anytime, anywhere with personalized one-on-one sessions designed to fit your schedule.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <Link
            href="/signup"
            className="px-10 py-4 rounded-full bg-yellow-500 text-black font-bold text-lg sm:text-xl hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl"
          >
            Sign Up Now
          </Link>
          <Link
            href="/signup"
            className="px-10 py-4 rounded-full bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg sm:text-xl hover:bg-yellow-500 hover:text-black transition-all transform hover:scale-105 shadow-xl"
          >
            Book a Free Demo Class
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="flex flex-col gap-12 items-center py-16 bg-gray-900/60">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-green-400 drop-shadow-lg mb-10">
          Why Choose Us?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 px-6">
          <Feature
            imgSrc="/feature-tutor.webp"
            title="Expert Tutors"
            description="Our certified tutors provide in-depth guidance on Tajweed and Tafseer, ensuring a comprehensive understanding of the Quran."
          />
          <Feature
            imgSrc="/feature-flexible.jpg"
            title="Flexible Schedule"
            description="Select lesson times that suit your lifestyle. Our 24/7 availability ensures that learning the Quran fits seamlessly into your routine."
          />
          <Feature
            imgSrc="/feature-resources.png"
            title="Interactive Resources"
            description="Engage with a rich library of videos, quizzes, and interactive exercises, designed to enhance your learning experience."
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-800/50 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-300 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lg text-center">
          <div className="flex flex-col items-center">
            <FaStar className="text-yellow-400 text-4xl mb-2" />
            <h3 className="text-2xl font-semibold">Rating 4.9</h3>
            <p className="text-yellow-300">2,490 reviews</p>
          </div>

          <div className="flex flex-col items-center">
            <FaUserGraduate className="text-yellow-400 text-4xl mb-2" />
            <h3 className="text-2xl font-semibold">600 +</h3>
            <p className="text-yellow-300">Registered Students</p>
          </div>

          <div className="flex flex-col items-center">
            <FaChalkboardTeacher className="text-yellow-400 text-4xl mb-2" />
            <h3 className="text-2xl font-semibold">300 +</h3>
            <p className="text-yellow-300">Quran Tutors Available</p>
          </div>

          <div className="flex flex-col items-center">
            <FaGlobe className="text-yellow-400 text-4xl mb-2" />
            <h3 className="text-2xl font-semibold">12,900 +</h3>
            <p className="text-yellow-300">Online Quran Classes</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-950/50 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300 mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          <Testimonial
            name="Ahmed Ali"
            text="This platform has transformed the way I learn the Quran. The tutors are fantastic!"
          />
          <Testimonial
            name="Fatima Zahra"
            text="Flexible timings and expert teachers made my journey so much easier."
          />
          <Testimonial
            name="Zainab Khan"
            text="I love the interactive resources and personalized learning experience."
          />
          <Testimonial
            name="Omar Rashid"
            text="The online classes have allowed me to study the Quran at my own pace, and the tutors are very helpful."
          />
          <Testimonial
            name="Aisha Noor"
            text="I’ve gained so much from this platform, and I appreciate the flexibility and depth of learning."
          />
          <Testimonial
            name="Sara Imran"
            text="The personalized sessions have helped me understand the Quran in a way that’s meaningful to me."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="signup"
        className="flex flex-col items-center gap-4 py-8 bg-gradient-to-r from-blue-950 via-blue-90"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400 drop-shadow-lg text-center">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg sm:text-xl font-light max-w-lg tracking-wide text-center mt-4 mb-6">
          Sign up today and start exploring the Quran with personalized, one-on-one tutoring sessions that are tailored to your needs.
        </p>
        <div className="flex gap-4">
          <Link
            href="/signup"
            className="px-12 py-5 rounded-full bg-yellow-500 text-black font-semibold text-xl sm:text-2xl hover:bg-yellow-400 transition-all transform hover:scale-110 shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const Feature: React.FC<{ imgSrc: string; title: string; description: string }> = ({ imgSrc, title, description }) => (
  <div className="flex flex-col items-center bg-white/10 p-8 rounded-lg shadow-xl hover:scale-105 transition-all transform">
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-55 rounded-full overflow-hidden mb-6">
      <Image
        src={imgSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-full"
      />
    </div>
    <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-4">{title}</h3>
    <p className="text-center text-lg sm:text-xl font-light">{description}</p>
  </div>
);

const Testimonial: React.FC<{ name: string; text: string }> = ({ name, text }) => (
  <div className="flex flex-col items-center bg-white/10 p-8 rounded-lg shadow-xl hover:scale-105 transition-all transform">
    <p className="text-lg italic text-yellow-100 mb-4">"{text}"</p>
    <h4 className="text-lg sm:text-xl font-semibold text-yellow-300">- {name}</h4>
  </div>
);

export default HomePage;
