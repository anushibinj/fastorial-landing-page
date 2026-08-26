import { Separator } from '@/components/ui/separator';
import { content } from '@/lib/content';
import { externalHref } from '@/lib/utils';

const footerLinks = [
  { label: 'YouTube', href: content.social.youtube },
  { label: 'Instagram', href: content.social.instagram },
  { label: 'Twitch', href: content.social.twitch },
  { label: 'LinkedIn', href: content.social.linkedIn },
  { label: 'Discord', href: content.social.discord },
  { label: 'WhatsApp', href: content.social.whatsapp },
  { label: 'Telegram', href: content.social.telegram },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 text-[12px] leading-relaxed text-muted-foreground">
      <div className="mx-auto max-w-[980px] px-6">
        <p>
          Fastorial is a learning channel by {content.about.name}. Tutorials stay free.
        </p>
        <Separator className="my-6" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Social">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={externalHref(link.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p>© {year} Fastorial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
