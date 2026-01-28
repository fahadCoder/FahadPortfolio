import { useEffect } from 'react';

/**
 * Adds 'is-visible' to elements with the 'reveal' class when they enter the viewport.
 * Uses the same observer thresholds as the original static implementation.
 *
 * Pass dependencies (e.g., portfolio filter state) to re-scan newly rendered elements.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add('is-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((x) => io.observe(x));
    return () => io.disconnect();
    // Intentionally controlled by caller.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
