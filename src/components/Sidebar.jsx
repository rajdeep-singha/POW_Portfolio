import React, { useState } from 'react';
import { 
  Settings, 
  Briefcase, 
  Shield, 
  Globe, 
  Users, 
  BarChart3, 
  ChevronUp, 
  Link
} from 'lucide-react';
import JobPreferencesModal from './JobPreferencesModal';
import HireMeModal from '../smallComponents/HireMeModal';

const Sidebar = ({ darkMode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  
const [showPreferences, setShowPreferences] = useState(false);

  return (
    <div className="space-y-6">
      {/* Profile Menu */}
      <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } rounded-xl p-6 border transition-colors duration-300`}>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <span className="font-medium">Rajdeep Singha</span>
        </div>
        
        <div className="space-y-3">
          <div className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}>
           
          </div>

          <div
  onClick={() => setShowPreferences(true)}
  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
  }`}
>
  <Briefcase className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
  <span>Job Preferences</span>
  <span className="ml-auto bg-green-500 text-black px-2 py-1 rounded text-xs font-medium">Open</span>
</div>

{showPreferences && (
  <JobPreferencesModal darkMode={darkMode} onClose={() => setShowPreferences(false)} />
)}




          <div className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}onClick={()=> window.open("https://www.notion.so/Proof-of-Work-Rajdeep-b9a610a0d6cc48fdadde76c3b421772b", "_blank")} >
            <Shield className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500' }`} />
            <span>POW</span>
          </div>
          {/* <div className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}>

            <Globe className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span>Custom Domain</span>
            <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">Not Connected</span>
          </div> */}
            <div
        className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
        }`}
        onClick={() => setModalOpen(true)}
      >
        <Users className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        <span>Hire Me</span>
      </div>
      <HireMeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} darkMode={darkMode} />
        </div>
      </div>

      {/* Profile Analytics */}
      <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } rounded-xl p-6 border transition-colors duration-300`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Profile Analytics</h3>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>last 7 days</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-1 mb-1">
              <span className="text-2xl font-bold">67</span>
              <ChevronUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">67</span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Views</p>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">0</div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Clicks</p>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">0</div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Followers</p>
          </div>
        </div>
        
        {/* Simple Chart */}
        <div className="h-24 mb-4 relative">
          <svg className="w-full h-full" viewBox="0 0 280 80">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <polyline
              fill="none"
              stroke="url(#chartGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,60 40,60 80,60 120,60 160,60 200,30 240,15 280,45"
            />
            <circle cx="200" cy="30" r="4" fill="#10b981" />
            <circle cx="240" cy="15" r="4" fill="#3b82f6" />
          </svg>
        </div>
        
        <button className={`w-full py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 ${
          darkMode 
            ? 'bg-gray-700 hover:bg-gray-600' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}>
          <BarChart3 className="w-4 h-4" />
          <span>Analytics Dashboard</span>
          <span>→</span>
        </button>
      </div>

      {/* Profile Highlights */}
      {/* <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } rounded-xl p-6 border transition-colors duration-300`}>
        <h3 className="font-semibold mb-4">Profile Highlights</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Profile Completeness</span>
            <span className="text-green-400">85%</span>
          </div>
          <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;