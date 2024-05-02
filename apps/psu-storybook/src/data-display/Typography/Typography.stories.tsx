/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Container } from '@psu-flex/core-ui';
import { Typography } from '@psu-flex/core-ui';
import { TypographyProps, TypographyTags } from '@psu-flex/core-ui';
import { DisplayHeading } from '@psu-flex/core-ui';
import { Heading } from '@psu-flex/core-ui';
import { Body } from '@psu-flex/core-ui';
import { Card } from '@psu-flex/core-ui';

interface TagItem {
  tag: TypographyTags;
  variant: string;
  children: string;
}
interface VariantFamilyItem {
  displayItems: TagItem[];
  headingItems: TagItem[];
  bodyItems: TagItem[];
}

const tagItems: TagItem[] = [
  {
    tag: 'h1',
    variant: 'headingStyle.full.48',
    children: 'h1 headingStyle.full.48',
  },
  {
    tag: 'h2',
    variant: 'headingStyle.full.40',
    children: 'h2 headingStyle.full.40',
  },
  {
    tag: 'h3',
    variant: 'headingStyle.full.36',
    children: 'h3 headingStyle.full.36',
  },
  {
    tag: 'h4',
    variant: 'headingStyle.full.32',
    children: 'h4 headingStyle.full.32',
  },
  {
    tag: 'h5',
    variant: 'headingStyle.full.28',
    children: 'h5 headingStyle.full.28',
  },
  {
    tag: 'h6',
    variant: 'headingStyle.full.24',
    children: 'h6 headingStyle.full.24',
  },
  {
    tag: 'p',
    variant: 'bodyStyle.full.18',
    children: 'p bodyStyle.full.18',
  },
];
const variantFamilyItems: VariantFamilyItem = {
  displayItems: [
    {
      tag: 'h2',
      variant: 'displayStyle.full.64',
      children: '64',
    },
    {
      tag: 'h3',
      variant: 'displayStyle.full.56',
      children: '56',
    },
  ],
  headingItems: [
    {
      tag: 'h2',
      variant: 'headingStyle.full.56',
      children: '56',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.48',
      children: '48',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.40',
      children: '40',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.36',
      children: '36',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.32',
      children: '32',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.28',
      children: '28',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.24',
      children: '24',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.22',
      children: '22',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.20',
      children: '20',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.18',
      children: '18',
    },
    {
      tag: 'h2',
      variant: 'headingStyle.full.16',
      children: '16',
    },
  ],
  bodyItems: [
    {
      tag: 'p',
      variant: 'bodyStyle.full.22',
      children: '22',
    },
    {
      tag: 'p',
      variant: 'bodyStyle.full.20',
      children: '20',
    },
    {
      tag: 'p',
      variant: 'bodyStyle.full.18',
      children: '18',
    },
    {
      tag: 'p',
      variant: 'bodyStyle.full.16',
      children: '16',
    },
  ],
};

export default {
  title: 'Data Display/Typography',
  component: Typography,
  argTypes: {
    align: {
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Card backgroundColor="white" dropShadow="sm" extraSx={{ width: '50vw' }}>
    <Typography {...args}>Typography</Typography>
  </Card>
);

const Template2: Story<TypographyProps> = () => (
  <div sx={{ width: '900px' }} className="flex-col justify-center">
    <DisplayHeading extraSx={{ my: 2 }} variant={56}>
      This is a h1 DisplayHeading
    </DisplayHeading>
    <Heading extraSx={{ my: 2 }} variant={36}>
      This is a h2 Heading
    </Heading>
    <Body extraSx={{ my: 2 }} variant={22}>
      This is a p Body
    </Body>
  </div>
);

const Template3: Story<TypographyProps> = () => (
  <div sx={{ width: '900px' }} className="flex-col justify-center">
    <div>
      <Typography tag="h1" variant="headingStyle.full.48">
        Heading Scale
      </Typography>
      <Typography
        tag="p"
        extraSx={{ lineHeight: '32px !important' }}
        variant="bodyStyle.full.20"
      >
        Recommended heading scale for basic page with standard headings and body
        text. Heading sizes within components are component-specific and will
        not follow this scale.
      </Typography>
    </div>
    <div>
      {tagItems?.map((item, index) => (
        <Typography
          extraSx={{ my: 6 }}
          tag={item.tag}
          variant={item.variant}
          key={index}
        >
          {item.children}
        </Typography>
      ))}
    </div>
  </div>
);

const Template4: Story<TypographyProps> = () => (
  <Container>
    <h2 sx={{ borderBottom: '1px solid gray', my: 4, py: 4 }}>
      Variant families among type styles
    </h2>
    <Body variant={16}>
      Pass the necessary variant number into the component variant prop.
    </Body>
    <Body variant={16}>
      **Each variant listed below is only available with the corresponding type
      style.
    </Body>

    <div sx={{ width: '47vw' }} className="flex-row items-center ">
      <Heading variant={32} extraSx={{ my: 0, pr: 4 }}>
        Display Style :
      </Heading>
      <div className="flex-row items-center">
        {variantFamilyItems?.displayItems?.map((item, index) => (
          <Typography
            extraSx={{ mx: 1, my: 0 }}
            tag={item.tag}
            variant={item.variant}
            key={index}
          >
            {item.children}
          </Typography>
        ))}
      </div>
    </div>
    <div sx={{ width: '47vw' }} className="flex-row items-center ">
      <Heading variant={24} extraSx={{ my: 0, pr: 4 }}>
        Heading Style :
      </Heading>
      <div className="flex-row items-center">
        {variantFamilyItems?.headingItems?.map((item, index) => (
          <Typography
            extraSx={{ mx: 1, my: 0 }}
            tag={item.tag}
            variant={item.variant}
            key={index}
          >
            {item.children}
          </Typography>
        ))}
      </div>
    </div>
    <div sx={{ width: '47vw' }} className="flex-row items-center">
      <Heading variant={18} extraSx={{ my: 0, pr: 4 }}>
        Body Style :
      </Heading>
      <div className="flex-row items-center">
        {variantFamilyItems?.bodyItems?.map((item, index) => (
          <Typography
            extraSx={{ mx: 1, my: 0 }}
            tag={item.tag}
            variant={item.variant}
            key={index}
          >
            {item.children}
          </Typography>
        ))}
      </div>
    </div>
  </Container>
);
const Template5: Story<TypographyProps> = () => (
  <div sx={{ width: '900px' }}>
    <Typography variant="headingStyle.full.24">
      Using theme text variants
    </Typography>
    <Typography variant="bodyStyle.full.18">
      In some situations you might not be able to use the Typography component
      but you can still take advantage of the text variant keys of the theme.
    </Typography>

    <div
      className="flex justify-center"
      sx={{
        border: '1px dashed gray',
        borderRadius: 'md',
        p: 8,
        mt: 8,
        variant: 'text.headingStyle.full.32',
      }}
    >
      This div is using a text variant from theme
    </div>
  </div>
);
const Template6: Story<TypographyProps> = () => (
  <div sx={{ width: '900px' }}>
    <Typography tag="h1" variant="headingStyle.full.24">
      Accessibility
    </Typography>
    <Typography variant="bodyStyle.full.18">
      A few key factors to follow for an accessible typography:
    </Typography>
    <div className="flex-col">
      <span
        sx={{
          my: 2,
          color: 'coalyGray',
          variant: 'text.bodyStyle.full.16',
        }}
      >
        - <strong>Color.</strong> Provide enough contrast between text and its
        background, check out the minimum recommended WCAG 2.0 color contrast
        ratio (4.5:1).
      </span>
      <div
        className="flex-col items-center"
        sx={{
          border: '1px dashed gray',
          borderRadius: 'md',
          p: 4,
          mt: 4,
          mb: 16,
        }}
      >
        <Typography color="coalyGray" variant="headingStyle.full.20">
          This is an accessible font color on white background.
        </Typography>
        <Typography color="slateLight" variant="headingStyle.full.20">
          This is not.
        </Typography>
      </div>
      <span
        sx={{
          my: 2,
          color: 'coalyGray',
          variant: 'text.bodyStyle.full.16',
        }}
      >
        - <strong>Font size.</strong> The fontSizes key in theme automatically
        uses relative units (rem) to accommodate the user's settings.
      </span>
      <div
        className="flex-col items-center"
        sx={{
          border: '1px dashed gray',
          borderRadius: 'md',
          p: 4,
          mt: 4,
          mb: 16,
        }}
      >
        <Typography size={18} extraSx={{ color: 'seagreen' }}>
          The size prop uses rem automatically from theme
        </Typography>
        <Typography extraSx={{ fontSize: '18px !important', color: 'tomato' }}>
          This fontSize is hard coded at 18px.
        </Typography>
      </div>

      <span
        sx={{
          color: 'coalyGray',
          variant: 'text.bodyStyle.full.16',
        }}
      >
        - <strong>Heading hierarchy.</strong> Don't skip heading levels. In
        order to solve this problem, we separate the semantics from the style.
      </span>
      <div
        className="flex-col items-center"
        sx={{
          border: '1px dashed gray',
          borderRadius: 'md',
          lineHeight: '32px',
          py: 4,
          px: '200px',
          mt: 4,
          mb: 16,
        }}
      >
        <Typography align="center" tag={'h3'} variant="headingStyle.full.22">
          We can set this heading tag to h3 since h1 already exists on page.
        </Typography>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tag: 'h2',
  size: 32,
  color: 'coalyGray',
  align: 'center',
};
export const TypeGroups = Template2.bind({});
TypeGroups.args = {};
export const TagsAndVariants = Template3.bind({});
TagsAndVariants.args = {};
export const VariantFamilies = Template4.bind({});
VariantFamilies.args = {};
export const Theme = Template5.bind({});
Theme.args = {};
export const Accessibility = Template6.bind({});
Accessibility.args = {};
