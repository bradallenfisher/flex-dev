import { BaseProps } from '@psu-flex/common-ui';

export type SearchAutocompleteProps = BaseProps & {
  fieldSize?: 'sm' | 'md' | 'lg';
  label: string;
  description?: string;
  placeholder?: string;
};
