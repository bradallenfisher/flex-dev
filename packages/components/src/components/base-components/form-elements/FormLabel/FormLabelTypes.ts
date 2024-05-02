import { LabelHTMLAttributes } from 'react';
import { LabelAriaProps } from 'react-aria';
import { BaseProps } from '@psu-flex/common-ui';
import {
  BodyColors,
  BodyVariants,
} from '../../data-display/Typography/Body/BodyTypes';

type FormLabelType = LabelAriaProps & LabelHTMLAttributes<any> & BaseProps;

//need to define interface also so that storybook can populate props for controls
export interface FormLabelProps extends FormLabelType {
  /**Variant for FormLabel. Options are the same as BodyVariants */
  variant?: BodyVariants;
  /**Color for label text */
  color?: BodyColors | string;
  /**Boolean defining if form element is required */
  required?: boolean;
}
