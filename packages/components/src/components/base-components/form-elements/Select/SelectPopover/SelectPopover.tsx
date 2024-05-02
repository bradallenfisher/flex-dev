import { useOverlay } from 'react-aria';
import React from 'react';
import { PopoverProps } from './SelectPopoverTypes';
import { useEscapeKey } from '@psu-flex/utility-hooks';

export function SelectPopover({ children, state, ...props }: PopoverProps) {
  let popoverRef = React.useRef(null);
  const onClose = state.close;
  const isOpen = state.isOpen;
  useOverlay(
    {
      onClose,
      isOpen,
      isDismissable: true,
    },
    popoverRef
  );
  useEscapeKey(state.close);

  return (
    <div
      ref={popoverRef}
      className="absolute left-0"
      style={{ top: 'calc(100% + 8px)', zIndex: 100000 }}
    >
      {children}
    </div>
  );
}
