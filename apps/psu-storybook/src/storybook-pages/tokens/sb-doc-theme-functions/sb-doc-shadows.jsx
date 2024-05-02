/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, Tooltip, Grid } from '@psu-flex/core-ui';
import React, { useState } from 'react';
import { Flex } from '@psu-flex/core-ui';
import { ThemeUIProvider } from 'theme-ui';
import { copyToken } from './copy-token.ts';

export const SbShadowsComponent = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Grid>
        {Object.entries(theme.shadows).map(([k, v], i) => {
          const [keyText, setKeyText] = useState(`key: '${k}'`);

          const handleCopy = (k) => {
            copyToken(`boxShadow: '${k}'`);
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
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  onClick={() => handleCopy(k)}
                  style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: theme.shadows[k],
                    backgroundColor: 'white',
                    borderRadius: '8px',
                  }}
                >
                  <p sx={{ fontSize: 16, m: 0 }}>{keyText}</p>
                </div>
              </div>
            </Tooltip>
          );
        })}
      </Grid>
    </ThemeUIProvider>
  );
};
