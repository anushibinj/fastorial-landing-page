import { Heart, Code } from 'lucide-react';

interface FooterProps {
  social: {
    youtube: string;
    linkedIn: string;
  };
}

export default function Footer({ social }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-center md:text-left">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-bold text-white">Fastorial</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by Anu Shibin</span>
            </div>

            <div className="text-sm text-center md:text-right">
              <p>&copy; {currentYear} Fastorial. All rights reserved.</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
            <p className="text-slate-500">
              Empowering developers to learn fast and build smarter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
