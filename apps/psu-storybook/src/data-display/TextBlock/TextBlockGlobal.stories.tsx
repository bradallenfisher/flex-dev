/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  TextBlock,
  Container,
  Wrapper,
  Flex,
  ThemeProvider,
  RichTextDrupalParser,
} from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/TextBlock',
  component: TextBlock,
  parameters: { layout: 'centered' },
  argTypes: {
    data: {
      control: {
        disable: true,
      },
    },
  },
};

const richTextRaw = `
  <h1>Future Students</h1>
  <p>A comprehensive undergraduate college and graduate school located eight miles east of Harrisburg, Penn State Harrisburg brings accredited academic programs, award-winning faculty, and the resources of a world-class research university to Pennsylvania's Capital Region.</p>
  <h2>Academics</h2>
  <p>Penn State Harrisburg offers more than 70 undergraduate and graduate programs and many opportunities to expand learning beyond the classroom, including conducting research, joining honors programs, completing internships, and more.</p>
  <h2>Visit Us - Virtual or In-Person</h2>
  <p>Get to know Penn State Harrisburg at one of our upcoming open houses or admissions events, or through our virtual campus tour. See our beautiful campus, talk to our students, and meet with an admissions counselor, in-person or via Zoom, to talk about your Penn State options.</p>
  <h2>How to Become a Penn Stater</h2>
  <p>Penn State Harrisburg offers accredited academic programs, small class sizes, and the opportunity to work with award-winning faculty in class and on research.</p>
  <ul>
    <li>First-Year Stduents</li>
    <li>Tranfer Students</li>
    <li>Graduate Students</li>
    <li>Adult Students</li>
    <li>Veterns</li>
  </ul>
  <h2>Involvement Opportunities</h2>
  <p>From NCAA Division III athletics to student government to Penn State's renowned THON, Penn State Harrisburg offers students many opportunities to grow outside of the classroom, including nearly 90 clubs and organizations, intramural sports, and community service activities.</p>
`;

const Template = (args) => (
  <ThemeProvider parser={RichTextDrupalParser}>
    <Container>
      <Wrapper>
        <Flex direction="column">
          <TextBlock {...args} />
        </Flex>
      </Wrapper>
    </Container>
  </ThemeProvider>
);

export const Drupal = Template.bind({});
Drupal.args = {
  data: richTextRaw,
};
