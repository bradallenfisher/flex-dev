/** @jsxImportSource theme-ui */

import { CtaButtonVariants } from '@psu-flex/components/src/components/base-components/data-display/Button/CtaButton/CtaButtonTypes';
import { CtaButton, ModalOverlay } from '@psu-flex/psu-global-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import { motion, MotionProps } from 'framer-motion';
import close from './assets/close.svg';
import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';

import {
  FC,
  forwardRef,
  ReactChild,
  ReactNode,
  RefObject,
  useRef,
} from 'react';
import { AriaModalOverlayProps, FocusScope, useDialog } from 'react-aria';
import Image from 'next/image';

export interface ModalProps extends AriaModalOverlayProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  id?: string;
  closeButtonClassName?: { [k: string]: any };
  defaultCloseButtonCss?: boolean;
  containerClassName?: { [k: string]: any };
  defaultCss?: boolean;
  hideButtonClose?: boolean;
  childrenClassName?: { [k: string]: any };
  showArrows?: boolean;
  motionProps?: MotionProps;
  width?:
    | 'narrow'
    | 'ultrawide'
    | 'wide'
    | 'full'
    | 'auto'
    | 'medium'
    | 'large';

  centerVertically?: boolean;
  autoFocus?: boolean;
  ctaVariants?: CtaButtonVariants;
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
}

type DialogProps = Pick<
  ModalProps,
  | 'childrenClassName'
  | 'children'
  | 'containerClassName'
  | 'defaultCss'
  | 'motionProps'
  | 'width'
  | 'defaultCloseButtonCss'
  | 'onClose'
  | 'closeButtonClassName'
  | 'autoFocus'
  | 'showArrows'
  | 'onLeftArrowClick'
  | 'onRightArrowClick'
>;

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      children,
      childrenClassName = {},
      containerClassName,
      defaultCss,
      width = 'narrow',
      motionProps = {},
      showArrows = true,
      defaultCloseButtonCss = true,
      closeButtonClassName,
      onClose,
      autoFocus = true,
      onLeftArrowClick = () => {},
      onRightArrowClick = () => {},
      ...props
    },
    ref
  ) => {
    const { isSm } = useBreakpoints();
    const { dialogProps } = useDialog(
      { ...props },
      ref as RefObject<HTMLDivElement>
    );
    const widthClasses = {
      narrow: {
        width: `${isSm ? 'calc(100% - 2rem)' : '25rem'}`,
      },
      medium: {
        width: `${isSm ? 'calc(100% - 2rem)' : '37.5rem'}`,
      },
      large: {
        width: `${isSm ? 'calc(100% - 2rem)' : '51rem'}`,
      },
      wide: {
        width: `${isSm ? 'calc(100% - 2rem)' : '62.5rem'}`,
      },
      ultrawide: {
        maxWidth: '120rem',
      },
      full: {
        width: '100%',
      },
      auto: {
        width: 'auto',
      },
    };

    const dialogClassName = {
      ...containerClassName,
      ...widthClasses[width],
      ...{
        backgroundColor: 'nittanyNavy',
        overflowY: 'auto',
        position: 'relative',
        zIndex: 9999,
        height: '100vh',
      },
    };

    const childrenWrapper = {
      ...childrenClassName,
      ...{
        padding: `${isSm ? '1.5rem' : '2rem'}`,
        color: 'white',
        marginTop: '2rem',
        backgroundColor: 'nittanyNavy',
        overflowY: 'auto',
        maxHeight: '100vh',
      },
    };

    return (
      <motion.div
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(dialogProps as any)}
        aria-modal="true"
        {...motionProps}
        sx={{ ...dialogClassName }}
      >
        <FocusScope autoFocus={autoFocus}>
          <CtaButton
            variant="primaryFilled"
            extraSx={{
              ...closeButtonClassName,
              ...(defaultCloseButtonCss && {
                paddingX: `${isSm ? '0.75rem' : '1rem'}`,
              }),
              height: '4rem',
              position: 'absolute',
              top: '0px',
              right: '0px',
              border: 'none',
              backgroundColor: 'nittanyNavy',
            }}
            aria-label="Close"
            onPress={onClose}
            size="md"
          >
            <Image src={close} alt="Close" width={40} height={40} />
          </CtaButton>
          {/* @ts-ignore */}
          <div sx={{ ...childrenWrapper }} role={'none'}>
            {children}
          </div>
          {showArrows && (
            <>
              <CtaButton
                variant="primaryFilled"
                extraSx={{
                  ...closeButtonClassName,
                  ...(defaultCloseButtonCss && {
                    paddingX: `${isSm ? '0.75rem' : '1rem'}`,
                  }),
                  height: '4rem',
                  position: 'absolute',
                  bottom: '0px',
                  right: '50px',
                  border: 'none',
                  backgroundColor: 'nittanyNavy',
                }}
                aria-label="Close"
                onPress={onLeftArrowClick}
                size="md"
              >
                <Image src={leftArrow} alt="Close" width={20} height={20} />
              </CtaButton>
              <CtaButton
                variant="primaryFilled"
                extraSx={{
                  ...closeButtonClassName,
                  ...(defaultCloseButtonCss && {
                    paddingX: `${isSm ? '0.75rem' : '1rem'}`,
                  }),
                  height: '4rem',
                  position: 'absolute',
                  bottom: '0px',
                  right: '0px',
                  border: 'none',
                  backgroundColor: 'beaverBlue',
                }}
                aria-label="Close"
                onPress={onRightArrowClick}
                size="md"
              >
                <Image src={rightArrow} alt="Close" width={20} height={20} />
              </CtaButton>{' '}
            </>
          )}
        </FocusScope>
      </motion.div>
    );
  }
);

Dialog.displayName = 'Dialog';

const Modal: FC<ModalProps> = ({
  children,
  childrenClassName,
  containerClassName,
  defaultCss = true,
  motionProps,
  width,
  ...props
}) => {
  const ref = useRef(null);

  return (
    <ModalOverlay {...props} ref={ref}>
      <Dialog
        {...{
          defaultCss,
          containerClassName,
          childrenClassName,
          width,
          motionProps,
          ...props,
        }}
        ref={ref}
      >
        {children}
      </Dialog>
    </ModalOverlay>
  );
};

export const ModalWrapper: FC<ModalProps> = (props) => {
  const { isOpen } = props;
  if (typeof window === 'undefined' || !isOpen) return null;
  return <Modal {...props} />;
};
