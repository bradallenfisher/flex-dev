/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Container, Flex, Grid, Section, Wrapper } from '@psu-flex/core-ui';
import React from 'react';
import { FormProps } from '@psu-flex/core-ui';
import { contentContainerMargins } from '@psu-flex/core-ui';
import { Form } from '@psu-flex/core-ui';

export default {
  title: 'Form Elements/Form',
  component: Form,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    register: {
      control: {
        type: null,
      },
    },
    name: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const { msm, mmd, mlg, mxl } = contentContainerMargins;

const Template: Story<FormProps> = () => {
  return (
    <div sx={{ width: '100vw', height: '100%', backgroundColor: 'white' }}>
      <Section>
        <Container>
          <Wrapper extraSx={{ px: [0, mmd, mlg, mxl] }}>
            <Grid>
              <Flex
                extraSx={{
                  gridColumn: ['1/5', '2/8', '4/10', '4/10'],
                  pb: 30,
                  pt: [0, 8, 8, 8],
                }}
              >
                <Form />
              </Flex>
            </Grid>
          </Wrapper>
        </Container>
      </Section>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
