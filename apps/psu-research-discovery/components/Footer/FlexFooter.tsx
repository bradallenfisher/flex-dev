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
} from '@psu-flex/core-ui';
import { Item } from 'react-stately';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import { generateHocId } from '@psu-flex/core-ui';
/** Description */

export const Footer = ({
  contactItems,
  navItems,
  socialIcons,
  departmentName,
  streetAddress,
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

  const modifiedSocialIcons = socialIcons.map((item) => ({
    to: item.href,
    icon: item.iconName,
  }));

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
          items={contactItems}
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
                {item.label + ':' + '\u00A0'}
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
          iconGroupData={modifiedSocialIcons}
        />
      </Flex>
    );
  };

  return (
    <AppBar position="relative">
      <Container>
        <Wrapper>
          <Grid
            extraSx={{
              py: 8,
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
                {departmentName && (
                  <>
                    {departmentName}
                    <br />
                  </>
                )}
                The Pennsylvania State University
                <br />
                {streetAddress && (
                  <>
                    {streetAddress} <br />
                  </>
                )}
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
                {navItems.map((item) => {
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
                        {item.label}
                      </Heading>
                      <div className="flex-col" sx={{ gap: 2 }}>
                        {item.linkItemsCollection.items.map((linkItem) => {
                          return (
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
                              to={linkItem.to}
                            >
                              {linkItem.title}
                            </Link>
                          );
                        })}
                      </div>
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
