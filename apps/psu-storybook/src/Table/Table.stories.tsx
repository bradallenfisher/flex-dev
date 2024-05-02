import React from 'react';
import { jsx, ThemeUIProvider } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Table, ThemeProvider } from '@psu-flex/psu-global-ui';
import { BackgroundWrapper } from '@psu-flex/psu-global-ui';
export default {
  title: 'Global/Table',
  component: Table,
} as Meta;

const Template: Story<typeof Table> = (args) => (
  <BackgroundWrapper variant="white" {...args}>
    <ThemeProvider>
      <Table headers={[]} data={[]} heading={''} {...args} />
    </ThemeProvider>
  </BackgroundWrapper>
);

export const Default = Template.bind({});
Default.args = {
  headers: [
    'International Institution',
    'Penn State College or Campus',
    'Agreement Type',
    'Collaboration Type',
    'Reference ID',
    'Year',
    'Person In Charge',
  ],
  data: [
    {
      institution: 'Melbourne, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2022,
      personInCharge: 'John Doe',
    },
    {
      institution: 'Melbourne, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2022,
      personInCharge: 'John Doe',
    },
    {
      institution: 'Melbourne, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2022,
      personInCharge: 'John Doe',
    },
    {
      institution: 'Melbourne, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2022,
      personInCharge: 'John Doe',
    },
  ],
  heading:
    'Explore the list of active agreements between Penn State and our international partners.',
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  headers: [
    'International Institution',
    'Penn State College or Campus',
    'Agreement Type',
    'Collaboration Type',
    'Reference ID',
    'Year',
    'Person In Charge',
  ],
  data: [
    {
      institution: 'Melbourne, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2020,
      personInCharge: 'John Doe',
    },
    {
      institution: 'Brisbane, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2022,
      personInCharge: 'John Doe',
    },
    {
      institution: 'Melbourne, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2022,
      personInCharge: 'John Doe',
    },
    {
      institution: 'Melbourne, University of',
      college: 'Education Abroad',
      agreement: 'MOA',
      collaboration: 'General Agreement',
      reference: 'Melbourne EA MOA 2021',
      year: 2022,
      personInCharge: 'John Doe',
    },
  ],
  search: true,
  heading:
    'Explore the list of active agreements between Penn State and our international partners.',
};
