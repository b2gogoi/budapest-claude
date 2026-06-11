import type { ReactNode } from 'react';
import type { Route } from '../../hooks/useHashRoute';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../config/storage';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavItem {
  id: Route;
  label: string;
  icon: ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    id: 'workouts',
    label: 'Workouts',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />
      </svg>
    ),
  },
  {
    id: 'configure',
    label: 'Configure',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
];

interface SidebarProps {
  route: Route;
  onNavigate: (route: Route) => void;
}

/** Collapsible navigation sidebar; collapsed state persists to localStorage. */
export function Sidebar({ route, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useLocalStorage<boolean>(STORAGE_KEYS.sidebarCollapsed, false);

  return (
    <aside
      className={`sticky top-0 z-20 flex h-screen flex-shrink-0 flex-col border-r border-line bg-surface transition-[width] duration-200 ${
        collapsed ? 'w-14' : 'w-52'
      }`}
    >
      {/* Brand */}
      <div className={`flex items-center gap-2.5 border-b border-line px-4 py-4 ${collapsed ? 'justify-center px-0' : ''}`}>
        <span className="font-display text-2xl leading-none text-accent-gold">B</span>
        {!collapsed && (
          <span className="font-display text-lg leading-none tracking-[0.04em] text-ink">
            Budapest <span className="text-accent-gold">Build</span>
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-2">
        {NAV_ITEMS.map((item) => {
          const active = route === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : undefined}
              aria-current={active ? 'page' : undefined}
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-left font-condensed text-sm font-semibold tracking-[0.04em] transition-colors ${
                collapsed ? 'justify-center px-0' : ''
              } ${
                active
                  ? 'bg-accent-gold/10 text-accent-gold'
                  : 'text-muted hover:bg-surface-2 hover:text-ink'
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && item.label}
            </button>
          );
        })}
      </nav>

      {/* Footer: theme + collapse toggles */}
      <div className={`mt-auto flex items-center gap-2 border-t border-line p-2 ${collapsed ? 'flex-col' : ''}`}>
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className={`flex h-9 items-center justify-center rounded-md border border-line-2 text-muted transition-colors hover:text-ink ${
            collapsed ? 'w-9' : 'ml-auto w-9'
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
