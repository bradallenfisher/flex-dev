import { BaseProps } from '@psu-flex/common-ui';

export type CalloutBackgroundColors = 'limestoneMaxLight' | 'slateMaxLight';

export interface CalloutProps extends BaseProps {
  /** Content for callout */
  richText: any;
  /** Background color for the callout. */
  backgroundColor: CalloutBackgroundColors | string;
  /** Image src */
  image?: any;
}
