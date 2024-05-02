import { BaseProps } from '@psu-flex/common-ui';
import { AriaTextFieldProps } from 'react-aria';

export type FilterProps<T> = BaseProps &
  AriaTextFieldProps & {
    /** Property or properties from the data set that the data should be filtered by */
    filterBy?: (keyof T)[] | keyof T | 'allData';
    /** Field size for Filter */
    fieldSize?: 'sm' | 'md' | 'lg';
    /** Label text for Filter */
    label?: string;
    /** Description text for Filter */
    description?: string;
    /** Callback function. Should be a state setter for the filtered data */
    filterCallback: (filteredData: T[]) => void;
    /** Data set to be filtered */
    data: T[];
  };
