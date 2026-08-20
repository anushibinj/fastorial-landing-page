import { Card, CardContent } from '@/components/ui/card';
import { content } from '@/lib/content';

export function Playlists() {
  const [featured, ...rest] = content.playlists;

  return (
    <section id="playlists" className="scroll-mt-12 bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[980px] px-6">
        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid overflow-hidden rounded-[18px] bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col justify-center px-8 py-12 text-left md:px-14 md:py-16">
              <p className="text-[12px] text-white/55">{featured.level}</p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[40px]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-white/70">
                {featured.description}
              </p>
              <span className="mt-6 inline-flex text-[17px] text-primary group-hover:underline">
                Watch playlist ›
              </span>
            </div>
            <div className="relative min-h-[220px] bg-[#000]">
              <img
                src={featured.thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
            </div>
          </a>
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
                  <a
                    href={playlist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <img
                      src={playlist.thumbnail}
                      alt=""
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <CardContent className="flex flex-1 flex-col px-8 pb-8 pt-7">
                      <p className="text-[12px] text-muted-foreground">{playlist.level}</p>
                      <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] md:text-[28px]">
                        {playlist.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[17px] leading-relaxed text-muted-foreground">
                        {playlist.description}
                      </p>
                      <span className="mt-5 text-[17px] text-primary">Watch playlist ›</span>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
