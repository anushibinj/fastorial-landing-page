import { useEffect } from 'react';

import { SiteHeader } from '@/components/site/SiteHeader';
import { Hero } from '@/components/site/Hero';
import { Projects } from '@/components/site/Projects';
import { Courses } from '@/components/site/Courses';
import { About } from '@/components/site/About';
import { Community } from '@/components/site/Community';
import { SiteFooter } from '@/components/site/SiteFooter';

function scrollToHash() {
  const id = window.location.hash.replace(/^#/, '');
  if (!id) return;
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ block: 'start' });
  });
}

function App() {
  useEffect(() => {
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-16 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2"
      >
        Skip to projects
      </a>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Projects />
        <Courses />
        <About />
        <Community />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
