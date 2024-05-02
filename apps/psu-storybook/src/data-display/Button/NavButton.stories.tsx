/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { NavButton, NavButtonProps, Box } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Button/NavButton',
  component: NavButton,
  argTypes: {
    extraSx: {
      control: {
        type: null,
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
    size: {
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
    variant: {
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Default: Story<NavButtonProps> = (args) => (
  <Box
    className="flex items-center justify-center"
    extraSx={{
      p: 12,
      width: '350px',
      borderRadius: 'sm',
      backgroundColor:
        args.variant === 'linkOutlined' ? 'transparent' : 'nittanyNavy',
    }}
  >
    <NavButton variant={args.variant} to="https://www.google.com/">
      Nav Button
    </NavButton>
  </Box>
);

export const NavButtons = Default.bind({});
NavButtons.args = {
  variant: 'linkOutlined',
};
