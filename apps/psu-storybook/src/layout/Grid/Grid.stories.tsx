import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Grid } from '@psu-flex/core-ui';
import { Container, Section, Wrapper } from '@psu-flex/core-ui';
export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = () => (
  <Section>
    <Container>
      <Wrapper>
        <Grid>
          <div sx={{ gridColumn: ['auto / span 4'] }}>
            <div
              className="flex justify-center"
              sx={{ p: 5, backgroundColor: 'limestoneLight' }}
            >
              <h2>Grid Item 1</h2>
            </div>
          </div>
          <div sx={{ gridColumn: ['auto / span 4'] }}>
            <div
              className="flex justify-center"
              sx={{ p: 5, backgroundColor: 'limestoneLight' }}
            >
              <h2>Grid Item 2</h2>
            </div>
          </div>
          <div sx={{ gridColumn: ['auto / span 4'] }}>
            <div
              className="flex justify-center"
              sx={{ p: 5, backgroundColor: 'limestoneLight' }}
            >
              <h2>Grid Item 3</h2>
            </div>
          </div>
        </Grid>
      </Wrapper>
    </Container>
  </Section>
);

export const FullWidthGrid = Template.bind({});
FullWidthGrid.args = {};

const Template2: Story = () => (
  <Grid>
    <div
      sx={{
        gridColumn: ['1/5', '2/8', '3/11', '3/11'],
      }}
    >
      <div
        className="flex justify-center"
        sx={{ p: 5, backgroundColor: 'limestoneLight' }}
      >
        <h2>Wrapped w/ Grid. Centered content children</h2>
      </div>
    </div>
  </Grid>
);

export const CenteredContentGrid = Template2.bind({});
CenteredContentGrid.args = {};
