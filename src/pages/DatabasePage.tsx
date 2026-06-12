import { useMemo, useState } from 'react';
import { usePlanState } from '../state/PlanStateProvider';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DataGrid } from '../components/database/DataGrid';
import { DB_NAME, DB_TABLES, syncDbFromPlan, type DbTable } from '../utils/planDb';
import {
  DEFAULT_QUERY,
  FILTER_OPS,
  runTableQuery,
  toSqlPreview,
  type FilterClause,
  type TableQuery,
} from '../utils/tableQuery';
import { formatBytes } from '../utils/storageInspector';

const inputClass =
  'rounded-md border border-line-2 bg-surface-2 px-2 py-1.5 font-mono text-[10px] text-ink outline-none transition-colors focus:border-accent-gold/60';

export function DatabasePage() {
  const { plan } = usePlanState();
  const [syncTick, setSyncTick] = useState(0);
  const [tableName, setTableName] = useState<DbTable>('sessions');
  const [query, setQuery] = useState<TableQuery>(DEFAULT_QUERY);

  // Rebuild the tabular mirror from the current plan on mount / re-sync.
  const db = useMemo(() => syncDbFromPlan(plan), [plan, syncTick]);

  const fields = useMemo(() => db.tableFields(tableName), [db, tableName]);
  const rows = useMemo(() => runTableQuery(db, tableName, query), [db, tableName, query]);
  const totalRows = DB_TABLES.reduce((sum, t) => sum + db.rowCount(t), 0);
  const dbSize = (window.localStorage.getItem(`db_${DB_NAME}`) ?? '').length;

  const selectTable = (table: DbTable) => {
    setTableName(table);
    setQuery(DEFAULT_QUERY);
  };

  const setFilter = (index: number, patch: Partial<FilterClause>) =>
    setQuery((q) => ({
      ...q,
      filters: q.filters.map((f, i) => (i === index ? { ...f, ...patch } : f)),
    }));

  return (
    <>
      <header className="mb-9 border-b border-line-2 pb-6">
        <div className="mb-2.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.35em] text-accent-gold">
          <span className="h-px w-5 bg-accent-gold" />
          Technical · localStorageDB
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.02em] text-ink">
          Database
        </h1>
        <p className="mt-1.5 font-condensed text-[15px] text-muted">
          The plan mirrored as relational tables (stored by localStorageDB under{' '}
          <code className="font-mono text-[12px] text-accent-cyan">db_{DB_NAME}</code>). Re-synced
          from the plan JSON on every visit — query it SQL-style below.
        </p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Tables</div>
              <div className="font-condensed text-[15px] font-bold text-accent-gold">{DB_TABLES.length}</div>
            </div>
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Rows</div>
              <div className="font-condensed text-[15px] font-bold text-accent-cyan">{totalRows}</div>
            </div>
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">DB Size</div>
              <div className="font-condensed text-[15px] font-bold text-ink">{formatBytes(dbSize)}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSyncTick((t) => t + 1)}
            className="rounded-md border border-accent-cyan/50 px-3 py-1.5 font-condensed text-xs font-bold text-accent-cyan transition-colors hover:bg-accent-cyan/10"
          >
            Re-sync from plan
          </button>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Table list */}
        <section>
          <SectionHeader label="Tables" />
          <div className="flex flex-col gap-1.5">
            {DB_TABLES.map((table) => {
              const active = table === tableName;
              return (
                <button
                  key={table}
                  type="button"
                  onClick={() => selectTable(table)}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left transition-colors ${
                    active
                      ? 'border-accent-gold/50 bg-accent-gold/10'
                      : 'border-line-2 bg-surface hover:bg-surface-2'
                  }`}
                >
                  <span className={`font-mono text-[10px] ${active ? 'text-accent-gold' : 'text-ink'}`}>
                    {table}
                  </span>
                  <span className="font-mono text-[9px] text-faint">{db.rowCount(table)}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Query + results */}
        <section className="min-w-0">
          <SectionHeader label={`Query · ${tableName}`} />

          <div className="mb-4 rounded-lg border border-line-2 bg-surface p-3">
            {/* WHERE clauses */}
            <div className="flex flex-col gap-2">
              {query.filters.map((filter, i) => (
                <div key={i} className="flex flex-wrap items-center gap-2">
                  <span className="w-12 text-right font-mono text-[9px] uppercase text-faint">
                    {i === 0 ? 'where' : 'and'}
                  </span>
                  <select
                    value={filter.field}
                    onChange={(e) => setFilter(i, { field: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">field…</option>
                    {fields.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                  <select
                    value={filter.op}
                    onChange={(e) => setFilter(i, { op: e.target.value as FilterClause['op'] })}
                    className={inputClass}
                  >
                    {FILTER_OPS.map((op) => (
                      <option key={op} value={op}>{op}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={filter.value}
                    onChange={(e) => setFilter(i, { value: e.target.value })}
                    placeholder="value"
                    className={`${inputClass} w-36`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setQuery((q) => ({ ...q, filters: q.filters.filter((_, j) => j !== i) }))
                    }
                    aria-label="Remove filter"
                    className="font-mono text-[11px] text-faint transition-colors hover:text-accent-rose"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Controls row */}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setQuery((q) => ({
                    ...q,
                    filters: [...q.filters, { field: '', op: 'contains', value: '' }],
                  }))
                }
                className="rounded border border-line-2 px-2 py-1 font-mono text-[9px] text-muted transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
              >
                + where
              </button>
              <span className="ml-2 font-mono text-[9px] uppercase text-faint">order by</span>
              <select
                value={query.sortField}
                onChange={(e) => setQuery((q) => ({ ...q, sortField: e.target.value }))}
                className={inputClass}
              >
                <option value="">none</option>
                {fields.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
              <select
                value={query.sortDir}
                onChange={(e) => setQuery((q) => ({ ...q, sortDir: e.target.value as 'ASC' | 'DESC' }))}
                className={inputClass}
              >
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
              <span className="ml-2 font-mono text-[9px] uppercase text-faint">limit</span>
              <input
                type="number"
                min={0}
                value={query.limit}
                onChange={(e) => setQuery((q) => ({ ...q, limit: Number(e.target.value) }))}
                className={`${inputClass} w-20`}
              />
            </div>

            {/* SQL preview */}
            <div className="mt-3 rounded-md border border-line bg-black/5 px-3 py-2 font-mono text-[10px] text-accent-cyan dark:bg-black/25">
              {toSqlPreview(tableName, query)}
            </div>
          </div>

          <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-faint">
            {rows.length} row{rows.length === 1 ? '' : 's'}
          </div>
          <DataGrid rows={rows} />
        </section>
      </div>
    </>
  );
}
