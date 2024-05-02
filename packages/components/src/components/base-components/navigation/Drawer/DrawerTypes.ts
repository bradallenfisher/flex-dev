import { MouseEventHandler } from 'react';
import { Backdrops, Colors, Transitions } from '@psu-flex/platform-theme';
import { drawerSizes } from './Drawer';
import { BaseProps } from '@psu-flex/common-ui';

export interface DrawerProps extends BaseProps {
  /**If true, the component is shown. Passed to Backdrop wrapper*/
  isOpen: boolean;
  /**Callback fired when the Drawer is closed. Passed to Backdrop wrapper*/
  onClose: MouseEventHandler<HTMLDivElement>;
  /**Side from which the drawer will appear*/
  anchor?: 'top' | 'right';
  /**Backdrop token for backdrop opacity. Passed to Backdrop wrapper*/
  backdrop?: Backdrops;
  /**% Width or height that the Drawer takes up on page */
  size?: keyof typeof drawerSizes;
  /**Transition for when drawer is rendered */
  transition?: Transitions;
  /**backgroundColor of Drawer surface */
  backgroundColor?: Colors;
}
