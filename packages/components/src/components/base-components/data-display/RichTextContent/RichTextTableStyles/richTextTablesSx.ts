const mobileTbodyStyles: any = {
  '@media (max-width: 1079px)': {
    '& > tr': {
      gap: 1,
      display: 'flex',
      flexDirection: 'row',
      flexBasis: '100%',
      flexWrap: 'wrap',
      position: 'relative',
      cursor: 'pointer',
    },
    'tr td:nth-of-type(-n+2)': {
      display: 'flex',
      flexDirection: 'row',
      flexBasis: '100%',
      flexWrap: 'wrap',
      pr: '44px',
    },
    'tr td:not(:nth-of-type(-n+2))': {
      display: 'none',
    },
    '& > tr::after': {
      content: '""',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      position: 'absolute',
      right: 'clamp(0.69rem, calc(0.51rem + 0.42vw), 0.84rem);',
      top: '50%',
      transform: 'translateY(-50%)',
      padding: 'clamp(0.9rem, calc(0.51rem + 0.42vw), 0.84rem);',
    },
  },
};

const tHeadStyles: any = {
  '@media (max-width: 1079px)': {
    'tr th:not(:nth-of-type(-n+2))': {
      display: 'none',
    },
    'tr th:nth-of-type(-n+2)': {
      display: 'flex',
      flexDirection: 'row',
      flexBasis: '100%',
      flexWrap: 'wrap',
    },
    'tr:not(:nth-of-type(-n+2))': {
      display: 'none',
    },
    'tr:nth-of-type(-n+2)': {
      gap: 1,
      display: 'flex',
      flexDirection: 'row',
      flexBasis: '100%',
      flexWrap: 'wrap',
    },
  },
};

const tableBodyRowStyles: any = {
  '& > td > *': {
    m: 0,
  },
  '& > td > p': {
    fontSize: 16,
  },
  '& > td': {
    border: '0px',
    py: [0, 0, 2, 2],
    px: [0, 0, 4, 4],
  },
  '& > td:nth-of-type(1) > *': {
    fontWeight: ['bold', 'bold', 'regular', 'regular'],
  },

  border: '0px',
  backgroundColor: 'limestoneMaxLight',
  '&:nth-of-type(2n)': { backgroundColor: 'white' },
  py: [3, 3, 0, 0],
  px: [3, 3, 0, 0],
};

const tableHeadRowStyles = (columnLength): any => ({
  backgroundColor: 'nittanyNavy',
  '& > th > *': {
    color: 'white',
    m: 0,
    fontWeight: 'bold',
    fontSize: [16, 16, 16, 18],
    py: [0, 0, 2, 2],
    px: [0, 0, 4, 4],
    minWidth: columnLength > 5 ? ['unset', 'unset', '150px', '200px'] : 'unset',
  },
  '& > th:nth-of-type(2) > *': {
    fontWeight: ['regular', 'regular', 'bold', 'bold'],
  },
  '& > th': { border: '0px' },
  border: '0px',
  textAlign: 'left',
  verticalAlign: 'center',
  py: [2, 2, 0, 0],
  px: [3, 3, 0, 0],
});

export {
  tableBodyRowStyles,
  tableHeadRowStyles,
  mobileTbodyStyles,
  tHeadStyles,
};
