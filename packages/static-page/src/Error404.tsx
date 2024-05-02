/** @jsxImportSource theme-ui */
import React from 'react';
import {
  Container,
  Flex,
  Grid,
  Wrapper,
} from '@psu-flex/components/src/components/base-components';
import {
  Body,
  DisplayHeading,
  Divider,
  Heading,
} from '@psu-flex/components/src/components/base-components';
import { Link } from '@psu-flex/components/src/components/base-components';

const staticListItems = [
  { text: 'Checking the url' },
  { text: 'Visiting our', link: { text: 'home page', to: '/' } },
  { text: 'Searching our site' },
  { text: 'Clicking on the back button and trying another link' },
];

export const Error404 = () => {
  return (
    <Container>
      <Wrapper>
        <Grid>
          <Flex
            gutterY={[20, 25, 25, 25]}
            direction="column"
            extraSx={{
              gridColumn: ['1/5', '2/8', '3/11', '3/11'],
            }}
          >
            <DisplayHeading variant={56} extraSx={{ fontWeight: 'bold' }}>
              Oops! We can't find that.
            </DisplayHeading>
            <Divider
              size="84px"
              thickness="lg"
              color="pughBlue"
              extraSx={{ my: 32 }}
            />
            <Heading
              color="nittanyNavy"
              extraSx={{ fontWeight: 'bold', mb: [5, 5, 7, 7] }}
              variant={32}
            >
              We recommend:
            </Heading>
            <Flex extraSx={{ ml: 10 }} tag={'ul'} direction="column">
              {staticListItems.map((item, i) => {
                return (
                  <li key={i}>
                    <Flex>
                      <Body variant={20}>{item.text}&nbsp;</Body>
                      {item.link && (
                        <Link variant={20} to={item.link.to}>
                          {item.link.text}
                        </Link>
                      )}
                    </Flex>
                  </li>
                );
              })}
            </Flex>
          </Flex>
        </Grid>
      </Wrapper>
    </Container>
  );
};
