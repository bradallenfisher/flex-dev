export const getFilterBorderSx = (props, isFilterFocused) => {
  return {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: 'limestoneGray',
    '&:hover': {
      borderColor: 'beaverBlue',
    },
    //input is focused
    ...(isFilterFocused && {
      borderColor: 'beaverBlue',
      boxShadow:
        '0px 0px 0px 4px rgba(48, 138, 255, 0.20), 0px 1px 2px 0px rgba(16, 26, 40, 0.05)',
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

export const formFilterSizeObj = {
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

export const getFilterSx = (fieldSize, props) => {
  return {
    width: '100%',
    backgroundColor: 'white',
    outline: 'none',
    variant: formFilterSizeObj[fieldSize]?.variant,
    ...(props?.placeholder && {
      '&::placeholder': {
        color: 'limestoneGray',
        fontStyle: 'normal',
      },
    }),
    minWidth: '320px',
    '&::placeholder': {
      fontStyle: 'normal',
    },
  };
};
