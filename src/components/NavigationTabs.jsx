import React from 'react';

const NavigationTabs = ({ activeTab, setActiveTab, darkMode }) => {
  const tabs = ['HOME', 'EXPERIENCE', 'COLLECTIONS', 'PROJECTS', 'TESTIMONIALS', 'GALLERY'];

  return (
    <div className="flex overflow-x-auto space-x-4 px-4 sm:px-0 scrollbar-hide">
    <div className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-1 font-medium text-sm transition-colors relative ${
              activeTab === tab 
                ? 'text-green-400 border-b-2 border-green-400' 
                : darkMode 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
    </div>
  );
};

export default NavigationTabs;
