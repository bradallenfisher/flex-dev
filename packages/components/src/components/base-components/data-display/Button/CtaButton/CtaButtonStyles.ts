import theme from '@psu-flex/platform-theme';
const { colors, borderWidths } = theme;

export const ctaSizeObj = (endIcon) => ({
  sm: {
    py: 3,
    pl: 6,
    pr: endIcon ? 4 : 6,
  },
  md: {
    py: 4,
    pl: 13,
    pr: endIcon ? 11 : 13,
  },
});

const baseCtaSx = {
  borderRadius: 'xs',
  fontFamily: 'sans',
};

export const ctaButtonVariants = {
  primaryOutlined: {
    ...baseCtaSx,
    color: 'link',
    backgroundColor: 'transparent',
    border: `${borderWidths['sm']} solid ${colors['link']}`,
    '&:hover': {
      color: `white`,
      backgroundColor: 'link',
      border: `${borderWidths['sm']} solid ${colors['link']}`,
    },
    '&:focus-visible': {
      color: `white`,
      backgroundColor: 'link',
      border: `${borderWidths['sm']} dashed ${colors['white']}`,
    },
  },

  primaryFilled: {
    ...baseCtaSx,
    color: 'white',
    backgroundColor: 'link',
    border: `${borderWidths['sm']} solid ${colors['link']}`,
    '&:hover': {
      color: 'white',
      backgroundColor: 'nittanyNavy',
      border: `${borderWidths['sm']} solid ${colors['nittanyNavy']}`,
    },
    '&:focus-visible': {
      color: `white`,
      backgroundColor: 'nittanyNavy',
      border: `${borderWidths['sm']} dashed ${colors['white']}`,
    },
  },

  lightOutlined: {
    ...baseCtaSx,
    color: 'linkLight',
    backgroundColor: 'transparent',
    border: `${borderWidths['sm']} solid ${colors['linkLight']}`,
    '&:hover': {
      color: `nittanyNavy`,
      backgroundColor: 'linkLight',
      border: `${borderWidths['sm']} solid ${colors['linkLight']}`,
    },
    '&:focus-visible': {
      color: `nittanyNavy`,
      backgroundColor: 'linkLight',
      border: `${borderWidths['sm']} dashed ${colors['nittanyNavy']}`,
    },
  },

  lightFilled: {
    ...baseCtaSx,
    color: 'nittanyNavy',
    backgroundColor: 'linkLight',
    border: `${borderWidths['sm']} solid ${colors['linkLight']}`,
    '&:hover': {
      color: 'nittanyNavy',
      backgroundColor: 'white',
      border: `${borderWidths['sm']} solid ${colors['white']}`,
    },
    '&:focus-visible': {
      color: `nittanyNavy`,
      backgroundColor: 'white',
      border: `${borderWidths['sm']} dashed ${colors['nittanyNavy']}`,
    },
  },

  whiteOutlined: {
    ...baseCtaSx,
    color: 'white',
    backgroundColor: 'transparent',
    border: `${borderWidths['sm']} solid ${colors['white']}`,
    '&:hover': {
      color: 'nittanyNavy',
      backgroundColor: 'white',
      border: `${borderWidths['sm']} solid ${colors['white']}`,
    },
    '&:focus-visible': {
      color: `nittanyNavy`,
      backgroundColor: 'white',
      border: `${borderWidths['sm']} dashed ${colors['nittanyNavy']}`,
    },
  },

  whiteFilled: {
    ...baseCtaSx,
    color: 'nittanyNavy',
    backgroundColor: 'white',
    border: `${borderWidths['sm']} solid ${colors['white']}`,
    '&:hover': {
      color: 'nittanyNavy',
      backgroundColor: 'linkLight',
      border: `${borderWidths['sm']} solid ${colors['linkLight']}`,
    },
    '&:focus-visible': {
      color: `nittanyNavy`,
      backgroundColor: 'linkLight',
      border: `${borderWidths['sm']} dashed ${colors['nittanyNavy']}`,
    },
  },

  skyLightFilled: {
    ...baseCtaSx,
    color: 'inherit',
    backgroundColor: 'skyLight',
    border: 'none',
  },
};
