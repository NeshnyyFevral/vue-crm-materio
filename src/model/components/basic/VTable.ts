export const enum SortBy {
  ASK = 'ASK',
  DESC = 'DESC',
}

export interface HeadCells {
  label: string;
  name: string;
  sortable?: boolean;
}
