/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { BrandFooterProps } from './BrandFooterTypes';
import { AppBar, Link, ListBox } from '@psu-flex/core-ui';
import { Grid, Flex, Container, Wrapper } from '@psu-flex/core-ui';
import { Item } from 'react-stately';

/** Description */

const currentYear = new Date().getFullYear();

const linkSx = {
  fontFamily: 'condensed',
  fontSize: 14,
  fontWeight: 'regular',
};

export const BrandFooter = ({ linkItems }: BrandFooterProps) => {
  return (
    <AppBar
      extraSx={{ py: 5 }}
      backgroundColor="beaverBlue"
      position="relative"
    >
      <Container>
        <Wrapper>
          <Grid
            extraSx={{
              justifyItems: ['center', 'center', 'start', 'start'],
              rowGap: [4, 5, 0, 0],
            }}
          >
            <Flex
              extraSx={{
                gridColumn: ['1/-1;', '1/-1;', '1/9', '1/7'],
              }}
            >
              {linkItems && (
                <ListBox
                  direction="row"
                  items={linkItems}
                  wrap
                  extraSx={{
                    justifyContent: [
                      'center',
                      'center',
                      'flex-start',
                      'flex-start',
                    ],
                    columnGap: [4, 4, 5, 5],
                    rowGap: 2,
                  }}
                >
                  {(item) => (
                    <Item key={item.title}>
                      <Link
                        extraSx={{ ...linkSx, lineHeight: '8px' }}
                        to={item.to}
                        color="white"
                      >
                        {item.title}
                      </Link>
                    </Item>
                  )}
                </ListBox>
              )}
            </Flex>
            <Link
              to="https://www.psu.edu/copyright-information"
              color="white"
              extraSx={{
                ...linkSx,
                gridColumn: ['1/-1;', '1/-1;', '10/-1', '10/-1'],
                justifySelf: ['auto', 'auto', 'end', 'end'],
              }}
            >
              The Pennsylvania State University &copy; {currentYear}
            </Link>
          </Grid>
        </Wrapper>
      </Container>
    </AppBar>
  );
};
