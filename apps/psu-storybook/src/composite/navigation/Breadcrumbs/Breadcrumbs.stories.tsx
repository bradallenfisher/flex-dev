/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { BreadcrumbItem, Breadcrumbs } from '@psu-flex/core-ui';

export default {
  title: 'Core Composite/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
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

const breadcrumbItems = [
  {
    linkText: 'Home',
    to: 'https://www.google.com/',
  },
  { linkText: 'Departments', to: 'https://www.google.com/' },
  { linkText: 'Electrical Engineering', to: 'https://www.google.com/' },
];

const Template: Story<any> = () => (
  <Breadcrumbs>
    {breadcrumbItems.map((item) => {
      return <BreadcrumbItem to={item.to}>{item.linkText}</BreadcrumbItem>;
    })}
  </Breadcrumbs>
);

export const Default = Template.bind({});
Default.args = {};
