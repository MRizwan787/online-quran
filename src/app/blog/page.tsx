import React from "react";

const Blog: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col p-6 text-white font-serif"
      style={{
        backgroundImage: "url('/background3.jpg')", // Add your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional parallax effect
      }}
    >
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        {/* Blog Header */}
        <header className="mb-12 text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            style={{
              fontFamily: "Times New Roman, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            The Importance of Learning the Quran
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            The Quran is not just a book; it is a guide for life. Understanding its teachings brings clarity, peace, and direction in every aspect of life.
          </p>
        </header>

        {/* Blog Content */}
        <main>
          {[
            {
              title: "The Quran as a Source of Guidance",
              content: `The Quran offers divine wisdom for all aspects of life. It serves as a moral compass, guiding believers toward justice, compassion, and understanding. Each verse provides actionable insights that help navigate life’s complexities.

              Through its teachings, the Quran fosters harmony, compassion, and a sense of responsibility towards all of humanity, laying the foundation for a just and equitable society.`,
            },
            {
              title: "Spiritual Growth Through Quran Learning",
              content: `Learning the Quran is a transformative journey. Beyond memorization, it deepens the connection with Allah, instilling humility and gratitude. Reflecting on its verses nurtures inner peace and spiritual clarity.

              The Quran encourages believers to continuously seek knowledge and grow spiritually, fostering a profound sense of purpose and alignment with divine wisdom.`,
            },
            {
              title: "The Quran's Impact on Society",
              content: `A Quran-inspired community thrives on mutual respect, unity, and justice. Its teachings promote generosity, eliminate division, and foster a spirit of empathy and cooperation.

              By emphasizing the value of education and knowledge, the Quran shapes informed, enlightened societies that prioritize innovation, progress, and fairness.`,
            },
            {
              title: "Learning the Quran at Any Age",
              content: `The Quran’s wisdom is accessible to everyone, regardless of age. Children benefit from its foundational values, while adults find solace, reflection, and deeper insights.

              It is never too late to embark on the journey of Quranic learning. Every verse offers timeless wisdom that enriches faith and spirituality at any stage of life.`,
            },
            {
              title: "Conclusion",
              content: `The Quran is a timeless guide for personal and societal transformation. Its teachings remain as relevant today as they were when revealed. By learning and living its principles, we pave the way for spiritual growth, social justice, and a deeper connection with Allah.`,
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

export default Blog;
