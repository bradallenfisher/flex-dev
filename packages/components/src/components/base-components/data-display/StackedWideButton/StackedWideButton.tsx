/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { Flex, Grid, Wrapper } from '@psu-flex/core-ui';
import { Body, Heading } from '@psu-flex/core-ui';
import { InnerComponent } from '@psu-flex/common-ui';
import { WideButton } from '@psu-flex/core-ui';
import { generateHocId } from '@psu-flex/utility-functions';

interface WideButtonDataItem {
  title: string;
  to: string;
}

interface WideButtonItem extends InnerComponent {
  /**Wide button data object for item*/
  buttonDataItem: WideButtonDataItem;
  variant: any;
}

const WideButtonItem = ({ buttonDataItem, variant, hocId }: WideButtonItem) => {
  const { title, to } = buttonDataItem;

  return (
    <WideButton hocId={hocId} to={to} variant={variant}>
      {title}
    </WideButton>
  );
};

export interface StackedWideButton {
  /**Array of WideButtonDataItems */
  data: any;
  /**Heading above Wide Button */
  heading: string;
  /**Body above Wide Button */
  body: string;
}

export const StackedWideButton = ({
  data,
  heading,
  body,
  ...props
}: StackedWideButton) => {
  const hocId = generateHocId(StackedWideButton);

  return (
    <Wrapper>
      <Grid
        extraSx={{
          rowGap: 0,
        }}
      >
        <Flex
          gutterY={0}
          direction="column"
          extraSx={{
            gridColumn: ['1/5', '2/8', '3/11', '3/11'],
          }}
        >
          <Heading role="heading" variant={32} responsiveType="full">
            {heading}
          </Heading>
          <Body extraSx={{ mt: 4 }} variant={18} responsiveType="full">
            {body}
          </Body>
        </Flex>
      </Grid>
      <Grid extraSx={{ mt: 6 }}>
        <Flex
          variant="wrap"
          extraSx={{
            gridColumn: ['1/5', '3/7', '3/11', '3/11'],
          }}
        >
          <Grid
            extraSx={{
              gridTemplateColumns: [
                'repeat(4, 1fr)',
                'repeat(4, 1fr)',
                'repeat(8, 1fr)',
                'repeat(8, 1fr)',
              ],
              width: '100%',
              rowGap: [4, 5, 5, 5],
            }}
          >
            {data.items?.map((item: any, i: number) => {
              if (i % 2 === 0) {
                return (
                  <div
                    key={i}
                    sx={{
                      gridColumn: ['1/5', '1/5', '1/5', '1/5'],
                    }}
                  >
                    <WideButtonItem
                      hocId={hocId}
                      key={i}
                      buttonDataItem={item}
                      variant={data.variant}
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={i}
                    sx={{
                      gridColumn: ['1/5', '1/5', '5/9', '5/9'],
                    }}
                  >
                    <WideButtonItem
                      hocId={hocId}
                      key={i}
                      buttonDataItem={item}
                      variant={data.variant}
                    />
                  </div>
                );
              }
            })}
          </Grid>
        </Flex>
      </Grid>
    </Wrapper>
  );
};
