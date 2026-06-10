import { useMemo } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { PlanStateProvider } from './state/PlanStateProvider';
import { loadPlan } from './data/loadPlan';
import { PlanHeader } from './components/plan/PlanHeader';
import { PhilosophyGrid } from './components/plan/PhilosophyGrid';
import { PhaseOverview } from './components/plan/PhaseOverview';
import { PhaseSection } from './components/plan/PhaseSection';
import { FlyTracker } from './components/plan/FlyTracker';
import { PlanFooter } from './components/plan/PlanFooter';

export default function App() {
  const plan = useMemo(loadPlan, []);

  return (
    <ThemeProvider>
      <PlanStateProvider plan={plan}>
        {/* Decorative fixed backdrop */}
        <div className="backdrop-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
        <div className="backdrop-glow pointer-events-none fixed inset-0 z-0" aria-hidden />

        <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-10">
          <PlanHeader config={plan.header} />
          <PhilosophyGrid sectionLabel={plan.philosophy.sectionLabel} items={plan.philosophy.items} />
          <PhaseOverview sectionLabel={plan.phaseOverview.sectionLabel} cards={plan.phaseOverview.cards} />
          {plan.phases.map((phase) => (
            <PhaseSection key={phase.id} phase={phase} />
          ))}
          <FlyTracker config={plan.tracker} />
          <PlanFooter text={plan.footer} />
        </main>
      </PlanStateProvider>
    </ThemeProvider>
  );
}
