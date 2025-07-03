import React, { useState } from 'react';
import { 
  Briefcase, 
  Shield,  
  Users, 
  BarChart3, 
  ChevronUp, 
} from 'lucide-react';
import JobPreferencesModal from './JobPreferencesModal';
import HireMeModal from '../smallComponents/HireMeModal';
import ProfileHighlights from '../smallComponents/ProfileHighlights';


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
            <span>POW (Proof of Work)</span>
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


      <ProfileHighlights darkMode={darkMode} />

    </div>
  );
};

export default Sidebar;