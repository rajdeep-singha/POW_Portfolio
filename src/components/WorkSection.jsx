import React from 'react';
import PlatformCard from './PlatformCard';
import GitHubCalendar from 'react-github-calendar';
import BlogCard from '../smallComponents/BlogCard';



const WorkSection = ({ darkMode }) => {
  const platforms = [
    { name: 'Twitter', icon: <div className="w-4 h-4 bg-black rounded-full">X</div>, color: '#000000', link: 'https://twitter.com/singh61402' },
    { name: 'Linkdin', icon: <div className="w-4 h-4 bg-blue rounded">in</div>, color: '#1296da', link: 'https://www.linkedin.com/in/rajdeep-singha-225b32246/' },
    { name: 'Youtube', icon: <div className="w-4 h-4 bg-white rounded text-black text-xs flex items-center justify-center font-bold">Y</div>, color: '#f60000',  link: 'https://www.youtube.com/@rajdeepsingha1611'  },
    { name: 'Substack', icon: <div className="w-4 h-4 bg-white rounded-full"></div>, color: '#ff90e8', link: 'https://substack.com/@geekraj' },
    { name: 'Product Hunt', icon: <div className="w-4 h-4 bg-white rounded text-black text-xs flex items-center justify-center font-bold">P</div>, color: '#da552f', link: 'https://www.producthunt.com/@rajdeepsingha384' },
    { name: 'CodeForces', icon: <div className="w-4 h-4 bg-white rounded text-black text-xs flex items-center justify-center font-bold">C</div>, color: '#1f8dd6', link: 'https://codeforces.com/profile/geek_raj' },
    { name: 'ADPList', icon: <div className="w-4 h-4 bg-white rounded-full"></div>, color: '#5865f2', link: 'https://adplist.org/mentors/rajdeep-singha' },
    { name: 'LeetCode', icon: <div className="w-4 h-4 bg-white rounded text-black text-xs flex items-center justify-center font-bold">L</div>, color: '#ffa116' },
    { name: 'Instagram', icon: <div className="w-4 h-4 bg-yellow rounded-full"></div>, color: '#da1bd1', link: 'https://www.instagram.com/rajdeep.dev_01/' }
  ];

  return (
    <div className="space-y-6">
      {/* <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Showcase your work from:
      </h2> */}

      {/* Mere GitHub Contributions */}
      <div className="my-6">
  <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
    GitHub Contributions
  </h3>
  <div className="overflow-x-auto">
    <GitHubCalendar
      username="rajdeep-singha"
      colorScheme={darkMode ? 'dark' : 'light'}
      blockSize={12}
      blockMargin={4}
      fontSize={14}
    />
  </div>
</div>

      {/* Mere Blog Posts */}
      <div className="my-6">
  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
    📚 Best Blogs I’ve Published
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    <BlogCard
      title="Unfold Hackathon Day 1 of Meme Coins, QR Codes and Big Hall Dreams"
      cover="\Blog2.jpeg"
      link="https://singh384.hashnode.dev/unfold-hackathon-day-1-of-meme-coins-qr-codes-and-big-hall-dreams?ref=peerlist"
      platform="Medium"
      darkMode={darkMode}
    />
    <BlogCard
      title="Unlock the Power of Wallet Tracker"
      cover="\Blog1.png"
      link="https://medium.com/@rajdeepsingha384/unlock-the-power-of-wallet-tracker-your-personal-web3-companion-f78580be8b9c"
      platform="Medium"
      darkMode={darkMode}
    />
    <BlogCard
      title="DungBeetle | 7M PostGresTable and Much More..."
      cover="\Blog3.png"
      link="https://medium.com/@rajdeepsingha384/dungbeetle-7m-postgrestable-and-much-more-bfae6423a4be"
      platform="Hashnode"
      darkMode={darkMode}
    />
  
  </div>
</div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {platforms.map((platform, index) => (
          <PlatformCard key={index} {...platform} darkMode={darkMode} />
        ))}
      </div>
      
      {/* <div className="mt-8">
        <div className={`${
          darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
        } rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl border group cursor-pointer`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg flex items-center justify-center`}>
                <Plus className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-medium`}>Add Project</span>
            </div>
            <Plus className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-green-400' : 'text-gray-500 group-hover:text-green-500'} transition-colors`} />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default WorkSection;