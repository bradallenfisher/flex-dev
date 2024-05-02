import { ButtonGroupDataProps } from '@psu-flex/core-ui';

export type MinimalistHeroVideoProps = ButtonGroupDataProps & {
  /** Display heading text for hero  */
  heading: string;
  /** Video path for background video  */
  video?: string;
};
