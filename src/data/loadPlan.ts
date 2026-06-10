import type { TrainingPlan } from '../types/plan';
import { STORAGE_KEYS } from '../config/storage';
import { defaultPlan } from './plan';

/**
 * The plan itself lives in localStorage so it can be tweaked in place
 * (devtools, import/export, a future editor UI). The bundled default is
 * seeded on first load; a bumped `version` in the default replaces any
 * stale stored copy.
 */
export function loadPlan(): TrainingPlan {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.plan);
    if (raw) {
      const stored = JSON.parse(raw) as TrainingPlan;
      if (stored.version === defaultPlan.version) return stored;
    }
    window.localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(defaultPlan));
  } catch {
    // localStorage unavailable — fall back to the bundled plan
  }
  return defaultPlan;
}
