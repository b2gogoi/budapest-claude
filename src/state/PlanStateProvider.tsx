import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../config/storage';
import type { TrainingPlan, Week } from '../types/plan';

export interface PlanState {
  plan: TrainingPlan;
  /** weekId → expanded? Weeks absent from the map fall back to defaultOpen. */
  isWeekExpanded: (week: Week) => boolean;
  toggleWeek: (weekId: string) => void;
  /** Session completion, keyed `${weekId}:${dayLabel}:${sessionLabel}`. */
  isSessionDone: (key: string) => boolean;
  toggleSession: (key: string) => void;
  /** Tracker meet times, keyed by meet id. */
  trackerTimes: Record<string, string>;
  setTrackerTime: (meetId: string, time: string) => void;
}

const PlanStateContext = createContext<PlanState | null>(null);

export function sessionKey(weekId: string, dayLabel: string, sessionLabel: string): string {
  return `${weekId}:${dayLabel}:${sessionLabel}`;
}

interface Props {
  plan: TrainingPlan;
  children: ReactNode;
}

export function PlanStateProvider({ plan, children }: Props) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    STORAGE_KEYS.expandedWeeks,
    {},
  );
  const [completed, setCompleted] = useLocalStorage<Record<string, boolean>>(
    STORAGE_KEYS.completedSessions,
    {},
  );
  const [trackerTimes, setTrackerTimes] = useLocalStorage<Record<string, string>>(
    STORAGE_KEYS.trackerTimes,
    {},
  );

  const value = useMemo<PlanState>(
    () => ({
      plan,
      isWeekExpanded: (week) => expanded[week.id] ?? Boolean(week.defaultOpen),
      toggleWeek: (weekId) =>
        setExpanded((prev) => {
          const week = plan.phases.flatMap((p) => p.weeks).find((w) => w.id === weekId);
          const current = prev[weekId] ?? Boolean(week?.defaultOpen);
          return { ...prev, [weekId]: !current };
        }),
      isSessionDone: (key) => Boolean(completed[key]),
      toggleSession: (key) =>
        setCompleted((prev) => ({ ...prev, [key]: !prev[key] })),
      trackerTimes,
      setTrackerTime: (meetId, time) =>
        setTrackerTimes((prev) => ({ ...prev, [meetId]: time })),
    }),
    [plan, expanded, completed, trackerTimes, setExpanded, setCompleted, setTrackerTimes],
  );

  return <PlanStateContext.Provider value={value}>{children}</PlanStateContext.Provider>;
}

export function usePlanState(): PlanState {
  const ctx = useContext(PlanStateContext);
  if (!ctx) throw new Error('usePlanState must be used within <PlanStateProvider>');
  return ctx;
}
