const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DAY_MS = 24 * 60 * 60 * 1000;

/** Parse yyyy-mm-dd as UTC midnight (avoids timezone day-shifts). */
function parseISO(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

export function addDays(iso: string, days: number): string {
  const d = new Date(parseISO(iso).getTime() + days * DAY_MS);
  return d.toISOString().slice(0, 10);
}

export function diffDays(fromISO: string, toISO: string): number {
  return Math.round((parseISO(toISO).getTime() - parseISO(fromISO).getTime()) / DAY_MS);
}

/** Format a week's date range, e.g. "7–12 Jul" or "28 Jul – 2 Aug". */
export function formatWeekRange(startISO: string, spanDays = 6): string {
  const start = parseISO(startISO);
  const end = parseISO(addDays(startISO, spanDays - 1));
  const d1 = start.getUTCDate();
  const d2 = end.getUTCDate();
  const m1 = MONTHS[start.getUTCMonth()];
  const m2 = MONTHS[end.getUTCMonth()];
  return m1 === m2 ? `${d1}–${d2} ${m1}` : `${d1} ${m1} – ${d2} ${m2}`;
}

/** Long single-date format, e.g. "7 Jul 2026". */
export function formatDate(iso: string): string {
  const d = parseISO(iso);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
