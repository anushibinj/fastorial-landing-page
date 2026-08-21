import { Separator } from '@/components/ui/separator';
import { YouTubePlaylistEmbed } from '@/components/site/YouTubePlaylistEmbed';
import { content } from '@/lib/content';

export function Projects() {
  const { current, past, upcoming } = content.projects;

  return (
    <section id="projects" className="scroll-mt-12 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[980px] px-6">
        <h2 className="text-center text-[32px] font-semibold tracking-[-0.025em] text-foreground md:text-[48px]">
          Live projects.
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-center text-[19px] leading-relaxed text-muted-foreground">
          Built in public as daily live streams. Watch the work as it happens, then catch the playlist.
        </p>

        <div className="mt-16 overflow-hidden rounded-[18px] bg-foreground text-background">
          <div className="px-8 py-10 md:px-12 md:py-12">
            <p className="text-[12px] text-white/55">{current.status}</p>
            <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.02em] md:text-[40px]">
              {current.name}
            </h3>
            {current.description && (
              <p className="mt-3 max-w-[46ch] text-[17px] leading-relaxed text-white/70">
                {current.description}
              </p>
            )}
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-[17px] text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Watch playlist ›
            </a>
          </div>
          <YouTubePlaylistEmbed
            url={current.url}
            title={current.name}
            className="aspect-[16/9] w-full"
          />
        </div>

        <div className="mt-4 space-y-4">
          {past.map((project) => (
            <div
              key={project.name}
              className="grid overflow-hidden rounded-[18px] bg-background md:grid-cols-[1fr_minmax(0,420px)]"
            >
              <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                <p className="text-[12px] text-muted-foreground">{project.status}</p>
                <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] md:text-[28px]">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="mt-3 max-w-[42ch] text-[17px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit text-[17px] text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Watch playlist ›
                </a>
              </div>
              <YouTubePlaylistEmbed
                url={project.url}
                title={project.name}
                fit="cover"
                className="min-h-[220px] self-stretch"
              />
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-center text-[28px] font-semibold tracking-[-0.02em] text-foreground md:text-[32px]">
          Next up.
        </h3>
        <ul className="mx-auto mt-10 max-w-[720px]">
          {upcoming.map((project, index) => (
            <li key={project.name}>
              {index > 0 && <Separator />}
              <div className="py-8">
                <p className="text-[12px] text-muted-foreground">{project.status}</p>
                <h4 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-foreground">
                  {project.name}
                </h4>
                <p className="mt-2 max-w-[55ch] text-[17px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
