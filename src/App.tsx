import { lazy, Suspense, useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Playlists from './components/Playlists';
import Courses from './components/Courses';
import Community from './components/Community';
import Footer from './components/Footer';
import contentData from './data/content.json';

function App() {
  const handlePrimaryCTA = () => {
    window.open(contentData.social.youtube, '_blank');
  };

  const handleSecondaryCTA = () => {
    const communitySection = document.getElementById('community');
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Hero
        data={contentData.hero}
        onPrimaryCTA={handlePrimaryCTA}
        onSecondaryCTA={handleSecondaryCTA}
      />

      <About data={contentData.about} />

      <Playlists playlists={contentData.playlists} />

      <Courses courses={contentData.courses} />

      <Community social={contentData.social} />

      <Footer social={contentData.social} />
    </div>
  );
}

export default App;
