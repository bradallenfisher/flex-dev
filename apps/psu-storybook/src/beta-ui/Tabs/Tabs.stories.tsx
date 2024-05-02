import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { TabPanel, Tabs, TabsProps } from '@psu-flex/beta-ui';
import { Flex, Grid } from '@psu-flex/core-ui';
import { faqs1, faqs2, faqs3 } from './example-data';
import { Accordion } from '@psu-flex/psu-global-ui';

export default {
  title: 'Beta/Tabs',
  component: Tabs,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#fff' }],
    },
  },
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const tabItems = [
  { text: 'Item One' },
  { text: 'Item Two' },
  { text: 'Item Three' },
];

const tabPanelItems1 = [
  { text: 'Tab panel one content' },
  { text: 'Tab panel two content' },
  { text: 'Tab panel three content' },
];

const tabPanelItems2 = [faqs1, faqs2, faqs3, faqs1, faqs2, faqs3, faqs1, faqs2];

const Template: Story<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Flex
      className="w-fit m-auto"
      extraSx={{ mt: 8 }}
      direction="column"
      gap={4}
    >
      <Tabs activeTab={activeTab} onChange={setActiveTab} tabItems={tabItems} />
      {tabPanelItems1.map((item, i) => {
        return (
          <TabPanel activeTab={activeTab} index={i}>
            {item.text}
          </TabPanel>
        );
      })}
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {};

const Template2: Story<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabItemsAccordion = [
    { text: 'Tab One' },
    { text: 'Tab Two' },
    { text: 'Tab Three' },
    { text: 'Tab Four' },
    { text: 'Tab Five' },
    { text: 'Tab Six' },
    { text: 'Tab Seven' },
  ];
  return (
    <Flex extraSx={{ mt: 8 }} direction="column" gap={8}>
      <Grid>
        <Tabs
          extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
          activeTab={activeTab}
          onChange={setActiveTab}
          tabItems={tabItemsAccordion}
        />
      </Grid>
      {tabPanelItems2.map((item, i) => {
        return (
          <TabPanel activeTab={activeTab} index={i}>
            <Accordion className="fade-standard-slow" data={item} />
          </TabPanel>
        );
      })}
    </Flex>
  );
};

export const TabPanelWrapComponent = Template2.bind({});
TabPanelWrapComponent.args = {};
