import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function externalHref(url: string) {
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}
