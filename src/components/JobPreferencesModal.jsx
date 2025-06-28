import React from 'react';

const JobPreferencesModal = ({ darkMode, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className={`p-6 rounded-lg shadow-lg w-full max-w-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Job Preferences</h2>
          <button onClick={onClose} className="text-sm px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600">X</button>
        </div>

        <ul className="space-y-2">
          <li
           onClick={()=> window.open("https://drive.google.com/file/d/14UfNyyohBQJVU6MQ2T5rOLXx_-lWUqKf/view", "_blank",
            "noopener,noreferrer"
        )}
        className="cursor-pointer hover:underline"
          >Fullstack WEB3 Developer </li>
          <li
            onClick={()=> window.open("https://www.notion.so/Proof-of-Work-Rajdeep-b9a610a0d6cc48fdadde76c3b421772b", "_blank",
                "noopener,noreferrer"
            )}
            className="cursor-pointer hover:underline">
            Community Manager  </li>

          <li>Developer Relations</li>
          <li>🏢 Company : Startup / Mid-level</li>
        </ul>
      </div>
    </div>
  );
};

export default JobPreferencesModal;
