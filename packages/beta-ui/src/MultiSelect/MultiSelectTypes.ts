import { SelectProps } from 'react-stately';

type SelectType = SelectProps<any> & HTMLFormElement;

export interface MultiSelectProps extends Omit<SelectType, 'children'> {
  size?: 'sm' | 'md' | 'lg';
  defaultPlaceholder?: string;
  description?: string;
  items: any;
  selectedKeyStyle?: 'truncate' | 'chip';
  children: any;
}
