import { create } from '@storybook/theming';
import { theme } from '@psu-flex/core-ui';
export default create({
  base: 'dark',
  colorPrimary: theme.colors.creekTeal,
  colorSecondary: theme.colors.beaverBlue,

  // UI
  appBg: theme.colors.nittanyNavy,
  appContentBg: '#EFF2F5',
  appBorderColor: theme.colors.limestoneMaxLight,
  appBorderRadius: 3,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',
  fontWeight: '700',
  fontSize: '16px',

  // Text colors
  textColor: theme.colors.coalyGray,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: theme.colors.limestoneGray,
  barSelectedColor: theme.colors.coalyGray,
  barBg: theme.colors.white,

  // Form colors
  inputBg: theme.colors.white,
  inputBorder: theme.colors.limestoneLight,
  inputTextColor: theme.colors.coalyGray,
  inputBorderRadius: 3,

  brandTitle: 'psuflex storybook',
  brandUrl: 'https://www.psu.edu/',
  brandImage: 'https://www.psu.edu/psu-edu-assets/images/shared/psu-mark.svg',
  brandTarget: '_self',
});
