import { cn, playlistIdFromUrl } from '@/lib/utils';

type YouTubePlaylistEmbedProps = {
  url: string;
  title: string;
  className?: string;
  fit?: 'fill' | 'cover';
};

export function YouTubePlaylistEmbed({
  url,
  title,
  className,
  fit = 'fill',
}: YouTubePlaylistEmbedProps) {
  const listId = playlistIdFromUrl(url);

  if (!listId) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('flex items-center justify-center bg-black text-[17px] text-primary', className)}
      >
        Open playlist ›
      </a>
    );
  }

  return (
    <div className={cn('relative overflow-hidden bg-black', className)}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(listId)}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className={cn(
          'border-0',
          fit === 'cover'
            ? 'absolute left-1/2 top-1/2 aspect-video h-auto min-h-full w-auto min-w-full max-w-none -translate-x-1/2 -translate-y-1/2'
            : 'absolute inset-0 h-full w-full',
        )}
      />
    </div>
  );
}
