import { Linkedin } from 'lucide-react';

interface AboutContentProps {
  data: {
    title: string;
    name: string;
    role: string;
    bio: string;
    linkedIn: string;
  };
}

export default function AboutContent({ data }: AboutContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          {data.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-200">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-5xl lg:text-6xl font-bold shadow-lg">
              {data.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
              {data.name}
            </h3>
            <p className="text-lg text-blue-600 font-semibold mb-4">
              {data.role}
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              {data.bio}
            </p>
            <a
              href={data.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
