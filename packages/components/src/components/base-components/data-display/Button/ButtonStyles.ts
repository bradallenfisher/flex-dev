export const baseButtonSx = (size) => ({
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  textDecoration: 'none',
  height: 'fit-content',
  width: 'fit-content',
  variant: `text.buttonText.${size}`,
});

export const hoverEndIconSx = {
  //changes icon on pointer event
  '&:hover > #end-icon': {
    display: 'none',
  },
  '&:hover > #hover-end-icon': {
    display: 'flex',
  },
  '&:focus-visible > #end-icon': {
    display: 'none',
  },
  '&:focus-visible > #hover-end-icon': {
    display: 'flex',
  },
};

export const endIconSx = (buttonVariants, variant) => ({
  //targets child Icon color
  '& > span > svg > path': {
    fill: (buttonVariants as any)[variant as any].color,
  },
  '&:hover > span > svg > path': {
    fill: (buttonVariants as any)[variant as any]['&:hover'].color,
  },
  '&:focus-visible > span > svg > path': {
    fill: (buttonVariants as any)[variant as any]['&:focus-visible'].color,
  },
});

export const defaultSizeObj = (endIcon) => ({
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
