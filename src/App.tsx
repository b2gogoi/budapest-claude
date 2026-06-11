import { ThemeProvider } from './theme/ThemeProvider';
import { PlanStateProvider } from './state/PlanStateProvider';
import { useHashRoute } from './hooks/useHashRoute';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { WorkoutsPage } from './pages/WorkoutsPage';
import { ConfigurePage } from './pages/ConfigurePage';
import { SettingsPage } from './pages/SettingsPage';

function AppShell() {
  const { route, navigate } = useHashRoute();
  return (
    <div className="flex min-h-screen">
      <Sidebar route={route} onNavigate={navigate} />
      <div className="relative z-10 min-w-0 flex-1">
        <main className="mx-auto max-w-[1200px] px-6 pb-20 pt-10">
          {route === 'configure' ? (
            <ConfigurePage />
          ) : route === 'workouts' ? (
            <WorkoutsPage />
          ) : route === 'settings' ? (
            <SettingsPage />
          ) : (
            <DashboardPage />
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PlanStateProvider>
        {/* Decorative fixed backdrop */}
        <div className="backdrop-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
        <div className="backdrop-glow pointer-events-none fixed inset-0 z-0" aria-hidden />
        <AppShell />
      </PlanStateProvider>
    </ThemeProvider>
  );
}
