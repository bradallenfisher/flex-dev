/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Drawer,
  CtaButton,
  Heading,
  DrawerProps,
  FormLabel,
} from '@psu-flex/core-ui';
import { useToggle } from '@psu-flex/utility-hooks';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
  argTypes: {
    onClose: {
      control: { type: null },
    },
    backdrop: {
      control: {
        type: 'select',
      },
    },
    anchor: {
      control: {
        type: 'select',
      },
    },
    isOpen: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const exampleHocId = 'ExampleHigherOrderComponent';

const Template: Story<DrawerProps> = (args) => {
  const [isDrawerOpen, setIsDrawerOpen] = useToggle(false);

  return (
    <>
      <CtaButton
        hocId={exampleHocId}
        onClick={setIsDrawerOpen}
        variant="primaryFilled"
      >
        Show Drawer
      </CtaButton>
      <Drawer {...args} onClose={setIsDrawerOpen} isOpen={isDrawerOpen}>
        <Heading variant={32}>Slide out Drawer</Heading>
        <FormLabel extraSx={{ mt: 4 }}>
          Drawer elements are automatically focused
        </FormLabel>
        <input sx={{ p: 2, mt: 1 }} placeholder="First Name" />
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
