import { addons } from '@storybook/addons';
import canvasTheme from './CanvasTheme';

addons.setConfig({
  theme: canvasTheme,
  transcludeMarkdown: true,
});
