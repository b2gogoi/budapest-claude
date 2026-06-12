import type { AccentColor, TrainingPlan } from '../types/plan';
import { WORKOUT_ALIASES } from '../config/workoutAliases';

export interface WorkoutOccurrence {
  weekId: string;
  weekNum: string;
  phaseName: string;
  phaseAccent: AccentColor;
  sessionLabel: string;
  dayLabel: string;
}

export interface WorkoutVariation {
  /** Raw prescription text, e.g. "5×5 @75–80%" or "4×8 slow eccentric (3s)". */
  prescription: string;
  /** Leading sets×reps if parseable, e.g. "5×5". */
  setsReps?: string;
  /** Prescription with the sets×reps prefix removed (display remainder). */
  note: string;
  occurrences: WorkoutOccurrence[];
}

export interface Workout {
  id: string;
  name: string;
  variations: WorkoutVariation[];
  totalOccurrences: number;
  /** Phases (accents) this workout appears in, in plan order. */
  phaseAccents: AccentColor[];
}

/** Matches "**Name:** rest" or "**Name** rest" plan items. */
const ITEM_PATTERN = /^\*\*(.+?):?\*\*\s*(.*)$/;
/** Leading sets×reps, e.g. "5×5", "3×10", "4×(...)" is excluded. */
const SETS_REPS_PATTERN = /^(\d+)\s*×\s*(\d+)/;

export interface ParsedExercise {
  /** Canonical exercise name (aliases applied). */
  name: string;
  /** Raw prescription text, e.g. "5×5 @75–80%". */
  prescription: string;
  /** Leading sets×reps if parseable, e.g. "5×5". */
  setsReps?: string;
  /** Prescription with the sets×reps prefix removed. */
  note: string;
}

/** Parse a gym session item line into an exercise, or null for non-exercise
 * lines (plain text / emphasis-only commentary). */
export function parseExerciseItem(text: string): ParsedExercise | null {
  const match = ITEM_PATTERN.exec(text);
  if (!match) return null;
  const name = canonicalName(match[1]);
  const prescription = match[2].trim() || '—';
  const setsReps = SETS_REPS_PATTERN.exec(prescription);
  return {
    name,
    prescription,
    setsReps: setsReps ? `${setsReps[1]}×${setsReps[2]}` : undefined,
    note: setsReps
      ? prescription.slice(setsReps[0].length).replace(/^[\s—–\-·,]+/, '')
      : prescription,
  };
}

function canonicalName(raw: string): string {
  const cleaned = raw.replace(/\s+/g, ' ').trim().replace(/:$/, '');
  return WORKOUT_ALIASES[cleaned.toLowerCase()] ?? cleaned;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normalizePrescription(text: string): string {
  return text.replace(/\s+/g, ' ').trim().toLowerCase();
}

/**
 * Walk every gym session in the plan and build a deduplicated workout
 * library: one entry per exercise, with its distinct set×rep prescriptions
 * as variations (each tracking where in the plan it appears).
 */
export function extractWorkouts(plan: TrainingPlan): Workout[] {
  const workouts = new Map<string, Workout>();

  for (const phase of plan.phases) {
    for (const week of phase.weeks) {
      for (const day of week.days) {
        for (const session of day.sessions) {
          if (session.kind !== 'gym') continue;
          for (const item of session.items) {
            const exercise = parseExerciseItem(item.text);
            if (!exercise) continue; // plain/emphasis-only lines are not exercises

            const { name, prescription } = exercise;
            const id = slugify(name);

            let workout = workouts.get(id);
            if (!workout) {
              workout = { id, name, variations: [], totalOccurrences: 0, phaseAccents: [] };
              workouts.set(id, workout);
            }

            const occurrence: WorkoutOccurrence = {
              weekId: week.id,
              weekNum: week.num,
              phaseName: phase.name,
              phaseAccent: phase.accent,
              sessionLabel: session.label,
              dayLabel: day.label,
            };

            const key = normalizePrescription(prescription);
            let variation = workout.variations.find(
              (v) => normalizePrescription(v.prescription) === key,
            );
            if (!variation) {
              variation = {
                prescription,
                setsReps: exercise.setsReps,
                note: exercise.note,
                occurrences: [],
              };
              workout.variations.push(variation);
            }
            variation.occurrences.push(occurrence);
            workout.totalOccurrences += 1;
            if (!workout.phaseAccents.includes(phase.accent)) {
              workout.phaseAccents.push(phase.accent);
            }
          }
        }
      }
    }
  }

  return [...workouts.values()].sort((a, b) => b.totalOccurrences - a.totalOccurrences);
}
