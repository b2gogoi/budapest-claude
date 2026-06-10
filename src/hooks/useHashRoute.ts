import { useCallback, useEffect, useState } from 'react';

export type Route = 'dashboard' | 'configure';

function parseHash(): Route {
  return window.location.hash.replace(/^#\/?/, '') === 'configure' ? 'configure' : 'dashboard';
}

/** Minimal hash-based router — '#/' = dashboard, '#/configure' = configure. */
export function useHashRoute() {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((next: Route) => {
    window.location.hash = next === 'configure' ? '/configure' : '/';
  }, []);

  return { route, navigate };
}
