import { Meta, Story } from '@storybook/react';
import {
  Container,
  Wrapper,
  BackgroundWrapper,
  ThemeProvider,
  HeroTextOnly
} from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/HeroTextOnly',
  component: HeroTextOnly,
  argTypes: {
    variant: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' }
    }
  }
} as Meta;
const items = [
  {
    itemHeading: 'Employment',
    itemBody:
      'Employment for F-1 and J-1 students is limited, and working without permission is a violation of status and a deportable offense. F-1 and J-1 students may not work off-campus without permission from International Student and Scholar Advising (ISSA). On-Campus Employment is permitted with certain restrictions. Students must complete employment paperwork with ISSA in order to work on-campus. A Social Security number is required for anyone receiving payment. ISSA can assist you with this process.\
       \n\
       \n\
       ISSA offers workshops every semester which explain the different type of off-campus work permision available to F-1 and J-1 students.\
      '
  }
];
const Template: Story<typeof HeroTextOnly> = args => (
  <ThemeProvider>
    <BackgroundWrapper variant="white" {...args}>
      <Container>
        <Wrapper>
          <HeroTextOnly
            itemHeading={items[0].itemHeading}
            itemBody={items[0].itemBody}
          />
        </Wrapper>
      </Container>
    </BackgroundWrapper>
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.args = {};