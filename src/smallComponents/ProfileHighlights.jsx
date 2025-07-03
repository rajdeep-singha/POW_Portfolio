import React from 'react';
import { BarChart3, Award, Code, Terminal } from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const data = [
  { skill: 'React.js', value: 95 },
  { skill: 'Solidity', value: 75 },
  { skill: 'Node.js', value: 80 },
  { skill: 'TypeScript', value: 70 },
  { skill: 'Clarity', value: 45 }
];

const ProfileHighlights = ({ darkMode }) => (
  <div className={`${
    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  } rounded-xl p-6 border transition-colors duration-300`}>
    
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-lg">Profile Highlights</h3>
      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        updated 2025
      </span>
    </div>
    
    {/* Top Stats */}
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center">
        <Code className="w-6 h-6 mx-auto mb-1 text-green-400"/>
        <div className="text-2xl font-bold">20+</div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Projects
        </p>
      </div>
      <div className="text-center">
        <Award className="w-6 h-6 mx-auto mb-1 text-yellow-400"/>
        <div className="text-2xl font-bold">5</div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Hackathon Wins
        </p>
      </div>
      <div className="text-center">
        <Terminal className="w-6 h-6 mx-auto mb-1 text-gray-400"/>
        <div className="text-2xl font-bold">400+</div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Contributions
        </p>
      </div>
    </div>
    
    {/* Radar Chart */}
    <div className="w-full h-40 mb-6">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid stroke={darkMode ? '#4b5563' : '#e5e7eb'} />
          <PolarAngleAxis dataKey="skill" tick={{ fill: darkMode ? '#fff' : '#111' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
          <Radar
            dataKey="value"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    
    {/* Action Button */}
    <button className={`w-full py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 cursor-pointer ${
      darkMode 
        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
    }`} onClick={()=> window.open("https://github.com/rajdeep-singha", "_blank")}>
      <BarChart3 className="w-4 h-4" />
      <span>View Full Contribution </span>
      <span>→</span>
    </button>
  </div>
);

export default ProfileHighlights;
