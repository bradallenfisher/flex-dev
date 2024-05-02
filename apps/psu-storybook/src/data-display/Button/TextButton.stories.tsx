/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { TextButton, TextButtonProps, Box } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Button/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    extraSx: {
      control: {
        type: null,
      },
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    variantSizeObj: {
      table: {
        disable: true,
      },
    },
    buttonVariants: {
      table: {
        disable: true,
      },
    },
    hocId: {
      table: {
        disable: true,
      },
    },
    buttonRef: {
      table: {
        disable: true,
      },
    },
    hoverEndIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<TextButtonProps> = (args) => (
  <Box
    className="flex items-center justify-center"
    extraSx={{
      p: 12,
      width: '350px',
      borderRadius: 'sm',
      backgroundColor:
        args.variant === 'primary' ? 'transparent' : 'nittanyNavy',
    }}
  >
    <TextButton {...args}>Text Button</TextButton>
  </Box>
);

export const TextButtonPlayground = Template.bind({});
TextButtonPlayground.args = {
  variant: 'primary',
  to: 'https://www.google.com/',
};
