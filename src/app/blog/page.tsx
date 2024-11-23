import React from "react";

const Blog: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col p-6 text-white font-serif"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-4xl mx-auto text-center">
        {/* Blog Header */}
        <header className="mb-12">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            style={{
              fontFamily: "Times New Roman, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            The Transformative Power of Learning the Quran
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            The Quran is not just a book; it is a timeless guide to navigating life’s challenges with wisdom, grace, and purpose. Its verses transcend cultural and historical boundaries, offering inspiration and guidance to all who seek it. Embarking on the journey of Quranic learning can unlock spiritual clarity, intellectual growth, and a profound connection to Allah.
          </p>
        </header>

        {/* Blog Content */}
        <main>
          {[
            {
              title: "The Quran as a Source of Guidance",
              content: `The Quran is more than a religious text; it is a divine manual for human existence. Its guidance touches every aspect of life, from personal ethics to societal organization. Each verse is a wellspring of wisdom, encouraging believers to pursue justice, compassion, and balance.

              The Quran teaches us how to overcome our inner struggles by instilling virtues like patience and resilience. It provides clarity in moments of doubt and strength during adversity. Reflecting on the stories of the Prophets, we learn timeless lessons of perseverance, faith, and submission to Allah's will.`,
            },
            {
              title: "Unlocking Spiritual Clarity Through Reflection",
              content: `The Quran invites us to ponder deeply on its verses, fostering a profound connection with our Creator. It encourages believers to question, explore, and seek answers, making the process of learning deeply engaging.

              The Quran's emphasis on reflection transforms the act of reading into a spiritual dialogue. It reminds us of the transient nature of this world, redirecting our focus toward eternal success. Through understanding the Quran, one develops tawakkul (trust in Allah), leading to unparalleled peace and contentment.`,
            },
            {
              title: "Practical Benefits of Quranic Teachings",
              content: `The Quran offers practical solutions to daily challenges. For instance, its teachings on conflict resolution encourage kindness and patience over anger and resentment. The emphasis on honesty and transparency strengthens relationships and builds trust in personal and professional interactions.

              Furthermore, the Quran’s guidance on moderation promotes mental and physical well-being. By teaching gratitude and contentment, it helps believers avoid materialism and find joy in simplicity.`,
            },
            {
              title: "The Role of Quran in Strengthening Family Bonds",
              content: `The Quran highlights the importance of family as the cornerstone of society. It emphasizes respect for parents, compassion for children, and the nurturing of strong, loving relationships.

              Through its teachings, families learn to resolve conflicts with wisdom, support one another in faith, and share a collective sense of purpose. A home grounded in Quranic principles becomes a haven of tranquility and spiritual growth.`,
            },
            {
              title: "The Quran's Role in Shaping Society",
              content: `Communities inspired by the Quran thrive on unity, empathy, and justice. Its teachings emphasize the importance of helping the needy, protecting the vulnerable, and establishing fairness in all dealings.

              Quranic guidance has inspired countless advancements in science, art, and literature throughout history. It continues to empower individuals to pursue knowledge, foster innovation, and create a better world for future generations.`,
            },
            {
              title: "The Timeless Wisdom of Quranic Stories",
              content: `The stories of the Quran are rich with lessons for every era. The story of Prophet Yusuf (AS) teaches us about patience and the rewards of unwavering faith. The tale of Prophet Musa (AS) demonstrates courage in the face of tyranny, while the trials of Prophet Ayub (AS) remind us of the virtues of gratitude and perseverance.

              These narratives are not just historical accounts but blueprints for navigating the challenges of modern life with wisdom and faith.`,
            },
            {
              title: "The Quran's Linguistic Beauty and Eloquence",
              content: `The Quran is celebrated for its unparalleled linguistic mastery. Its eloquence captivates readers and listeners alike, making it a literary miracle. Every word is precisely chosen, resonating with rhythm and depth.

              Its poetic nature enhances its memorability, allowing its teachings to be easily internalized and shared. This linguistic brilliance also deepens the emotional impact of its message, leaving a lasting impression on the hearts of believers.`,
            },
            {
              title: "Learning the Quran in the Digital Age",
              content: `In the modern world, learning the Quran has become more accessible than ever. Online platforms, mobile apps, and virtual tutors bring Quranic education to people's fingertips. These resources offer interactive experiences, enabling learners to understand tajweed (pronunciation), tafsir (interpretation), and hifz (memorization).

              This digital accessibility allows individuals from all walks of life to engage with the Quran, breaking barriers of distance, time, and even language.`,
            },
            {
              title: "Why Learning the Quran is a Lifelong Journey",
              content: `The Quran is a living miracle, offering new insights each time it is read. Its layers of meaning unfold gradually, making it a lifelong source of learning and inspiration.

              Whether one is a child memorizing the verses or an elder reflecting on its wisdom, the Quran caters to all levels of understanding. Its transformative power continues to shape hearts, minds, and souls across generations.`,
            },
            {
              title: "Conclusion",
              content: `The Quran is more than a religious scripture; it is a source of light, healing, and guidance for all of humanity. Its teachings hold the key to personal growth, social harmony, and eternal salvation. By committing to learning and implementing its principles, we open doors to spiritual fulfillment and worldly success.

              The journey of Quranic learning is one of the most rewarding endeavors a person can undertake. It is a pathway to discovering the profound beauty of Allah’s words and drawing closer to Him with every verse. Let us embrace this divine gift and make it a cornerstone of our lives.`,
            },
          ].map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-white font-light leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Blog;
