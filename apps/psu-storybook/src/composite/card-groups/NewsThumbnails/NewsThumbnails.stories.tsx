import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { NewsThumbnails, NewsThumbnailsProps } from '@psu-flex/core-ui';
import { cardsData1 } from './example-data';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
export default {
  title: 'Core Composite/CardGroup/NewsThumbnails',
  component: NewsThumbnails,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    cardData: {
      control: {
        type: null,
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
      },
    },
    introHeading: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template1: Story<any> = (args) => (
  <NewsThumbnails
    linkToRss={args.linkToRss}
    cardData={cardsData1}
    {...useIntroArgs(args)}
    backgroundColor={args.backgroundColor}
  />
);

export const Default = Template1.bind({});
Default.args = {};
