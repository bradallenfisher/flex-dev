/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { AppBar, Link, Body, ListBox } from '@psu-flex/core-ui';
import { Container, Flex, Grid, LinkWrapper } from '@psu-flex/core-ui';
import fallbackLogo from '@psu-flex/core-ui/assets/images/psu-mark.png';
import { Item } from 'react-stately';

type ListItem = {
  id: string;
  href: string;
  name: string;
};

type FooterTypes = {
  imageSrc?: string;
  options1?: ListItem[];
  options2?: ListItem[];
};

export const Footer = ({ imageSrc, options1, options2 }: FooterTypes) => (
  <AppBar
    position="sticky"
    backgroundColor="nittanyNavy"
    extraSx={{
      padding: [
        '64px 26px 32px 26px',
        '64px 62px 52px 62px',
        '64px 62px 52px 62px',
        '64px 62px 52px 62px',
      ],
    }}
  >
    <Container>
      <Grid>
        <Flex
          variant="col"
          extraSx={{
            gridColumn: ['1/5', '1/9', '1/3', '1/4'],
          }}
        >
          <LinkWrapper to="/">
            <img
              src={`${imageSrc || fallbackLogo}`}
              sx={{ width: '200px' }}
              alt={'Psu logo'}
              loading="lazy"
            />
          </LinkWrapper>
          <Body variant={16} extraSx={{ my: 3 }} color="white">
            The Pennsylvania State University 2023 <br />
            410 Boucke Building, University Park, PA 16802
          </Body>
          <Link
            typeStyle="bodyStyle"
            to="#"
            variant={16}
            extraSx={{
              color: 'white',
              my: 3,
              fontWeight: 400,
            }}
          >
            Call Us (814) 865-7681
          </Link>
        </Flex>
        <Flex
          variant="col"
          extraSx={{
            gridColumn: ['1/5', '1/4', '7/9', '7/9'],
          }}
        >
          <ListBox gap={2} variant="col" extraSx={{ my: 2 }} items={options1}>
            {(item: ListItem) => (
              <Item key={item.id}>
                <Link
                  variant={16}
                  extraSx={{
                    color: 'white',
                    fontFamily: 'sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '150%',
                  }}
                  to={item.href}
                >
                  {item.name}
                </Link>
              </Item>
            )}
          </ListBox>
        </Flex>
        <Flex
          variant="col"
          extraSx={{
            gridColumn: ['1/5', '5/8', '10/13', '10/13'],
          }}
        >
          <ListBox gap={2} variant="col" extraSx={{ my: 2 }} items={options2}>
            {(item: ListItem) => (
              <Item key={item.id}>
                <Link
                  variant={16}
                  extraSx={{
                    color: 'white',
                    fontFamily: 'sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '150%',
                  }}
                  to={item.href}
                >
                  {item.name}
                </Link>
              </Item>
            )}
          </ListBox>
        </Flex>
      </Grid>
    </Container>
  </AppBar>
);
