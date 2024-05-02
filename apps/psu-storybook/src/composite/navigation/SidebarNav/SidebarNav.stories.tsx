import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { SidebarNav } from '@psu-flex/core-ui';
import { Container, Wrapper, Grid } from '@psu-flex/core-ui';
import {
  sideBarExampleItems,
  sideBarExampleItemsWith2Lvls,
} from './example-data';
import { SidebarNavProps } from '@psu-flex/components/src/components/composite/navigation/SidebarNav/SidebarTypes';

export default {
  title: 'Core Composite/Navigation/SidebarNav',
  component: SidebarNav,
} as Meta;

const Template: Story<SidebarNavProps> = () => (
  <React.Fragment>
    <Container>
      <Wrapper>
        <Grid
          extraSx={{
            rowGap: [0, 0, 0, 0],
            mt: 9,
            pb: [8, 12, 12, 12],
          }}
        >
          <SidebarNav
            items={sideBarExampleItems}
            heading="Academics"
            currentSlug="/academics"
          />
        </Grid>
      </Wrapper>
    </Container>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {};

const Template2: Story<SidebarNavProps> = () => (
  <React.Fragment>
    <Container>
      <Wrapper>
        <Grid
          extraSx={{
            rowGap: [0, 0, 0, 0],
            mt: 9,
            pb: [8, 12, 12, 12],
          }}
        >
          <SidebarNav
            items={sideBarExampleItemsWith2Lvls}
            heading="Academics"
            currentSlug="/academics"
          />
        </Grid>
      </Wrapper>
    </Container>
  </React.Fragment>
);

export const WithTwoMenuLvls = Template2.bind({});
WithTwoMenuLvls.args = {};
