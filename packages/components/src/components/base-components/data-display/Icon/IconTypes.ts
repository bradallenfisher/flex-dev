import { BaseProps } from '@psu-flex/common-ui';
import iconLibrary from '@psu-flex/icon-library';
export type IconSizes =
  | 60
  | 56
  | 52
  | 48
  | 44
  | 40
  | 36
  | 32
  | 28
  | 24
  | 20
  | 16
  | 12;
export type IconColors =
  | 'original87Pink'
  | 'limestoneGray'
  | 'coalyGray'
  | 'accent'
  | 'link'
  | 'nittanyNavy'
  | 'beaverBlue'
  | 'pughBlue'
  | 'skyBlue'
  | 'linkLight'
  | 'white';
export type IconVariants = keyof typeof iconLibrary;
export type BadgeColors = IconColors;

export interface IconProps extends BaseProps {
  /**Color of svg */
  color?: IconColors;
  /**Icon key used to reference svg from iconLibrary.js */
  icon: IconVariants;
  /**Font size of svg */
  size?: IconSizes | IconSizes[] | number | number[];
}
