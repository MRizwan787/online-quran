import React from "react";

const Courses: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col p-6 text-white font-serif"
      style={{
        backgroundImage: "url('/courses-background.jpg')", // Add your background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional parallax effect
      }}
    >
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-8"
          style={{
            fontFamily: "Times New Roman, serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          Explore Our Courses
        </h1>

        {/* Subheading */}
        <p
          className="text-2xl sm:text-3xl font-bold text-center text-white mb-8"
          style={{
            fontFamily: "Times New Roman, serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          Master the Quran and Deepen Your Knowledge of Islam
        </p>

        {/* Courses Section */}
        {[
          {
            title: "Recitation with Tajweed Course",
            description:
              "This course focuses on teaching the correct pronunciation and rules of reciting the Quran with Tajweed. Students will learn to apply the rules of Tajweed to recite the Quran beautifully and correctly.",
          },
          {
            title: "Hifz e Quran Course (Quran Memorization)",
            description:
              "The Hifz e Quran course is designed to assist students in memorizing the Quran. With structured guidance and support, students will be able to memorize the Quran at their own pace.",
          },
          {
            title: "Quranic Tafsir (Explanation of the Quran)",
            description:
              "This course provides a deeper understanding of the Quran by explaining the meanings, context, and wisdom behind the verses. Students will gain insight into the spiritual and moral lessons in the Quran.",
          },
          {
            title: "Basic and Enhanced Islamic Studies",
            description:
              "The Islamic Studies course covers the basics of Islam, including the pillars of Islam, the life of Prophet Muhammad (PBUH), and Islamic values. The enhanced course dives into topics like Islamic jurisprudence (Fiqh) and advanced theological discussions.",
          },
          {
            title: "Namaz and Dua's Course",
            description:
              "This course teaches the correct way to perform the five daily prayers (Salah) and how to make the various supplications (Dua) from the Quran and Hadith. Students will also learn the importance of each prayer in Islam.",
          },
          {
            title: "Islam and its Sciences",
            description:
              "This course offers an overview of various Islamic sciences, such as Islamic theology (Aqidah), jurisprudence (Fiqh), and the history of Islam. Students will explore the rich intellectual traditions and contributions of Islamic scholars.",
          },
          {
            title: "Islamic History Course",
            description:
              "The Islamic History course takes students through the history of Islam from the time of the Prophet Muhammad (PBUH) to the present. Topics include the expansion of Islam, the rise of Islamic empires, and significant events in the Islamic world.",
          },
          {
            title: "Arabic Language Course",
            description:
              "This course focuses on teaching the Arabic language, both classical and modern. Students will learn the basics of reading, writing, and understanding Arabic, which is essential for a deeper understanding of the Quran and Islamic texts.",
          },
        ].map((course, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
              {course.title}
            </h2>
            <p className="text-lg text-white font-light">{course.description}</p>
          </div>
        ))}

        {/* Closing Text */}
        <p className="text-lg text-center text-white mt-8">
          If you're interested in any of these courses, feel free to reach out to us for more details.
        </p>
      </div>
    </div>
  );
};

export default Courses;
