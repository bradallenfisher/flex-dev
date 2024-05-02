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

export const baseLinkSx = (color, variant, responsiveType, typeStyle) => ({
  ...(color && { color: `${color}` }),
  ...(variant && {
    variant: `text.${typeStyle}.${responsiveType}.${variant}`,
  }),

  fontFamily: 'sans',
  cursor: 'pointer',
  width: 'fit-content',
});
