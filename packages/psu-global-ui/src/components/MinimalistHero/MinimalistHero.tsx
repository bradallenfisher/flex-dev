/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { gradients } from '@psu-flex/platform-theme';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import {
  Section,
  Container,
  Wrapper,
  Flex,
  Grid,
  useButtonGroupData,
  ButtonGroup,
  DisplayHeading,
} from '@psu-flex/core-ui';
import { useContent } from '@psu-flex/utility-functions';
import { MinimalistHeroProps } from './MinimalistHeroTypes';

export const MinimalistHero = ({
  heading,
  image,
  ...props
}: MinimalistHeroProps) => {
  const { isXl } = useBreakpoints();
  const contentProps = useContent(props);
  const buttonGroupDataProps = useButtonGroupData(props);

  const bothCtas =
    buttonGroupDataProps.ctaText && buttonGroupDataProps.secondaryCtaText;
  const oneCta =
    buttonGroupDataProps.ctaText || buttonGroupDataProps.secondaryCtaText;

  // Conditional height at mobile based on the number of CTAs
  const mobileSectionHeight = bothCtas
    ? '410px' // if both exist
    : oneCta
    ? '360px' // if either one exists
    : '360px'; // if none exist

  return (
    <Section
      {...contentProps}
      className="w-full bg-cover bg-no-repeat"
      extraSx={{
        backgroundImage: () => `${gradients['hero']}, url(${image})`,
        width: '100%',
        aspectRatio: ['1/1', '16/9', '16/9', '16/9'],
        height: [mobileSectionHeight, 'unset', 'unset', 'unset'],
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
                direction="column"
                alignItems="flex-start"
                extraSx={{
                  gridColumn: ['1/5', '2/8', '2/10', '2/9'],
                  mb: [bothCtas || oneCta ? 10 : 20, 20, 25, '140px'],
                }}
              >
                <DisplayHeading variant={64} color="white">
                  {heading}
                </DisplayHeading>
                {buttonGroupDataProps && (
                  <ButtonGroup
                    hocId={contentProps && contentProps.id}
                    ctaSize={bothCtas ? 'sm' : oneCta && isXl ? 'md' : 'sm'}
                    extraSx={{ mt: [6, 6, 7, 8] }}
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
