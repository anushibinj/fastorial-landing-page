import { lazy, Suspense } from 'react';
import { Linkedin } from 'lucide-react';

const AboutContent = lazy(() => import('./AboutContent'));

interface AboutProps {
  data: {
    title: string;
    name: string;
    role: string;
    bio: string;
    linkedIn: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-200 rounded w-1/3 mb-8"></div>
              <div className="h-4 bg-slate-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            </div>
          </div>
        }>
          <AboutContent data={data} />
        </Suspense>
      </div>
    </section>
  );
}
