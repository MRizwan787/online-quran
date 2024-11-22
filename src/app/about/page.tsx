import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col p-6 text-white font-serif"
      style={{
        backgroundImage: "url('/background3.jpg')", // Add your background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional parallax effect
      }}
    >
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        {/* About Us Header */}
        <header className="mb-12 text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            style={{
              fontFamily: "Times New Roman, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            About Us
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Our mission is to provide high-quality Quran education to students worldwide. We strive to make Quran learning accessible and effective with certified tutors and modern tools.
          </p>
        </header>

        {/* About Us Content */}
        <main>
          {[
            {
              title: "Our Mission",
              content: `At Quran Tutoring, our mission is to provide high-quality, personalized Quran education to students of all ages and backgrounds. We aim to make Quran learning accessible, convenient, and effective by utilizing the latest technology and connecting students with experienced, certified tutors.`,
            },
            {
              title: "Our Vision",
              content: `We envision a world where every Muslim, regardless of location, has the opportunity to learn the Quran and deepen their understanding of Islamic teachings. We strive to foster a love for the Quran and inspire our students to live by its principles, bringing peace and harmony into their lives and communities.`,
            },
            {
              title: "Why Choose Us?",
              content: `We are dedicated to providing a personalized and engaging learning experience. Our certified tutors are passionate about teaching and have a deep understanding of the Quran and its teachings. Whether you're a beginner or looking to refine your Tajweed skills, we offer customized lessons to meet your needs.`,
            },
            {
              title: "Our Tutors",
              content: `Our team of tutors is our greatest asset. They are not only qualified and experienced but also compassionate and patient. Each tutor undergoes a rigorous selection process to ensure they meet our high standards for teaching the Quran. They are skilled in various teaching methods and are able to adapt their approach based on the student's learning style.`,
            },
            {
              title: "Our Approach",
              content: `We use a student-centered approach, focusing on individual learning styles and preferences. Our lessons are interactive and engaging, utilizing video conferencing and digital tools to create an immersive learning experience. We believe that every student can excel in Quran learning with the right guidance and support.`,
            },
            {
              title: "Community and Support",
              content: `We believe in building a supportive and inclusive community of learners. Our platform offers a safe and friendly environment where students can connect with tutors and fellow learners. We provide continuous support to ensure that each student receives the best possible experience.`,
            },
            {
              title: "Get in Touch",
              content: (
                <>
                  We are here to answer any questions you may have about our services or how we can assist you in your Quran learning journey. Please don't hesitate to reach out to us. You can contact us at{" "}
                  <a href="mailto:m.r.sial787@gmail.com" className="text-yellow-300 underline">
                    m.r.sial787@gmail.com
                  </a>{" "}
                  or call us at{" "}
                  <span className="text-yellow-300">+92 313 5710041</span>. We look forward to assist you with respect.
                </>
              ),
            },
          ].map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-white font-light">{section.content}</p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default AboutUsPage;
