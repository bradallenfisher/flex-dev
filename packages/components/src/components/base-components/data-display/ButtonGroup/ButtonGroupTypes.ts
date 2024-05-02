import { BaseProps, InnerComponent } from '@psu-flex/common-ui';
import { CtaButtonSizes } from '../Button/CtaButton/CtaButtonTypes';
import { variantKeyMap } from './ButtonGroupStyles';

export interface ButtonGroupDataProps {
  /** string uri for cta */
  ctaTo?: string;
  /** button text for cta */
  ctaText?: string;
  /** string uri for secondary cta */
  secondaryCtaTo?: string;
  /** button text for secondary cta */
  secondaryCtaText?: string;
}

export interface ButtonGroupProps
  extends BaseProps,
    InnerComponent,
    ButtonGroupDataProps {
  /** if true, then the primary cta with have a chevron Icon */
  withIconCta?: boolean;
  /** variant for ButtonGroup. Controls both Primary and Secondary Button variants in one prop. */
  buttonGroupVariant?: keyof typeof variantKeyMap | string;
  /** size for both cta buttons */
  ctaSize?: CtaButtonSizes;
}
