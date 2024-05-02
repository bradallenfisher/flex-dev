import { InnerComponent } from '@psu-flex/platform-theme';
import { ButtonProps } from '../ButtonTypes';
import { wideSizeObj } from './WideButtonStyles';

export type WideButtonVariants =
  | 'pughBlueRounded'
  | 'pughBlueSquared'
  | 'beaverBlueRounded'
  | 'beaverBlueSquared'
  | 'linkLightRounded'
  | 'linkLightSquared'
  | 'whiteRounded'
  | 'whiteSquared';
export type WideButtonSizes = keyof typeof wideSizeObj;

export type WideButtonProps = ButtonProps &
  InnerComponent & {
    variant: WideButtonVariants | 'string';
    size?: WideButtonSizes;
  };
