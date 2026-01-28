import { useEffect } from 'react';

/**
 * Highlights the active top-nav link based on scroll position.
 * Matches the original offset and section detection logic.
 */
export function useActiveNav() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav__link'));
    const sections = links
      .map((a) => a.getAttribute('href'))
      .filter((h): h is string => !!h && h.startsWith('#'))
      .map((h) => document.querySelector<HTMLElement>(h))
      .filter((el): el is HTMLElement => !!el);

    const setActive = () => {
      const y = window.scrollY + 110;
      let current = '#top';
      for (const s of sections) {
        if (s.offsetTop <= y) current = `#${s.id}`;
      }
      links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === current));
    };

    setActive();
    window.addEventListener('scroll', setActive, { passive: true });
    window.addEventListener('load', setActive);

    return () => {
      window.removeEventListener('scroll', setActive);
      window.removeEventListener('load', setActive);
    };
  }, []);
}
