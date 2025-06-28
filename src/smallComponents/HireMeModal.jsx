import React from 'react';
import { X, Users } from 'lucide-react';

const HireMeModal = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`w-[90%] max-w-md rounded-lg p-6 relative ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <X size={20} />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
            <Users className="text-black w-5 h-5" />
          </div>
          <h2 className="text-xl font-semibold">Hire Me</h2>
        </div>

        <p className="text-sm mb-4">
          I'm currently open to freelance, part-time, or full-time opportunities. 
          Let's build something impactful together!
        </p>

        <a
          href="rajdeepsingha384@gmail.com"
          target="_blank"
          className="inline-block px-4 py-2 bg-green-500 text-black rounded-md font-medium hover:bg-green-600 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default HireMeModal;

