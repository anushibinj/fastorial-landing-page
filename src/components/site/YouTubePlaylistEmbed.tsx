import { cn, playlistIdFromUrl } from '@/lib/utils';

type YouTubePlaylistEmbedProps = {
  url: string;
  title: string;
  className?: string;
  iframeClassName?: string;
};

export function YouTubePlaylistEmbed({
  url,
  title,
  className,
  iframeClassName,
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
    <div className={cn('overflow-hidden bg-black', className)}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(listId)}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className={cn('h-full w-full border-0', iframeClassName)}
      />
    </div>
  );
}
