export interface Config<T> {
  control: string;
  name: string;
  label: string;
  value: string | number | T;
  callback?: () => void;
}
