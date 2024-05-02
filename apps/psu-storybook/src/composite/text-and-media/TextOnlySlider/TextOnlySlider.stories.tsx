/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextOnlySlider } from '@psu-flex/components/src/components/composite/text-and-media/TextOnlySlider/TextOnlySlider';
import { TextOnlySliderProps } from '@psu-flex/components/src/components/composite/text-and-media/TextOnlySlider/TextOnlySliderTypes';
export default {
  title: 'Core Composite/TextAndMedia/TextOnlySlider',
  component: TextOnlySlider,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    sliderData: {
      control: {
        type: null,
      },
    },
    sliderVariant: {
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const richTextRawExample1 = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Our University values represent our core ethical aspirations for all our daily activities and actions as students, faculty, staff, and volunteers at Penn State.',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};
const richTextRawExample2 = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'We serve Pennsylvania’s communities through partnerships that include county extension offices, philanthropy, and a teaching hospital. Through Penn State Extension offices—located in all sixty-seven Pennsylvania counties—residents have access to practical training and advice based on University research. Penn State Health’s comprehensive health network provides residents with high-quality care and treatment at locations throughout the state.',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};
const richTextRawExample3 = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Penn State ranks 31st among national public universities in ',
          nodeType: 'text',
        },
        {
          data: {
            uri: 'https://www.usnews.com/best-colleges/penn-state-6965/overall-rankings',
          },
          content: [
            {
              data: {},
              marks: [],
              value: ' U.S. News\' annual "Best Colleges" rankings for 2022-23',
              nodeType: 'text',
            },
          ],
          nodeType: 'hyperlink',
        },
        {
          data: {},
          marks: [],
          value:
            '. Penn State is in the top 25 among American Association of Universities public institutions and tied for 77th overall among 443 institutions included in the overall "National Universities" ranking.',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};

const data = [
  {
    heading: 'Our Values',
    richTextRaw: richTextRawExample1,
  },
  {
    heading: 'Serving Communities Across the State',
    richTextRaw: richTextRawExample2,
  },
  {
    heading: 'Another Heading',
    richTextRaw: richTextRawExample3,
  },
];
const data2 = [
  {
    subHeading: 'STRENGTHEnING PENNSYlVANIA',
    heading: 'Our Values',
    richTextRaw: richTextRawExample1,
  },
  {
    subHeading: 'STRENGTHEnING PENNSYlVANIA',
    heading: 'Serving Communities Across the State',
    richTextRaw: richTextRawExample2,
  },
  {
    subHeading: 'STRENGTHEnING PENNSYlVANIA',
    heading: 'Another Heading',
    richTextRaw: richTextRawExample3,
  },
];

const Template: Story<TextOnlySliderProps> = (args) => {
  return <TextOnlySlider {...args} sliderData={data} />;
};
export const Default = Template.bind({});
Default.args = {
  sliderVariant: 'white',
  dividerColor: 'link',
};

const Template2: Story<TextOnlySliderProps> = (args) => {
  return <TextOnlySlider {...args} sliderData={data2} />;
};
export const TextSliderWithSubHeading = Template2.bind({});
TextSliderWithSubHeading.args = {
  sliderVariant: 'navy',
  dividerColor: 'link',
};
