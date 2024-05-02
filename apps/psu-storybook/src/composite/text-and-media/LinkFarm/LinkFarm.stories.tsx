import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { LinkFarm } from '@psu-flex/psu-global-ui';
import fallbackImg from '@psu-flex/core-ui/assets/images/psuFallback.jpeg';
import { BackgroundWrapper } from '@psu-flex/psu-global-ui';

export default {
  title: 'Core Composite/TextAndMedia/LinkFarm',
  component: LinkFarm,
  argTypes: {
    backgroundColor: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

const richTextExample = {
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
};

const items = [
  {
    listData: [
      {
        text: 'Undergrad Admission',
        slug: 'https://www.psu.edu/academics/undergraduate-degrees/',
      },
      {
        text: 'World Campus',
        slug: 'https://www.psu.edu/academics/graduate-degrees/',
      },
    ],
    itemHeading: 'Undergraduate',
    itemRichTextRawBody: richTextExample,
    imageSrc: fallbackImg,
    buttonText: 'Apply now',
  },
  {
    listData: [
      {
        text: 'Graduate admission',
        slug: 'https://www.psu.edu/this-is-penn-state/mission-and-values/',
      },
      {
        text: 'World campus',
        slug: 'https://www.psu.edu/this-is-penn-state/equity-and-inclusion/',
      },
    ],
    itemHeading: 'graduate',
    itemRichTextRawBody: richTextExample,
    imageSrc: fallbackImg,
    buttonText: 'Apply Now',
  },

  {
    listData: [
      {
        text: 'Penn state law admissions',
        slug: 'https://www.psu.edu/visitors/',
      },
      {
        text: 'Dickinson law admissions',
        slug: 'https://www.psu.edu/prospective-students/',
      },
      {
        text: 'college of medicine admissions',
        slug: 'https://www.psu.edu/current-students/',
      },
    ],
    itemHeading: 'professional schools',
    itemRichTextRawBody: richTextExample,
    imageSrc: fallbackImg,
    buttonText: 'Apply Now',
  },
  {
    listData: [
      {
        text: 'Graduate admission',
        slug: 'https://www.psu.edu/this-is-penn-state/mission-and-values/',
      },
      {
        text: 'World campus',
        slug: 'https://www.psu.edu/this-is-penn-state/equity-and-inclusion/',
      },
    ],
    itemHeading: 'Video & no CTA',
    itemRichTextRawBody: richTextExample,
    videoUrl: 'https://www.youtube.com/watch?v=-VaMPxO_zyQ&t=8s',
  },
  {
    itemHeading: 'No List',
    itemRichTextRawBody: richTextExample,
    imageSrc: fallbackImg,
    buttonText: 'Apply Now',
  },
];

const Template = (args) => (
  <BackgroundWrapper variant={args.backgroundColor}>
    <LinkFarm data={items} />
  </BackgroundWrapper>
);

export const Default = Template.bind({});
Default.args = {};
