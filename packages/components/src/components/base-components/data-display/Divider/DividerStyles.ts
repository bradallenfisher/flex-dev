import theme from '@psu-flex/platform-theme';

const { colors } = theme;
export const sizeObj = {
  xs: '10%',
  sm: '25%',
  md: '50%',
  lg: '75%',
  full: '100%',
  '20px': '20px',
  '80px': '80px',
  '84px': '84px',
  '68px': '68px',
  '64px': '64px',
  '32px': '32px',
  '48px': '48px',
  '232px' : '232px',
  '248px' : '248px',
};

export const orientationObj = (dividerStyle, size, color) => ({
  vertical: {
    height: `${sizeObj[size]}`,
    borderRight: `${dividerStyle} ${colors[color]}`,
  },
  horizontal: {
    width: `${sizeObj[size]}`,
    borderBottom: `${dividerStyle} ${colors[color]}`,
  },
});
