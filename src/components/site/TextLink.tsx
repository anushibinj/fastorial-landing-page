import type { AnchorHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean;
};

export function TextLink({ className, children, external, ...props }: TextLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-1 text-[17px] leading-snug tracking-[-0.022em] text-primary transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
      <span aria-hidden className="translate-y-px text-[20px] font-light leading-none">
        ›
      </span>
    </a>
  );
}
