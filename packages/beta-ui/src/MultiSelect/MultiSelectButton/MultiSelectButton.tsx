/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useButton } from 'react-aria';
import { MultiSelectButtonProps } from './MultiSelectButtonTypes';

export const MultiSelectButton = (props: MultiSelectButtonProps | any) => {
  const { extraSx, buttonRef, children, size } = props;

  const sizeObj = {
    sm: {
      buttonSize: {
        py: 2,
      },
      fontSize: 16,
    },
    md: {
      buttonSize: {
        py: 3,
      },
      fontSize: 18,
    },
    lg: {
      buttonSize: {
        py: 4,
      },
      fontSize: 18,
    },
  };

  const selectButtonSx = {
    cursor: props?.isDisabled ? 'auto' : 'pointer',
    color: props?.isDisabled ? 'limestoneGray' : 'coalyGray',
    width: '100%',
    maxWidth: '320px',
    minWidth: '320px',
    borderWidth: 'xs',
    borderStyle: 'solid',
    borderRadius: 'xs',
    // @ts-ignore
    borderColor: 'limestoneGray',
    backgroundColor: 'white',
    variant: `text.bodyStyle.full.${sizeObj[size].fontSize}`,
    ...extraSx,
    ...sizeObj[size].buttonSize,
    px: 4,
    '&:hover': {
      backgroundColor: props.isDisabled ? null : 'limestoneMaxLight',
    },
    //if errors & input is focused
    '&:focus': {
      borderColor: 'beaverBlue',
      boxShadow:
        '0px 0px 0px 4px rgba(48, 138, 255, 0.20), 0px 1px 2px 0px rgba(16, 26, 40, 0.05)',
    },
  };

  let ref = buttonRef;
  let { buttonProps } = useButton(props, ref);
  return (
    <button
      {...props}
      {...buttonProps}
      ref={ref}
      sx={{
        ...selectButtonSx,
      }}
    >
      {children}
    </button>
  );
};
