/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, gradients, Tooltip, Grid } from '@psu-flex/core-ui';
import React, { useState } from 'react';
import { Flex } from '@psu-flex/core-ui';
import { ThemeUIProvider } from 'theme-ui';
import { copyToken } from './copy-token.ts';

export const SbGradientsComponent = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Grid>
        {Object.entries(gradients).map(([k, v], i) => {
          const [keyText, setKeyText] = useState(`key: ${k}`);

          const handleCopy = (k) => {
            copyToken('backgroundImage: () => ${gradients[' + `'${k}'` + ']}');
            setKeyText('Copied!');
            setTimeout(() => {
              setKeyText(`key: ${k}`);
            }, 1500);
          };
          return (
            <Tooltip content="Click to copy">
              <div
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  backgroundColor: 'white',
                  borderRadius: theme.radii['md'],
                }}
              >
                <div
                  onClick={() => handleCopy(k)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      background: `${v}`,
                      width: '180px',
                      height: '110px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: theme.shadows[k],
                      backgroundColor: 'white',
                      borderTopRightRadius: theme.radii['md'],
                      borderTopLeftRadius: theme.radii['md'],
                    }}
                  ></div>
                  <p
                    sx={{
                      fontSize: 16,
                      m: 0,
                      padding: '16px',
                    }}
                  >
                    {keyText}
                  </p>
                </div>
              </div>
            </Tooltip>
          );
        })}
      </Grid>
    </ThemeUIProvider>
  );
};

// {Object.entries(gradients).map(([k, v]) => {
//   return (
//     <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: 'white', borderRadius: theme.radii['md']}}>
//     <div
//       onClick={()=> copyToken('backgroundImage: () => ${gradients[' + `'${k}'` + ']}')}
//       style={{
//         display: 'flex',
//         cursor: 'pointer',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       <div
//         style={{
//           width: '180px',
//           height: '110px',
//           boxShadow: theme.shadows[k],
//           background: `${v}`,
//           borderTopRightRadius: theme.radii['md'],
//           borderTopLeftRadius: theme.radii['md'],
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//       </div>
//     </div>
//     <p
//         style={{
//           fontSize: '16px',
//           width: 'fit-content',
//           margin: 0,
//           padding: '12px',
//           paddingInline: '16px'
//         }}
//       >
//         key: <b>{k}</b>
//       </p>
//     </div>
//   );
// })}
