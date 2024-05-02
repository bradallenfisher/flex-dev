import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
// import React from 'react';
// import { jsx } from 'theme-ui';
// import { Meta, Story } from '@storybook/react';
import {
  CardGroup,
  CardGroupProps,
  ThreeUpImageTextCard,
} from '@psu-flex/psu-global-ui';
import undecided from '@psu-flex/core-ui/assets/images/undecided.png';
import major from '@psu-flex/core-ui/assets/images/majors.png';
import college from '@psu-flex/core-ui/assets/images/college.png';
import { Item } from 'react-stately';
import { useId } from 'react';
import { richText_a_p, richText_p } from '../../../example-content/RichText';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
export default {
  title: 'Core Composite/CardGroup/ThreeUpImageText',
  component: CardGroup,
  argTypes: {
    sx: { table: { disable: true } },
    backgroundColor: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
    introHeading: { control: 'text' },
    introParagraph: { control: 'text' },
  },
} as Meta;

const threeUpImageTextCardsData = [
  {
    itemHeading: 'Board of Trustees',
    richTextRawBody: richText_a_p,
    itemImage: major,
    imageWidth: 600,
    imageHeight: 200,
    textButtonTo: 'https://www.google.com/',
    textButtonText: 'Learn more',
    textButtonAria: 'Learn more about the Board of Trustees',
  },
  {
    itemHeading: 'Office of the President',
    richTextRawBody: richText_a_p,
    itemImage: college,
    imageWidth: 600,
    imageHeight: 280,
    textButtonTo: 'https://www.google.com/',
    textButtonText: 'Learn more',
    textButtonAria: 'Learn more about Office of the President',
  },
  {
    itemHeading: 'University Faculty Senate',
    richTextRawBody: richText_p,
    itemImage: undecided,
    imageWidth: 420,
    imageHeight: 280,
  },
];

const Template: Story<any> = (args) => (
  <CardGroup
    {...useIntroArgs(args)}
    columnSpan={4}
    cards={threeUpImageTextCardsData}
    backgroundColor={args.backgroundColor}
  >
    {(item) => (
      <Item key={useId()}>
        <ThreeUpImageTextCard
          itemImage={item.itemImage}
          imageHeight={item.imageHeight}
          imageWidth={item.imageWidth}
          itemHeading={item.itemHeading}
          richTextRawBody={item.richTextRawBody}
          textButtonTo={item.textButtonTo}
          textButtonText={item.textButtonText}
          textButtonAria={item.textButtonAria}
        />
      </Item>
    )}
  </CardGroup>
);

export const Default = Template.bind({});
Default.args = {};
