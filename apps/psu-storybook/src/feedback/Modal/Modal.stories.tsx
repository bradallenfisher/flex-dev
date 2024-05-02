import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Body,
  Container,
  CtaButton,
  Flex,
  Heading,
  Modal,
  useModal,
  Wrapper,
} from '@psu-flex/core-ui';
import { ModalProps } from '@psu-flex/core-ui';
export default {
  title: 'Feedback/Modal',
  component: Modal,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    isOpen: {
      control: {
        type: null,
      },
    },
    extraSx: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const { isModalOpen, openModal, closeModal } = useModal(false);

  return (
    <Container>
      <Wrapper>
        <Flex direction="column" justifyContent="center">
          <CtaButton
            className="mx-auto"
            variant="primaryFilled"
            onClick={openModal}
          >
            Open modal
          </CtaButton>
          <Modal
            hasCloseButton={args.hasCloseButton}
            dismissable={args.dismissable}
            onClose={closeModal}
            isOpen={isModalOpen}
          >
            <Flex direction="column" gap={4}>
              <Heading>Modal content</Heading>
              <Body variant={16}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                perferendis labore et amet asperiores delectus officia corporis?
                Tempora unde eveniet saepe provident cum quibusdam dolores
                veniam nobis, rerum cumque minus!
              </Body>
            </Flex>
          </Modal>
          <Flex
            justifyContent="center"
            alignItems="center"
            extraSx={{
              backgroundColor: 'limestoneLight',
              height: '200px',
              mt: 12,
            }}
          >
            <Heading extraSx={{ color: 'limestoneGray' }} variant={20}>
              This element is not part of component, just here to display how
              Modal interacts with content on a page.
            </Heading>
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  dismissable: false,
  hasCloseButton: true,
};
