import { ButtonGroupDataProps } from '@psu-flex/core-ui';

export type StandardHeroVideoProps = ButtonGroupDataProps & {
  /** Display heading text for hero  */
  heading: string;
  /** Body  text for hero  */
  copy: string;
  /** Image path for background image  */
  video?: any;
};
