import { LineupCarousel } from '@/components/site/LineupCarousel';
import { content } from '@/lib/content';
import { optionalHref } from '@/lib/utils';

export function Courses() {
  return (
    <LineupCarousel
      id="courses"
      className="bg-background"
      heading="Courses."
      lede="Recorded series you can start anytime. Follow one topic from the first lesson to the last."
      label="Courses"
      items={content.playlists.map((playlist) => ({
        id: String(playlist.id),
        kicker: playlist.level,
        title: playlist.title,
        description: playlist.description,
        status: playlist.status,
        url: playlist.url,
        githubUrl: optionalHref(playlist.githubUrl),
      }))}
    />
  );
}
