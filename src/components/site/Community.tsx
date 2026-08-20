import { Button } from '@/components/ui/button';
import { TextLink } from '@/components/site/TextLink';
import { content } from '@/lib/content';
import { externalHref } from '@/lib/utils';

const platforms = [
  { name: 'YouTube', href: content.social.youtube, detail: 'Weekly tutorials' },
  { name: 'Discord', href: content.social.discord, detail: 'Developer chat' },
  { name: 'WhatsApp', href: content.social.whatsapp, detail: 'Instant updates' },
  { name: 'Telegram', href: content.social.telegram, detail: 'Channel posts' },
  { name: 'LinkedIn', href: content.social.linkedIn, detail: 'Professional updates' },
];

export function Community() {
  return (
    <section id="community" className="bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-[980px] px-6 text-center">
        <h2 className="text-[32px] font-semibold tracking-[-0.025em] md:text-[48px]">
          Learn with other builders.
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-[19px] leading-relaxed text-white/70">
          Pick the room you already live in. Same person, same lessons, no extra product to install.
        </p>

        <ul className="mx-auto mt-14 grid max-w-[720px] gap-y-8 text-left sm:grid-cols-2">
          {platforms.map((platform) => (
            <li key={platform.name} className="px-4">
              <p className="text-[21px] font-semibold tracking-[-0.02em]">{platform.name}</p>
              <p className="mt-1 text-[15px] text-white/55">{platform.detail}</p>
              <TextLink href={externalHref(platform.href)} external className="mt-3">
                Join
              </TextLink>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <Button
            asChild
            className="bg-background text-foreground hover:bg-white/90"
          >
            <a href={content.social.youtube} target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
