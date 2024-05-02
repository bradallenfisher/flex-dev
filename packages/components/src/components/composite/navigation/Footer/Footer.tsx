/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import { jsx } from 'theme-ui';
import { FooterProps } from './FooterTypes';
import React from 'react';
import {
  AppBar,
  Body,
  Divider,
  FooterMark,
  Heading,
  Link,
  ListBox,
  Grid,
  Flex,
  Container,
  Wrapper,
  IconGroup,
  generateHocId,
} from '@psu-flex/core-ui';
import { Item } from 'react-stately';
import { useBreakpoints } from '@psu-flex/utility-hooks';

/** Description */

export const Footer = ({
  optionsContact,
  listOptions,
  tierOneMark,
  iconButtonData,
}: FooterProps) => {
  const { isXl, isLg } = useBreakpoints();
  const hocId = generateHocId(Footer);

  const bodySx = {
    fontFamily: 'condensed',
  };
  const headingSx = {
    fontFamily: 'condensed',
    mb: 3,
  };

  const ContactSection = () => {
    return (
      <Flex
        extraSx={{ ...(isLg && { gridColumn: '5 / 8' }) }}
        direction="column"
      >
        <ListBox
          extraSx={{
            mt: [5, 3, 5, 5],
            mb: 6,
          }}
          gap={2}
          direction="column"
          items={optionsContact}
        >
          {(item) => (
            <Item key={item}>
              <Body
                variant={16}
                color="white"
                extraSx={{
                  lineHeight: 'normal',
                  ...bodySx,
                  fontWeight: 700,
                  display: 'inline-block',
                }}
              >
                {item.name + '\u00A0'}
              </Body>
              <Link
                variant={16}
                extraSx={{
                  ...bodySx,
                  color: 'linkLight',
                  fontStyle: 'normal',
                  fontWeight: 400,
                }}
                to={item.href}
              >
                {item.value}
              </Link>
            </Item>
          )}
        </ListBox>
        <IconGroup
          hocId={hocId}
          gap={2}
          type="unfilled"
          iconButtonVariant="white"
          size="md"
          iconGroupData={iconButtonData}
        />
      </Flex>
    );
  };

  return (
    <AppBar tag="footer" position="relative">
      <Container>
        <Wrapper>
          <Grid
            extraSx={{
              my: 8,
            }}
          >
            <Flex
              direction="column"
              extraSx={{
                gridColumn: ['1/5', '2/5', '2/5', '2/5'],
                mb: [2, 0, 0, 0],
              }}
            >
              <FooterMark />
              <Body
                variant={16}
                color="white"
                extraSx={{
                  ...bodySx,
                  mt: 6,
                  lineHeight: 'normal',
                }}
              >
                College/Unit/Department
                <br />
                The Pennsylvania State University
                <br />
                Address Line 1<br />
                University Park, PA 16802
              </Body>
              {!isLg && <ContactSection />}
            </Flex>
            {isLg && <ContactSection />}
            {!isXl && (
              <div sx={{ gridColumn: ['1 / 5', '2 / 8', 0, 0] }}>
                <Divider thickness="xs" color="beaver70" />
              </div>
            )}
            <div
              sx={{
                gridColumn: ['1 / 5', '2 / 8', '6 / 12', '6 / 12'],
                mt: [2, 0, 0, 0],
              }}
            >
              <Grid
                extraSx={{
                  gridTemplateColumns: [
                    'repeat(4, 1fr)',
                    'repeat(6, 1fr)',
                    'repeat(6, 1fr)',
                    'repeat(6, 1fr)',
                  ],
                }}
              >
                {listOptions.map((item) => {
                  return (
                    <Flex
                      direction="column"
                      extraSx={{
                        gridColumn: ['span 2', 'span 2', 'span 2', 'span 2'],
                        my: [1, 1, 3, 3],
                      }}
                    >
                      <Heading
                        variant={20}
                        color="white"
                        extraSx={{ fontWeight: 500, ...headingSx }}
                      >
                        {item.listHeading}
                      </Heading>
                      <ListBox
                        gap={2}
                        direction="column"
                        items={item.listOptions}
                      >
                        {(item) => (
                          <Item key={item}>
                            <Link
                              variant={16}
                              extraSx={{
                                ...bodySx,
                                color: 'linkLight',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal',
                                display: 'block',
                              }}
                              to={item.href}
                            >
                              {item.name}
                            </Link>
                          </Item>
                        )}
                      </ListBox>
                    </Flex>
                  );
                })}
              </Grid>
            </div>
          </Grid>
        </Wrapper>
      </Container>
    </AppBar>
  );
};
