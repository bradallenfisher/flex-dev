/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { Container, jsx } from 'theme-ui';
import {
  BackgroundImage,
  Grid,
  Wrapper,
  Heading,
  RichTextContent,
  useComponentIntro,
} from '@psu-flex/core-ui';
import { QuickFactsProps } from './QuickFactsTypes';
import { FactCard } from '../../cards/FactCard/FactCard';
import bgImg from '@psu-flex/core-ui/assets/images/weAreSculpture.png';

const imageSrc = bgImg;

export function QuickFacts({ quickFactsData, ...props }: QuickFactsProps) {
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);

  return (
    <BackgroundImage image={imageSrc}>
      <Container>
        <Wrapper extraSx={{ py: [15, 18, 30, 30] }}>
          {componentIntroProps && (
            <Grid>
              <div
                sx={{
                  gridColumn: ['1/5', '2/8', '3/11', '3/11'],
                  mb: [10, 12, 14, 14],
                }}
              >
                <Heading
                  tag="h2"
                  variant={32}
                  color="white"
                  extraSx={{ mb: [3, 3, 4, 4] }}
                >
                  {componentIntroProps.introHeading}
                </Heading>
                <RichTextContent
                  extraSx={{
                    '& > div > p': { color: 'white' },
                    '& > div > p > a': { color: 'linkLight' },
                  }}
                  richTextRaw={componentIntroProps.introParagraph}
                />
              </div>
            </Grid>
          )}
          <Grid
            {...props}
            className="items-stretch"
            extraSx={{ rowGap: [0, 0, 0, 0] }}
          >
            {quickFactsData.map((item, index) => {
              return (
                <FactCard
                  itemsLength={quickFactsData.length}
                  key={index}
                  index={index}
                  itemHeading={item.itemHeading}
                  itemBody={item.itemBody}
                  itemCitation={item.itemCitation}
                  itemTo={item.itemTo}
                />
              );
            })}
          </Grid>
        </Wrapper>
      </Container>
    </BackgroundImage>
  );
}
