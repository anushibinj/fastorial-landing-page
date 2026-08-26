import { LineupCarousel } from '@/components/site/LineupCarousel';
import { content } from '@/lib/content';

export function Playlists() {
  return (
    <LineupCarousel
      id="playlists"
      className="bg-background"
      heading="Playlists."
      lede="Curated series from fundamentals to the work you will actually ship."
      label="Playlists"
      items={content.playlists.map((playlist) => ({
        id: String(playlist.id),
        kicker: playlist.level,
        title: playlist.title,
        description: playlist.description,
        url: playlist.url,
      }))}
    />
  );
}
