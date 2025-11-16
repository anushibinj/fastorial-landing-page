import { ExternalLink, PlayCircle } from 'lucide-react';

interface Playlist {
  id: number;
  title: string;
  description: string;
  url: string;
  level: string;
  thumbnail: string;
}

interface PlaylistsContentProps {
  playlists: Playlist[];
}

export default function PlaylistsContent({ playlists }: PlaylistsContentProps) {
  const levelColors: Record<string, string> = {
    'Beginner': 'from-green-500 to-emerald-500',
    'Advanced': 'from-purple-500 to-pink-500',
    'All Levels': 'from-blue-500 to-cyan-500',
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          YouTube Playlists
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Explore curated lessons designed to take you from basics to mastery
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {playlists.map((playlist, index) => (
          <a
            href={playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            key={playlist.id}
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 block"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={playlist.thumbnail}
                alt={playlist.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${levelColors[playlist.level] || 'from-blue-500 to-cyan-500'} text-white text-xs font-semibold rounded-full`}>
                {playlist.level}
              </div>
            </div>

            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {playlist.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {playlist.description}
              </p>

              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group/link">
                Watch Playlist
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
        ))}
      </div>
    </div>
  );
}
