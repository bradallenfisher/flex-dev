export const getFieldBorderSx = (props, errors, label, isInputFocused) => {
  return {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: 'limestoneGray',
    '&:hover': {
      borderColor: 'beaverBlue',
    },
    //if validationErrors are not empty
    ...(errors[label] && {
      borderColor: 'original87Pink',
    }),
    //input is focused
    ...(isInputFocused && {
      borderColor: 'beaverBlue',
      boxShadow:
        '0px 0px 0px 4px rgba(48, 138, 255, 0.20), 0px 1px 2px 0px rgba(16, 26, 40, 0.05)',
    }),
    //if validationErrors are not empty & input is focused
    ...(errors[label] &&
      isInputFocused && {
        borderColor: 'original87Pink',
        boxShadow:
          '0px 0px 0px 4px rgba(255, 17, 0, 0.15), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }),
    //if isDisabled is passed to the field
    ...(props?.isDisabled && {
      backgroundColor: 'limestoneLight',
      '&:hover': {
        borderColor: 'limestoneGray',
      },
    }),
  };
};

export const formFieldSizeObj = {
  sm: {
    py: 2,
    px: 3,
    variant: 'text.bodyStyle.full.16',
  },
  md: {
    py: 3,
    px: 4,
    variant: 'text.bodyStyle.full.18',
  },
};

export const getFieldSx = (fieldSize, props) => {
  return {
    width: '100%',
    backgroundColor: 'white',
    outline: 'none',
    variant: formFieldSizeObj[fieldSize]?.variant,
    ...(props?.placeholder && {
      '&::placeholder': {
        color: 'limestoneGray',
        fontStyle: 'normal',
      },
    }),
    minWidth: '320px',
  };
};
