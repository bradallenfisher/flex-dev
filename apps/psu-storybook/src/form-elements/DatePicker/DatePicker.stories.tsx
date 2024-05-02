/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { DatePicker } from '@psu-flex/psu-global-ui';
import { today, getLocalTimeZone } from '@internationalized/date';

export default {
  title: 'Form Elements/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePicker> = (args) => (
  <div sx={{ pt: 10 }} className="flex justify-center">
    <DatePicker minValue={today(getLocalTimeZone())} {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Event Date',
};
