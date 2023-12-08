export interface Field {
  id: string;
  icon: any;
  name: string;
  value: string;
}

export interface UserData {
  id: string;
  title: string;
  fields: Field[];
}
