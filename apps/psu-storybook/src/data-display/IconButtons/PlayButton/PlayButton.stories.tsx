/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Flex, Heading, PlayButton } from '@psu-flex/core-ui';
import { PlayButtonProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/IconButtons/PlayButton',
  component: PlayButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: 'select' },
    },
    extraSx: {
      control: { type: null },
    },
    hocId: {
      control: { type: null },
    },
    isPaused: {
      control: { type: null },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<PlayButtonProps> = (args) => {
  let [isPaused, setIsPaused] = useState(false);
  return (
    <div
      sx={{
        backgroundColor:
          args.variant === 'whiteOutlined' || args.variant === 'whiteFilled'
            ? 'nittanyNavy'
            : 'limestoneLight',
        px: 20,
        py: 5,
        borderRadius: 'xs',
      }}
    >
      {' '}
      <PlayButton
        {...args}
        isPaused={isPaused}
        onClick={() => setIsPaused(!isPaused)}
      />
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  variant: 'nittanyNavy',
  size: 'sm',
};
