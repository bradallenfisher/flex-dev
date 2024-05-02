/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  RichTextContent,
  ThemeProvider,
  RichTextDrupalParser,
  Flex,
  DisplayHeading,
} from '@psu-flex/psu-global-ui';

export default {
  title: 'Data Display/RichTextContent',
  component: RichTextContent,
  parameters: { layout: 'centered' },
  argTypes: {
    richTextRaw: {
      control: 'null',
    },
  },
};

const assetObject = {
  edges: [
    {
      node: {
        url: 'https://images.ctfassets.net/s892xt1n4anv/5gkp3UKS6ksl7VUAvgxnX1/4756bf8393e482c1b302ef86735db6bd/Univ-mark-shield-hero.jpeg',
        contentful_id: '5gkp3UKS6ksl7VUAvgxnX1',
      },
    },
  ],
};

const richTextRaw = `
  <h1>h1 Heading</h1>
  <h2>h2 Heading</h2>
  <h3>h3 Heading</h3>
  <p>Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  <h4>h4 Heading</h4>
  <p>Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  <p>Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  <h5>h5 Heading</h5>
  <h6>h6 Heading</h6>
  <p>Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  <p><a href="https://google.com">Hyperlink</a></p>
  <p><b>Bold Text</b></p>
  <p><i>Italic Text</i></p>
  <p><u>Underlined Text</u></p>
  <p>Unordered List</p>
  <ul>
    <li><p>Item 1</p></li>
    <li><p>#17 in Aerospace/Aeronautical/Astronautical Engineering, #18 in Environmental/Environmental Health Engineering</p></li>
    <li><p>Item 3</p></li>
  </ul>
  <p>Ordered List</p>
  <ol>
    <li><p>Item 1</p></li>
    <li><p>Item 2</p></li>
    <li><p>#17 in Aerospace/Aeronautical/Astronautical Engineering, #18 in Environmental/Environmental Health Engineering</p></li>
  </ol>
  <p>Blockquote</p>
  <blockquote><p><i>The Pennsylvania State University is a multi-campus, land-grant, public research university that educates students from around the world and supports individuals and communities through integrated programs of teaching, research, and service.</i></p></blockquote>
  <p>Divider</p>
  <h2>Academics</h2>
  <p>Penn State Harrisburg offers more than 70 undergraduate and graduate programs and many opportunities to expand learning beyond the classroom, including conducting research, joining honors programs, completing internships, and more.</p>
  <hr/>
  <h2>Visit Us - Virtual or In-Person</h2>
  <p>Get to know Penn State Harrisburg at one of our upcoming open houses or admissions events, or through our virtual campus tour. See our beautiful campus, talk to our students, and meet with an admissions counselor, in-person or via Zoom, to talk about your Penn State options.</p>
`;

const tableInRichText = `
<table border="1" cellpadding="1" cellspacing="1" style="width: 500px;">
  <thead>
    <tr>
      <th scope="col">Dessert (100g serving)</th>
      <th scope="col">Calories</th>
      <th scope="col">Carbs (g)</th>
      <th scope="col">Protein</th>
      <th scope="col">Fat (g)</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>Oreo</td>
      <td>437</td>
      <td>18</td>
      <td>63</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Nougat</td>
      <td>360</td>
      <td>19</td>
      <td>9</td>
      <td>37</td>
    </tr>
    <tr>
      <td>Marshmallow</td>
      <td>318</td>
      <td>0</td>
      <td>81</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Lollipop</td>
      <td>392</td>
      <td>0.2</td>
      <td>98</td>
      <td>0</td>
    </tr>
    <tr>
      <td>KitKat</td>
      <td>518</td>
      <td>26</td>
      <td>65</td>
      <td>7</td>
    </tr>
  </tbody>
</table>
`;

const Template = () => (
  <ThemeProvider parser={RichTextDrupalParser}>
    <Flex direction="column" gap={20}>
      <Flex direction="column">
        <DisplayHeading variant={56}>
          RichText standard formatting
        </DisplayHeading>
        <RichTextContent
          gutterY={0}
          richTextRaw={richTextRaw}
          assetObject={assetObject}
        />
      </Flex>

      <Flex direction="column">
        <DisplayHeading variant={56}>RichTextTable</DisplayHeading>
        <RichTextContent
          gutterY={0}
          richTextRaw={tableInRichText}
          assetObject={assetObject}
        />
      </Flex>
    </Flex>
  </ThemeProvider>
);

export const Drupal = Template.bind({});
Drupal.args = {};
