import React, { useState } from 'react';
import { Calendar, MapPin, Globe, Github } from 'lucide-react';
import SkillBadge from './SkillBadge.jsx';
import HireMeModal from '../smallComponents/HireMeModal';
import { Users } from 'lucide-react';

const ProfileSection = ({ darkMode }) => {
  const skills = [
    { name: 'JavaScript', color: '#f7df1e', textColor: 'black' },
    { name: 'C++', color: '#00599c' },
    { name: 'SQL', color: '#336791' },
    { name: 'Solidity', color: '#363636' },
    { name: 'Ethereum', color: '#627eea' },
    { name: 'Blockchain', color: '#1a73e8' },
    { name: 'Next.JS', color: '#000000' },
    { name: 'Supabase', color: '#3ecf8e' },
    { name: 'Node.JS', color: '#339933' },
    { name: 'MongoDB', color: '#47a248' }
  ];
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="text-center">
      <div className="relative inline-block mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
          <img 
            src="\Raj.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-2 mb-2">
        <h1 className="text-3xl font-bold">Rajdeep Singha</h1>
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-black text-xs">✓</span>
        </div>
      </div>
      
      <p className={`text-lg mb-6 max-w-2xl mx-auto ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        React.js & Solidity Developer | Community @PushChain | SmartContract Dev@ Rise In | 5x Hackathon Winner
      </p>
      
      <div className={`flex items-center justify-center space-x-6 text-sm mb-8 ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <div className="flex items-center space-x-1 ">
          <Calendar className="w-4 h-4" />
          <span>Joined 27 Jun 2025</span>
        </div>
        <div className="flex items-center space-x-1   " >
          <MapPin className="w-4 h-4" />
          <span>REMOTE</span>
        </div>
        <div className="flex items-center space-x-1  hover:  cursor-pointer" onClick={()=> window.open("https://cal.com/rajdeep-singha/30min", "_blank")}>
          <Globe className="w-4 h-4" />
          <span>Book 1:1</span>
        </div>
        <div className="flex items-center space-x-1  hover:  cursor-pointer" onClick={()=> window.open("https://github.com/rajdeep-singha", "_blank")}>
          <Github className="w-4 h-4" />
          <span>rajdeep_singha</span>
        </div>
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
      
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {skills.map((skill, index) => (
          <SkillBadge key={index} {...skill} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;