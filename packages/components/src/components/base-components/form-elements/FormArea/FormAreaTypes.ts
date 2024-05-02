import { AriaTextFieldProps } from 'react-aria';

export interface FormAreaProps extends AriaTextFieldProps {
  areaSize?: 'sm' | 'md' | 'lg';
  label?: string;
  required?: boolean;
  register: any;
  rows?: number;
  cols?: number;
  errors: any;
  name?: string;
}
