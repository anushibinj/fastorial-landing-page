import { Button } from '@/components/ui/button';
import { TextLink } from '@/components/site/TextLink';
import { content } from '@/lib/content';

export function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[980px] px-6 pb-16 pt-16 text-center md:pb-20 md:pt-28">
        <h1 className="text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[56px] lg:text-[64px]">
          {content.hero.title}.
          <span className="block text-muted-foreground">{content.hero.subtitle}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[42ch] text-[19px] leading-relaxed tracking-[-0.022em] text-muted-foreground md:text-[21px]">
          {content.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button asChild>
            <a href={content.social.youtube} target="_blank" rel="noopener noreferrer">
              {content.hero.cta.primary}
            </a>
          </Button>
          <TextLink href="#community">{content.hero.cta.secondary}</TextLink>
        </div>
      </div>
    </section>
  );
}
