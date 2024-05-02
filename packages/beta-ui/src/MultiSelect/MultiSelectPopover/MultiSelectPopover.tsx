/** @jsxImportSource theme-ui */
import React from 'react';
import { useClickOutside, useEscapeKey } from '@psu-flex/utility-hooks';

export function MultiSelectPopover({ children, state, ...props }: any) {
  let popoverRef = React.useRef(null);
  const onClose = state?.setIsOpen;

  useClickOutside(popoverRef, onClose);
  useEscapeKey(onClose);

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
