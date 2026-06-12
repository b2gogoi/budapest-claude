import { useMemo, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table';
import type { RowWithId } from 'localstoragedb';

interface DataGridProps {
  rows: RowWithId[];
  pageSize?: number;
}

function renderCell(value: unknown): string {
  if (typeof value === 'boolean') return value ? '✓' : '—';
  if (value === null || value === undefined || value === '') return '·';
  return String(value);
}

/** Generic sortable, paginated grid over localStorageDB rows (TanStack Table). */
export function DataGrid({ rows, pageSize = 12 }: DataGridProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo(() => {
    const helper = createColumnHelper<RowWithId>();
    const fields = rows.length ? Object.keys(rows[0]) : [];
    return fields.map((field) =>
      helper.accessor((row) => row[field], { id: field, header: field }),
    );
  }, [rows]);

  const table = useReactTable({
    data: rows,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } },
  });

  if (rows.length === 0) {
    return <p className="px-1 py-4 text-xs text-muted">No rows.</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-line-2">
        <table className="w-full border-collapse text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-line-2 bg-surface-2">
                {headerGroup.headers.map((header) => {
                  const dir = header.column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer select-none whitespace-nowrap px-2.5 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {dir === 'asc' ? ' ▲' : dir === 'desc' ? ' ▼' : ''}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-line bg-surface last:border-b-0 hover:bg-surface-2/60">
                {row.getVisibleCells().map((cell) => {
                  const text = renderCell(cell.getValue());
                  return (
                    <td
                      key={cell.id}
                      title={text.length > 48 ? text : undefined}
                      className="max-w-[280px] truncate px-2.5 py-1.5 font-mono text-[10px] text-muted"
                    >
                      {text}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.getPageCount() > 1 && (
        <div className="mt-2 flex items-center justify-end gap-2 font-mono text-[10px] text-muted">
          <button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded border border-line-2 px-2 py-0.5 transition-colors enabled:hover:text-ink disabled:opacity-30"
          >
            ‹ prev
          </button>
          <span>
            page {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          </span>
          <button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded border border-line-2 px-2 py-0.5 transition-colors enabled:hover:text-ink disabled:opacity-30"
          >
            next ›
          </button>
        </div>
      )}
    </div>
  );
}
