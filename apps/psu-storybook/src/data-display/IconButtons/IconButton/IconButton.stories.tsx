/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Body,
  Flex,
  Heading,
  IconButton,
  IconButtonProps,
} from '@psu-flex/core-ui';

export default {
  title: 'Data Display/IconButtons/StandardIconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: { type: 'select' },
    },
    variant: {
      control: {
        type: 'select',
        options: ['beaverBlue', 'link', 'linkLight', 'nittanyNavy', 'white'],
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: 'select' },
    },
    type: {
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => {
  return (
    <div
      sx={{
        backgroundColor:
          args.variant === 'white' || args.variant === 'linkLight'
            ? 'nittanyNavy'
            : 'limestoneLight',
        px: 20,
        py: 5,
        borderRadius: 'xs',
      }}
    >
      <IconButton {...args} />
    </div>
  );
};

export const IconButtons = Template.bind({});
IconButtons.args = {
  icon: 'home',
  size: 'sm',
  variant: 'beaverBlue',
  to: 'https://www.google.com/',

};

const exampleOnClick = () => alert('Clicked!');

const Template2: Story<IconButtonProps> = (args) => (
  <Flex direction="column" alignItems="center" gap={4}>
    <Body>Click IconButton</Body>
    <div
      sx={{
        backgroundColor:
          args.variant === 'white' || args.variant === 'linkLight'
            ? 'nittanyNavy'
            : 'limestoneLight',
        px: 20,
        py: 5,
        borderRadius: 'xs',
      }}
    >
      <IconButton {...args} />
    </div>
  </Flex>
);

export const WithOnClick = Template2.bind({});
WithOnClick.args = {
  icon: 'thumbsUp',
  size: 'sm',
  variant: 'beaverBlue',
  onClick: exampleOnClick,
};
