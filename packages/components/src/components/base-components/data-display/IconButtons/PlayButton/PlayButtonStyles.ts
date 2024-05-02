export const playButtonSizeScale = (variant) => ({
  p:
    variant === 'whiteOutlined'
      ? ['5px', '7px', '9px', '11px']
      : ['7px', '9px', '11px', '13px'],
  iconSize: [16, 20, 24, 32],
});

export const playButtonVariants = {
  nittanyNavy: {
    iconColor: 'white',
    borderWidth: 'xs',
    borderColor: 'transparent',
    backgroundColor: 'nittanyNavy',
    '&:hover': {
      backgroundColor: 'beaverBlue',
      iconColor: 'white',
    },
    '&:focus-visible': {
      backgroundColor: 'beaverBlue',
      iconColor: 'white',
      borderColor: 'white',
      borderStyle: 'dashed',
    },
  },
  beaverBlue: {
    iconColor: 'white',
    backgroundColor: 'beaverBlue',
    borderWidth: 'xs',
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: 'nittanyNavy',
      iconColor: 'white',
    },
    '&:focus-visible': {
      backgroundColor: 'nittanyNavy',
      iconColor: 'white',
      borderStyle: 'dashed',
      borderColor: 'white',
    },
  },
  whiteFilled: {
    backgroundColor: 'white85',
    borderColor: 'transparent',
    borderWidth: 'xs',
    iconColor: 'nittanyNavy',
    '&:hover': {
      iconColor: 'nittanyNavy',
      backgroundColor: 'white',
    },
    '&:focus-visible': {
      backgroundColor: 'white',
      borderColor: 'nittanyNavy',
      iconColor: 'nittanyNavy',
      borderStyle: 'dashed',
    },
  },
  whiteOutlined: {
    backgroundColor: 'transparent',
    borderColor: 'white85',
    borderWidth: 'md',
    iconColor: 'white85',
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: 'white',
      iconColor: 'white',
    },
    '&:focus-visible': {
      backgroundColor: 'link',
      borderColor: 'white',
      iconColor: 'white',
    },
  },
};

export const baseSx = {
  outline: 'none',
  height: 'fit-content',
  cursor: 'pointer',
  borderRadius: '100%',
  borderWidth: 'xs',
  borderStyle: 'solid',
  borderColor: 'transparent',
  backgroundColor: 'transparent',
};

//targets icon color
export const iconSx = (variant) => ({
  '& > span > svg > path': {
    fill: playButtonVariants[variant].iconColor,
  },
  '&:focus-visible > span > svg > path': {
    fill: playButtonVariants[variant]['&:focus-visible'].iconColor,
  },
  '&:hover > span > svg > path': {
    fill: playButtonVariants[variant]['&:hover'].iconColor,
  },
});
