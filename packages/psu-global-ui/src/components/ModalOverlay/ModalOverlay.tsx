/** @jsxImportSource theme-ui */

import React from 'react';
import {
  AriaModalOverlayProps,
  Overlay,
  useModalOverlay,
  usePress,
} from 'react-aria';

interface ModalOverlayProps extends AriaModalOverlayProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  id?: string;
  centerVertically?: boolean;
}

export const ModalOverlay = React.forwardRef<HTMLDivElement, ModalOverlayProps>(
  (props, ref) => {
    const { onClose, isOpen, children, centerVertically = true } = props;
    const { modalProps, underlayProps } = useModalOverlay(
      props,
      {
        isOpen,
        setOpen: () => null,
        open: () => null,
        close: onClose,
        toggle: () => null,
      },
      ref as React.RefObject<HTMLDivElement>
    );
    const { pressProps } = usePress({ onPress: onClose });
    return (
      <Overlay portalContainer={document.body}>
        <div
          {...underlayProps}
          {...modalProps}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100vw',
            inset: '0px',
            position: 'fixed',
            zIndex: 9998,
            overflowY: 'auto',
          }}
          id={props.id}
        >
          {children}
          <div
            {...pressProps}
            sx={{
              position: 'fixed',
              height: '100%',
              inset: '0px',
            }}
          />
        </div>
      </Overlay>
    );
  }
);
