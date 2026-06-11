import { useCallback, useMemo, useState } from 'react';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { lightTheme } from '@uiw/react-json-view/light';
import jmespath from 'jmespath';
import { useTheme } from '../theme/ThemeProvider';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  APP_PREFIX,
  KNOWN_KEY_LABELS,
  exportAppData,
  formatBytes,
  readStorageEntries,
  type StorageEntry,
} from '../utils/storageInspector';

/** Example JMESPath queries, most useful against the bb:plan entry. */
const QUERY_PRESETS = [
  'keys(@)',
  'phases[].name',
  'phases[].weeks[].{week: num, start: startDate, title: title}',
  "phases[].weeks[].days[].sessions[?kind=='gym'].title[]",
];

export function SettingsPage() {
  const { theme } = useTheme();
  const [includeForeign, setIncludeForeign] = useState(false);
  const [refreshTick, setRefreshTick] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState<unknown>(undefined);
  const [queryError, setQueryError] = useState<string | null>(null);

  const entries = useMemo(
    () => readStorageEntries(includeForeign),
    // refreshTick forces a re-read after delete/clear/external changes
    [includeForeign, refreshTick],
  );
  const totalSize = entries.reduce((sum, e) => sum + e.size, 0);
  const selected: StorageEntry | undefined =
    entries.find((e) => e.key === selectedKey) ?? entries[0];

  const refresh = useCallback(() => setRefreshTick((t) => t + 1), []);

  const selectEntry = (key: string) => {
    setSelectedKey(key);
    setQueryResult(undefined);
    setQueryError(null);
  };

  const runQuery = (expression: string) => {
    setQuery(expression);
    if (!selected || !expression.trim()) {
      setQueryResult(undefined);
      setQueryError(null);
      return;
    }
    try {
      setQueryResult(jmespath.search(selected.valid ? selected.parsed : selected.raw, expression));
      setQueryError(null);
    } catch (err) {
      setQueryResult(undefined);
      setQueryError(err instanceof Error ? err.message : String(err));
    }
  };

  const downloadExport = () => {
    const blob = new Blob([exportAppData()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'budapest-build-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const deleteEntry = (key: string) => {
    if (!window.confirm(`Delete localStorage entry "${key}"? The app may recreate it on reload.`)) return;
    window.localStorage.removeItem(key);
    if (selectedKey === key) setSelectedKey(null);
    refresh();
  };

  const clearAppData = () => {
    if (!window.confirm('Clear ALL app data (bb:* keys) and reload? Plan edits, check-offs and tracker times will be lost.')) return;
    for (const entry of readStorageEntries(false)) window.localStorage.removeItem(entry.key);
    window.location.reload();
  };

  const jsonTheme = theme === 'dark' ? darkTheme : lightTheme;
  const viewerStyle = { ...jsonTheme, background: 'transparent', fontSize: '11px' };

  return (
    <>
      <header className="mb-9 border-b border-line-2 pb-6">
        <div className="mb-2.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.35em] text-accent-gold">
          <span className="h-px w-5 bg-accent-gold" />
          Technical
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.02em] text-ink">
          Settings
        </h1>
        <p className="mt-1.5 font-condensed text-[15px] text-muted">
          Inspect and query the app&apos;s localStorage. Changes made here affect raw storage — the
          app re-reads it on reload.
        </p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Entries</div>
              <div className="font-condensed text-[15px] font-bold text-accent-gold">{entries.length}</div>
            </div>
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Total Size</div>
              <div className="font-condensed text-[15px] font-bold text-accent-cyan">{formatBytes(totalSize)}</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="mr-2 flex cursor-pointer items-center gap-1.5 text-[11px] text-muted">
              <input
                type="checkbox"
                checked={includeForeign}
                onChange={(e) => setIncludeForeign(e.target.checked)}
                className="h-3 w-3 cursor-pointer"
              />
              Show non-{APP_PREFIX} keys
            </label>
            <button
              type="button"
              onClick={refresh}
              className="rounded-md border border-line-2 px-3 py-1.5 font-condensed text-xs font-bold text-muted transition-colors hover:text-ink"
            >
              Refresh
            </button>
            <button
              type="button"
              onClick={downloadExport}
              className="rounded-md border border-accent-cyan/50 px-3 py-1.5 font-condensed text-xs font-bold text-accent-cyan transition-colors hover:bg-accent-cyan/10"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={clearAppData}
              className="rounded-md border border-accent-rose/50 px-3 py-1.5 font-condensed text-xs font-bold text-accent-rose transition-colors hover:bg-accent-rose/20"
            >
              Clear App Data
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Key list */}
        <section>
          <SectionHeader label="Storage Keys" />
          <div className="flex flex-col gap-1.5">
            {entries.map((entry) => {
              const active = selected?.key === entry.key;
              return (
                <button
                  key={entry.key}
                  type="button"
                  onClick={() => selectEntry(entry.key)}
                  className={`rounded-lg border px-3 py-2 text-left transition-colors ${
                    active
                      ? 'border-accent-gold/50 bg-accent-gold/10'
                      : 'border-line-2 bg-surface hover:border-line-2 hover:bg-surface-2'
                  }`}
                >
                  <div className={`font-mono text-[10px] ${active ? 'text-accent-gold' : 'text-ink'}`}>
                    {entry.key}
                  </div>
                  <div className="mt-0.5 flex items-center justify-between gap-2 text-[9px] text-faint">
                    <span className="truncate">{KNOWN_KEY_LABELS[entry.key] ?? (entry.owned ? '—' : 'external')}</span>
                    <span className="whitespace-nowrap font-mono">
                      {formatBytes(entry.size)}
                      {!entry.valid && <span className="ml-1 text-accent-rose">!json</span>}
                    </span>
                  </div>
                </button>
              );
            })}
            {entries.length === 0 && <p className="text-xs text-muted">No entries.</p>}
          </div>
        </section>

        {/* Inspector */}
        <section className="min-w-0">
          <SectionHeader label={selected ? `Inspector · ${selected.key}` : 'Inspector'} />
          {selected ? (
            <div className="flex flex-col gap-4">
              {/* Query bar */}
              <div className="rounded-lg border border-line-2 bg-surface p-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    runQuery(query);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="JMESPath query, e.g. phases[].weeks[].num"
                    aria-label="JMESPath query"
                    className="min-w-0 flex-1 rounded-md border border-line-2 bg-surface-2 px-3 py-2 font-mono text-[11px] text-ink outline-none transition-colors placeholder:text-faint focus:border-accent-gold/60"
                  />
                  <button
                    type="submit"
                    className="rounded-md border border-accent-gold/50 px-4 font-condensed text-xs font-bold text-accent-gold transition-colors hover:bg-accent-gold/10"
                  >
                    Run
                  </button>
                </form>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {QUERY_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => runQuery(preset)}
                      className="rounded border border-line-2 px-2 py-0.5 font-mono text-[9px] text-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
                {queryError && (
                  <p className="mt-2 font-mono text-[10px] text-accent-rose">{queryError}</p>
                )}
              </div>

              {/* Query result */}
              {queryResult !== undefined && (
                <div className="overflow-auto rounded-lg border border-accent-cyan/40 bg-surface p-3">
                  <div className="mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-accent-cyan">
                    Query Result
                  </div>
                  {queryResult !== null && typeof queryResult === 'object' ? (
                    <JsonView value={queryResult as object} style={viewerStyle} displayDataTypes={false} collapsed={3} />
                  ) : (
                    <pre className="font-mono text-[11px] text-ink">{JSON.stringify(queryResult)}</pre>
                  )}
                </div>
              )}

              {/* Raw value tree */}
              <div className="overflow-auto rounded-lg border border-line-2 bg-surface p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">Value</div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => navigator.clipboard?.writeText(selected.raw)}
                      className="font-mono text-[9px] text-muted transition-colors hover:text-accent-cyan"
                    >
                      copy raw
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteEntry(selected.key)}
                      className="font-mono text-[9px] text-muted transition-colors hover:text-accent-rose"
                    >
                      delete key
                    </button>
                  </div>
                </div>
                {selected.valid && selected.parsed !== null && typeof selected.parsed === 'object' ? (
                  <JsonView value={selected.parsed as object} style={viewerStyle} displayDataTypes={false} collapsed={2} />
                ) : (
                  <pre className="whitespace-pre-wrap break-all font-mono text-[11px] text-ink">{selected.raw}</pre>
                )}
              </div>
            </div>
          ) : (
            <p className="text-xs text-muted">Select a key to inspect.</p>
          )}
        </section>
      </div>
    </>
  );
}
