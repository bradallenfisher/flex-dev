import theme from '@psu-flex/platform-theme';

export const wideSizeObj = {
  md: {
    py: 3,
    px: 7,
  },
};

const { colors, borderWidths } = theme;

export const baseWideSx = {
  fontFamily: 'sans',
  width: '100%',
};

const pughBlueVariant = {
  color: 'nittanyNavy',
  backgroundColor: 'pughBlue',
  border: `${borderWidths['sm']} solid ${colors['pughBlue']}`,
  '&:hover': {
    color: `pughBlue`,
    backgroundColor: 'nittanyNavy',
    border: `${borderWidths['sm']} solid ${colors['nittanyNavy']}`,
  },
  '&:focus-visible': {
    color: `pughBlue`,
    backgroundColor: 'nittanyNavy',
    border: `${borderWidths['sm']} dashed ${colors['pughBlue']}`,
  },
};

const beaverBlueVariant = {
  color: 'white',
  backgroundColor: 'beaverBlue',
  border: `${borderWidths['sm']} solid ${colors['beaverBlue']}`,
  '&:hover': {
    color: `white`,
    backgroundColor: 'nittanyNavy',
    border: `${borderWidths['sm']} solid ${colors['nittanyNavy']}`,
  },
  '&:focus-visible': {
    color: `white`,
    backgroundColor: 'nittanyNavy',
    border: `${borderWidths['sm']} dashed ${colors['white']}`,
  },
};

const linkLightVariant = {
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
};

const whiteVariant = {
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
};

export const wideButtonVariants = {
  pughBlueRounded: {
    ...baseWideSx,
    ...pughBlueVariant,
    borderRadius: 'rounded',
  },

  pughBlueSquared: {
    ...baseWideSx,
    ...pughBlueVariant,
  },

  beaverBlueRounded: {
    ...baseWideSx,
    ...beaverBlueVariant,
    borderRadius: 'rounded',
  },

  beaverBlueSquared: {
    ...baseWideSx,
    ...beaverBlueVariant,
  },

  linkLightRounded: {
    ...baseWideSx,
    ...linkLightVariant,
    borderRadius: 'rounded',
  },

  linkLightSquared: {
    ...baseWideSx,
    ...linkLightVariant,
  },

  whiteRounded: {
    ...baseWideSx,
    ...whiteVariant,
    borderRadius: 'rounded',
  },

  whiteSquared: {
    ...baseWideSx,
    ...whiteVariant,
  },
};
