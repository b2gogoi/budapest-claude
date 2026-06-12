/** Minimal typings for the 'localstoragedb' npm package (knadh/localstoragedb).
 * The bundled .d.ts declares the wrong module name, so we keep our own. */
declare module 'localstoragedb' {
  export type Row = Record<string, unknown>;
  export type RowWithId = Row & { ID: number };

  export interface QueryParams {
    query?: Row | ((row: RowWithId) => boolean);
    limit?: number;
    start?: number;
    sort?: [string, 'ASC' | 'DESC'][];
    distinct?: string[];
  }

  export default class localStorageDB {
    constructor(databaseName: string, storageEngine?: string | Storage);
    isNew(): boolean;
    drop(): void;
    commit(): boolean;
    serialize(): string;
    tableCount(): number;
    tableExists(table: string): boolean;
    tableFields(table: string): string[];
    createTable(table: string, fields: string[]): boolean;
    createTableWithData(table: string, rows: Row[]): boolean;
    dropTable(table: string): void;
    truncate(table: string): void;
    rowCount(table: string): number;
    insert(table: string, data: Row): number;
    queryAll(table: string, params?: QueryParams): RowWithId[];
    update(table: string, query: Row | ((row: RowWithId) => boolean), update?: (row: RowWithId) => Row): number;
    deleteRows(table: string, query: Row | ((row: RowWithId) => boolean)): number;
  }
}
