/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { RichTextContent } from '@psu-flex/core-ui';
import { DisplayHeading } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/core-ui';

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

const richTextRaw = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'h1 Heading ',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'h2 Heading',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-2',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'h3 Heading',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-3',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'h4 Heading',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-4',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'h5 Heading',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-5',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'h6 Heading',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-6',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "Body text - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: '',
          nodeType: 'text',
        },
        {
          data: {
            uri: 'https://google.com',
          },
          content: [
            {
              data: {},
              marks: [],
              value: 'Hyperlink',
              nodeType: 'text',
            },
          ],
          nodeType: 'hyperlink',
        },
        {
          data: {},
          marks: [],
          value: '',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [
            {
              type: 'bold',
            },
          ],
          value: 'Bold Text',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [
            {
              type: 'italic',
            },
          ],
          value: 'Italic Text',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [
            {
              type: 'underline',
            },
          ],
          value: 'Underlined Text',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Unordered List',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'item 1 ',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    '#17 in Aerospace/Aeronautical/Astronautical Engineering, #18 in Environmental/Environmental Health Engineering',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'item 3',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
      ],
      nodeType: 'unordered-list',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Ordered List',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'item 1 ',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'item 2',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    '#17 in Aerospace/Aeronautical/Astronautical Engineering, #18 in Environmental/Environmental Health Engineering',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
      ],
      nodeType: 'ordered-list',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Blockquote',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'italic',
                },
              ],
              value:
                'The Pennsylvania State University is a multi-campus, land-grant, public research university that educates students from around the world and supports individuals and communities through integrated programs of teaching, research, and service.',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'blockquote',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Academics',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-2',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Penn State Harrisburg offers more than 70 undergraduate and graduate programs and many opportunities to expand learning beyond the classroom, including conducting research, joining honors programs, completing internships, and more.',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [],
      nodeType: 'hr',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Visit Us - Virtual or In-Person',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-2',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Get to know Penn State Harrisburg at one of our upcoming open houses or admissions events, or through our virtual campus tour. See our beautiful campus, talk to our students, and meet with an admissions counselor, in-person or via Zoom, to talk about your Penn State options.',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },

    // {
    //   data: {},
    //   content: [
    //     {
    //       data: {},
    //       marks: [],
    //       value: 'Embedded asset',
    //       nodeType: 'text'
    //     }
    //   ],
    //   nodeType: 'paragraph'
    // },
    // {
    //   data: {},
    //   content: [
    //     {
    //       data: {},
    //       marks: [],
    //       value: '',
    //       nodeType: 'text'
    //     }
    //   ],
    //   nodeType: 'paragraph'
    // }
  ],
  nodeType: 'document',
};

const Template = () => (
  <Flex direction="column">
    <DisplayHeading variant={56}>RichText standard formatting</DisplayHeading>
    <RichTextContent
      gutterY={0}
      richTextRaw={richTextRaw}
      assetObject={assetObject}
    />
  </Flex>
);

export const Contentful = Template.bind({});
Contentful.args = {};
