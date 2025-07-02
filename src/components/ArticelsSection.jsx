import React from 'react';
import { Calendar, BookOpen, ExternalLink } from 'lucide-react';

const ArticlesSection = ({ darkMode }) => {
  const articles = [
    {
      title: 'StellarPay',
      excerpt: 'StellarPay is a next-gen remittance and payroll platform built on the Stellar blockchain, streamlining global finance through three key use cases: fast and low-cost cross-border remittance payments, Early Wage Access (EWA) for on-demand salary withdrawals, and seamless on/off-ramp payroll systems for modern global workforce management',
      date: 'April 2025',
      TechStacks: ['TypeScript','Sorban','Rust','GoLang','SupaBase'],
      link: 'https://github.com/rajdeep-singha/stellar_pay/' ,
      image: 'stellar.png'
    }, {
      title: 'Decentralized Identity Verification',
      excerpt: 'Built a tamper-proof identity verification system leveraging Ethereum blockchain and IPFS to securely store and verify user credentials. Instead of centralizing sensitive data, this system uses cryptographic hashing and smart contracts to validate user identity in a decentralized manner, significantly reducing the risk of identity theft.',
      date: 'March 2025',
      TechStacks: ['React.js', 'Node.js', 'Express',' Ethereum', 'IPFS'],
      link: 'https://rajdeep-singha.github.io/Decentralized-Identity-Verification/',
      image: 'identity.png'
    },{
      title: 'Invo-Stake',
      excerpt: ' An AI-driven investment and staking platform designed to optimize liquidity pool engagement. It creates a utility layer on top of existing pools to help investors predict optimal staking opportunities based on AI signals and market conditions. Integration with Gemini API provides live data, while the backend uses Ethereum smart contracts for secure staking logic.',
      date: 'Sept 2024',
      TechStacks: ['React.js', 'Gemini API', 'Express',' Ethereum', 'C++'],
      link: 'https://invo-stakes.vercel.app/',
      image: 'invo.png'
    },
    {
      title: 'Memex',
      excerpt: ' A meme coin analytics and engagement platform that tracks social sentiment, trends, and coin popularity across Twitter using the Twitter API. It utilizes LangChain to interpret tweets and build context-based analytics, helping users discover viral meme coins and their traction. MEMEX incentivizes engagement by showcasing top memes and social activity.',
      date: 'DEC 2024',
      TechStacks: ['TypeScript', 'Twitter API', 'LangChain',' Ethereum'],
      link: 'https://memex-unfold.netlify.app/',
      image: 'memex.png'
    },
    {
      title: 'Stake Rich',
      excerpt: ' A decentralized Web3 staking platform that allows users to stake, buy, sell, and swap tokens with real-time crypto price tracking. The platform integrates ZK-proof technology to enhance transaction security and privacy without compromising on performance. It also features a visually interactive dashboard using Three.js for data-rich user experiences.',
      date: 'Oct 2024',
      TechStacks: ['React.js', 'Three.js',' Solidity', 'Ethereum ' ],
      link: 'https://stake-rich.vercel.app/',
      image: 'stake.png'
    },
   
    {
      title: 'zk-REUSEit',
      excerpt: 'zk-REUSEit is a decentralized reuse marketplace that enables users to securely list and discover second-hand goods while protecting their identity using zero-knowledge proofs. The platform integrates the Reclaim Protocol to verify user credentials—such as student IDs or social profiles—without storing or exposing any personal data. By leveraging Polygon zkEVM, the system offers scalable, low-cost on-chain interactions with privacy-preserving and censorship-resistant listings. Designed with a focus on sustainability and the  economy, zk-REUSEit fosters decentralized trust and transparency in peer-to-peer transactions',
      date: 'July 2024',
      TechStacks: ['React.js', 'JavaScript', 'Polygon zkEVM',' Ethereum', 'Reclaim Protocol'],
      link: 'https://github.com/tanayarun/Zk-ReUseIt/',
      image: 'zk.png'
    },
  ];

  const handleArticleClick = (link) => {
    console.log('Navigating to:', link);
    window.location.href = link;
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {articles.map((article, index) => (
         <div
         key={index}
         onClick={() => handleArticleClick(article.link)}
         className={`relative overflow-hidden ${
           darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
         } rounded-xl p-6 border transition-all duration-300 hover:shadow-xl cursor-pointer`}
       >
         {/* Background Image */}
         <div
           className="absolute inset-0 z-0"
           style={{
             backgroundImage: `url(${article.image})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             opacity: 0.1, 
             filter: 'blur(1px)', 
           }}
         />
       
         {/* Content */}
         <div className="relative z-10">
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
                     {article.date}
                   </span>
                 </div>
               </div>
             </div>
             <ExternalLink className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'} ml-4`} />
           </div>
           <div className="flex flex-wrap gap-2">
             {article.TechStacks.map((tag, tagIndex) => (
               <span
                 key={tagIndex}
                 className={`px-3 py-1 rounded-full text-xs font-medium ${
                   darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                 }`}
               >
                 {tag}
               </span>
             ))}
           </div>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
