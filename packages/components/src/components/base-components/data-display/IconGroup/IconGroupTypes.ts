import { IconVariants } from '../../data-display/Icon/IconTypes';
import {
  IconButtonSizes,
  IconButtonTypes,
  IconButtonVariants,
} from '../IconButtons/IconButton/IconButtonTypes';
import { ListBoxTags } from '../ListBox/ListBoxTypes';
import { FlexProps } from '../../layout/index';
import { InnerComponent } from '@psu-flex/platform-theme';

export type IconGroupProps = FlexProps &
  InnerComponent & {
    iconGroupData: { icon: IconVariants | string; to?: string }[];
    tag?: ListBoxTags;
    iconButtonVariant: IconButtonVariants;
    size: IconButtonSizes;
    type?: IconButtonTypes;
  };
