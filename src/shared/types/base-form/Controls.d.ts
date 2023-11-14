export interface Control {
  control: string;
  name: string;
  label: string;
  withIcon?: boolean;
  iconName?: string;
  controlStyles?: string;
  linkPath?: string;
  value?: ControlValue;
  callback?: () => void;
}

export interface Controls {
  [key: string]: unknown;
}

export interface Content {
  html: string;
  slotName: string;
}

type ControlValue = string | number | boolean | Date;
