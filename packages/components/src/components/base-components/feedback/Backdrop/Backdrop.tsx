/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { backdrops, transitions } from '@psu-flex/platform-theme';
import { WithChildren } from '@psu-flex/common-ui';
import { BackdropProps } from './BackdropTypes';

/** The Backdrop signals a state change within the application and can be used for creating loaders, dialogs, and more. The Backdrop component will add a dimmed layer over your application.

```jsx
        <Backdrop onClose={handleToggleBackdrop} isOpen={isBackdropOpen}>
          ...
        </Backdrop>
```
*/

const baseSx = {
  width: '100%',
  height: '100%',
  zIndex: 100,
  top: 0,
  right: 0,
};

export const Backdrop = ({
  isOpen,
  transition,
  backdrop = '50',
  onClose,
  tag: Tag = 'div',
  ...props
}: WithChildren<BackdropProps>) => {
  const { extraSx, children, ...rest } = props;

  return (
    <Tag
      onClick={onClose}
      sx={{
        ...extraSx,
        ...(transitions && transitions[transition as any]),
        ...(isOpen && { ...backdrops[backdrop], ...baseSx, position: 'fixed' }),
      }}
      {...rest}
    >
      {isOpen && children}
    </Tag>
  );
};
