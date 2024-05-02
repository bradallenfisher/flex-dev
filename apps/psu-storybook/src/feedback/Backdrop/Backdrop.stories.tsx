import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Backdrop,
  BackdropProps,
  CtaButton,
  Card,
  Heading,
} from '@psu-flex/core-ui';

export default {
  title: 'Feedback/Backdrop',
  component: Backdrop,
  argTypes: {
    onClose: {
      control: { type: null },
    },
    backdrop: {
      control: {
        type: 'select',
      },
    },
    transition: {
      control: {
        type: 'select',
      },
    },
    tag: {
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

const Template: Story<BackdropProps> = (args) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const handleToggleBackdrop = () => {
    setIsBackdropOpen(!isBackdropOpen);
  };
  return (
    <>
      <CtaButton
        hocId={exampleHocId}
        variant={'primaryOutlined'}
        onClick={handleToggleBackdrop}
      >
        Show Backdrop
      </CtaButton>
      <Backdrop
        {...args}
        onClose={handleToggleBackdrop}
        isOpen={isBackdropOpen}
      >
        <div className="h-full flex justify-center items-center align-center">
          <Card
            px={6}
            py={6}
            className="flex-col justify-center"
            backgroundColor="white"
          >
            <Heading variant={20} color="nittanyNavy">
              This Card is on a Backdrop
            </Heading>
          </Card>
        </div>
      </Backdrop>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
