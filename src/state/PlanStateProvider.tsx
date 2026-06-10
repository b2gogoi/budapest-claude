import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../config/storage';
import type { TrainingPlan, Week } from '../types/plan';
import { loadPlan } from '../data/loadPlan';
import { defaultPlan } from '../data/plan';
import { addDays, diffDays } from '../utils/dates';

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
  /** Move a week; when cascade is true, all later weeks shift by the same delta. */
  setWeekStartDate: (weekId: string, startDate: string, cascade: boolean) => void;
  /** Restore the bundled default plan (user progress is kept). */
  resetPlan: () => void;
}

const PlanStateContext = createContext<PlanState | null>(null);

export function sessionKey(weekId: string, dayLabel: string, sessionLabel: string): string {
  return `${weekId}:${dayLabel}:${sessionLabel}`;
}

export function PlanStateProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<TrainingPlan>(loadPlan);
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

  const persistPlan = useCallback((next: TrainingPlan) => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(next));
    } catch {
      // storage unavailable — keep in memory
    }
    setPlan(next);
  }, []);

  const setWeekStartDate = useCallback(
    (weekId: string, startDate: string, cascade: boolean) => {
      setPlan((prev) => {
        const ordered = prev.phases.flatMap((p) => p.weeks);
        const index = ordered.findIndex((w) => w.id === weekId);
        if (index < 0 || !startDate) return prev;
        const delta = diffDays(ordered[index].startDate, startDate);
        if (delta === 0) return prev;

        const next: TrainingPlan = {
          ...prev,
          phases: prev.phases.map((phase) => ({
            ...phase,
            weeks: phase.weeks.map((week) => {
              if (week.id === weekId) return { ...week, startDate };
              const weekIndex = ordered.findIndex((w) => w.id === week.id);
              if (cascade && weekIndex > index) {
                return { ...week, startDate: addDays(week.startDate, delta) };
              }
              return week;
            }),
          })),
        };
        try {
          window.localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(next));
        } catch {
          // storage unavailable — keep in memory
        }
        return next;
      });
    },
    [],
  );

  const resetPlan = useCallback(() => persistPlan(defaultPlan), [persistPlan]);

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
      setWeekStartDate,
      resetPlan,
    }),
    [
      plan,
      expanded,
      completed,
      trackerTimes,
      setExpanded,
      setCompleted,
      setTrackerTimes,
      setWeekStartDate,
      resetPlan,
    ],
  );

  return <PlanStateContext.Provider value={value}>{children}</PlanStateContext.Provider>;
}

export function usePlanState(): PlanState {
  const ctx = useContext(PlanStateContext);
  if (!ctx) throw new Error('usePlanState must be used within <PlanStateProvider>');
  return ctx;
}
