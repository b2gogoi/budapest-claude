import localStorageDB from 'localstoragedb';
import type { TrainingPlan } from '../types/plan';
import { sessionKey } from '../state/PlanStateProvider';
import { parseExerciseItem } from '../utils/workouts';
import { formatWeekRange } from './dates';
import { STORAGE_KEYS } from '../config/storage';

export const DB_NAME = 'budapest';

/** Tables mirrored from the plan, in display order. */
export const DB_TABLES = [
  'phases',
  'weeks',
  'sessions',
  'session_items',
  'exercises',
  'tracker_times',
  'meta',
] as const;
export type DbTable = (typeof DB_TABLES)[number];

export function getDb(): localStorageDB {
  return new localStorageDB(DB_NAME);
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

/**
 * Rebuild the relational mirror from the current plan + user state.
 * The JSON in bb:plan stays the source of truth — this is a derived,
 * queryable tabular view stored by localStorageDB under `db_budapest`.
 */
export function syncDbFromPlan(plan: TrainingPlan): localStorageDB {
  const db = getDb();
  for (const table of DB_TABLES) {
    if (db.tableExists(table)) db.dropTable(table);
  }

  const completed = readJson<Record<string, boolean>>(STORAGE_KEYS.completedSessions, {});
  const trackerTimes = readJson<Record<string, string>>(STORAGE_KEYS.trackerTimes, {});

  const phases: Record<string, unknown>[] = [];
  const weeks: Record<string, unknown>[] = [];
  const sessions: Record<string, unknown>[] = [];
  const sessionItems: Record<string, unknown>[] = [];
  const exercises: Record<string, unknown>[] = [];

  for (const phase of plan.phases) {
    phases.push({
      phase_id: phase.id,
      number: phase.number,
      name: phase.name,
      accent: phase.accent,
      meta: phase.meta,
    });
    for (const week of phase.weeks) {
      weeks.push({
        week_id: week.id,
        phase_id: phase.id,
        num: week.num,
        title: week.title,
        start_date: week.startDate,
        date_range: formatWeekRange(week.startDate, week.spanDays),
        span_days: week.spanDays ?? 6,
        accent: week.accent,
      });
      for (const day of week.days) {
        for (const session of day.sessions) {
          const sid = sessionKey(week.id, day.label, session.label);
          sessions.push({
            session_id: sid,
            week_id: week.id,
            phase_id: phase.id,
            week_num: week.num,
            day: day.label,
            double_day: Boolean(day.double),
            kind: session.kind,
            label: session.label,
            title: session.title,
            volume: session.volume ?? '',
            items: session.items.length,
            done: Boolean(completed[sid]),
          });
          session.items.forEach((item, seq) => {
            sessionItems.push({
              session_id: sid,
              seq: seq + 1,
              text: item.text,
              emphasis: item.emphasis ?? '',
            });
            if (session.kind === 'gym') {
              const exercise = parseExerciseItem(item.text);
              if (exercise) {
                exercises.push({
                  exercise: exercise.name,
                  sets_reps: exercise.setsReps ?? '',
                  note: exercise.note,
                  prescription: exercise.prescription,
                  week_num: week.num,
                  day: day.label,
                  session: session.label,
                  phase: phase.name,
                });
              }
            }
          });
        }
      }
    }
  }

  const tracker = plan.tracker.meets.map((meet) => ({
    meet_id: meet.id,
    label: meet.label,
    date: meet.date,
    time: meet.fixedTime ?? trackerTimes[meet.id] ?? '',
    caption: meet.caption,
  }));

  db.createTableWithData('phases', phases);
  db.createTableWithData('weeks', weeks);
  db.createTableWithData('sessions', sessions);
  db.createTableWithData('session_items', sessionItems);
  db.createTableWithData('exercises', exercises);
  db.createTableWithData('tracker_times', tracker);
  db.createTableWithData('meta', [
    { key: 'plan_version', value: String(plan.version) },
    { key: 'synced_at', value: new Date().toISOString() },
  ]);
  db.commit();
  return db;
}
