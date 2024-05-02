export const cardSx = {
  pr: [0, 0, 4, 4],
  px: [6, 8, 0, 0],
  pt: [4, 4, 0, 0],
  boxShadow: ['sm-1', 'sm-1', 'unset', 'unset'],
};

export const headingSx = {
  mb: [2, 2, 4, 4],
};

export const linkSx = (item, slug) => ({
  fontFamily: 'condensed',
  fontWeight: 'medium',
  fontSize: 18,
  lineHeight: '140',
  cursor: 'pointer',
  ':hover': {
    color: slug === item.to ? 'none' : 'link',
  },
  '@media screen and (min-width: 1080px)': {
    borderLeft: slug === item.to && '4px solid',
    borderColor: 'accent',
    color: 'coalyGray',
    pl: slug === item.to ? 1 : 2,
    display: 'inline-block',
  },
  '@media screen and (max-width: 1079px)': {
    color: slug === item.to && 'link',
    width: '100%',
    display: 'block',
    py: 2,
  },
});

export const dropDownSx = (item, slug) => ({
  fontFamily: 'condensed',
  fontWeight: 'medium',
  fontSize: 18,
  lineHeight: '140',
  cursor: 'pointer',
  ':hover': {
    color: slug === item.to ? 'none' : 'link',
  },
  '@media screen and (min-width: 1080px)': {
    borderLeft: slug === item.to && '2px solid ',
    borderColor: slug === item.to && 'accent',
    color: slug === item.to && 'coalyGray',
    pl: slug === item.to ? 2 : '10px',
    display: 'inline-block',
  },
  '@media screen and (max-width: 1079px)': {
    color: slug === item.to && 'link',
    width: '100%',
    display: 'block',
    py: 3,
  },
});
