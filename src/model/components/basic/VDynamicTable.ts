export type ITableRow = {
  [key: string]: string | number | Date | ITableRow;
};

export type ITableHead = {
  name: string;
  label: string;
  sort?: boolean;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  align?: string;
  hidden?: boolean;
};
