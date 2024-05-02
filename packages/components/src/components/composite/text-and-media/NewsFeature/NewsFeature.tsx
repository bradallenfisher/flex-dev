/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Divider, LinkWrapper } from '@psu-flex/core-ui';
import { Heading, Typography } from '@psu-flex/core-ui';
import { Section, Grid, Flex, Container, Wrapper } from '@psu-flex/core-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';

export const NewsFeature = ({ heading, headline, image, to }) => {
  const { isSm, isMd } = useBreakpoints();
  const hoverSx = {
    '&:hover > div > div > div > div > h3': {
      textDecoration: 'underline',
    },
  };

  return (
    <div>
      {isSm || isMd ? (
        <LinkWrapper
          to={to}
          extraSx={{
            ...hoverSx,
          }}
        >
          <Section
            className="w-full bg-cover bg-no-repeat"
            extraSx={{
              backgroundImage: () => `url(${image})`,
              width: '100%',
              height: '240px',
            }}
          >
            <Container>
              <Wrapper>
                <Grid>
                  <Flex
                    direction="column"
                    extraSx={{
                      gridColumn: '1/-1',
                      justifyContent: 'flex-end',
                      height: '240px',
                    }}
                  >
                    <Heading
                      color="white"
                      variant={18}
                      extraSx={{ mb: 3, textTransform: 'uppercase' }}
                    >
                      {heading}
                    </Heading>
                    <Divider
                      size="32px"
                      thickness="sm"
                      color="white"
                      extraSx={{ mb: 6 }}
                    />
                  </Flex>
                </Grid>
              </Wrapper>
            </Container>
          </Section>
          <Container>
            <Wrapper>
              <Grid>
                <Flex
                  direction="column"
                  extraSx={{
                    gridColumn: '1/-1',
                  }}
                >
                  <Typography
                    tag="h3"
                    size={32}
                    color="link"
                    extraSx={{ mt: 6, fontStyle: 'italic' }}
                  >
                    {headline}
                  </Typography>
                </Flex>
              </Grid>
            </Wrapper>
          </Container>
        </LinkWrapper>
      ) : (
        <Section
          className="w-full bg-cover bg-no-repeat"
          extraSx={{
            backgroundImage: () => `url(${image})`,
            width: '100%',
          }}
        >
          <LinkWrapper
            to={to}
            extraSx={{
              ...hoverSx,
            }}
          >
            <Container>
              <Wrapper>
                <Grid>
                  <Flex
                    direction="column"
                    extraSx={{
                      gridColumn: ['1/-1', '1/-1', '1/11', '1/11'],
                      mt: [0, 18, 24, '256px'],
                      mb: [10, 12, 15, 18],
                    }}
                  >
                    <Heading
                      color="white"
                      variant={18}
                      extraSx={{ mb: 4, textTransform: 'uppercase' }}
                    >
                      {heading}
                    </Heading>
                    <Divider size="32px" thickness="sm" color="white" />
                    <Typography
                      tag="h3"
                      size={[32, 48, 56, 64]}
                      color="white"
                      extraSx={{ mt: 10, fontStyle: 'italic' }}
                    >
                      {headline}
                    </Typography>
                  </Flex>
                </Grid>
              </Wrapper>
            </Container>
          </LinkWrapper>
        </Section>
      )}
    </div>
  );
};
