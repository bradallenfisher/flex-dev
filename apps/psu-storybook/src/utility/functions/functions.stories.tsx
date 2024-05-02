/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Flex, Heading, mergeSx } from '@psu-flex/core-ui';

export default {
  title: 'Utility/Functions/Functions Examples',
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template = () => {
  const baseSx = {
    color: 'nittanyNavy',
    cursor: 'pointer',
    px: 4,
    py: 2,
    width: 'fit-content',
  };
  const borderSx = {
    borderWidth: 'xs',
    borderStyle: 'solid',
    borderColor: 'coalyGray',
    borderRadius: 'sm',
  };
  const hoverSx = {
    '&:hover': { backgroundColor: 'nittanyNavy', color: 'white' },
  };

  const tagSx = mergeSx(baseSx, borderSx, hoverSx);

  return (
    <Flex
      gap={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading variant={32}>mergeSx example</Heading>
      <div sx={{ ...tagSx }}>Item</div>
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {};
