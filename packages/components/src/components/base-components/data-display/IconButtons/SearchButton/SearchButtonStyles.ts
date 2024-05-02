export const baseSx = {
  outline: 'none',
  cursor: 'pointer',
  borderRadius: '100%',
};

export const searchButtonSizeObj = {
  sm: { iconSize: 20, p: 1 },
};

export const searchButtonVariants = {
  transparent: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'xs',
    borderColor: 'transparent',
    borderStyle: 'dashed',
    '&:hover': {
      backgroundColor: 'nittanyNavy',
    },
    '&:focus-visible': {
      backgroundColor: 'nittanyNavy',
      borderColor: 'white',
    },
  },
};

//targets icon color
export const iconSx = (variant) => ({
  '& > span > svg > path': {
    fill: searchButtonVariants[variant].color,
  },
});
