/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { FocusScope } from '@react-aria/focus';
import { transitions } from '@psu-flex/platform-theme';
import { WithChildren } from '@psu-flex/common-ui';
import { Wrapper, Container } from '../../layout';
import { Backdrop } from '../../feedback';
import { DrawerProps } from './DrawerTypes';

export const drawerSizes = {
  sm: '33%',
  md: '66%',
  full: '100%',
};

/**
 *
The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as a slide out menu.

```jsx
      <CtaButton onClick={setIsDrawerOpen} variant="primaryFilled">
        Show Drawer
      </CtaButton>
      <Drawer onClose={setIsDrawerOpen} isOpen={isDrawerOpen}>
        ...
      </Drawer>
```
*/

export const Drawer = ({
  anchor = 'right',
  isOpen = false,
  onClose,
  backdrop = '50',
  transition = 'slide',
  backgroundColor = 'white',
  size = 'full',
  ...props
}: WithChildren<DrawerProps>) => {
  const { extraSx, ...rest } = props;

  const baseSx = {
    background: backgroundColor,
    top: 0,
    boxShadow: 'xl-1',
    zIndex: '9999',
    position: 'fixed' as any,
    overflowY: 'scroll' as any,
  };

  const anchorVariants = {
    top: {
      top: 0,
      height: drawerSizes[size],
      width: '100%',
      transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    },
    right: {
      right: 0,
      width: drawerSizes[size],
      height: '100%',
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    },
  };

  return (
    <React.Fragment>
      {isOpen && (
        <Backdrop backdrop={backdrop} isOpen={isOpen} onClose={onClose} />
      )}
      <div
        {...rest}
        sx={{
          ...anchorVariants[anchor],
          ...baseSx,
          ...extraSx,
          transition: transitions[transition],
        }}
      >
        <Container>
          <Wrapper>
            {isOpen && (
              <FocusScope contain autoFocus restoreFocus>
                {props.children}
              </FocusScope>
            )}
          </Wrapper>
        </Container>
      </div>
    </React.Fragment>
  );
};
