/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, Tooltip, Grid } from '@psu-flex/core-ui';
import React, { useState } from 'react';
import { Flex } from '@psu-flex/core-ui';
import { ThemeUIProvider } from 'theme-ui';
import { copyToken } from './copy-token.ts';

export const SbBordersComponent = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Grid>
        {Object.entries(theme.borderWidths).map(([k, v]) => {
          const [keyText, setKeyText] = useState(`key: '${k}'`);

          const handleCopy = (k) => {
            copyToken(`borderWidth: '${k}'`);
            setKeyText('Copied!');
            setTimeout(() => {
              setKeyText(`key: '${k}'`);
            }, 1500);
          };
          return (
            <Tooltip
              extraContainerSx={{ gridColumn: 'auto / span 3' }}
              content="Click to copy"
            >
              <div
                onClick={() => handleCopy(k)}
                style={{
                  display: 'flex',
                  cursor: 'pointer',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  height: '100px',
                  width: '100%',
                  boxShadow: theme.shadows['md'],
                  borderRadius: '8px',
                  border: `${theme.borderWidths[k]} solid ${theme.colors.limestoneGray}`,
                }}
              >
                <p sx={{ fontSize: 16, m: 0 }}>{keyText}</p>
              </div>
              <p
                style={{
                  fontSize: '16px',
                  textAlign: 'center',
                  marginTop: 20,
                }}
              >
                value: <b>{v}</b>
              </p>
            </Tooltip>
          );
        })}
      </Grid>
    </ThemeUIProvider>
  );
};
