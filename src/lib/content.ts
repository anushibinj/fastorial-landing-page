import raw from '@/data/content.json';

export type Playlist = {
  id: number;
  title: string;
  description: string;
  url: string;
  level: string;
};

export type Course = {
  id: number;
  title: string;
  description: string;
  status: string;
  startDate: string;
};

export type LiveProject = {
  name: string;
  status: string;
  description?: string;
  url?: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SiteContent = {
  site: {
    title: string;
    description: string;
    keywords: string;
    author: string;
    url: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  about: {
    title: string;
    name: string;
    profilePic: string;
    role: string;
    bio: string;
    linkedIn: string;
  };
  playlists: Playlist[];
  projects: {
    current: LiveProject & { url: string };
    past: Array<LiveProject & { url: string }>;
    upcoming: LiveProject[];
  };
  courses: Course[];
  social: {
    youtube: string;
    linkedIn: string;
    discord: string;
    whatsapp: string;
    telegram: string;
    twitch: string;
  };
  stats: Stat[];
};

export const content = raw as SiteContent;

export function bioParagraphs(bio: string) {
  return bio
    .split(/<\/br\s*\/?>|<br\s*\/?>|\n\n/i)
    .map((part) => part.replace(/<[^>]+>/g, '').trim())
    .filter(Boolean);
}
