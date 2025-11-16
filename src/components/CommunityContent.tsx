import { Youtube, Linkedin, MessageCircle, MessageSquare } from 'lucide-react';

interface CommunityContentProps {
  social: {
    youtube: string;
    linkedIn: string;
    discord: string;
    whatsapp: string;
  };
}

export default function CommunityContent({ social }: CommunityContentProps) {
  const platforms = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: social.youtube,
      description: 'Subscribe for weekly tutorials',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      hoverColor: 'hover:border-red-500/50',
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      url: social.discord,
      description: 'Join our developer community',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      hoverColor: 'hover:border-indigo-500/50',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: social.whatsapp,
      description: 'Get instant updates',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      hoverColor: 'hover:border-green-500/50',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: social.linkedIn,
      description: 'Connect professionally',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverColor: 'hover:border-blue-500/50',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Join the Community
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Connect with thousands of developers learning and building together
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${platform.bgColor} backdrop-blur-sm rounded-xl p-8 border ${platform.borderColor} ${platform.hoverColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {platform.description}
                  </p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 lg:p-12 text-center shadow-2xl">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          Ready to Level Up Your Skills?
        </h3>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe and hit the bell icon on YouTube to never miss a tutorial. Join our community and be part of developers who code together.
        </p>
        <a
          href={social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
        >
          <Youtube className="w-6 h-6" />
          Subscribe Now
        </a>
      </div>
    </div>
  );
}
