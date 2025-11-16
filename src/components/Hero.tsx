import { lazy, Suspense } from 'react';
import { Play, Users } from 'lucide-react';

const HeroContent = lazy(() => import('./HeroContent'));

interface HeroProps {
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

export default function Hero({ data, onPrimaryCTA, onSecondaryCTA }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2di04aDhWMGgtOHY4aC04djhoOHptMCAwdjhoOHYtOGgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <Suspense fallback={
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-pulse">
            <div className="h-16 bg-slate-700 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      }>
        <HeroContent
          data={data}
          onPrimaryCTA={onPrimaryCTA}
          onSecondaryCTA={onSecondaryCTA}
        />
      </Suspense>
    </section>
  );
}
