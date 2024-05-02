import theme from '@psu-flex/platform-theme';

const { borderWidths, colors } = theme;

export const typePaddingSx = {
  filled: { p: 2 },
  unfilled: {
    p: 0,
    border: 'none !important',
  },
};

export const iconButtonSizeScale = () => ({
  iconSize: [24, 28, 32, 36],
});

export const unfilledVariants = {
  link: {
    iconColor: 'link',
    '&:hover': {
      iconColor: 'nittanyNavy',
    },
    '&:focus-visible': {
      iconColor: 'nittanyNavy',
    },
  },
  nittanyNavy: {
    iconColor: 'nittanyNavy',
    '&:hover': {
      iconColor: 'beaverBlue',
    },
    '&:focus-visible': {
      iconColor: 'beaverBlue',
    },
  },
  linkLight: {
    iconColor: 'linkLight',
    '&:hover': {
      iconColor: 'white',
    },
    '&:focus-visible': {
      iconColor: 'white',
    },
  },
  white: {
    iconColor: 'white',
    '&:hover': {
      iconColor: 'linkLight',
    },
    '&:focus-visible': {
      iconColor: 'linkLight',
    },
  },
  beaverBlue: {
    iconColor: 'beaverBlue',
    '&:hover': {
      iconColor: 'nittanyNavy',
    },
    '&:focus-visible': {
      iconColor: 'nittanyNavy',
    },
  },
};

export const filledVariants = {
  link: {
    backgroundColor: 'link',
    iconColor: 'white',
    border: `${borderWidths['sm']} solid ${colors['link']}`,
    '&:hover': {
      iconColor: 'white',
      backgroundColor: 'nittanyNavy',
      border: `${borderWidths['sm']} solid ${colors['nittanyNavy']}`,
    },
    '&:focus-visible': {
      backgroundColor: 'nittanyNavy',
      iconColor: 'white',
      border: `${borderWidths['sm']} dashed ${colors['white']}`,
    },
  },
  beaverBlue: {
    backgroundColor: 'beaverBlue',
    iconColor: 'white',
    border: `${borderWidths['sm']} solid ${colors['beaverBlue']}`,
    '&:hover': {
      iconColor: 'white',
      backgroundColor: 'nittanyNavy',
      border: `${borderWidths['sm']} solid ${colors['nittanyNavy']}`,
    },
    '&:focus-visible': {
      iconColor: 'white',
      backgroundColor: 'nittanyNavy',
      border: `${borderWidths['sm']} dashed ${colors['white']}`,
    },
  },
  linkLight: {
    backgroundColor: 'linkLight',
    iconColor: 'nittanyNavy',
    border: `${borderWidths['sm']} solid ${colors['linkLight']}`,
    '&:hover': {
      iconColor: 'nittanyNavy',
      backgroundColor: 'white',
      border: `${borderWidths['sm']} solid ${colors['white']}`,
    },
    '&:focus-visible': {
      backgroundColor: 'white',
      border: `${borderWidths['sm']} dashed ${colors['nittanyNavy']}`,
    },
  },
  nittanyNavy: {
    backgroundColor: 'nittanyNavy',
    iconColor: 'white',
    border: `${borderWidths['sm']} solid ${colors['nittanyNavy']}`,
    '&:hover': {
      iconColor: 'white',
      backgroundColor: 'beaverBlue',
      border: `${borderWidths['sm']} solid ${colors['transparent']}`,
    },
    '&:focus-visible': {
      iconColor: 'white',
      backgroundColor: 'beaverBlue',
      border: `${borderWidths['sm']} dashed ${colors['white']}`,
    },
  },
  white: {
    backgroundColor: 'white',
    iconColor: 'nittanyNavy',
    border: `${borderWidths['sm']} solid ${colors['white']}`,
    '&:hover': {
      iconColor: 'nittanyNavy',
      backgroundColor: 'linkLight',
      border: `${borderWidths['sm']} solid ${colors['linkLight']}`,
    },
    '&:focus-visible': {
      iconColor: 'nittanyNavy',
      backgroundColor: 'linkLight',
      border: `${borderWidths['sm']} dashed ${colors['nittanyNavy']}`,
    },
  },
};

export const baseButtonSx = (type, variant) => ({
  outline: 'none',
  borderRadius: '100%',
  ...(type === 'unfilled' && {
    border: '0px',
    backgroundColor: 'transparent',
  }),
  '&:hover > span > svg > path': {
    fill:
      type === 'filled'
        ? filledVariants[variant]['&:hover']?.iconColor
        : unfilledVariants[variant]['&:hover']?.iconColor,
  },
  '&:focus-visible > span > svg > path': {
    fill:
      type === 'filled'
        ? filledVariants[variant]['&:hover']?.iconColor
        : unfilledVariants[variant]['&:hover']?.iconColor,
  },
});
