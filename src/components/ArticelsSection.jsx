import React from 'react';
import { Plus, Calendar, BookOpen, ExternalLink } from 'lucide-react';

const ArticlesSection = ({ darkMode }) => {
  const articles = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to structure and build React applications that can scale with your team and requirements.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices']
    },
    {
      title: 'Smart Contract Security Best Practices',
      excerpt: 'Essential security considerations when developing smart contracts for production environments.',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['Blockchain', 'Security', 'Solidity']
    },
    {
      title: 'The Future of Web3 Development',
      excerpt: 'Exploring emerging trends and technologies shaping the future of decentralized web development.',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['Web3', 'Blockchain', 'Future Tech']
    }
  ];

  return (
    <div className="space-y-8">
     

      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className={`${
            darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
          } rounded-xl p-6 border transition-all duration-300 hover:shadow-xl cursor-pointer`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {article.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  {article.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
              <ExternalLink className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'} ml-4`} />
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;