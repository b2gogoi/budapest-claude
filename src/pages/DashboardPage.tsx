import { usePlanState } from '../state/PlanStateProvider';
import { PlanHeader } from '../components/plan/PlanHeader';
import { PhilosophyGrid } from '../components/plan/PhilosophyGrid';
import { PhaseOverview } from '../components/plan/PhaseOverview';
import { PhaseSection } from '../components/plan/PhaseSection';
import { FlyTracker } from '../components/plan/FlyTracker';
import { PlanFooter } from '../components/plan/PlanFooter';

export function DashboardPage() {
  const { plan } = usePlanState();
  return (
    <>
      <PlanHeader config={plan.header} />
      <PhilosophyGrid sectionLabel={plan.philosophy.sectionLabel} items={plan.philosophy.items} />
      <PhaseOverview sectionLabel={plan.phaseOverview.sectionLabel} cards={plan.phaseOverview.cards} />
      {plan.phases.map((phase) => (
        <PhaseSection key={phase.id} phase={phase} />
      ))}
      <FlyTracker config={plan.tracker} />
      <PlanFooter text={plan.footer} />
    </>
  );
}
