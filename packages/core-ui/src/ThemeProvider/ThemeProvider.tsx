/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useContext } from 'react';
import { jsx, ThemeUIProvider } from 'theme-ui';
import { theme } from '@psu-flex/platform-theme';
import { RichTextParser, RichTextParserProps } from '@psu-flex/components';
interface ThemeProviderProps {
  children?: React.ReactNode;
  parser?: RichTextParserProps;
}

export const ThemeProvider = ({
  children,
  parser,
}: ThemeProviderProps): React.JSX.Element => (
  <RichTextParser.Provider value={parser ?? useContext(RichTextParser)}>
    <ThemeUIProvider theme={theme as any}>{children}</ThemeUIProvider>
  </RichTextParser.Provider>
);
