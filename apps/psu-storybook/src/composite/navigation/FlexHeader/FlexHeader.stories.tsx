/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { FlexHeader, FlexHeaderProps } from '@psu-flex/psu-global-ui';
import { Container, Section, Wrapper } from '@psu-flex/psu-global-ui';
import { ShortHero } from '@psu-flex/psu-global-ui';
import fallbackImage from '@psu-flex/core-ui/assets/images/psuFallback3.png';
import { TextBlock } from '@psu-flex/psu-global-ui';

export default {
  title: 'Core Composite/Navigation/Header',
  component: FlexHeader,
  argTypes: {
    tierOneMark: {
      control: {
        type: null,
      },
    },
    ctaItemsCollection: {
      control: {
        type: null,
      },
    },
    navItemsCollection: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const regularHeaderCtaItemsCollection = [
  {
    title: 'Log in to MyPennState',
    href: 'https://mypennstate.psu.edu/',
  },
];

const megaMenuCtaItemsCollection = [
  {
    title: 'Give now',
    href: 'https://mypennstate.psu.edu/',
  },
];
const regularAdmissionsHeaderNavItemsCollection = [
  {
    title: 'How to Apply',
    href: 'https://admissions.psu.edu/apply/',
    linkItemsCollection: [
      {
        title: 'Admission Requirements',
        href: 'https://admissions.psu.edu/apply/requirements/',
      },
      {
        title: 'Steps to Apply',
        href: 'https://admissions.psu.edu/apply/steps/',
      },
      {
        title: 'Application Review Process',
        href: 'https://admissions.psu.edu/apply/application-review-process/',
      },
      {
        title: 'Dates & Deadlines',
        href: 'https://admissions.psu.edu/apply/deadlines/',
      },
      {
        title: 'Admission Statistics',
        href: 'hhttps://admissions.psu.edu/apply/statistics/',
      },
      {
        title: 'Early Action (FAQ)',
        href: 'https://admissions.psu.edu/info/future/firstyear/applicationreview/earlyaction',
      },
      {
        title: 'Test-Optional Information',
        href: 'https://admissions.psu.edu/faq/test-optional/',
      },
      {
        title: 'Self-Reported Academic Record (SRAR)',
        href: 'https://admissions.psu.edu/apply/srar/',
      },
      {
        title: 'MyPennState Portal Information',
        href: 'https://admissions.psu.edu/apply/mypennstate-portal-information/',
      },
      {
        title: 'MyPennState Application',
        href: 'https://mypennstate.psu.edu/?_gl=1*lvsxm6*_ga*MTc5OTY4MDY5NS4xNzAwMDc4Njc1*_ga_GBZ4P83621*MTcwMTcwNTU0NC4xMTIuMS4xNzAxNzA1NzgxLjYwLjAuMA..',
      },
      {
        title: 'Common App',
        href: 'https://admissions.psu.edu/apply/common-app/',
      },
      {
        title: 'Dual Admissions Program',
        href: 'https://admissions.psu.edu/info/future/transfer/dual-admissions-program/',
      },
      { title: 'Apply Now', href: 'https://admissions.psu.edu/apply/app' },
    ],
  },
  {
    title: 'Prospective Students',
    href: 'https://admissions.psu.edu/academics/',
    linkItemsCollection: [
      { title: 'Majors', href: 'https://admissions.psu.edu/academics/majors/' },
      {
        title: 'Academic Colleges',
        href: 'https://admissions.psu.edu/academics/colleges/',
      },
      { title: 'Undecided', href: 'Undecided' },
      {
        title: 'Schreyer Honors College',
        href: 'https://admissions.psu.edu/academics/schreyer/',
      },
      {
        title: 'Academic Credit',
        href: 'https://admissions.psu.edu/academics/credit/',
      },
      {
        title: 'Study Abroad',
        href: 'https://admissions.psu.edu/academics/study-abroad/',
      },
    ],
  },
  {
    title: 'Campuses',
    href: 'https://admissions.psu.edu/pennstate/',
    linkItemsCollection: [
      {
        title: 'Penn State Campuses',
        href: 'https://admissions.psu.edu/pennstate/campuses/',
      },
      {
        title: '2 + 2 Plan',
        href: 'https://admissions.psu.edu/pennstate/2plus2plan/',
      },
      {
        title: 'Penn State Visits You!',
        href: 'https://admissions.psu.edu/pennstate/visitsyou/',
      },
      {
        title: 'Visit',
        href: 'https://admissions.psu.edu/pennstate/campuses/',
      },
    ],
  },
  {
    title: 'Student Life',
    href: 'https://admissions.psu.edu/life/',
    linkItemsCollection: [
      { title: 'Housing', href: 'https://admissions.psu.edu/life/reslife/' },
      {
        title: 'Student Support',
        href: 'https://admissions.psu.edu/life/support/',
      },
      {
        title: 'Clubs and Organizations',
        href: 'https://admissions.psu.edu/life/clubs/',
      },
      {
        title: 'Diversity at Penn State',
        href: 'https://admissions.psu.edu/life/diversity/',
      },
      {
        title: 'Athletics and Recreation',
        href: 'https://admissions.psu.edu/life/athletics/',
      },
      {
        title: 'Safety at Penn State',
        href: 'https://admissions.psu.edu/life/safety/',
      },
    ],
  },
  {
    title: 'Costs & Aid',
    href: 'https://admissions.psu.edu/costs-aid/',
    linkItemsCollection: [
      {
        title: 'Tuition and Costs',
        href: 'https://admissions.psu.edu/costs-aid/tuition/',
      },
      {
        title: 'Student Aid',
        href: 'https://admissions.psu.edu/costs-aid/student-aid/',
      },
      {
        title: 'Scholarships and Awards',
        href: 'https://admissions.psu.edu/costs-aid/scholarships/',
      },
      {
        title: 'Residency Information',
        href: 'https://admissions.psu.edu/costs-aid/residency/',
      },
    ],
  },
  {
    title: 'Info For',
    href: 'https://admissions.psu.edu/info/',
    linkItemsCollection: [
      {
        title: 'Future Students',
        href: 'https://admissions.psu.edu/info/future/',
      },
      {
        title: 'Accepted Students',
        href: 'https://admissions.psu.edu/info/accepted/',
      },
      {
        title: 'Online Learners',
        href: 'https://admissions.psu.edu/pennstate/campuses/world-campus/',
      },
      {
        title: 'Dual Admissions Programs',
        href: 'https://admissions.psu.edu/info/future/transfer/dual-admissions-program/',
      },
      {
        title: 'School Counselors',
        href: 'https://admissions.psu.edu/info/counselors/',
      },
      {
        title: 'Admissions Strategic Partnerships',
        href: 'https://admissions.psu.edu/strategic-partnerships',
      },
      {
        title: 'Parents & Families',
        href: 'https://admissions.psu.edu/info/parents/',
      },
      {
        title: '7th-11th Grade Students',
        href: 'https://admissions.psu.edu/info/advising/',
      },
      {
        title: 'Current Students',
        href: 'https://admissions.psu.edu/info/current-students/',
      },
      {
        title: 'Returning Students',
        href: 'https://admissions.psu.edu/info/returning/',
      },
      { title: 'Alumni', href: 'https://admissions.psu.edu/info/alumni/' },
    ],
  },
];
const regularPsuEduHeaderNavItemsCollection = [
  {
    title: 'This is Penn State',
    href: 'https://psu.edu/this-is-penn-state',
    linkItemsCollection: [
      {
        title: 'Mission and Values',
        href: 'https://psu.edu/this-is-penn-state/mission-and-values',
      },
      {
        title: 'Belonging',
        href: 'https://psu.edu/this-is-penn-state/belonging',
      },
      {
        title: 'Leadership',
        href: 'https://psu.edu/this-is-penn-state/leadership',
      },
      {
        title: 'History',
        href: 'https://psu.edu/this-is-penn-state/history',
      },
      {
        title: 'Facts and Rankings',
        href: 'https://psu.edu/this-is-penn-state/facts-and-rankings',
      },
      {
        title: 'Our Impact',
        href: 'https://psu.edu/this-is-penn-state/our-impact',
      },
      {
        title: 'Health Care',
        href: 'https://psu.edu/this-is-penn-state/health-care',
      },
    ],
  },
  {
    title: 'Academics',
    href: 'https://psu.edu/academics/',
    linkItemsCollection: [
      {
        title: 'Undergraduate',
        href: 'https://psu.edu/academics/undergraduate-degrees',
      },
      {
        title: 'Graduate and Professional Schools',
        href: 'https://psu.edu/academics/graduate-degrees',
      },
      { title: 'Online degrees', href: 'https://www.worldcampus.psu.edu/' },
      {
        title: 'Global Education',
        href: 'https://global.psu.edu/',
      },
      {
        title: 'Academic Colleges',
        href: 'https://psu.edu/academics/colleges/',
      },
      {
        title: 'Campus Locations',
        href: 'https://psu.edu/academics/campuses/',
      },
    ],
  },
  {
    title: 'Admission',
    href: 'https://psu.edu/admission/',
    linkItemsCollection: [
      {
        title: 'Undergraduate',
        href: 'https://psu.edu/admission/undergraduate/',
      },
      {
        title: 'Graduate',
        href: 'https://psu.edu/admission/graduate/',
      },
      { title: 'Online', href: 'https://www.worldcampus.psu.edu/' },
      {
        title: 'Professional Schools',
        href: 'https://psu.edu/admission#prof/',
      },
      {
        title: 'Continuing Education',
        href: 'https://psu.edu/admission#continuing/',
      },
    ],
  },
  {
    title: 'Tuition & Aid',
    href: 'https://admissions.psu.edu/life/',
  },
  {
    title: 'Research',
    href: 'https://admissions.psu.edu/costs-aid/',
  },
  {
    title: 'Athletics',
    href: 'https://admissions.psu.edu/costs-aid/',
  },
  {
    title: 'News',
    href: 'https://psu.edu/news/',
    linkItemsCollection: [
      {
        title: 'Latest News',
        href: 'https://psu.edu/news/latest-news',
      },
      {
        title: 'Academics',
        href: 'https://psu.edu/news/academics',
      },
      {
        title: 'Our Research',
        href: 'https://psu.edu/news/research',
      },
      {
        title: 'Campus Life',
        href: 'https://psu.edu/news/campus-life',
      },
      {
        title: 'Athletics',
        href: 'https://psu.edu/news/athletics',
      },
      {
        title: 'Administration',
        href: 'https://psu.edu/news/administration',
      },
      {
        title: 'Arts & Entertainment',
        href: 'https://psu.edu/news/arts-and-entertainment',
      },
      {
        title: 'College and Campus News',
        href: 'https://psu.edu/news/penn-state-college-and-campus-news',
      },
    ],
  },
];

const megaMenuCollectionExample2 = [
  {
    title: 'Industry Relations',
    linkItemsCollection: [
      {
        title: 'IPAC',
        href: 'https://www.google.com/',
      },
      { title: 'Sponsorships', href: 'https://www.google.com/' },
      { title: 'industryXchange', href: 'https://www.google.com/' },
      {
        title: 'Corporate Engagement Resources Library',
        href: 'https://www.google.com/',
      },
      {
        title: 'Contact',
        href: 'https://www.google.com/',
      },
    ],
  },
  {
    title: 'Employer Relations',
    linkItemsCollection: [
      {
        title: 'Recruiting',
        href: 'https://www.google.com/',
      },
      {
        title: 'Corporate Support and Engagement',
        href: 'https://www.google.com/',
      },
      { title: 'Contact', href: 'https://www.google.com/' },
    ],
  },
  {
    title: 'Quick Links',
    linkItemsCollection: [
      {
        title: 'IP Policies',
        href: 'https://www.google.com/',
      },
      { title: 'Partner With Us', href: 'https://www.google.com/' },
      { title: 'Giving Opportunities', href: 'https://www.google.com/' },
      { title: 'Engineering News', href: 'https://www.google.com/' },
      { title: 'Events Calendar', href: 'https://www.google.com/' },
    ],
  },
];

const megaMenuCollectionExample1 = [
  {
    title: 'Undergraduate Students',
    linkItemsCollection: [
      { title: 'Overview', href: 'https://www.google.com/' },
      { title: 'Prospective Students', href: 'https://www.google.com/' },
      { title: 'Accepted Students', href: 'https://www.google.com/' },
      { title: 'Student Resources', href: 'https://www.google.com/' },
      {
        title: 'Majors, Minors, and Certificates',
        href: 'https://www.google.com/',
      },
      { title: 'Commencement', href: 'https://www.google.com/' },
    ],
  },
  {
    title: 'Graduate Programs',
    linkItemsCollection: [
      {
        title: 'Overview',
        href: 'https://www.google.com/',
      },
      { title: 'Discipline Areas', href: 'https://www.google.com/' },
      { title: 'Program Portfolio', href: 'https://www.google.com/' },
      { title: 'Funding and Support', href: 'https://www.google.com/' },
      { title: 'Application Process', href: 'https://www.google.com/' },
      { title: 'Student Resources', href: 'https://www.google.com/' },
      { title: 'Ombudspersons', href: 'https://www.google.com/' },
    ],
  },
  {
    title: 'Engineering Resources',
    linkItemsCollection: [
      {
        title: 'Advising Center',
        href: 'https://www.google.com/',
      },
      { title: 'Career Resources', href: 'https://www.google.com/' },
      {
        title: 'Global Engineering Engagement',
        href: 'https://www.google.com/',
      },
      {
        title: 'Outreach and Inclusion Programs',
        href: 'https://www.google.com/',
      },
      { title: 'Safety', href: 'https://www.google.com/' },
      { title: 'Student Organizations', href: 'https://www.google.com/' },
      { title: 'Student Facilities', href: 'https://www.google.com/' },
      { title: 'Travel Resources', href: 'https://www.google.com/' },
      { title: 'Online Learning', href: 'https://www.google.com/' },
    ],
  },
  {
    title: 'Quick Links',
    linkItemsCollection: [
      {
        title: 'Engineering News',
        href: 'https://www.google.com/',
      },
      { title: 'Events Calendar', href: 'https://www.google.com/' },
      { title: 'Upcoming Research Seminars', href: 'https://www.google.com/' },
      { title: 'Academic Plans', href: 'https://www.google.com/' },
      { title: 'Academic Calendar', href: 'https://www.google.com/' },
      { title: 'Visit Us', href: 'https://www.google.com/' },
    ],
  },
];

const megaMenuNavItemsCollection = [
  {
    title: 'Partners',
    href: 'https://www.google.com/',
    megaMenuItemsCollection: megaMenuCollectionExample1,
  },
  {
    title: 'Research',
    megaMenuItemsCollection: megaMenuCollectionExample2,
  },
  {
    title: 'Academics',
    megaMenuItemsCollection: megaMenuCollectionExample1,
  },
  {
    title: 'Alumni',
    megaMenuItemsCollection: megaMenuCollectionExample2,
  },
  {
    title: 'About the College',
    href: 'https://www.google.com/',
    // megaMenuItemsCollection: megaMenuCollectionExample1
  },
];

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
          value: 'Specialty Undergraduate Programs',
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
            'Individual undergraduate program rankings released by U.S. News include seven top-10 ratings for select programs in engineering and business, among others.',
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
          value: 'Best Undergraduate Business Programs',
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
            'Penn State tied for #23 in “Best Undergraduate Business Programs,” out of 516 ranked institutions. In addition, the University ranked in the following specialties:',
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
                  value: '#4 in Supply Chain Management/Logistics (tie)',
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
                  value: '#9 in Insurance (tie)',
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
                  value: '#10 in Production/Operation Management',
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
                  value: '#13 in Real Estate',
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
                  value: '#14 in Management (tie)',
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
                  value: '#27 in Marketing (tie)',
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
                  value: '#28 in Accounting (tie)',
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
                  value: '#31 in Finance (tie)',
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
          value: '',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};

const tierTwoEntityExample = {
  title: 'Undergraduate Admissions',
  href: 'https://admissions.psu.edu/',
};

const Template: Story<FlexHeaderProps> = () => (
  <>
    <FlexHeader
      navItemsCollection={regularAdmissionsHeaderNavItemsCollection}
      ctaItemsCollection={regularHeaderCtaItemsCollection}
      tierTwoEntity={tierTwoEntityExample}
    />
    <ShortHero
      id="id"
      heading="Discover Penn State"
      body="Penn State is Pennsylvania's sole land-grant institution, founded with a
  mission of high-quality teaching, expert research, and global service.
  As one university with the resources of twenty-four campus locations and
  an online World Campus, we're setting students up for greater career
  potential and empowering them to positively impact the world."
      image={fallbackImage}
    />
    <Section>
      <Container>
        <Wrapper>
          <TextBlock data={richTextExample} />
        </Wrapper>
      </Container>
    </Section>
  </>
);

const Template2: Story<FlexHeaderProps> = () => (
  <>
    <FlexHeader navItemsCollection={regularPsuEduHeaderNavItemsCollection} />
    <ShortHero
      id="id"
      heading="Discover Penn State"
      body="Penn State is Pennsylvania's sole land-grant institution, founded with a
  mission of high-quality teaching, expert research, and global service.
  As one university with the resources of twenty-four campus locations and
  an online World Campus, we're setting students up for greater career
  potential and empowering them to positively impact the world."
      image={fallbackImage}
    />
    <Section>
      <Container>
        <Wrapper>
          <TextBlock data={richTextExample} />
        </Wrapper>
      </Container>
    </Section>
  </>
);

const Template3: Story<FlexHeaderProps> = () => (
  <>
    <FlexHeader
      ctaItemsCollection={megaMenuCtaItemsCollection}
      navItemsCollection={megaMenuNavItemsCollection}
    />
    <ShortHero
      id="id"
      heading="Discover Penn State"
      body="Penn State is Pennsylvania's sole land-grant institution, founded with a
  mission of high-quality teaching, expert research, and global service.
  As one university with the resources of twenty-four campus locations and
  an online World Campus, we're setting students up for greater career
  potential and empowering them to positively impact the world."
      image={fallbackImage}
    />
    <Section>
      <Container>
        <Wrapper>
          <TextBlock data={richTextExample} />
        </Wrapper>
      </Container>
    </Section>
  </>
);

// const Template2: Story<FlexHeaderProps> = () => (
//   <ThemeUIProvider theme={theme}>
//     <FlexHeader
//       navItemsCollection={megaMenuNavItemsCollection}
//       tierThreeDepartmentName="Electrical Engineering and Computer Science"
//       ctaItemsCollection={regularHeaderCtaItemsCollection}
//     />
//   </ThemeUIProvider>
// );

export const AdmissionsExample = Template.bind({});
AdmissionsExample.args = {
  navItemsCollection: regularAdmissionsHeaderNavItemsCollection,
  ctaItemsCollection: regularHeaderCtaItemsCollection,
  tierTwoEntity: tierTwoEntityExample,
};

export const PsuEduExample = Template2.bind({});
PsuEduExample.args = {
  navItemsCollection: regularPsuEduHeaderNavItemsCollection,
};

export const MegaMenuExample = Template3.bind({});

// export const MegaMenuHeader = Template2.bind({});
// MegaMenuHeader.args = {};
