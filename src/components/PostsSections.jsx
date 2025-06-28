import React from 'react';
import { Plus, FileText } from 'lucide-react';

const PostsSection = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Posts</h2>
        <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          darkMode 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}>
          <Plus className="w-4 h-4" />
          <span>Create Post</span>
        </button>
      </div>

      <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } rounded-xl p-12 border text-center`}>
        <FileText className={`w-16 h-16 ${darkMode ? 'text-gray-600' : 'text-gray-400'} mx-auto mb-4`} />
        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          No posts yet
        </h3>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
          Share your thoughts and updates with your network
        </p>
        <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${
          darkMode 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}>
          Create Your First Post
        </button>
      </div>
    </div>
  );
};

export default PostsSection;