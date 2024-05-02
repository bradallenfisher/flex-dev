export const closeButtonSizeScale = () => ({
  iconSize: [28, 32, 36, 40],
});

export const closeButtonVariants = {
  link: {
    iconColor: 'link',
    '&:hover': {
      backgroundColor: 'link',
      iconColor: 'white',
    },
    '&:focus-visible': {
      iconColor: 'white',
      backgroundColor: 'link',
      borderColor: 'link',
      borderStyle: 'dashed',
    },
  },
  nittanyNavy: {
    iconColor: 'nittanyNavy',
    '&:hover': {
      backgroundColor: 'nittanyNavy',
      iconColor: 'white',
    },
    '&:focus-visible': {
      backgroundColor: 'nittanyNavy',
      iconColor: 'white',
      borderColor: 'nittanyNavy',
      borderStyle: 'dashed',
    },
  },
  linkLight: {
    iconColor: 'linkLight',
    '&:hover': {
      backgroundColor: 'linkLight',
      iconColor: 'nittanyNavy',
    },
    '&:focus-visible': {
      backgroundColor: 'linkLight',
      borderColor: 'nittanyNavy',
      iconColor: 'nittanyNavy',
      borderStyle: 'dashed',
    },
  },
  white: {
    iconColor: 'white',
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
  coalyGray: {
    iconColor: 'coalyGray',
    '&:hover': {
      iconColor: 'white',
      backgroundColor: 'coalyGray',
    },
    '&:focus-visible': {
      iconColor: 'white',
      backgroundColor: 'coalyGray',
      borderColor: 'coalyGray',
      borderStyle: 'dashed',
    },
  },
};

export const baseSx = {
  outline: 'none',
  height: 'fit-content',
  p: 0,
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
    fill: closeButtonVariants[variant].iconColor,
  },
  '&:focus-visible > span > svg > path': {
    fill: closeButtonVariants[variant]['&:focus-visible'].iconColor,
  },
  '&:hover > span > svg > path': {
    fill: closeButtonVariants[variant]['&:hover'].iconColor,
  },
});
