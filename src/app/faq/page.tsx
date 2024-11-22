import React from "react";

const FAQPage: React.FC = () => {
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
        {/* FAQ Header */}
        <header className="mb-12 text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            style={{
              fontFamily: "Times New Roman, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            Frequently Asked Questions (FAQs)
          </h1>
        </header>

        {/* FAQ Content */}
        <main className="space-y-10 text-lg">
          {[
            {
              question: "What is Online Quran Tutoring?",
              answer: "Online Quran Tutoring provides personalized Quran learning sessions via video conferencing, allowing students to learn from the comfort of their home. Our certified tutors offer one-on-one sessions tailored to each student's pace and level.",
            },
            {
              question: "How do I sign up for a class?",
              answer: "Signing up is easy! Click on the 'Sign up' link. You can fill out a form, and one of our representatives will get in touch with you to schedule your first session.",
            },
            {
              question: "What is the duration of each class?",
              answer: "Each class lasts approximately 30 to 45 minutes. However, we can adjust the duration based on the student's availability and learning requirements.",
            },
            {
              question: "Are the tutors qualified?",
              answer: "Yes, all of our tutors are certified Quran teachers with extensive experience in teaching Quran, Tajweed, and Islamic studies. They undergo rigorous training to ensure they provide the highest quality education.",
            },
            {
              question: "Do you offer classes for kids and adults?",
              answer: "Yes, we offer classes for both kids and adults. We tailor our lessons to suit the age and learning level of the student, ensuring a comfortable and effective learning experience for everyone.",
            },
            {
              question: "What if I miss a class?",
              answer: "If you miss a class, you can easily reschedule it with your tutor. Just inform us in advance, and we will do our best to accommodate a make-up session at a convenient time for you.",
            },
            {
              question: "How can I pay for the classes?",
              answer: "We offer multiple payment options, including credit/debit cards, PayPal, and bank transfers. You can choose the payment method that is most convenient for you.",
            },
            {
              question: "Can I choose a specific tutor?",
              answer: "Yes, you can request a specific tutor based on their teaching style, language proficiency, or experience. We will do our best to match you with your preferred tutor.",
            },
            {
              question: "What languages do the tutors speak?",
              answer: "Our tutors are proficient in multiple languages, including English, Arabic, and Urdu. You can choose the language that you are most comfortable with for your classes.",
            },
            {
              question: "Is there a free trial class?",
              answer: "Yes, we offer a free trial class for new students. This allows you to experience our teaching style and decide if it meets your expectations before committing to a full course.",
            },
            {
              question: "How do I contact support?",
              answer: (
                <>
                  You can contact our support team via email at{" "}
                  <a href="mailto:m.r.sial787@gmail.com" className="text-yellow-300 underline">
                    m.r.sial787@gmail.com
                  </a>{" "}
                  or by phone at{" "}
                  <span className="text-yellow-300">+92 313 5710041</span>. We are here to help you with any questions or concerns.
                </>
              ),
            },
          ].map((faq, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4">{`${index + 1}. ${faq.question}`}</h2>
              <p className="leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default FAQPage;
