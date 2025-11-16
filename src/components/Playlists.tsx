import { lazy, Suspense } from 'react';

const PlaylistsContent = lazy(() => import('./PlaylistsContent'));

interface Playlist {
  id: number;
  title: string;
  description: string;
  url: string;
  level: string;
  thumbnail: string;
}

interface PlaylistsProps {
  playlists: Playlist[];
}

export default function Playlists({ playlists }: PlaylistsProps) {
  return (
    <section id="playlists" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-700 rounded w-1/3 mx-auto mb-16"></div>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-64 bg-slate-700 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        }>
          <PlaylistsContent playlists={playlists} />
        </Suspense>
      </div>
    </section>
  );
}
