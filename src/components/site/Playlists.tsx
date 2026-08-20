import { Card, CardContent } from '@/components/ui/card';
import { YouTubePlaylistEmbed } from '@/components/site/YouTubePlaylistEmbed';
import { content } from '@/lib/content';

export function Playlists() {
  const [featured, ...rest] = content.playlists;

  return (
    <section id="playlists" className="scroll-mt-12 bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[980px] px-6">
        {featured && (
          <div className="grid overflow-hidden rounded-[18px] bg-foreground text-background md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center px-8 py-12 text-left md:px-14 md:py-16">
              <p className="text-[12px] text-white/55">{featured.level}</p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[40px]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-white/70">
                {featured.description}
              </p>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit text-[17px] text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Watch playlist ›
              </a>
            </div>
            <YouTubePlaylistEmbed
              url={featured.url}
              title={featured.title}
              className="relative min-h-[220px]"
              iframeClassName="absolute inset-0"
            />
          </div>
        )}

        {rest.length > 0 && (
          <>
            <h2 className="mt-20 text-center text-[32px] font-semibold tracking-[-0.025em] text-foreground md:mt-28 md:text-[48px]">
              More to watch.
            </h2>
            <p className="mx-auto mt-4 max-w-[40ch] text-center text-[19px] leading-relaxed text-muted-foreground">
              Curated series from fundamentals to the work you will actually ship.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {rest.map((playlist) => (
                <Card key={playlist.id} className="flex flex-col overflow-hidden">
                  <YouTubePlaylistEmbed
                    url={playlist.url}
                    title={playlist.title}
                    className="relative aspect-[16/9] w-full"
                    iframeClassName="absolute inset-0"
                  />
                  <CardContent className="flex flex-1 flex-col px-8 pb-8 pt-7">
                    <p className="text-[12px] text-muted-foreground">{playlist.level}</p>
                    <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] md:text-[28px]">
                      {playlist.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[17px] leading-relaxed text-muted-foreground">
                      {playlist.description}
                    </p>
                    <a
                      href={playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 w-fit text-[17px] text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Watch playlist ›
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
