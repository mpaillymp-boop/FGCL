/**
 * Lightweight className joiner. The site does not use Tailwind class-conflict
 * resolution heavy enough to justify clsx + tailwind-merge, so a simple filter
 * join keeps the bundle small.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
