import React from 'react';
import { User, Search,  Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`border-b transition-colors duration-300 ${
      darkMode 
        ? 'border-gray-800 bg-black/50' 
        : 'border-gray-200 bg-white/50'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-xl  font-bold">Rajdeep Singha</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              {/* <input 
                type="text" 
                placeholder="Search Peerlist"
                className={`${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-green-500' 
                    : 'bg-white border-gray-300 focus:border-green-500'
                } border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none w-64 transition-colors`}
              /> */}
            </div>
            
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                
              </div> */}
              {/* <Bell className={`w-5 h-5 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              } cursor-pointer transition-colors`} /> */}
              {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;