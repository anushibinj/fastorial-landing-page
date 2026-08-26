import { useState } from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { content } from '@/lib/content';

const navItems = [
  { label: 'Projects', id: 'projects' },
  { label: 'Courses', id: 'courses' },
  { label: 'About', id: 'about' },
  { label: 'Community', id: 'community' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-12 border-b border-white/[0.18] bg-[#1d1d1f]/80 text-white backdrop-blur-[20px]">
      <div className="mx-auto grid h-full max-w-[980px] grid-cols-[1fr_auto] items-center px-4 md:grid-cols-[1fr_auto_1fr] md:px-6">
        <a
          href="#top"
          className="justify-self-start text-[19px] font-semibold tracking-[-0.03em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Fastorial
        </a>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Button key={item.id} variant="nav" size="nav" asChild>
              <a href={`#${item.id}`}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <div className="hidden justify-self-end md:block">
          <Button variant="nav" size="nav" asChild>
            <a href={content.social.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 justify-self-end text-white hover:bg-white/10 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Site sections</SheetDescription>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="h-12 justify-start rounded-lg px-3 text-[28px] font-semibold tracking-[-0.02em] text-white hover:bg-white/10"
                  asChild
                >
                  <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </Button>
              ))}
              <Button
                variant="ghost"
                className="h-12 justify-start rounded-lg px-3 text-[28px] font-semibold tracking-[-0.02em] text-white hover:bg-white/10"
                asChild
              >
                <a href={content.social.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
