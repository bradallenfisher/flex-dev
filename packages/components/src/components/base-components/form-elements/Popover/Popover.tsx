/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
/**
 * 

Use Popover to present your design and content as clearly and efficiently as possible.

<br>
<br>
<h3>Basic Popover</h3>
*/

export interface Popover {
  className?: string;
}

import { DismissButton, usePopover, Overlay } from 'react-aria';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export function Popover({
  children,
  state,
  offset = 8,
  ...props
}: PopoverProps) {
  let popoverRef = React.useRef(null);
  let { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <div className="absolute">
      <div {...underlayProps} />
      <div {...popoverProps} ref={popoverRef}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </div>
  );
}
