import { useEffect } from 'react';

export function useOnClickOutside(refs, handler) {
  useEffect(() => {
    const listener = (event) => {
      let containsTarget = false;

      if (Array.isArray(refs)) {
        refs.forEach((r) => {
          if (!r.current || r.current.contains(event.target)) {
            containsTarget = true;
          }
        });
      } else if (!refs.current || refs.current.contains(event.target)) {
        containsTarget = true;
      }

      if (containsTarget) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}
