import React from 'react';
import { Plus } from 'lucide-react';

const PlatformCard = ({ name, icon, color, link, darkMode }) => {
  const cardContent = (
    <div className={`${
      darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
    } rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl border group cursor-pointer`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center`} style={{ backgroundColor: color }}>
            {icon}
          </div>
          <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-medium`}>{name}</span>
        </div>
        <Plus className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-green-400' : 'text-gray-500 group-hover:text-green-500'} transition-colors`} />
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default PlatformCard;