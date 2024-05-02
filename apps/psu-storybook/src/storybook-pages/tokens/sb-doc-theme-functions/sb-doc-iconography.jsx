/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, Tooltip, Icon, Grid } from '@psu-flex/core-ui';
import React from 'react';
import { Flex } from '@psu-flex/core-ui';
import { ThemeUIProvider } from 'theme-ui';
import { copyToken } from './copy-token.ts';
import { iconLibraryObjectArray, Filter } from '@psu-flex/core-ui';

export const SbIconographyComponent = () => {
  const [filtered, setFiltered] = React.useState(null);

  return (
    <ThemeUIProvider theme={theme}>
      <Flex sx={{ fontFamily: 'Roboto' }} gap={3} direction="column">
        <h3 style={{ margin: 0 }}>Ready-to-use icons</h3>
        <p style={{ marginBottom: '24px', marginTop: '0px', pb: '20px' }}>
          All icons are defined in the repo&nbsp;
          <a
            style={{ textDecoration: 'underline' }}
            href="https://github.com/Penn-State-Web-and-Digital/psu-flex/blob/dev/src/components/atoms/Icon/iconLibrary.ts"
          >
            here.
          </a>
          &nbsp;Each icon can be used by passing the icon prop to the Icon
          component with any of the keys listed below. These keys are mapped to
          iconLibrary.js. Size, color, and conditional badges are all props
          accepted by the Icon component.
        </p>

        <p
          style={{
            color: '#000',
            fontSize: '16px',
            marginBottom: '12px',
            marginTop: '24px',
            textAlign: 'left',
            fontWeight: '500',
          }}
        >
          *Click to copy token*
        </p>

        <Filter
          placeholder="Search icons..."
          extraSx={{
            mt: '4px',
            mb: '12px',
            px: '16px',
            py: '12px',
            fontSize: '16px',
          }}
          filterCallback={setFiltered}
          filterBy="name"
          data={iconLibraryObjectArray}
        />
        <p
          style={{
            color: '#000',
            fontSize: '16px',
            marginBottom: '12px',
            marginTop: '24px',
            textAlign: 'left',
            fontWeight: '500',
          }}
        >
          *Click to copy token*
        </p>
        <Grid>
          {filtered
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => {
              return (
                <Flex
                  extraSx={{ gridColumn: 'auto / span 3' }}
                  gap={4}
                  alignItems="center"
                  direction="row"
                >
                  <Tooltip content="Click to copy">
                    <div
                      onClick={() => copyToken(`'${item.name}'`)}
                      className="pointer"
                      sx={{
                        backgroundColor: 'white65',
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 4px;',
                        p: 2,
                        borderRadius: 'xs',
                      }}
                    >
                      <Icon
                        className="flex"
                        size={24}
                        icon={item.name}
                        color="link"
                      />
                    </div>
                  </Tooltip>

                  <p>{item.name}</p>
                </Flex>
              );
            })}
        </Grid>
        <h2 sx={{ mt: 12 }}>Accessing the icon tokens</h2>
        <p>
          **Access any icon token by using the icon prop in an Icon component
          and passing in the neccessary token key.
        </p>
      </Flex>
    </ThemeUIProvider>
  );
};
