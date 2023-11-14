export interface ButtonProps {
  default?: string;
  validator?: ButtonType;
  extraClass?: string;
  withIcon?: boolean;
  iconName?: string;
}

type ButtonType = 'button' | 'submit' | 'reset';
