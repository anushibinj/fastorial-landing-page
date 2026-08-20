import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { content } from '@/lib/content';

export function Playlists() {
  const [featured, ...rest] = content.playlists;

  return (
    <section id="playlists" className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[980px] px-6">
        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[18px] bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={featured.thumbnail}
              alt=""
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="px-8 py-8 text-left md:px-12 md:py-10">
              <p className="text-[12px] text-muted-foreground">{featured.level}</p>
              <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-foreground md:text-[40px]">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-[52ch] text-[17px] leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <span className="mt-5 inline-flex text-[17px] text-primary group-hover:underline">
                Watch playlist ›
              </span>
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
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit bg-background">
                        {playlist.level}
                      </Badge>
                      <CardTitle className="text-[24px] md:text-[28px]">{playlist.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-[17px] leading-relaxed text-muted-foreground">
                        {playlist.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <span className="text-[17px] text-primary">Watch playlist ›</span>
                    </CardFooter>
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
