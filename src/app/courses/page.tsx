import React from 'react';

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white font-serif p-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading (Smaller font) */}
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
          className="text-3xl sm:text-3xl font-bold text-center text-white mb-8"
          style={{
            fontFamily: "Times New Roman, serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          Master the Quran and Deepen Your Knowledge of Islam
        </p>

        {/* Recitation with Tajweed Course */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Recitation with Tajweed Course
          </h2>
          <p className="text-lg text-white font-light">
            This course focuses on teaching the correct pronunciation and rules of reciting the Quran with Tajweed. Students will learn to apply the rules of Tajweed to recite the Quran beautifully and correctly.
          </p>
        </div>

        {/* Hifz e Quran Course (Quran Memorization) */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Hifz e Quran Course (Quran Memorization)
          </h2>
          <p className="text-lg text-white font-light">
            The Hifz e Quran course is designed to assist students in memorizing the Quran. With structured guidance and support, students will be able to memorize the Quran at their own pace.
          </p>
        </div>

        {/* Quranic Tafsir (Explanation of the Quran) */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Quranic Tafsir (Explanation of the Quran)
          </h2>
          <p className="text-lg text-white font-light">
            This course provides a deeper understanding of the Quran by explaining the meanings, context, and wisdom behind the verses. Students will gain insight into the spiritual and moral lessons in the Quran.
          </p>
        </div>

        {/* Basic and Enhanced Islamic Studies */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Basic and Enhanced Islamic Studies
          </h2>
          <p className="text-lg text-white font-light">
            The Islamic Studies course covers the basics of Islam, including the pillars of Islam, the life of Prophet Muhammad (PBUH), and Islamic values. The enhanced course dives into topics like Islamic jurisprudence (Fiqh) and advanced theological discussions.
          </p>
        </div>

        {/* Namaz and Dua's Course */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Namaz and Dua's Course
          </h2>
          <p className="text-lg text-white font-light">
            This course teaches the correct way to perform the five daily prayers (Salah) and how to make the various supplications (Dua) from the Quran and Hadith. Students will also learn the importance of each prayer in Islam.
          </p>
        </div>

        {/* Islam and its Sciences */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Islam and its Sciences
          </h2>
          <p className="text-lg text-white font-light">
            This course offers an overview of various Islamic sciences, such as Islamic theology (Aqidah), jurisprudence (Fiqh), and the history of Islam. Students will explore the rich intellectual traditions and contributions of Islamic scholars.
          </p>
        </div>

        {/* Islamic History Course */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Islamic History Course
          </h2>
          <p className="text-lg text-white font-light">
            The Islamic History course takes students through the history of Islam from the time of the Prophet Muhammad (PBUH) to the present. Topics include the expansion of Islam, the rise of Islamic empires, and significant events in the Islamic world.
          </p>
        </div>

        {/* Arabic Language Course */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            Arabic Language Course
          </h2>
          <p className="text-lg text-white font-light">
            This course focuses on teaching the Arabic language, both classical and modern. Students will learn the basics of reading, writing, and understanding Arabic, which is essential for a deeper understanding of the Quran and Islamic texts.
          </p>
        </div>

        {/* Closing Text */}
        <p className="text-lg text-center text-white">
          If you're interested in any of these courses, feel free to reach out to us for more details.
        </p>
      </div>
    </div>
  );
};

export default Courses;
