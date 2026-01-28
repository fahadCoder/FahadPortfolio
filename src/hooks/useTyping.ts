import { useEffect, useRef, useState } from 'react';

export type TypingConfig = {
  /** Internal tick interval in ms (default 50ms, matching the original). */
  tickMs?: number;
  /** How long to pause at the full word before deleting (default 1100ms). */
  holdForMs?: number;
};

/**
 * Typing effect: types and deletes the given role strings in a loop.
 * Mirrors the original main.js behavior (tick-based).
 */
export function useTyping(roles: string[], config: TypingConfig = {}) {
  const tickMs = config.tickMs ?? 50;
  const holdForMs = config.holdForMs ?? 1100;

  const [text, setText] = useState('');

  // Imperative state machine via refs (prevents rerenders from resetting the logic).
  const rRef = useRef(0);
  const iRef = useRef(0);
  const dirRef = useRef<1 | -1>(1); // 1 typing, -1 deleting
  const holdRef = useRef(0);

  useEffect(() => {
    if (!roles.length) return;

    const tick = () => {
      const word = roles[rRef.current] ?? '';

      if (holdRef.current > 0) {
        holdRef.current -= 1;
        return;
      }

      if (dirRef.current === 1) {
        iRef.current += 1;
        setText(word.slice(0, iRef.current));
        if (iRef.current >= word.length) {
          dirRef.current = -1;
          holdRef.current = Math.round(holdForMs / tickMs);
        }
      } else {
        iRef.current -= 1;
        setText(word.slice(0, Math.max(iRef.current, 0)));
        if (iRef.current <= 0) {
          dirRef.current = 1;
          rRef.current = (rRef.current + 1) % roles.length;
        }
      }
    };

    const id = window.setInterval(tick, tickMs);
    return () => window.clearInterval(id);
  }, [roles, tickMs, holdForMs]);

  return text;
}
