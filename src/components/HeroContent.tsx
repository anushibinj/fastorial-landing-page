import { Play, Users } from 'lucide-react';

interface HeroContentProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export default function HeroContent({ data, onPrimaryCTA, onSecondaryCTA }: HeroContentProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight">
          {data.title}
          <span className="block text-gradient from-blue-400 via-cyan-400 to-teal-400 mt-2">
            {data.subtitle}
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onPrimaryCTA}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[240px] justify-center"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {data.cta.primary}
          </button>

          <button
            onClick={onSecondaryCTA}
            className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[240px] justify-center"
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {data.cta.secondary}
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-slate-400 text-sm">Students Taught</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400 text-sm">Video Tutorials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5K+</div>
            <div className="text-slate-400 text-sm">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400 text-sm">Free Content</div>
          </div>
        </div>
      </div>
    </div>
  );
}
