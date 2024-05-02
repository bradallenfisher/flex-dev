/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Container, Grid, RichTextContent, Wrapper } from '@psu-flex/core-ui';
import {
  richText_table,
  richText_table2,
} from '../../../example-content/RichText/richText_table';
export default {
  title: 'Core Composite/Data Display/RichTextTable',
  component: RichTextContent,
  argTypes: {
    data: {
      control: 'null',
    },
  },
};

const Template = () => (
  <div sx={{ backgroundColor: 'white', py: 30 }}>
    <Container>
      <Wrapper>
        <Grid>
          <RichTextContent
            extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
            tableSummary={
              '*Caption for when additional information or context is needed'
            }
            tableCaption={'World Campus Applicant Dates'}
            richTextRaw={richText_table}
          />
        </Grid>
      </Wrapper>
    </Container>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

const Template2 = () => (
  <div sx={{ backgroundColor: 'white', py: 30 }}>
    <Container>
      <Wrapper>
        <Grid>
          <RichTextContent
            extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
            tableSummary={
              '*Caption for when additional information or context is needed'
            }
            tableCaption={'World Campus Applicant Dates'}
            richTextRaw={richText_table2}
          />
        </Grid>
      </Wrapper>
    </Container>
  </div>
);

export const WithAlotOfData = Template2.bind({});
WithAlotOfData.args = {};
