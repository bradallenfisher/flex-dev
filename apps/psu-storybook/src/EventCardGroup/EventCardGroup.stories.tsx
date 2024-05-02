import React from 'react';
import { jsx, ThemeProvider, EventCardGroupProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import { EventCardGroup } from '@psu-flex/psu-global-ui';
import { Item } from 'react-stately';
import { useId } from 'react-aria';
import { EventCard } from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/EventCardGroup',
  component: EventCardGroup,
} as Meta;

const eventCardsData = [
  {
    itemHeading:
      'American will spend half their lives taking prescription drugs, study finds',
    itemBody:
      'Pen State is where academic excellent meets vibrant campus life. Join our diversity community to innovate, connect and create unforgettable memories that defin...',
    itemIcon: {
      icon: 'locationPin',
      iconBody: 'State College - PA'
    },
    itemDate: Date.parse('tuesday, June 1'),
    itemTo: 'https://www.google.com/'
  },
  {
    itemHeading:
      'Penn State joins Big Ten institutions for Third annual One Big Week',
    itemBody:
      'Pen State is where academic excellent meets vibrant campus life. Join our diversity community to innovate, connect and create unforgettable memories that defin...',
    itemIcon: {
      icon: 'locationPin',
      iconBody: 'State College - PA'
    },
    itemDate: Date.parse('tuesday, June 1'),
    itemTo: 'https://www.google.com/'
  },
  {
    itemHeading:
      '$2.5 million gift solidify vibrant future at Penn State Hillel',
    itemBody:
      'Pen State is where academic excellent meets vibrant campus life. Join our diversity community to innovate, connect and create unforgettable memories that defin...',
    itemIcon: {
      icon: 'locationPin',
      iconBody: 'State College - PA'
    },
    itemDate: Date.parse('tuesday, June 1'),
    itemTo: 'https://www.google.com/'
  },
  {
    itemHeading:
      'Penn State celebrate Ingenous Peoples Day with events Oct. 9-10',
    itemBody:
      'Pen State is where academic excellent meets vibrant campus life. Join our diversity community to innovate, connect and create unforgettable memories that defin...',
    itemIcon: {
      icon: 'locationPin',
      iconBody: 'State College - PA'
    },
    itemDate: Date.parse('tuesday, June 1'),
    itemTo: 'https://www.google.com/'
  }
];

const Template: Story<EventCardGroupProps> = (args) => (
  <ThemeProvider>
    <EventCardGroup
        columnSpan={1}
        items={eventCardsData}
        groupHeading="News Article Placeholder"
        buttonLabel="View All Global Events"
        buttonTo="https://www.google.com/"
      >
        {item => (
          <Item key={useId()}>
            <EventCard
              itemHeading={item.itemHeading}
              itemBody={item.itemBody}
              itemIcon={item.itemIcon}
              itemTo={item.itemTo}
              itemDate={item.itemDate}
            />
          </Item>
        )}
      </EventCardGroup>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};