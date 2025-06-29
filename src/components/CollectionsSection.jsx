import React from 'react';
import {  Folder } from 'lucide-react';

const CollectionsSection = ({ darkMode }) => {
  const collections = [
    {
      title: 'Blockchain Projects',
      description: 'A collection of my blockchain and Web3 projects',
      items: 12,
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'React Components',
      description: 'Reusable React components and UI libraries',
      items: 8,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Design Systems',
      description: 'Modern design systems and style guides',
      items: 5,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Podcasts</h2>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <div key={index} className={`${
            darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
          } rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden`}>
            <div className="aspect-video overflow-hidden">
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {collection.title}
                </h3>
                <div className="flex items-center space-x-1">
                  <Folder className={`w-4 h-4 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-500'}`}>
                    {collection.items}
                  </span>
                </div>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                {collection.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsSection;