/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { gradients } from '@psu-flex/platform-theme';
import { useContent } from '@psu-flex/utility-functions';
import {
  Section,
  Container,
  Wrapper,
  Flex,
  Grid,
  useButtonGroupData,
  ButtonGroup,
} from '@psu-flex/core-ui';
import { Typography, Divider } from '@psu-flex/core-ui';
import { StandardHeroProps } from './StandardHeroType';
import { useBreakpoints } from '@psu-flex/core-ui';
export const StandardHero = ({
  heading,
  copy,
  image,
  ...props
}: StandardHeroProps) => {
  const contentProps = useContent(props);
  const buttonGroupDataProps = useButtonGroupData(props);
  const { isXl } = useBreakpoints();
  const bothCtas =
    buttonGroupDataProps.ctaText && buttonGroupDataProps.secondaryCtaText;
  const oneCta =
    buttonGroupDataProps.ctaText || buttonGroupDataProps.secondaryCtaText;

  // Conditional height at mobile based on the number of CTAs
  const mobileSectionHeight = bothCtas
    ? '474px' // if both exist
    : oneCta
    ? '423px' // if either one exists
    : '360px'; // if none exist

  return (
    <Section
      className="w-full bg-cover bg-no-repeat"
      extraSx={{
        backgroundImage: () => `${gradients['hero']}, url(${image})`,
        width: '100%',
        height: [mobileSectionHeight, 'auto', 'auto', 'auto'],
        aspectRatio: ['1/1', '16/9', '16/9', '16/9'],
      }}
    >
      <Container>
        <Wrapper>
          <Flex className="min-h-full" alignItems="flex-end">
            <Grid
              extraSx={{
                alignSelf: 'flexEnd',
              }}
            >
              <Flex
                alignItems="flex-start"
                direction="column"
                extraSx={{
                  gridColumn: ['1/5', '2/8', '3/11', '3/11'],
                  mb: [10, 15, 25, 30],
                }}
              >
                <Typography
                  tag="h1"
                  size={[28, 36, 48, 56]}
                  color="white"
                  extraSx={{ mb: [8, 8, 10, 10], lineHeight: '120' }}
                >
                  {heading}
                </Typography>
                <Divider
                  size="80px"
                  thickness="lg"
                  color="skyBlue"
                  extraSx={{ mb: 4 }}
                />
                <Typography
                  tag="p"
                  size={[20, 22, 24, 28]}
                  color="white"
                  extraSx={{
                    fontWeight: 'regular',
                    lineHeight: ['140', '140', '140', '120'],
                  }}
                >
                  {copy}
                </Typography>
                {buttonGroupDataProps && (
                  <ButtonGroup
                    hocId={contentProps && contentProps.id}
                    ctaSize={bothCtas ? 'sm' : oneCta && isXl ? 'md' : 'sm'}
                    extraSx={{ mt: [6, 8, 9, 10] }}
                    buttonGroupVariant="white"
                    withIconCta
                    {...buttonGroupDataProps}
                  />
                )}
              </Flex>
            </Grid>
          </Flex>
        </Wrapper>
      </Container>
    </Section>
  );
};
