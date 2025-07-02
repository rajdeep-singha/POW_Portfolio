import React from 'react';
import { Download, Briefcase, GraduationCap, Award, Building } from 'lucide-react';

const ResumeSection = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Smart Contract Developer/Meaven',
      company: 'Rise In',
      period: '2024- Present',
      location: 'Remote',
      description: 'Developed and deployed smart contracts in Clarity on Stacks',
      skills: ['Solidity', 'Ethereum', 'DeFi', 'Smart Contracts', 'Clarity','Move-Lang'],
      image: 'star.webp'
    }, 
    {
      title: 'Vice President',
      company: 'TPHxSRMIST',
      period: 'Dec 2024 - Present',
      location: 'Remote',
      description: 'Built scalable web applications using modern JavaScript frameworks and cloud technologies.',
      skills: ['Node.js', 'MongoDB', 'AWS', 'React.js'],
      image: 'star.webp'
    },
    {
      title: 'Community Moderator',
      company: 'PushChain',
      period: 'Jan 2024 - July 2025',
      location: 'Remote',
      description: 'Leading SocialMedia Growth and Community Engagement ',
      skills: ['React.js', 'TypeScript', 'Web3', 'Ethereum'],
      image: 'star.webp'
    },
    {
      title: 'Community Moderator',
      company: 'HUDDLE 01',
      period: 'July 2024 - Nov 2024',
      location: 'Remote',
      description: 'Leading SocialMedia Growth and Community Engagement of HUDDLE01 in discord and telegram',
      skills: ['React.js', 'TypeScript', 'Web3', 'Ethereum'],
      image: 'star.webp'
    }
   
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2023 - 2027',
      grade: '8.5 CGPA',
     
    }
  ];

  const achievements = [
    '5x Hackathon Winner',
    'Blockchain Developer Certification',
    'Best Educational content creator in PushChain ',
    'Best Content in Builder House(kasol)',
    '15K Active Users in Rabble ',
    '1M impressions in PushChain in 3months period',
    
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resume</h2>
        <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          darkMode 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}>
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </button>
      </div>
      

      {/* Experience Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Briefcase className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h3>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } rounded-xl p-6 border overflow-hidden`}>
              <div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `url(/${exp.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5,
    pointerEvents: 'none',
  }}
/>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <Building className={`w-4 h-4 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                      <span className={`font-medium ${darkMode ? 'text-green-400' : 'text-green-500'}`}>
                        {exp.company}
                      </span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>•</span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.location}</span>
                    </div>
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <GraduationCap className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
        </div>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className={`${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } rounded-xl p-6 border`}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {edu.degree}
                  </h4>
                  <p className={`${darkMode ? 'text-green-400' : 'text-green-500'} font-medium`}>
                    {edu.institution}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.grade}
                  </p>
                </div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Award className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievements</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className={`${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } rounded-xl p-4 border flex items-center space-x-3`}>
              <Award className={`w-5 h-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {achievement}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;