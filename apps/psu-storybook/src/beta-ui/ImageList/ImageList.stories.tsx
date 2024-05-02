import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ImageList, ImageListProps } from '@psu-flex/beta-ui';
import { Section, Container, Wrapper } from '@psu-flex/core-ui';
import img1 from './test-assets/img1.png';
import img2 from './test-assets/img2.png';
import img3 from './test-assets/img3.png';
import img4 from './test-assets/img4.png';
import img5 from './test-assets/img5.png';
import img6 from './test-assets/img6.png';
export default {
  title: 'Beta/ImageList',
  component: ImageList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['masonry', 'standard'],
    },
  },
} as Meta;

const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3];

const Template: Story<ImageListProps> = (args) => (
  <Section>
    <Container>
      <Wrapper>
        <ImageList variant={args.variant} columnSpan={4} images={images} />
      </Wrapper>
    </Container>
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'masonry',
};
