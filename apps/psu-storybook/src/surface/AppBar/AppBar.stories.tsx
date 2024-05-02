/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { AppBar, AppBarProps, Link, Icon, Container } from '@psu-flex/core-ui';

export default {
  title: 'Surface/AppBar',
  component: AppBar,
  argTypes: {
    position: {
      control: {
        type: 'select',
      },
    },
    gradient: {
      control: {
        type: 'select',
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

const Template: Story<AppBarProps> = (args) => (
  <Container>
    <AppBar {...args}>
      <div
        className="flex justify-between items-center"
        sx={{ px: 16, py: 10 }}
      >
        <Link to="/">
          <img
            src={
              'https://www.psu.edu/psu-edu-assets/images/shared/psu-mark.svg'
            }
            sx={{ width: '200px' }}
            alt={'Psu logo'}
            loading="lazy"
          />
        </Link>
        <Icon size={36} icon="menu" color="white" />
      </div>
    </AppBar>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  gradient: 'navBar',
  position: 'sticky',
};
