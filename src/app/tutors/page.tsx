"use client";

import React from "react";
import { FaGraduationCap, FaBook, FaChalkboardTeacher } from "react-icons/fa";

const tutors = [
  {
    id: 1,
    name: "Mr. Muhammad Rizwan",
    gender: "Male",
    specialty: "Quran Recitation , Hifz , Tafsir & Islamic Sciences , Islamic Jurisprudence , Arabic Language Course",
    experience: "10+ years",
    bio: "A certified Quran tutor specializing in Tajweed rules, Quranic Tafsir (Explanation of the Quran), and Islamic Sciences. Mr. Hafiz Muhammad Rizwan is an expert in providing a comprehensive understanding of the Quran and its teachings, and he can guide students through various Islamic disciplines with clarity and depth.",
    image: "Tutor1.jpg",
  },
  {
    id: 2,
    name: "Hafiz Mujeeb ur Rahman",
    gender: "Male",
    specialty: "Recitation with Tajweed Course , Quran Memorization (Hifz) , Namaz and Dua's ",
    experience: "8+ years",
    bio: "Hafiz Mujeeb ur Rahman is a dedicated tutor specializing in teaching Quran Recitation and guiding students through the journey of Quran Memorization (Hifz). With his expertise in Namaz and Duas, he ensures that students not only excel in memorizing the Quran but also understand and implement Islamic prayers and supplications in their daily lives.",
    image: "Tutor3.jpeg",
  },
  {
    id: 3,
    name: "Hafiz Ahmad Shahab Syal",
    gender: "Male",
    specialty: "Recitation with Tajweed Course , Quran Memorization (Hifz) , Namaz and Dua's",
    experience: "5+ years",
    bio: "Hafiz Ahmad Shahab Syal has extensive experience in Quran Recitation and memorization, making him a sought-after tutor for students aiming to complete their Hifz. His focus extends beyond memorization, as he emphasizes the significance of understanding the proper pronunciation (Tajweed), Namaz, and essential Duas.",
    image: "Tutor2.jpeg",
  },
  {
    id: 4,
    name: "Mr. Irfan Jami",
    gender: "Male",
    specialty: "Recitation with Tajweed Course , Quran Memorization (Hifz) , Namaz and Dua's",
    experience: "11+ years",
    bio: "Mr. Irfan Jami is a seasoned Quran tutor specializing in Recitation and Hifz. His 11+ years of experience have equipped him with the skills to teach students of varying levels, helping them achieve fluency in Quran Recitation with proper Tajweed.",
    image: "Tutor4.jpeg",
  },
  {
    id: 5,
    name: "Female Tutor",
    gender: "Female",
    specialty: "Islamic Studies & Arabic Language",
    experience: "8+ years",
    bio: "An experienced Islamic Studies tutor with a passion for teaching Arabic. Her interactive and engaging lessons make learning enjoyable for students of all ages.",
  },
  {
    id: 6,
    name: "Female Tutor",
    gender: "Female",
    specialty: "Tafseer & Hadith Studies",
    experience: "9+ years",
    bio: "Specializes in Tafseer and Hadith, bringing depth and clarity to her lessons. Her extensive knowledge and clear teaching style help students connect with the deeper meanings of Islamic texts.",
  },
  {
    id: 7,
    name: "Female Tutor",
    gender: "Female",
    specialty: "Children's Quran & Islamic Basics",
    experience: "7+ years",
    bio: "Known for her engaging and fun approach to teaching children. She focuses on Quran recitation and Islamic basics to ensure young learners build a strong foundation.",
  },
];

const TutorsPage: React.FC = () => {
  const maleTutors = tutors.filter((tutor) => tutor.gender === "Male" && tutor.id !== 1);
  const femaleTutors = tutors.filter((tutor) => tutor.gender === "Female");

  return (
    <div
      className="min-h-screen py-10 text-white"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          Meet Our Professional Tutors
        </h1>

        {/* Highlighted Leading Tutor: Hafiz Muhammad Rizwan */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-yellow-400 mb-4">Our Leading Tutor</h2>
          <div className="bg-white/20 p-8 rounded-lg shadow-lg max-w-lg mx-auto transform transition hover:scale-105 hover:shadow-xl">
            <img
              src={tutors[0].image}
              alt={tutors[0].name}
              className="w-full h-48 object-contain rounded-lg mb-6"
            />
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">{tutors[0].name}</h3>
            <p className="text-lg text-gray-300 mb-2 text-center">
              <FaGraduationCap className="inline text-yellow-400 mr-2" />
              <strong>Specialty:</strong> {tutors[0].specialty}
            </p>
            <p className="text-lg text-gray-300 mb-2 text-center">
              <FaBook className="inline text-yellow-400 mr-2" />
              <strong>Experience:</strong> {tutors[0].experience}
            </p>
            <p className="text-lg text-gray-300 text-center">
              <FaChalkboardTeacher className="inline text-yellow-400 mr-2" />
              {tutors[0].bio}
            </p>
          </div>
        </div>

        {/* Male Tutors */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-8">Male Tutors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {maleTutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white/20 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl text-center"
              >
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-48 object-contain rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{tutor.name}</h3>
                <p className="text-lg text-gray-300 mb-2">
                  <FaGraduationCap className="inline text-yellow-400 mr-2" />
                  <strong>Specialty:</strong> {tutor.specialty}
                </p>
                <p className="text-lg text-gray-300 mb-2">
                  <FaBook className="inline text-yellow-400 mr-2" />
                  <strong>Experience:</strong> {tutor.experience}
                </p>
                <p className="text-lg text-gray-300">
                  <FaChalkboardTeacher className="inline text-yellow-400 mr-2" />
                  {tutor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Female Tutors */}
        <div>
          <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-8">Female Tutors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {femaleTutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white/20 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl text-center"
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{tutor.name}</h3>
                <p className="text-lg text-gray-300 mb-2">
                  <FaGraduationCap className="inline text-yellow-400 mr-2" />
                  <strong>Specialty:</strong> {tutor.specialty}
                </p>
                <p className="text-lg text-gray-300 mb-2">
                  <FaBook className="inline text-yellow-400 mr-2" />
                  <strong>Experience:</strong> {tutor.experience}
                </p>
                <p className="text-lg text-gray-300">
                  <FaChalkboardTeacher className="inline text-yellow-400 mr-2" />
                  {tutor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsPage;
