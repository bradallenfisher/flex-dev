import { AriaRadioGroupProps } from 'react-aria';

export interface RadioGroupProps extends AriaRadioGroupProps {
  label: string;
  errors: any;
  description?: string;
}
