import React from 'react';
import { Quote, MessageCircle, Image } from 'lucide-react';

const TestimonialsSection = ({ darkMode }) => {
  const testimonials = [
    {
      name: 'Sahitya Roy',
      role: 'DevRel at RiseIn',
      feedback: 'Rajdeep is a powerhouse! He always brings innovative ideas to the table and executes with perfection.',
      date: 'June 2025',
      image:'\Sahitya.png',
    },
    {
      name: 'Mrinalini',
      role: 'Product at 0xrabble',
      feedback: 'Working with Rajdeep on smart contract security was a breeze. He’s detailed, fast, and highly reliable.',
      date: 'May 2025',
      image:'\Mrinalini.png'
    },
    // {
    //   name: 'Sara Lee',
    //   role: 'Community Manager, Push Protocol',
    //   feedback: 'Rajdeep has been a fantastic ambassador. His content is creative and engaging, and his consistency is unmatched!',
    //   date: 'April 2025'
    // }
  ];

  return (
    <div className="space-y-8">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Testimonials</h2>

      {testimonials.map((t, index) => (
        <div
          key={index}
          className={`rounded-xl p-6 border transition-all duration-300 shadow-sm ${
            darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-800'
          }`}
        >

          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm opacity-70">{t.role}</p>
            </div>
            <Quote className="w-5 h-5 opacity-50" />
          </div>
          <p className="text-base leading-relaxed mb-3">"{t.feedback}"</p>
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-60 object-cover mb-4 rounded-md"
          />
          <div className="text-sm opacity-50 flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>{t.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
