import { useCallback, useEffect, useState } from 'react';

export type Route = 'dashboard' | 'workouts' | 'configure';

function parseHash(): Route {
  const path = window.location.hash.replace(/^#\/?/, '');
  if (path === 'configure') return 'configure';
  if (path === 'workouts') return 'workouts';
  return 'dashboard';
}

/** Minimal hash-based router — '#/' = dashboard, '#/workouts', '#/configure'. */
export function useHashRoute() {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((next: Route) => {
    window.location.hash = next === 'dashboard' ? '/' : `/${next}`;
  }, []);

  return { route, navigate };
}
