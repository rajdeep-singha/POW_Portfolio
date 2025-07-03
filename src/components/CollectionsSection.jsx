import React from 'react';
import { PlayCircle, BookOpen, Video, Mic } from 'lucide-react';

const CollectionsSection = ({ darkMode }) => {
  const books = [
    {
      title: 'Jonathan Livingston Seagull',
      author: 'Richard Bach',
      image: '/jonathan.webp'
    },
    {
      title: 'The Compound Effect',
      author: 'Darren Hardy',
      image: '/compound.webp'
    },
    {
      title: 'The Art of Being Alone',
      author: 'Renuka Gavrani',
      image: 'alone.webp'
    },
    {
      title: 'Who Moved My Cheese?',
      author: 'Spencer Johnson',
      image: 'cheese.webp'
    },
    {
      title: 'Wings of Fire',
      author: 'A.P.J. Abdul Kalam',
      image: 'wings.webp'
    }
  ];

  const podcasts = [
    {
      title: 'Cursor Team: Future of AI',
      image: 'cursor.png',
      link: 'https://youtu.be/oFfVt3S51T4?si=eNCdK2z6Ui0hm5Yk'
    },
    {
      title: '40-Minute Intense Tech Talk',
      image: 'remotejob.png',
      link: 'https://youtu.be/UaGJdSUA_RM?si=R9ZX9aCZwIKYhN5t'
    },
    {
      title: 'Psychology of Money & Happiness',
      image: 'money.png',
      link: 'https://youtu.be/z5W74QC3v2I?si=PVunEskQHQC3KMV2'
    }
  ];

  // const videos = [
  //   {
  //     title: '6 SECRET STUDY TIPS TO SCORE HIGHEST IN EXAMS',
  //     image: '/videos/tips.jpg',
  //     link: 'https://www.youtube.com/watch?v=xyz4'
  //   },
  //   {
  //     title: 'Final Exam Week of a Medical Student',
  //     image: '/videos/exam.jpg',
  //     link: 'https://www.youtube.com/watch?v=xyz5'
  //   }
  // ];

  const Section = ({ title, icon: Icon, items, isVideo = false }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className={`text-xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <Icon className="w-5 h-5" />
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => item.link && window.open(item.link, '_blank')}
            className={`text-center space-y-2 cursor-pointer group`}
          >
            <div
              className={`relative aspect-[2/3] overflow-hidden rounded-lg shadow-md ${
                !item.link ? 'pointer-events-none' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  !isVideo ? 'group-hover:scale-105' : ''
                }`}
              />
              {isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
              )}
            </div>
            <div>
              <h4 className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h4>
              {item.author && (
                <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.author}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      <Section title="Books" icon={BookOpen} items={books} />
      <Section title="Podcasts" icon={Mic} items={podcasts} isVideo />
      {/* <Section title="Must Watch Videos" icon={Video} items={videos} isVideo /> */}
    </div>
    
  );
};

export default CollectionsSection;
