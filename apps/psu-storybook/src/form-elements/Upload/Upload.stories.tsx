/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Upload,
  UploadProps,
  Wrapper,
  Container,
  Grid,
} from '@psu-flex/core-ui';

export default {
  title: 'Form Elements/Upload',
  component: Upload,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    accept: {
      control: { type: 'select' },
      options: [
        '.png, .jpg, .jpeg',
        '.pdf, .doc, .docx, .xml',
        '*/*',
        '.xls, .xlsx',
        '.ppt, .pptx',
        '.txt',
      ],
    },
    extraSx: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#fff' }],
    },
  },
} as Meta;

const Template: Story<UploadProps> = (args) => {
  return (
    <Container>
      <Wrapper>
        <Grid>
          <Upload
            multiple={args.multiple}
            accept={args.accept}
            extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
          />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  accept: '.png, .jpg, .jpeg',
  multiple: false,
};
