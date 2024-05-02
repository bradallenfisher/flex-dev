import '@psu-flex/core-ui/assets/global.css';
import previewTheme from './PreviewTheme';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, RichTextContentfulParser } from '@psu-flex/core-ui';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

// Add decorator to automatically wrap all stories with ThemeUIProvider
addDecorator((storyFn) => (
  <ThemeProvider parser={RichTextContentfulParser}>{storyFn()}</ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: previewTheme,
  },
  // layout: 'centered',
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'Getting Started 💪',
        'Core Composite',
        'Flagship',
        'Global',
        'Tokens',
        'Layout',
        'Data Display',
        'Navigation',
        'Surface',
        'Brand Elements',
        'Form Elements',
        'Feedback',
        'Utility',
        'Pages',
        'Style Guide',
        '*',
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      expanded: false,
    },
  },
};
