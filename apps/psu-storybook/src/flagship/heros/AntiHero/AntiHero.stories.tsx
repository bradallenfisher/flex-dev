import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { AntiHero, AntiHeroProps } from '@psu-flex/psu-flagship';
import exampleImg from './assets/example-antihero-img.png';
export default {
  title: 'Flagship/Heros/AntiHero',
  component: AntiHero,
  argTypes: {
    backgroundImage: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const Template: Story<AntiHeroProps> = (args) => <AntiHero {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundImage: exampleImg,
  heading: 'Mission and Values',
  body: 'The Pennsylvania State University is a multi-campus, land-grant, public research university that educates students from around the world and supports individuals and communities through integrated programs of teaching, research, and service.',
};
