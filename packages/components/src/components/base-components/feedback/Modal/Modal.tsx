/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { WithChildren } from '@psu-flex/common-ui';
import { ModalProps } from './ModalTypes';
import { useEscapeKey } from '@psu-flex/utility-hooks';
import { useEffect, useRef } from 'react';
import { modalButtonStyles } from './ModalStyles';
import { Backdrop } from '../Backdrop/Backdrop';

export const Modal = ({
  isOpen,
  onClose,
  hasCloseButton = true,
  dismissable = false,
  ...props
}: WithChildren<ModalProps>) => {
  const { extraSx, children, ...rest } = props;
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  useEscapeKey(onClose);

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={dismissable && onClose}>
        <dialog
          className="fixed fade-scale-up-fast-sm"
          sx={{
            maxHeight: 'calc(100% - 2em - 80px)',
            maxWidth: [
              'calc(100% - 2em - 40px)',
              'calc(100% - 2em - 120px)',
              'calc(100% - 2em - 520px)',
              'calc(100% - 2em - 1000px)',
            ],
            padding: 4,
            borderRadius: 'xs',
            borderWidth: 0,
            boxShadow: 'sm-1',
            ...extraSx,
          }}
          ref={modalRef}
          {...rest}
        >
          {children}
          {hasCloseButton && (
            <button
              className="uppercase underline pointer"
              sx={{
                ...modalButtonStyles,
                '&:focus-visible': {
                  outline: '1px dashed #005FA9',
                  outlineOffset: '2px',
                },
              }}
              onClick={onClose}
            >
              Close
            </button>
          )}
        </dialog>
      </Backdrop>
    </>
  );
};
