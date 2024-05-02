const baseCtaSx = {
  borderRadius: '0px',
  variant: 'text.menu.list.16',
};

export const searchCtaVariants = {
  linkLight: {
    ...baseCtaSx,
    backgroundColor: 'linkLight',
    color: 'nittanyNavy',
    borderWidth: 'xs',
    borderStyle: 'solid',
    borderColor: 'transparent',
    '&:hover': {
      color: `nittanyNavy`,
      backgroundColor: 'white',
    },
    '&:focus': {
      color: `nittanyNavy`,
      backgroundColor: 'white',
      borderStyle: 'dashed',
      borderColor: 'nittanyNavy',
    },
  },
  linkLightOutlined: {
    ...baseCtaSx,
    backgroundColor: 'transparent',
    color: 'linkLight',
    borderWidth: 'sm',
    borderStyle: 'solid',
    borderColor: 'linkLight',
    '&:hover': {
      color: `nittanyNavy`,
      backgroundColor: 'linkLight',
    },
    '&:focus': {
      color: `nittanyNavy`,
      backgroundColor: 'linkLight',
      borderStyle: 'dashed',
      borderColor: 'nittanyNavy',
    },
  },
};

export const searchCtaSizeObj = {
  sm: {
    py: '3px',
    px: '30.25px',
  },
};
