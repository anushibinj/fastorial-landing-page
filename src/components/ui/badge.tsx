import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/* eslint-disable react-refresh/only-export-components -- shadcn variant export */

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium tracking-[-0.01em]',
  {
    variants: {
      variant: {
        default: 'bg-foreground text-background',
        secondary: 'bg-background text-foreground',
        outline: 'border border-border text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
