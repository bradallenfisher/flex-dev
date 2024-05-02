import { AriaPopoverProps } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}
