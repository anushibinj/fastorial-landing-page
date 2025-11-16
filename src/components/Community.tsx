import { lazy, Suspense } from 'react';

const CommunityContent = lazy(() => import('./CommunityContent'));

interface CommunityProps {
  social: {
    youtube: string;
    linkedIn: string;
    discord: string;
    whatsapp: string;
  };
}

export default function Community({ social }: CommunityProps) {
  return (
    <section id="community" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-700 rounded w-1/3 mx-auto mb-16"></div>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-32 bg-slate-700 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        }>
          <CommunityContent social={social} />
        </Suspense>
      </div>
    </section>
  );
}
