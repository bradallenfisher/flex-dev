import { SelectProps } from 'react-stately';

type SelectType = SelectProps<any> & HTMLFormElement;

export interface FormSelectProps extends SelectType {
  size?: 'sm' | 'md' | 'lg';
  defaultPlaceholder?: string;
  errors?: any;
  description?: string;
  context?: any;
  selectClassName?: { [key: string]: string };
  buttonClassName?: { [key: string]: string };
  control: any;
}
