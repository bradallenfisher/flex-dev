import theme from '@psu-flex/platform-theme';

export const radioSx = {
  mr: 1,
  ml: 0,
  mt: 0,
  appearance: 'none',
  backgroundColor: 'transparent',
  font: 'inherit',
  color: 'currentColor',
  width: '12px',
  height: '12px',
  border: '1px solid currentColor',
  borderRadius: '50%',
  display: 'grid',
  placeContent: 'center',
  '&:before': {
    content: "''",
    borderRadius: '50%',
    width: '0.5em',
    height: '0.5em',
    transform: 'scale(0)',
    transition: '.125s transform ease-in-out',
    boxShadow: `inset 1em 1em ${theme.colors['linkLight']}`,
  },
  '&:checked::before': {
    transform: 'scale(1)',
  },
} as any;
