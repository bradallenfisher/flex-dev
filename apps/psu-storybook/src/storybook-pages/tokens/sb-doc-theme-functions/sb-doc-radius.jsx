/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, Tooltip, Grid } from '@psu-flex/core-ui';
import React, { useState } from 'react';
import { Flex } from '@psu-flex/core-ui';
import { ThemeUIProvider } from 'theme-ui';
import { copyToken } from './copy-token.ts';

export const SbRadiusComponent = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Grid>
        {Object.entries(theme.radii).map(([k, v], i) => {
          const [keyText, setKeyText] = useState(`key: '${k}'`);

          const handleCopy = (k) => {
            copyToken(`borderRadius: '${k}'`);
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
                  marginBottom: '10px',
                }}
              >
                <div
                  onClick={() => handleCopy(k)}
                  style={{
                    marginBottom: '20px',
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: theme.shadows['sm-1'],
                    backgroundColor: 'white',
                    borderRadius: theme.radii[k],
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
