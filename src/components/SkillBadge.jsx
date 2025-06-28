import React from 'react';

const SkillBadge = ({ name, color, textColor = 'white', darkMode }) => (
  <span 
    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
      darkMode ? 'shadow-lg' : 'shadow-md'
    }`}
    style={{ backgroundColor: color, color: textColor }}
  >
    {name}
  </span>
);

export default SkillBadge;