import { IconVariants } from '@psu-flex/core-ui';

interface EventCardIcon {
    icon: IconVariants | any;
    iconBody: string;
}
export interface EventCardProps {
  itemHeading: string;
  itemBody: string;
  itemIcon: EventCardIcon;
  itemTo: string;
  itemDate: string;
}
