/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { ListBox } from '@psu-flex/core-ui';
import { Item } from 'react-stately';
import { AppBar, Body, Heading, Icon, Divider, Link } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/ListBox',
  component: ListBox,
  argTypes: {
    label: {
      description: 'An optional visual label for the listbox.',
      control: 'text',
    },
    items: {
      description: 'Required. Item objects in the collection.',
      control: 'null',
    },
    onClick: {
      control: 'null',
    },
  },
};

let options = [
  { id: 1, name: 'Name 1', description: 'Description 1' },
  { id: 2, name: 'Name 2', description: 'Description 2' },
  {
    id: 3,
    name: 'Name 3',
    description: 'Description 3',
  },
];

let options2 = [
  { id: 1, name: 'News', href: 'https://www.google.com/' },
  { id: 2, name: 'Careers', href: 'https://www.google.com/' },
  {
    id: 3,
    name: 'Facts and Rankings',
    href: 'https://www.google.com/',
  },
  { id: 4, name: 'Colleges', href: 'https://www.google.com/' },
  { id: 5, name: 'Campuses', href: 'https://www.google.com/' },
  {
    id: 6,
    name: 'Health Care',
    href: 'https://www.google.com/',
  },
  { id: 7, name: 'Research', href: 'https://www.google.com/' },
  { id: 8, name: 'Impact', href: 'https://www.google.com/' },
];

let options3 = [
  { id: 1, name: 'Graduate', href: 'https://www.google.com/' },
  { id: 2, name: 'Undergraduate', href: 'https://www.google.com/' },
  {
    id: 3,
    name: 'Online',
    href: 'https://www.google.com/',
  },
  { id: 4, name: 'Professional Schools', href: 'https://www.google.com/' },
  { id: 5, name: 'Continuing Education', href: 'https://www.google.com/' },
];

let options4 = [
  {
    id: 1,
    name: 'Tuition Information',
    href: 'https://www.google.com/',
    icon: 'linkOut',
  },
  {
    id: 2,
    name: 'Undergraduate',
    href: 'https://www.google.com/',
    icon: 'arrowRight',
  },
  {
    id: 3,
    name: 'Online',
    href: 'https://www.google.com/',
  },
];

let options5 = [
  {
    id: 1,
    name: 'Tuition Information',
    href: 'https://www.google.com/',
  },
  {
    id: 2,
    name: 'Undergraduate',
    href: 'https://www.google.com/',
  },
  {
    id: 3,
    name: 'Online',
    href: 'https://www.google.com/',
  },
];

const list2 = [
  {
    name: 'ListItem 1',
  },
  {
    name: 'ListItem 2',
  },
  {
    name: 'ListItem 3',
  },
];

const Template = (args) => (
  <React.Fragment>
    <Flex className="items-center" direction="column" extraSx={{ m: 10 }}>
      <ListBox {...args} items={options}>
        {(item) => (
          <Item key={item}>
            <Heading tag="h2" variant={32}>
              {item.name}
            </Heading>
            <Body variant={22}>{item.description}</Body>
          </Item>
        )}
      </ListBox>
    </Flex>
  </React.Fragment>
);

const Template2 = () => (
  <React.Fragment>
    <AppBar
      extraSx={{ width: '400px', height: '400px', p: 8 }}
      position="sticky"
      gradient="powerFacts"
    >
      <Heading variant={20} className="uppercase" color="white">
        Explore
      </Heading>
      <ListBox gap={2} direction="column" extraSx={{ my: 2 }} items={options2}>
        {(item) => (
          <Item key={item}>
            <Link
              variant={18}
              color={'linkLight'}
              extraSx={{
                fontFamily: 'condensed',
              }}
              to={item.href}
            >
              {item.name}
            </Link>
          </Item>
        )}
      </ListBox>
    </AppBar>
  </React.Fragment>
);

const Template3 = () => (
  <React.Fragment>
    <div
      sx={{
        p: 12,
        width: '30vw',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 'md',
      }}
    >
      <ListBox direction="column" items={options2}>
        {(item) => (
          <Item key={item}>
            <Link
              extraSx={{
                transition: '0s',
                p: 2,
                color: 'nittanyNavy',
                '&:hover': {
                  color: 'link',
                  fontStyle: 'italic',
                },
              }}
              variant={18}
              to={item.href}
            >
              {item.name}
            </Link>
            <Divider dividerStyle="dashed" color={'limestoneLight'} />
          </Item>
        )}
      </ListBox>
    </div>
  </React.Fragment>
);

const Template4 = () => (
  <React.Fragment>
    <div
      sx={{
        p: 12,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 'lg',
      }}
    >
      <ListBox gap={1} direction="column" items={options4}>
        {(item) => (
          <Item key={item}>
            <div className="flex-row items-center">
              <Link
                to={item.href}
                extraSx={{
                  px: 2,
                  transition: '0s',
                  color: 'link',
                  letterSpacing: '16-lg',
                }}
                variant={18}
              >
                {item.name}
              </Link>
              {item.icon && <Icon size={16} icon={item.icon} color={'link'} />}
            </div>
          </Item>
        )}
      </ListBox>
    </div>
  </React.Fragment>
);

const Template5 = () => (
  <React.Fragment>
    <div
      sx={{
        p: 12,
        boxShadow: 'xl-1',
        borderRadius: 'lg',
      }}
    >
      <ListBox gap={2} variant="start" items={options5}>
        {(item) => (
          <Item key={item}>
            <Link
              to={item.href}
              extraSx={{
                px: 2,
                transition: '0s',
                color: 'link',
                letterSpacing: '16-lg',
              }}
              variant={18}
            >
              {item.name}
            </Link>
          </Item>
        )}
      </ListBox>
    </div>
  </React.Fragment>
);

const Template6 = () => (
  <React.Fragment>
    <div
      sx={{
        p: 12,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 'lg',
      }}
    >
      <ListBox
        label={'Responsive List'}
        responsive
        gap={2}
        direction="column"
        items={list2}
        gutterY={4}
      >
        {(item) => (
          <Item key={item}>
            <div className="flex-row items-center">
              <Heading variant={18}>{item.name}</Heading>
            </div>
          </Item>
        )}
      </ListBox>
    </div>
  </React.Fragment>
);

const Template7 = () => (
  <React.Fragment>
    <div
      sx={{
        p: 12,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 'lg',
      }}
    >
      <Body variant={16}> Ordered List</Body>
      <ListBox
        gutterX={8}
        gap={1}
        direction="column"
        tag="ol"
        items={list2}
        gutterY={4}
      >
        {(item) => (
          <Item key={item}>
            <Link to={'https://www.google.com/'} variant={18}>
              {item.name}
            </Link>
          </Item>
        )}
      </ListBox>
    </div>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  label: 'ListBox playground',
  gap: 4,
  variant: 'col',
  gutterY: 4,
};

export const ListOfFooterLinks = Template2.bind({});
ListOfFooterLinks.args = {};

export const ListOfNavLinks = Template3.bind({});
ListOfNavLinks.args = {};

export const ListOfLinksWithIcon = Template4.bind({});
ListOfLinksWithIcon.args = {};

export const RowList = Template5.bind({});
RowList.args = {};

export const ResponsiveList = Template6.bind({});
ResponsiveList.args = {};

export const OrderedList = Template7.bind({});
OrderedList.args = {};
