export interface Control {
  control: string;
  name: string;
  label: string;
  value?: string | number | Date;
  callback?: () => void;
}

export interface Controls {
  [key: string]: unknown;
}
