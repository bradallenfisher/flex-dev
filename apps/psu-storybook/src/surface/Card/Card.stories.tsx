/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Heading,
  Body,
  Card,
  Divider,
  CardProps,
  Icon,
  Flex,
} from '@psu-flex/core-ui';
export default {
  title: 'Surface/Card',
  component: Card,
  argTypes: {
    dropShadow: {
      control: {
        type: 'select',
      },
    },
    gradient: {
      control: {
        type: 'select',
      },
    },
    extraSx: {
      control: {
        type: 'null',
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <Heading extraSx={{ mb: 4, fontWeight: 'black' }} variant={40}>
      Top 1%
    </Heading>
    <Divider thickness="md" color="beaverBlue" extraSx={{ my: 3 }} />
    <Body
      variant={20}
      extraSx={{
        mt: 2,
        lineHeight: '120',
      }}
    >
      world-class university
    </Body>
    <Body
      className="italic"
      variant={16}
      extraSx={{
        mt: 8,
        lineHeight: '120',
      }}
    >
      Center for World University Rankings, 2022-2023
    </Body>
  </Card>
);

export const Playground = Template.bind({});
Playground.args = {
  dropShadow: 'sm-1',
  extraSx: {
    maxWidth: '420px',
    '&:hover': {
      boxShadow: 'lg-1',
    },
  },
  py: 10,
  px: 10,
};

const Template2: Story<CardProps> = (args) => (
  <Flex direction="column" gap={8}>
    <Body>
      Any flex props can be added to card.
      <br /> Example:
    </Body>
    <Card {...args}>
      <Heading variant={40}>Top 1%</Heading>
      <Body variant={20}>world-class university</Body>
      <Body align="center" className="italic" variant={16}>
        Center for World University Rankings
      </Body>
    </Card>
  </Flex>
);

export const CardUsingFlexProps = Template2.bind({});
CardUsingFlexProps.args = {
  gap: 4,
  alignItems: 'center',
  dropShadow: 'sm-1',
  extraSx: {
    maxWidth: '420px',
    '&:hover': {
      boxShadow: 'lg-1',
    },
  },
  py: 10,
  px: 10,
  backgroundColor: 'white',
};

const cardHoverSx = {
  '&:hover': {
    backgroundColor: 'beaverBlue',
    transform: 'scale(1.019)',
  },
};

const Template3: Story<CardProps> = (args) => (
  <Flex direction="column" gap={8}>
    <Body>Pass a 'to' prop to the card to make it a link</Body>
    <Card
      extraSx={{
        ...cardHoverSx,
        minHeight: '160px',
        minWidth: '400px',
        pb: 6,
        pt: '79px',
      }}
      {...args}
    >
      <Flex gap={4} direction="column">
        <Divider size="20px" thickness="lg" color="creekTeal" />
        <Heading color="white" variant={40}>
          Student Life
        </Heading>
      </Flex>
      <Icon icon="arrowRight" size={28} color="white" />
    </Card>
  </Flex>
);

export const ClickableCard = Template3.bind({});
ClickableCard.args = {
  to: 'https://www.google.com/',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  className: 'h-full',
  backgroundColor: 'nittanyNavy',
  borderRadius: 'md',
  px: 6,
  dropShadow: 'sm-1',
};
