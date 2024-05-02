export const formAreaSizeObj = {
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

export const getFieldBorderStyles = (props) => {
  const label = props?.label;
  const errors = props?.errors;
  const isAreaFocused = props?.isAreaFocused;

  return {
    borderWidth: 'xs',
    borderStyle: 'solid',
    borderRadius: 'xs',
    borderColor: 'limestoneGray',
    '&:hover': {
      borderColor: 'beaverBlue',
    },
    ...(errors[label] && {
      borderColor: 'original87Pink',
    }),
    ...(isAreaFocused && {
      borderColor: 'beaverBlue',
      boxShadow:
        '0px 0px 0px 4px rgba(48, 138, 255, 0.20), 0px 1px 2px 0px rgba(16, 26, 40, 0.05)',
    }),
    ...(errors[label] &&
      isAreaFocused && {
        borderColor: 'original87Pink',
        boxShadow:
          '0px 0px 0px 4px rgba(255, 17, 0, 0.15), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }),
    ...(props?.isDisabled && {
      backgroundColor: 'limestoneLight',
      '&:hover': {
        borderColor: 'limestoneGray',
      },
    }),
  };
};

export const getFieldAreaStyles = (props, areaSize) => {
  return {
    outline: 'none',
    backgroundColor: 'white',
    width: '100%',
    minWidth: '320px',
    variant: formAreaSizeObj[areaSize]?.variant,
    ...(props?.placeholder && {
      '&::placeholder': {
        color: 'limestoneGray',
        fontStyle: 'normal',
      },
    }),
  };
};
