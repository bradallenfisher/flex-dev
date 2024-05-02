import { MouseEventHandler } from 'react';
import { Backdrops, Transitions } from '@psu-flex/platform-theme';
import { BaseProps } from '@psu-flex/common-ui';
export interface BackdropProps extends BaseProps {
  /**If true, the component is shown. */
  isOpen?: boolean;
  /**The component used for the transition. Follow this guide to learn more about the requirements for this component. */
  transition?: Transitions;
  /**Callback fired when the backdrop is closed*/
  onClose?: MouseEventHandler<any> | any;
  /**Token for backdrop opacity. Base color is coalyGray */
  backdrop?: Backdrops;
  /**The component used for the root node. Either a string to use a HTML element or a component. */
  tag?: 'div' | 'span';
}
