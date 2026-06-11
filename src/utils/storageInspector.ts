import { STORAGE_KEYS } from '../config/storage';

export interface StorageEntry {
  key: string;
  /** Raw string as stored. */
  raw: string;
  /** Parsed JSON value, or undefined when the raw string isn't valid JSON. */
  parsed: unknown;
  /** Whether the raw value parsed as JSON. */
  valid: boolean;
  /** Approximate size in bytes (UTF-16 string length is close enough here). */
  size: number;
  /** True for keys this app owns (bb: namespace). */
  owned: boolean;
}

export const APP_PREFIX = 'bb:';

/** Human label for the known app keys; unknown keys fall back to the raw key. */
export const KNOWN_KEY_LABELS: Record<string, string> = {
  [STORAGE_KEYS.plan]: 'Training plan (content)',
  [STORAGE_KEYS.theme]: 'Theme choice',
  [STORAGE_KEYS.expandedWeeks]: 'Expanded weeks',
  [STORAGE_KEYS.completedSessions]: 'Completed sessions',
  [STORAGE_KEYS.trackerTimes]: '100 Fly tracker times',
  [STORAGE_KEYS.sidebarCollapsed]: 'Sidebar collapsed',
};

/** Snapshot every localStorage entry (app keys first, largest first within groups). */
export function readStorageEntries(includeForeign: boolean): StorageEntry[] {
  const entries: StorageEntry[] = [];
  for (let i = 0; i < window.localStorage.length; i += 1) {
    const key = window.localStorage.key(i);
    if (key === null) continue;
    const owned = key.startsWith(APP_PREFIX);
    if (!owned && !includeForeign) continue;
    const raw = window.localStorage.getItem(key) ?? '';
    let parsed: unknown;
    let valid = true;
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = undefined;
      valid = false;
    }
    entries.push({ key, raw, parsed, valid, size: raw.length, owned });
  }
  return entries.sort((a, b) => Number(b.owned) - Number(a.owned) || b.size - a.size);
}

export function formatBytes(size: number): string {
  if (size < 1024) return `${size} B`;
  return `${(size / 1024).toFixed(1)} KB`;
}

/** Serialize all app-owned entries into a downloadable JSON object. */
export function exportAppData(): string {
  const dump: Record<string, unknown> = {};
  for (const entry of readStorageEntries(false)) {
    dump[entry.key] = entry.valid ? entry.parsed : entry.raw;
  }
  return JSON.stringify(dump, null, 2);
}
