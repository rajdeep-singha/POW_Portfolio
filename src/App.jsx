import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Sidebar from './components/Sidebar';
import NavigationTabs from './components/NavigationTabs';
import WorkSection from './components/WorkSection';
import ResumeSection from './components/ResumeSection';
import CollectionsSection from './components/CollectionsSection';
import ArticlesSection from './components/ArticelsSection';
import TestimonialsSection from './components/TestimonialsSection';
import HireMeAssistant from './smallComponents/HireMeAssistant';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import GallerySection from './smallComponents/GallerySection';

function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [darkMode, setDarkMode] = useState(true);


  const renderTabContent = () => {
    switch (activeTab) {
      case 'HOME':
        return <WorkSection darkMode={darkMode} />;
      case 'EXPERIENCE':
        return <ResumeSection darkMode={darkMode} />;
      case 'COLLECTIONS':
        return <CollectionsSection darkMode={darkMode} />;
      case 'PROJECTS':
        return <ArticlesSection darkMode={darkMode} />;
      case 'TESTIMONIALS':
        return <TestimonialsSection darkMode={darkMode} />;
      case 'GALLERY':
        return <GallerySection darkMode={darkMode} />;
      default:
        return <WorkSection darkMode={darkMode} />;
    }
  };





  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />


<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Main Content */}
  <div className="lg:col-span-2 space-y-8">
    <ProfileSection darkMode={darkMode} />
    <NavigationTabs 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      darkMode={darkMode} 
    />
    {renderTabContent()}
  </div>

  {/* Sidebar */}
  <Sidebar darkMode={darkMode} />
 
        </div>
        <HireMeAssistant />
      </div>
      <SpeedInsights />
      <Analytics />

</div>
  )
}

export default App 
