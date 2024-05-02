/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ImageTextOverlapProps } from './ImageTextOverlapTypes';
import {
  Heading,
  Body,
  Card,
  Divider,
  CtaButton,
  useComponentIntro,
} from '@psu-flex/core-ui';
import { Section, Grid, Container, Wrapper } from '@psu-flex/core-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import { ComponentIntro } from '@psu-flex/core-ui';

export const ImageTextOverlap = ({
  subHeading,
  body,
  heading,
  ctaButtonText,
  ctaButtonTo,
  imgSrc,
  imgAlt,
  ...props
}: ImageTextOverlapProps) => {
  const { isSm, isMd, isLg } = useBreakpoints();
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);

  return (
    <Section>
      {isSm || isMd ? (
        <Container>
          <Grid>
            <Wrapper
              extraSx={{
                zIndex: 3,
                gridColumn: [
                  '1 / span 4',
                  '2 / span 6',
                  '1 / span 9',
                  '1 / span 9',
                ],
                gridRow: [
                  '1 / span 8',
                  '1 / span 8',
                  '1 / span 9',
                  '1 / span 9',
                ],
              }}
            >
              {componentIntroProps && (
                <ComponentIntro {...componentIntroProps} />
              )}

              <img
                className="w-full"
                sx={{
                  borderRadius: 'sm',
                }}
                src={imgSrc}
                alt={imgAlt}
              />
            </Wrapper>
            <Card
              extraSx={{
                zIndex: [2, 2, 3, 3],
                pt: 12,
                pb: 10,
                px: '26px',
                gridColumn: [
                  '1 / span 4',
                  '1 / span 8',
                  '9 / span 9',
                  '9 / span 9',
                ],
                gridRow: [
                  '8 / span 9',
                  '8 / span 9',
                  '1 / span 1',
                  '1 / span 1',
                ],
              }}
              square
              backgroundColor="nittanyNavy"
            >
              {subHeading && (
                <Heading
                  responsiveType="column"
                  extraSx={{ mb: 3 }}
                  color="white"
                  className="uppercase"
                  variant={16}
                >
                  {subHeading}
                </Heading>
              )}
              <Heading color="white" variant={28}>
                {heading}
              </Heading>
              <Divider
                extraSx={{ mt: [6, 6, 6, 7], mb: 4 }}
                thickness="sm"
                size="80px"
                color="skyBlue"
              />
              <Body extraSx={{ mb: [6, 6, 6, 7] }} color="white" variant={18}>
                {body}
              </Body>
              {ctaButtonText && (
                <CtaButton
                  endIcon="chevronRight"
                  variant="whiteOutlined"
                  to={ctaButtonTo}
                >
                  {ctaButtonText}
                </CtaButton>
              )}
            </Card>
          </Grid>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            {componentIntroProps && <ComponentIntro {...componentIntroProps} />}
            <Grid>
              <img
                className="w-full"
                sx={{
                  zIndex: [3, 3, 2, 2],
                  borderRadius: 'sm',
                  gridColumn: [
                    '1 / span 4',
                    '2 / span 6',
                    '1 / span 9',
                    '1 / span 9',
                  ],
                  gridRow: [
                    '1 / span 8',
                    '1 / span 8',
                    '1 / span 9',
                    '1 / span 9',
                  ],
                }}
                src={imgSrc}
                alt={imgAlt}
              />
              <Card
                extraSx={{
                  px: [0, 0, 10, 15],
                  pt: [0, 16, 10, 15],
                  pb: [0, 12, 10, 15],
                  zIndex: [2, 2, 3, 3],
                  mt: [0, 0, 10, 15],
                  gridColumn: [
                    '1 / span 4',
                    '1 / span 8',
                    '9 / span 9',
                    '9 / span 9',
                  ],
                  gridRow: [
                    '8 / span 9',
                    '8 / span 9',
                    '1 / span 1',
                    '1 / span 1',
                  ],
                }}
                square
                backgroundColor="nittanyNavy"
              >
                <div
                  sx={
                    isLg
                      ? {
                          display: 'grid',
                          gridTemplateColumns: 'repeat(8, 1fr)',
                          gap: 4,
                        }
                      : {}
                  }
                >
                  <div sx={isLg ? { gridColumn: '2 / span 6' } : {}}>
                    {subHeading && (
                      <Heading
                        extraSx={{ mb: 3 }}
                        color="white"
                        className="uppercase"
                        variant={16}
                      >
                        {subHeading}
                      </Heading>
                    )}
                    <Heading color="white" variant={28}>
                      {heading}
                    </Heading>
                    <Divider
                      extraSx={{ mt: [6, 6, 6, 7], mb: 4 }}
                      thickness="sm"
                      size="80px"
                      color="skyBlue"
                    />
                    <Body
                      extraSx={{ mb: [6, 6, 6, 7] }}
                      color="white"
                      variant={18}
                    >
                      {body}
                    </Body>
                    {ctaButtonText && (
                      <CtaButton
                        endIcon="chevronRight"
                        variant="whiteOutlined"
                        to={ctaButtonTo}
                      >
                        {ctaButtonText}
                      </CtaButton>
                    )}
                  </div>
                </div>
              </Card>
            </Grid>
          </Wrapper>
        </Container>
      )}
    </Section>
  );
};
