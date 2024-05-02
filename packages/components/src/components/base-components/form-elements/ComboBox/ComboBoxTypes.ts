import { BaseProps } from '@psu-flex/common-ui';

export type ComboBoxProps = BaseProps & {
  fieldSize?: 'sm' | 'md' | 'lg';
  label: string;
  description?: string;
};
