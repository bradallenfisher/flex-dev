/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useOverlay } from 'react-aria';
import { useEscapeKey } from '@psu-flex/utility-hooks';
import * as React from 'react';

export function Popover({ children, state, ...props }) {
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
      className="w-full absolute left-0 fade-standard-fast"
      sx={{
        top: 'calc(100% + 8px)',
        zIndex: 100000,
        borderWidth: 'xs',
        borderStyle: 'solid',
        borderRadius: 'xs',
        borderColor: 'limestoneGray',
        backgroundColor: 'white',
        maxHeight: '275px',
        margin: 0,
        overflow: 'auto',
        left: 0,
      }}
    >
      {children}
    </div>
  );
}
