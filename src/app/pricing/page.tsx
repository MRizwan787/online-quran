import React from 'react';
import { FaBookOpen, FaChalkboardTeacher, FaRegCalendarAlt, FaCheckCircle } from 'react-icons/fa'; // Importing icons from react-icons
import Link from 'next/link'; // Import Link from Next.js

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Demo Class',
      price: 'Free',
      additionalPrices: [],
      details: [
        'One Free Trial Class',
        'Duration: 30 Minutes',
        'Experience One to One Live Session',
      ],
    },
    {
      name: 'One Day Special Class',
      price: '20 GBP',
      additionalPrices: ['25 AUD', '25 USD', '35 CAD'],
      details: ['4 Classes Per Month', 'Duration: 45 Minutes', 'One to One Live Class'],
    },
    {
      name: '2 Days Per Week',
      price: '25 GBP/month',
      additionalPrices: ['30 AUD/month', '30 USD/month', '40 CAD/month'],
      details: ['8 Lessons Per Month', 'One to One Live Class', '30 Minutes/Live Session'],
    },
    {
      name: '3 Days Per Week',
      price: '33 GBP/month',
      additionalPrices: ['40 AUD/month', '40 USD/month', '55 CAD/month'],
      details: ['12 Lessons Per Month', 'One to One Live Class', '30 Minutes/Live Session'],
    },
    {
      name: '4 Days Per Week',
      price: '40 GBP/month',
      additionalPrices: ['50 AUD/month', '50 USD/month', '70 CAD/month'],
      details: ['16 Lessons Per Month', 'One to One Live Class', '30 Minutes/Live Session'],
    },
    {
      name: '5 Days Per Week',
      price: '45 GBP/month',
      additionalPrices: ['55 AUD/month', '55 USD/month', '75 CAD/month'],
      details: ['20 Lessons Per Month', 'One to One Live Class', '30 Minutes/Live Session'],
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col p-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Optional for parallax effect
      }}
    >
      {/* Pricing Header */}
      <div className="text-center mb-10 p-5 bg-black/50 rounded-lg shadow-md">
        <h2
          className="text-4xl font-bold text-white-400"
          style={{ fontFamily: 'Times New Roman, serif', textShadow: '1px 1px 6px black' }}
        >
          Select Your Pricing Plans
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-black/50 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between"
            style={{ fontFamily: 'Times New Roman, serif' }} // Apply Times New Roman globally
          >
            {/* Heading at the top center of the card */}
            <h2
              className="text-2xl font-bold text-yellow-400 text-center"
              style={{ fontFamily: 'Times New Roman, serif', textShadow: '2px 2px 6px black' }}
            >
              {plan.name}
            </h2>

            {/* Content (text) in the center of the card */}
            <div className="flex flex-col justify-center items-center mt-6 flex-grow">
              <p className="text-2xl font-bold mb-4 text-white">{plan.price}</p>
              {/* Additional prices in different currencies */}
              {plan.additionalPrices.length > 0 &&
                plan.additionalPrices.map((priceDetail, idx) => (
                  <p key={idx} className="text-lg font-medium text-center text-gray-300">{priceDetail}</p>
                ))}

              {/* Plan details */}
              <ul className="list-disc pl-6 mt-4 space-y-3">
                {plan.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center justify-center text-lg text-gray-300">
                    {/* Icons based on the details */}
                    {detail.includes('Free') && <FaCheckCircle className="mr-3 text-yellow-400" />}
                    {detail.includes('Days') && <FaRegCalendarAlt className="mr-3 text-yellow-400" />}
                    {detail.includes('Classes') && <FaChalkboardTeacher className="mr-3 text-yellow-400" />}
                    {detail.includes('Minutes') && <FaBookOpen className="mr-3 text-yellow-400" />}
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enroll Now Button with Next.js Link, positioned at the bottom */}
            <div className="mt-6 flex justify-center">
              <Link href="/signup">
                <button className="bg-yellow-500 text-black py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-200">
                  {plan.name === 'Demo Class' ? 'Try for Free' : 'Enroll Now'}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
