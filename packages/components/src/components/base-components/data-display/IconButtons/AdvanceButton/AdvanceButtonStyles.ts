export const advanceButtonSizeScale = () => ({
  iconSize: [16, 20, 24, 28],
});

export const advanceButtonVariants = {
  nittanyNavy: {
    iconColor: 'white',
    backgroundColor: 'navy80',
    borderColor: 'white',
    '&:hover': {
      backgroundColor: 'nittanyNavy',
      iconColor: 'white',
    },
    '&:focus-visible': {
      iconColor: 'white',
      backgroundColor: 'nittanyNavy',
      borderColor: 'white',
      borderStyle: 'dashed',
    },
  },
  white: {
    iconColor: 'white65',
    borderColor: 'white65',
    backgroundColor: 'transparent',
    '&:hover': {
      iconColor: 'white',
      borderColor: 'white',
    },
    '&:focus-visible': {
      iconColor: 'white',
      borderColor: 'white',
      borderStyle: 'dashed',
    },
  },
};

export const getBaseSx = (direction) => {
  return {
    outline: 'none',
    height: 'fit-content',
    py: '6px',
    pl: direction === 'left' ? '5px' : '7px',
    pr: direction === 'left' ? '7px' : '5px',
    cursor: 'pointer',
    borderRadius: '100%',
    borderWidth: 'sm',
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    boxShadow: 'sm-1',
  };
};

export const getIconStyles = (variant) => {
  return {
    '& > span > svg > path': {
      fill: advanceButtonVariants[variant].iconColor,
    },
    '&:focus-visible > span > svg > path': {
      fill: advanceButtonVariants[variant]['&:focus-visible'].iconColor,
    },
    '&:hover > span > svg > path': {
      fill: advanceButtonVariants[variant]['&:hover'].iconColor,
    },
  };
};
