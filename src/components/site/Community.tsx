import { Button } from '@/components/ui/button';
import { TextLink } from '@/components/site/TextLink';
import { content } from '@/lib/content';
import { externalHref } from '@/lib/utils';

const platforms = [
  { name: 'YouTube', href: content.social.youtube },
  { name: 'Instagram', href: content.social.instagram },
  { name: 'Twitch', href: content.social.twitch },
  { name: 'Discord', href: content.social.discord },
  { name: 'WhatsApp', href: content.social.whatsapp },
  { name: 'Telegram', href: content.social.telegram },
  { name: 'LinkedIn', href: content.social.linkedIn },
];

export function Community() {
  return (
    <section id="community" className="scroll-mt-12 bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-[980px] px-6 text-center">
        <h2 className="text-[32px] font-semibold tracking-[-0.025em] md:text-[48px]">
          Learn with other builders.
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-[19px] leading-relaxed text-white/70">
          Pick the room you already live in. Same person, same lessons.
        </p>

        <ul className="mx-auto mt-14 flex max-w-[640px] flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {platforms.map((platform) => (
            <li key={platform.name}>
              <TextLink href={externalHref(platform.href)} external className="text-[21px]">
                {platform.name}
              </TextLink>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <Button asChild className="bg-background text-foreground hover:bg-white/90">
            <a href={content.social.youtube} target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
