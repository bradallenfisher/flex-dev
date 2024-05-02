import { ComponentIntroProps } from '../../../base-components';

export type ImageTextOverlapProps = ComponentIntroProps & {
  heading?: string;
  subHeading?: string;
  body?: string;
  ctaButtonText?: string;
  ctaButtonTo?: string;
  imgSrc: string;
  imgAlt: string;
};
