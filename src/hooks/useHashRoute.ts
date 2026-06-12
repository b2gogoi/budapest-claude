import { useCallback, useEffect, useState } from 'react';

export type Route = 'dashboard' | 'workouts' | 'configure' | 'database' | 'settings';

const ROUTES: Route[] = ['dashboard', 'workouts', 'configure', 'database', 'settings'];

function parseHash(): Route {
  const path = window.location.hash.replace(/^#\/?/, '');
  return ROUTES.find((r) => r === path) ?? 'dashboard';
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
