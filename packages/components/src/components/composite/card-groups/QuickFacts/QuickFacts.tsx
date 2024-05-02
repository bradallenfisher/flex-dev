/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { Container, jsx } from 'theme-ui';
import { Flex, Grid, Wrapper } from '../../../base-components/layout';
import {
  Heading,
  RichTextContent,
  useComponentIntro,
} from '../../../base-components/data-display/';
import { QuickFactsProps } from './QuickFactsTypes';
import { FactCard } from '../../cards/FactCard/FactCard';

export function QuickFacts({ quickFactsData, ...props }: QuickFactsProps) {
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);

  return (
    <Flex extraSx={{ py: [10, 15, 15, 15], backgroundColor: 'nittanyNavy' }}>
      <Container>
        <Wrapper>
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
    </Flex>
  );
}
