import { ComponentIntroProps } from '@psu-flex/core-ui';
import { VariableGridComponentWithContainer } from '@psu-flex/common-ui';
import { AriaListBoxProps } from 'react-aria';

export type ParentCardGroupProps<T> = ComponentIntroProps &
  VariableGridComponentWithContainer & {
    /** Gap size between rows */
    gapSize?: 'sm' | 'md';
    /** Card data set for the card group. */
    cards: T[];
  };

export type CardGroupProps<T> = AriaListBoxProps<any> & ParentCardGroupProps<T>;
