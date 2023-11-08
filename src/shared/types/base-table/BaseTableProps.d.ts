export interface TableProps<T> {
  columns: any[];
  emptyMessage: string;
  data?: T[];
}
