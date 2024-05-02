/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ComponentIntro,
  Container,
  Flex,
  Heading,
  Wrapper,
} from '@psu-flex/core-ui';
import { BaseComponentIntroProps } from '@psu-flex/components/src/components/base-components/data-display/ComponentIntro/ComponentIntroTypes';
import { useIntroArgs } from '../../example-content/component-intro-utility/component-intro-utility';

export default {
  title: 'Data Display/ComponentIntro',
  component: ComponentIntro,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    introParagraph: { control: 'text' },
    numberOfCards: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<BaseComponentIntroProps> = (args) => (
  <Container>
    <Wrapper>
      <ComponentIntro {...useIntroArgs(args)} />
      <Flex
        justifyContent="center"
        alignItems="center"
        extraSx={{ backgroundColor: 'limestoneLight', height: '200px' }}
      >
        <Heading extraSx={{ color: 'limestoneGray' }} variant={20}>
          This element is not part of component, just here to display how
          ComponentIntro interacts when its above component.
        </Heading>
      </Flex>
    </Wrapper>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  introHeading: 'University Leadership',
  introParagraph:
    'We strive to celebrate diversity in all aspects of our educational and operational activities. Our strategic plans are designed to result in ongoing improvements that help prepare future generations of leaders. Our budget is an integral part of our strategic process.',
};
