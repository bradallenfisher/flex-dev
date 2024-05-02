/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { DateRangePicker } from '@psu-flex/psu-global-ui';
import { today, getLocalTimeZone } from '@internationalized/date';

export default {
  title: 'Form Elements/DateRangePicker',
  component: DateRangePicker,
} as Meta;

const Template: Story<DateRangePicker> = (args) => (
  <div sx={{ pt: 10 }} className="flex justify-center">
    <DateRangePicker minValue={today(getLocalTimeZone())} {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Event Dates',
};
