/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Callout,
  CalloutProps,
  Container,
  Grid,
  Wrapper,
} from '@psu-flex/core-ui';
import { exampleCalloutData } from './example-data';

export default {
  title: 'Data Display/Callout',
  component: Callout,

  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
      },
    },
    richText: {
      control: { type: null },
    },
    extraSx: {
      control: { type: null },
    },
  },
} as Meta<typeof Callout>;

const Static: Story<CalloutProps> = (args) => (
  <div sx={{ backgroundColor: 'white', height: '100vh' }}>
    <Container>
      <Wrapper className="flex justify-center items-center">
        <Grid>
          <Callout
            extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
            {...exampleCalloutData}
            backgroundColor={args.backgroundColor}
          />
        </Grid>
      </Wrapper>
    </Container>
  </div>
);

export const Default = Static.bind({});
Default.args = {
  backgroundColor: 'slateMaxLight',
};
