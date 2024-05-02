/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { Meta } from '@storybook/react';
import {
  BreadcrumbItem,
  Breadcrumbs,
  Container,
  ErrorPage,
  Flex,
  Grid,
  Heading,
  SidebarNav,
  TextBlock,
  Wrapper,
} from '@psu-flex/core-ui';
import {
  ImageCardsCardGroup,
  QuickNavCardGroup,
  IconCardsCardGroup,
  Accordion,
  StylizedButtonCards,
} from '@psu-flex/psu-global-ui';
import { items } from '../../../composite/card-groups/QuickNavCards/example-data';
import { stylizedButtonCardsData2 } from '../../../composite/card-groups/StylizedButtonCard/example-data';
import { imageCardsData } from '../../../composite/card-groups/ImageCards/example-data';
import { iconCardsData } from '../../../composite/card-groups/IconCards/example-data';
import { richText_h6_a_p_li } from '../../../example-content/RichText';
import { breadcrumbItems } from './example-data';
import { faqs } from '../../../composite/text-and-media/Accordion/example-data';
import { sideBarExampleItems } from '../../../composite/navigation/SidebarNav/example-data';
export default {
  title: 'Pages/SidebarNavPage',
  component: ErrorPage,
} as Meta;

const Template = (args) => {
  const sideBarRightProps = args.sidebar
    ? {
        totalGridColumns: [4, 4, 8, 8],
        container: false,
      }
    : {};

  return (
    <>
      <nav sx={{ backgroundColor: 'nittanyNavy', p: 14 }}>
        <Container>
          <Wrapper>
            <Heading color="white" variant={20}>
              Placeholder navigation
            </Heading>
          </Wrapper>
        </Container>
      </nav>
      <Flex
        gap={12}
        direction="column"
        extraSx={{ width: '100%', backgroundColor: 'white', pt: 9 }}
      >
        <Container>
          <Wrapper>
            {args.sidebar && (
              <Breadcrumbs
                extraSx={{
                  position: 'sticky',
                  top: '36px',
                  gridColumn: ['span 4'],
                }}
              >
                {breadcrumbItems.map((item) => {
                  return (
                    <BreadcrumbItem to={item.to}>
                      {item.linkText}
                    </BreadcrumbItem>
                  );
                })}
              </Breadcrumbs>
            )}
            <Grid>
              {args.sidebar && (
                <SidebarNav
                  sticky
                  heading="Academics"
                  currentSlug="/program-search"
                  items={sideBarExampleItems}
                />
              )}
              <Flex
                direction="column"
                gap={[5, 9, 10, 20]}
                extraSx={{
                  gridColumn: args.sidebar ? ['4/12'] : ['span 12'],
                }}
              >
                <TextBlock
                  gridColumn={
                    args.sidebar ? ['span 8 '] : ['1/5', '2/8', '3/11', '3/11']
                  }
                  {...sideBarRightProps}
                  data={richText_h6_a_p_li}
                />
                <StylizedButtonCards
                  columnSpan={3}
                  cards={stylizedButtonCardsData2}
                  {...sideBarRightProps}
                />
                <QuickNavCardGroup
                  columnSpan={4}
                  cards={items}
                  {...sideBarRightProps}
                />
                <ImageCardsCardGroup
                  columnSpan={4}
                  cards={imageCardsData}
                  {...sideBarRightProps}
                />
                <IconCardsCardGroup
                  columnSpan={4}
                  cards={iconCardsData}
                  {...sideBarRightProps}
                />
                <Accordion
                  gridColumn={
                    args.sidebar ? ['span 8 '] : ['1/5', '2/8', '3/11', '3/11']
                  }
                  data={faqs}
                  heading={'Penn State’s rankings'}
                  body={
                    'Often ranked as a top twenty-five research university, our top-tier quality is reflected in Penn State’s worldwide standings as a leader in research, education, and community.'
                  }
                  {...sideBarRightProps}
                />
              </Flex>
            </Grid>
          </Wrapper>
        </Container>
        <QuickNavCardGroup columnSpan={4} cards={items} />
      </Flex>
      <footer sx={{ backgroundColor: 'nittanyNavy', p: '100px' }}>
        <Container>
          <Wrapper>
            <Heading color="white" variant={20}>
              Placeholder footer
            </Heading>
          </Wrapper>
        </Container>
      </footer>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  sidebar: true,
};
