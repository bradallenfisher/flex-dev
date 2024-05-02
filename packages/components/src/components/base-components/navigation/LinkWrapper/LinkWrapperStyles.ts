export const underlineSx = (underline) =>
  underline === 'hover'
    ? {
        '&:hover': {
          textDecoration: 'underline',
        },
      }
    : underline === 'always'
    ? {
        textDecoration: 'underline',
      }
    : {
        textDecoration: 'none',
      };
