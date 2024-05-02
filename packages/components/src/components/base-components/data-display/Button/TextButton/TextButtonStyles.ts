export const textBaseSx = {
  border: 'none',
  fontStyle: 'normal',
};

export const textButtonVariants = {
  primary: {
    ...textBaseSx,
    color: 'link',
    backgroundColor: 'transparent',
    '&:hover': {
      color: `nittanyNavy`,
      backgroundColor: 'transparent',
    },
    '&:focus-visible': {
      color: `nittanyNavy`,
      backgroundColor: 'linkLight',
    },
  },

  light: {
    ...textBaseSx,
    color: 'linkLight',
    backgroundColor: 'transparent',
    '&:hover': {
      color: `white`,
      backgroundColor: 'transparent',
    },
    '&:focus-visible': {
      color: `nittanyNavy`,
      backgroundColor: 'linkLight',
    },
  },
};
