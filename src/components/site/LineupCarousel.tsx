import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { YouTubePlaylistEmbed } from '@/components/site/YouTubePlaylistEmbed';
import { cn, externalHref, optionalHref } from '@/lib/utils';

export type LineupItem = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  status?: string;
  url?: string;
  githubUrl?: string;
  image?: string;
  ctaLabel?: string;
};

function isCurrentItem(item: Pick<LineupItem, 'status'>) {
  return item.status === 'Current';
}

type LineupCarouselProps = {
  id?: string;
  heading: string;
  lede?: string;
  label: string;
  items: LineupItem[];
  className?: string;
};

export function LineupCarousel({
  id,
  heading,
  lede,
  label,
  items,
  className,
}: LineupCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [selected, setSelected] = useState<LineupItem | null>(null);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 12);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 12);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener('scroll', updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      observer.disconnect();
    };
  }, [items.length, updateEdges]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    const card = el?.querySelector<HTMLElement>('[data-lineup-card]');
    if (!el || !card) return;
    const styles = getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 20;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <section id={id} className={cn('py-24 md:py-32', className)}>
      <div className="mx-auto max-w-[980px] px-6">
        <h2 className="text-[32px] font-semibold tracking-[-0.025em] text-foreground md:text-[48px]">
          {heading}
        </h2>
        {lede && (
          <p className="mt-3 max-w-[42ch] text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
            {lede}
          </p>
        )}
      </div>

      <div
        ref={scrollerRef}
        className="mt-10 overflow-x-auto overscroll-x-contain scrollbar-none md:mx-auto md:max-w-[980px]"
        role="list"
        aria-label={label}
        tabIndex={0}
      >
        <div className="flex w-max snap-x snap-mandatory items-stretch gap-5 px-6">
          {items.map((item) => (
            <LineupCard
              key={item.id}
              item={item}
              onOpenDetails={() => setSelected(item)}
            />
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className="mx-auto mt-8 flex max-w-[980px] justify-end gap-3 px-6">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-[#e8e8ed] text-foreground hover:bg-[#d2d2d7] disabled:opacity-30"
            aria-label={`Previous ${label}`}
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft className="h-[18px] w-[18px]" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-[#e8e8ed] text-foreground hover:bg-[#d2d2d7] disabled:opacity-30"
            aria-label={`Next ${label}`}
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight className="h-[18px] w-[18px]" />
          </Button>
        </div>
      )}

      <DetailsDialog
        item={selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
}

function LineupCard({
  item,
  onOpenDetails,
}: {
  item: LineupItem;
  onOpenDetails: () => void;
}) {
  const githubUrl = optionalHref(item.githubUrl);
  const isCurrent = isCurrentItem(item);

  return (
    <article
      data-lineup-card
      role="listitem"
      className={cn(
        'flex h-full w-[min(78vw,300px)] min-w-0 shrink-0 snap-start flex-col',
        isCurrent && 'rounded-[28px] bg-black px-4 pb-5 pt-4 text-white',
      )}
    >
      <div
        className={cn(
          'aspect-[4/3] overflow-hidden rounded-[28px]',
          isCurrent ? 'bg-black' : 'bg-muted',
        )}
      >
        <LineupMedia item={item} featured={isCurrent} />
      </div>
      <p
        className={cn(
          'mt-5 h-4 truncate text-[12px] leading-4',
          isCurrent ? 'text-white/70' : 'text-muted-foreground',
        )}
      >
        {item.kicker}
      </p>
      <h3
        className={cn(
          'mt-1 block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[21px] font-semibold leading-[26px] tracking-[-0.02em]',
          isCurrent ? 'text-white' : 'text-foreground',
        )}
      >
        {item.title}
      </h3>
      <button
        type="button"
        onClick={onOpenDetails}
        className={cn(
          'mt-1 flex h-[4.4rem] items-start overflow-hidden p-0 text-left text-[14px] leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          isCurrent
            ? 'text-white/80 hover:text-white'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        <span className="line-clamp-3 w-full">{item.description}</span>
      </button>
      <div className="mt-4 flex h-11 items-center gap-x-5">
        <div className="flex items-center gap-2">
          {item.url ? (
            <Button asChild size="sm">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.ctaLabel ?? 'Watch'}
              </a>
            </Button>
          ) : (
            <span
              className={cn(
                'text-[14px]',
                isCurrent ? 'text-white/70' : 'text-muted-foreground',
              )}
            >
              Coming soon
            </span>
          )}
          {githubUrl && item.url && (
            <GithubIconButton
              href={githubUrl}
              title={item.title}
              className={isCurrent ? 'border-white/30 text-white hover:bg-white/10' : undefined}
            />
          )}
        </div>
        <button
          type="button"
          onClick={onOpenDetails}
          className="inline-flex items-center gap-1 text-[14px] tracking-[-0.022em] text-primary hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          More details
          <span aria-hidden className="translate-y-px text-[20px] font-light leading-none">
            ›
          </span>
        </button>
      </div>
    </article>
  );
}

function DetailsDialog({
  item,
  onOpenChange,
}: {
  item: LineupItem | null;
  onOpenChange: (open: boolean) => void;
}) {
  const githubUrl = optionalHref(item?.githubUrl);

  return (
    <Dialog open={Boolean(item)} onOpenChange={onOpenChange}>
      {item && (
        <DialogContent>
          <div className="aspect-[16/9] overflow-hidden rounded-[22px] bg-muted">
            <LineupMedia item={item} featured={false} interactive />
          </div>
          <p className="mt-6 text-[12px] text-muted-foreground">{item.kicker}</p>
          <DialogTitle className="mt-1">{item.title}</DialogTitle>
          <DialogDescription className="mt-4 text-foreground/90">
            {item.description}
          </DialogDescription>
          {githubUrl && (
            <a
              href={externalHref(githubUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex max-w-full items-center gap-2 text-[14px] tracking-[-0.022em] text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Github className="h-5 w-5 shrink-0" aria-hidden />
              <span className="min-w-0 break-all">{githubUrl}</span>
            </a>
          )}
          {item.url && (
            <div className="mt-8">
              <Button asChild>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.ctaLabel ?? 'Watch'}
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}

function GithubIconButton({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) {
  return (
    <Button asChild size="icon" variant="outline" className={cn('h-9 w-9 shrink-0', className)}>
      <a
        href={externalHref(href)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} on GitHub`}
      >
        <Github className="h-4 w-4" />
      </a>
    </Button>
  );
}

function LineupMedia({
  item,
  featured,
  interactive = false,
}: {
  item: LineupItem;
  featured: boolean;
  interactive?: boolean;
}) {
  if (item.image) {
    return <img src={item.image} alt="" className="h-full w-full object-cover" />;
  }

  if (item.url) {
    return (
      <YouTubePlaylistEmbed
        url={item.url}
        title={item.title}
        fit="cover"
        className={cn('h-full w-full', !interactive && 'pointer-events-none')}
      />
    );
  }

  return <PlaceholderMark title={item.title} featured={featured} />;
}

function PlaceholderMark({ title, featured }: { title: string; featured: boolean }) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center px-6 text-center',
        featured ? 'text-white' : 'text-foreground',
      )}
    >
      <span className="line-clamp-3 text-[28px] font-semibold tracking-[-0.03em]">{title}</span>
    </div>
  );
}
