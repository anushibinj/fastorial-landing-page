import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TextLink } from '@/components/site/TextLink';
import { bioParagraphs, content } from '@/lib/content';

export function About() {
  const paragraphs = bioParagraphs(content.about.bio);
  const initials = content.about.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

  return (
    <section id="about" className="scroll-mt-12 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[980px] px-6">
        <h2 className="text-[32px] font-semibold tracking-[-0.025em] text-foreground md:text-[48px]">
          About.
        </h2>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-[minmax(0,280px)_1fr] md:gap-20">
          <Avatar className="mx-auto h-[220px] w-[220px] md:h-[280px] md:w-[280px]">
            <AvatarImage src={content.about.profilePic} alt={content.about.name} />
            <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="text-[32px] font-semibold tracking-[-0.025em] text-foreground md:text-[40px]">
              {content.about.name}
            </h3>
            <p className="mt-2 text-[19px] text-muted-foreground">{content.about.role}</p>
            <div className="mt-6 space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="max-w-[58ch] text-[17px] leading-relaxed text-foreground/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <TextLink href={content.about.linkedIn} external>
                Follow on LinkedIn
              </TextLink>
            </div>
            <p className="mt-10 max-w-[50ch] text-[14px] leading-relaxed text-muted-foreground">
              {content.stats.map((stat) => `${stat.value} ${stat.label.toLowerCase()}`).join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
