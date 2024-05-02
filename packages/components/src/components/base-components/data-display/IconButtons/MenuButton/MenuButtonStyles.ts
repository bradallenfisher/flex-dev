export const baseSx = {
  outline: 'none',
  cursor: 'pointer',
  height: 'fit-content',
};

export const menuButtonSizeObj = {
  sm: { iconSize: 28, p: 0 },
};

export const menuButtonVariants = {
  transparent: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'xs',
    borderColor: 'transparent',
    borderStyle: 'solid',
    '&:hover': {
      color: 'nittanyNavy',
      backgroundColor: 'linkLight',
    },
    '&:focus-visible': {
      color: 'nittanyNavy',
      backgroundColor: 'linkLight',
      borderColor: 'nittanyNavy',
      borderStyle: 'dashed',
    },
  },
};

//targets icon color
export const iconSx = (variant) => ({
  '& > span > svg > path': {
    fill: menuButtonVariants[variant].color,
  },
  '&:hover > span > svg > path': {
    fill: menuButtonVariants[variant]['&:hover'].color,
  },
  '&:focus-visible > span > svg > path': {
    fill: menuButtonVariants[variant]['&:focus-visible'].color,
  },
});
