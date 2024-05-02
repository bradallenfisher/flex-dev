import { AriaTextFieldProps } from 'react-aria';

export interface FormFieldProps extends AriaTextFieldProps {
  label: string;
  register: any;
  required?: boolean;
  errors: any;
  description?: string;
  fieldSize?: 'sm' | 'md' | 'lg';
  control: any;
  name?: string;
}
