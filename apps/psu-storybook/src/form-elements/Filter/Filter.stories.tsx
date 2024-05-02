/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Filter,
  Flex,
  Body,
  Card,
  Heading,
  FilterProps,
} from '@psu-flex/core-ui';

export default {
  title: 'Form Elements/Filter',
  component: Filter,
  argTypes: {
    fieldSize: {
      control: {
        type: 'select',
      },
    },
    filterBy: {
      control: {
        type: null,
      },
    },
    data: {
      control: {
        type: null,
      },
    },
    filterCallback: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const options = [
  { major: 'Computer Science', campus: 'University Park', credits: '120' },
  { major: 'Electrical Engineering', campus: 'Harrisburg', credits: '128' },
  { major: 'Biology', campus: 'Behrend', credits: '124' },
  { major: 'Psychology', campus: 'Berks', credits: '122' },
  { major: 'Business Administration', campus: 'Abington', credits: '126' },
  { major: 'English Literature', campus: 'Harrisburg', credits: '120' },
  { major: 'Mechanical Engineering', campus: 'Behrend', credits: '128' },
  { major: 'History', campus: 'Altoona', credits: '122' },
  { major: 'Mathematics', campus: 'University Park', credits: '120' },
  { major: 'Chemistry', campus: 'Mont Alto', credits: '126' },
];

const Template: Story<FilterProps<{ major: string; campus: string }>> = () => {
  const [filtered, setFiltered] = useState<any[] | null>(null);

  return (
    <Flex extraSx={{ height: '500px' }} gap={8} direction="column">
      <Filter data={options} filterCallback={setFiltered} />
      <Flex extraSx={{ width: '800px' }} gap={4} wrap>
        {filtered &&
          filtered.map((option, i) => (
            <Card
              backgroundColor="white"
              dropShadow="sm-1"
              py={6}
              px={6}
              key={i}
              direction="column"
            >
              <Heading
                extraSx={{ fontWeight: 'medium' }}
                variant={20}
                color="nittanyNavy"
              >
                {option.major}
              </Heading>
              <Body variant={18}>{option.campus}</Body>
              {/* @ts-ignore */}
              <Body color="gray" variant={16}>
                credits: {option.credits}
              </Body>
            </Card>
          ))}
      </Flex>
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {};

const footballPlayers = [
  { name: 'Sean Clifford', position: 'Quarterback', jerseyNumber: '14' },
  { name: 'Noah Cain', position: 'Running Back', jerseyNumber: '21' },
  { name: 'Jahan Dotson', position: 'Wide Receiver', jerseyNumber: '5' },
  { name: 'Arnold Ebiketie', position: 'Defensive End', jerseyNumber: '17' },
  { name: 'Brandon Smith', position: 'Linebacker', jerseyNumber: '12' },
  { name: 'Rasheed Walker', position: 'Offensive Tackle', jerseyNumber: '53' },
  { name: 'Joey Porter Jr.', position: 'Cornerback', jerseyNumber: '9' },
  { name: 'PJ Mustipher', position: 'Defensive Tackle', jerseyNumber: '97' },
];

const Template2: Story<
  FilterProps<{ name: string; position: string; jerseyNumber: string }>
> = () => {
  const [filtered, setFiltered] = useState<any[] | null>(null);

  return (
    <Flex extraSx={{ height: '500px' }} gap={8} direction="column">
      <Filter
        filterBy={'position'}
        data={footballPlayers}
        filterCallback={setFiltered}
      />
      <Flex extraSx={{ width: '800px' }} gap={4} wrap>
        {filtered &&
          filtered.map((option, i) => (
            <Card
              backgroundColor="navy80"
              dropShadow="sm-1"
              py={6}
              px={6}
              key={i}
              direction="column"
            >
              <Heading
                extraSx={{ fontWeight: 'medium' }}
                variant={20}
                color="white"
              >
                {option.name}
              </Heading>
              <Body color="white" variant={18}>
                Position: {option.position}
              </Body>
              {/* @ts-ignore */}
              <Body color="limestoneLight" variant={16}>
                Number: {option.jerseyNumber}
              </Body>
            </Card>
          ))}
      </Flex>
    </Flex>
  );
};

export const FilterBySpecificKey = Template2.bind({});
FilterBySpecificKey.args = {};

const creameryIceCreams = [
  {
    name: 'Death by Chocolate',
    calories: 320,
    ingredients: 'Chocolate ice cream with brownie pieces and chocolate flakes',
  },
  {
    name: 'Peachy Paterno',
    calories: 280,
    ingredients: 'Peach ice cream with peach slices',
  },
  {
    name: "Cookies n' Cream",
    calories: 290,
    ingredients: 'Vanilla ice cream with chocolate sandwich cookies',
  },
  {
    name: 'Bittersweet Mint',
    calories: 260,
    ingredients: 'Mint ice cream with bittersweet chocolate flakes',
  },
  {
    name: 'Peanut Butter Swirl',
    calories: 310,
    ingredients: 'Vanilla ice cream with peanut butter swirls',
  },
  {
    name: 'Chocolate Chip Cookie Dough',
    calories: 330,
    ingredients: 'Vanilla ice cream with chunks of chocolate chip cookie dough',
  },
  {
    name: 'Butter Pecan',
    calories: 290,
    ingredients: 'Butter pecan ice cream with pecan pieces',
  },
  {
    name: 'Coffee Break',
    calories: 250,
    ingredients: 'Coffee ice cream with chocolate-covered espresso beans',
  },
  {
    name: 'Vanilla Bean',
    calories: 240,
    ingredients: 'Vanilla bean ice cream made with real vanilla beans',
  },
  {
    name: 'Mint Chocolate Chip',
    calories: 270,
    ingredients: 'Mint ice cream with chocolate chips',
  },
];

const Template3: Story<
  FilterProps<{ name: string; calories: string; ingredients: string }>
> = () => {
  const [filtered, setFiltered] = useState<any[] | null>(null);

  return (
    <Flex extraSx={{ height: '700px' }} gap={8} direction="column">
      <Filter
        filterBy={['name', 'ingredients']}
        data={creameryIceCreams}
        filterCallback={setFiltered}
      />
      <Flex extraSx={{ width: '800px' }} gap={4} wrap>
        {filtered &&
          filtered.map((option, i) => (
            <Card
              borderColor="limestoneGray"
              backgroundColor="limestoneLight"
              dropShadow="sm-1"
              py={6}
              px={6}
              key={i}
              direction="column"
            >
              <Heading
                extraSx={{ fontWeight: 'medium', mb: 1 }}
                variant={16}
                color="potentialMidnight"
              >
                {option.name}
              </Heading>
              <p sx={{ fontSize: 14 }}>{option.ingredients}</p>
              {/* @ts-ignore */}
              <p sx={{ fontSize: 14, color: '#666' }}>
                calories: {option.calories}
              </p>
            </Card>
          ))}
      </Flex>
    </Flex>
  );
};

export const FilterByMultipleKeys = Template3.bind({});
FilterByMultipleKeys.args = {};

const studentsGPA = [
  { name: 'Alice', major: 'Computer Science', gpa: 3.7 },
  { name: 'Bob', major: 'Electrical Engineering', gpa: 3.9 },
  { name: 'Charlie', major: 'Biology', gpa: 3.5 },
  { name: 'Diana', major: 'Psychology', gpa: 3.8 },
  { name: 'Eve', major: 'Business Administration', gpa: 3.6 },
  { name: 'Frank', major: 'English Literature', gpa: 3.4 },
  { name: 'Grace', major: 'Mechanical Engineering', gpa: 3.9 },
  { name: 'Helen', major: 'History', gpa: 3.7 },
  { name: 'Ivan', major: 'Mathematics', gpa: 3.8 },
  { name: 'Jack', major: 'Chemistry', gpa: 3.6 },
];

const Template4: Story<
  FilterProps<{ name: string; position: string; jerseyNumber: string }>
> = () => {
  const [filtered, setFiltered] = useState<any[] | null>(null);

  return (
    <Flex extraSx={{ height: '500px' }} gap={8} direction="column">
      <Filter
        filterBy={'name'}
        data={studentsGPA}
        filterCallback={setFiltered}
        description="This is a helpful description"
      />
      <Flex extraSx={{ width: '800px' }} gap={4} wrap>
        {filtered &&
          filtered.map((option, i) => (
            <Card
              backgroundColor="potential70"
              dropShadow="sm-1"
              py={6}
              px={6}
              key={i}
              direction="column"
              extraSx={{ minWidth: '150px' }}
            >
              <Heading
                extraSx={{ fontWeight: 'medium' }}
                variant={20}
                color="white"
              >
                {option.name}
              </Heading>
              <Body color="white" variant={18}>
                {option.major}
              </Body>
              {/* @ts-ignore */}
              <Body color="limestoneLight" variant={16}>
                GPA: {option.gpa}
              </Body>
            </Card>
          ))}
      </Flex>
    </Flex>
  );
};

export const Description = Template4.bind({});
Description.args = {};

const facultyMembers = [
  { title: 'Professor', name: 'John Smith', phoneNumber: '+1 (123) 456-7890' },
  {
    title: 'Associate Professor',
    name: 'Jane Doe',
    phoneNumber: '+1 (234) 567-8901',
  },
  {
    title: 'Assistant Professor',
    name: 'Michael Johnson',
    phoneNumber: '+1 (345) 678-9012',
  },
  { title: 'Lecturer', name: 'Emily Wilson', phoneNumber: '+1 (456) 789-0123' },
  {
    title: 'Adjunct Professor',
    name: 'David Brown',
    phoneNumber: '+1 (567) 890-1234',
  },
];

const Template5: Story<
  FilterProps<{ name: string; position: string; jerseyNumber: string }>
> = () => {
  const [filtered, setFiltered] = useState<any[] | null>(null);

  return (
    <Flex extraSx={{ height: '500px' }} gap={8} direction="column">
      <Filter
        filterBy={'name'}
        data={facultyMembers}
        filterCallback={setFiltered}
        label="Search for a faculty member by name"
        placeholder="Type to filter..."
      />
      <Flex extraSx={{ width: '800px' }} gap={4} wrap>
        {filtered &&
          filtered.map((option, i) => (
            <Card
              backgroundColor="beaverBlue"
              dropShadow="sm-1"
              py={6}
              px={6}
              key={i}
              direction="column"
            >
              <Heading variant={20} color="white">
                {option.name}
              </Heading>
              <Body extraSx={{ color: 'limestoneLight' }}>{option.title}</Body>
              <Body extraSx={{ color: 'limestoneLight' }} variant={16}>
                {option.phoneNumber}
              </Body>
            </Card>
          ))}
      </Flex>
    </Flex>
  );
};

export const CustomLabelAndPlaceholder = Template5.bind({});
CustomLabelAndPlaceholder.args = {};
