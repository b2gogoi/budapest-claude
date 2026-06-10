/**
 * Canonical-name aliases used when deduplicating gym exercises.
 * Keys are lowercased names as they appear in plan data; values are the
 * canonical display name. Extend freely — extraction is data-driven.
 */
export const WORKOUT_ALIASES: Record<string, string> = {
  'sa activation only': 'SA Activation',
  'sa warmup': 'SA Activation',
  'romanian dl': 'RDL',
  'glute-ham raise': 'GHR',
  'db bench press': 'DB Bench',
  'db incline press': 'DB Incline',
  'incline db': 'DB Incline',
  'bench press': 'Barbell Bench',
  'trap bar deadlift': 'Trap Bar DL',
  'seated cable row': 'Seated Row',
  'med ball pass': 'Med Ball Chest Pass',
  'med ball': 'Med Ball Chest Pass',
  'hip thrust explosive': 'Hip Thrust',
  'pallof + rotation': 'Pallof Press',
  pallof: 'Pallof Press',
};
