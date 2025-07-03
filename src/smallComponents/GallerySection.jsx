// smallComponents/GallerySection.jsx
import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const galleryData = {
    Myself: [
        'myself1.jpg',
        'myself2.jpg',
        'myself3.jpg',
        'myself4.jpg',
        'myself5.jpg',
        'myself6.jpg',
        'myself7.jpg',
        'myself8.jpg',
        'myself9.jpg',
        'myself10.jpg',
        'myself11.jpg',
        'myself12.jpg',
        'myself13.jpg',
        'myself14.jpg',
        'myself15.jpg',
        'myself16.jpg',
      ],
  Friends: [
    'friends1.jpg',
    'friends2.jpg',
    'friends3.jpg',
    'friends4.jpg',
    'friends5.jpg',
    'friends6.jpg',
    'friends7.jpg',
    'friends8.jpg',
    'friends9.jpg',
    'friends10.jpg',
    'friends11.jpg',
    'friends12.jpg',
    'friends13.jpg',
    'friends14.jpg',
    'friends15.jpg',
    'friends16.jpg',
  ],

  Hackathons: [
    'hack1.jpg',
    'hack2.jpg',
    'hack3.jpg',
    'hack4.jpg',
    'hack5.jpg',
    'hack6.jpg',
    'hack7.jpg',
    'hack8.jpg',
    'hack9.jpg',
    'hack10.jpg',
    'hack11.jpg',
    'hack12.jpg',
    'hack13.jpg',
    'hack14.jpg',
    'hack15.jpg',
    'hack16.jpg'
  ]
};

const GallerySection = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('Myself');

  return (
    <div className="space-y-8 mt-10">

      <div className="flex gap-4 flex-wrap">
        {Object.keys(galleryData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === category
                ? 'bg-green-500 text-white'
                : darkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryData[activeTab].map((src, index) => (
          <Zoom key={index}>
            <img
              src={src}
              alt={`memory-${index}`}
              className="w-full h-48 object-cover rounded-lg shadow-md cursor-zoom-in"
            />
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
