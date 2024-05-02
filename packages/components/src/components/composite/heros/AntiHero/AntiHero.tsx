/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { AntiHeroProps } from './AntiHeroTypes';
import { Body, Divider, DisplayHeading, Flex } from '@psu-flex/core-ui';
import { Section, Grid, Container, Wrapper } from '@psu-flex/core-ui';
import { gradients } from '@psu-flex/platform-theme';
export const AntiHero = ({ body, heading }: AntiHeroProps) => {
  return (
    <Section>
      <div
        className="bg-center bg-no-repeat bg-cover"
        sx={{
          backgroundImage: () => `${gradients['antiHero']}`,
          maxHeight: '600px',
        }}
      >
        <Container>
          <Wrapper>
            <Grid>
              <Flex
                direction="column"
                extraSx={{
                  py: [20, 25, 30, '140px'],
                  gridColumn: ['1/5', '2/8', '3/11', '3/11'],
                }}
              >
                <DisplayHeading color="beaverBlue" variant={64}>
                  {heading}
                </DisplayHeading>
                <Divider
                  extraSx={{ mt: [8, 8, 12, 12], mb: [4, 4, 8, 8] }}
                  thickness="lg"
                  size="80px"
                  color="skyBlue"
                />
                <Body variant={24}>{body}</Body>
              </Flex>
            </Grid>
          </Wrapper>
        </Container>
      </div>
    </Section>
  );
};
