import { SiteHeader } from '@/components/site/SiteHeader';
import { Hero } from '@/components/site/Hero';
import { Playlists } from '@/components/site/Playlists';
import { Projects } from '@/components/site/Projects';
import { Courses } from '@/components/site/Courses';
import { About } from '@/components/site/About';
import { Community } from '@/components/site/Community';
import { SiteFooter } from '@/components/site/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#playlists"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-16 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2"
      >
        Skip to playlists
      </a>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Playlists />
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
