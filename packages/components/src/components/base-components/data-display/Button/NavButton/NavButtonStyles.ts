import theme from '@psu-flex/platform-theme';
const { borderWidths, colors } = theme;
const baseNavSx = {
  borderRadius: 'rounded',
  fontFamily: 'sans',
  fontWeight: 'regular',
};

export const navButtonVariants = {
  linkOutlined: {
    ...baseNavSx,
    backgroundColor: 'transparent',
    color: 'link',
    border: `${borderWidths['sm']} solid ${colors['link']}`,
    '&:hover': {
      color: 'white',
      border: `${borderWidths['sm']} solid ${colors['link']}`, //will need to know if haley is going to add this color?
      backgroundColor: `${colors['link']}`,
    },
    '&:focus-visible': {
      color: `white`,
      border: `${borderWidths['sm']} dashed ${colors['white']}`, //will need to know if haley is going to add this color?
      backgroundColor: `${colors['link']}`,
    },
  },
  lightOutlined: {
    ...baseNavSx,
    backgroundColor: 'transparent',
    color: 'linkLight',
    border: `${borderWidths['sm']} solid ${colors['linkLight']}`,
    '&:hover': {
      color: 'nittanyNavy',
      border: `${borderWidths['sm']} solid ${colors['linkLight']}`, //will need to know if haley is going to add this color?
      backgroundColor: `${colors['linkLight']}`,
    },
    '&:focus-visible': {
      color: 'nittanyNavy',
      border: `${borderWidths['sm']} dashed ${colors['nittanyNavy']}`, //will need to know if haley is going to add this color?
      backgroundColor: `${colors['linkLight']}`,
    },
  },
};

export const navSizeObj = {
  sm: {
    py: 1,
    px: 4,
  },
};
