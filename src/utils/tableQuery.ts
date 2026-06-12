import type localStorageDB from 'localstoragedb';
import type { RowWithId } from 'localstoragedb';

export const FILTER_OPS = ['=', '!=', 'contains', '>', '>=', '<', '<='] as const;
export type FilterOp = (typeof FILTER_OPS)[number];

export interface FilterClause {
  field: string;
  op: FilterOp;
  value: string;
}

export interface TableQuery {
  filters: FilterClause[];
  sortField: string;
  sortDir: 'ASC' | 'DESC';
  limit: number;
}

export const DEFAULT_QUERY: TableQuery = { filters: [], sortField: '', sortDir: 'ASC', limit: 100 };

/** Compare cell vs filter value numerically when both parse, else as strings. */
function compare(cell: unknown, value: string): number {
  const cellNum = Number(cell);
  const valueNum = Number(value);
  if (!Number.isNaN(cellNum) && !Number.isNaN(valueNum) && String(cell).trim() !== '') {
    return cellNum - valueNum;
  }
  return String(cell).localeCompare(value);
}

function matches(row: RowWithId, clause: FilterClause): boolean {
  const cell = row[clause.field];
  switch (clause.op) {
    case '=':
      return String(cell).toLowerCase() === clause.value.toLowerCase();
    case '!=':
      return String(cell).toLowerCase() !== clause.value.toLowerCase();
    case 'contains':
      return String(cell).toLowerCase().includes(clause.value.toLowerCase());
    case '>':
      return compare(cell, clause.value) > 0;
    case '>=':
      return compare(cell, clause.value) >= 0;
    case '<':
      return compare(cell, clause.value) < 0;
    case '<=':
      return compare(cell, clause.value) <= 0;
  }
}

/** Execute a structured query against a localStorageDB table (clauses are ANDed). */
export function runTableQuery(db: localStorageDB, table: string, query: TableQuery): RowWithId[] {
  const active = query.filters.filter((f) => f.field && f.value !== '');
  return db.queryAll(table, {
    query: active.length ? (row) => active.every((clause) => matches(row, clause)) : undefined,
    sort: query.sortField ? [[query.sortField, query.sortDir]] : undefined,
    limit: query.limit > 0 ? query.limit : undefined,
  });
}

/** Human-readable SQL rendering of the structured query (display only). */
export function toSqlPreview(table: string, query: TableQuery): string {
  const where = query.filters
    .filter((f) => f.field && f.value !== '')
    .map((f) =>
      f.op === 'contains' ? `${f.field} LIKE '%${f.value}%'` : `${f.field} ${f.op} '${f.value}'`,
    )
    .join(' AND ');
  return [
    `SELECT * FROM ${table}`,
    where && `WHERE ${where}`,
    query.sortField && `ORDER BY ${query.sortField} ${query.sortDir}`,
    query.limit > 0 && `LIMIT ${query.limit}`,
  ]
    .filter(Boolean)
    .join(' ');
}
