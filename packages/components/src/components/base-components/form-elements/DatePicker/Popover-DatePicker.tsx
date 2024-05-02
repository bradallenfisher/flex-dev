/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { DismissButton, Overlay, usePopover } from 'react-aria';
import { AriaPopoverProps } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';
import React from 'react';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export function Popover({
  children,
  state,
  offset = 24,
  ...props
}: PopoverProps) {
  let popoverRef = React.useRef(null);
  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
      offset,
    },
    state
  );

  return (
    <Overlay>
      <div className="fixed" {...underlayProps} sx={{ inset: 0 }} />
      <div
        {...popoverProps}
        ref={popoverRef}
        sx={{
          ...popoverProps.style,
          background: 'white',
          borderRadius: 'xs',
          boxShadow: 'sm-1',
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
