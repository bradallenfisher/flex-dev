/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { CtaButton } from '@psu-flex/core-ui';
import { Body, Heading } from '@psu-flex/core-ui';
import { useToggle } from '@psu-flex/utility-hooks';
import { Flex } from '@psu-flex/core-ui';
import { useBreakpoints, useEscapeKey } from '@psu-flex/utility-hooks';
import { useFlex } from '@psu-flex/core-ui';

export default {
  title: 'Utility/Hooks/Hooks Examples',
  parameters: {
    layout: 'centered',
  },
} as Meta;

const exampleHocId = 'ExampleHigherOrderComponent';

const UseFlexExample = (props) => {
  let flexProps = useFlex(props);
  return (
    <div sx={{ backgroundColor: 'white', p: 4 }}>
      <Flex {...flexProps}>
        <div>nested flex item 1</div>
        <div>nested flex item 2</div>
        <div>nested flex item 3</div>
      </Flex>
    </div>
  );
};

const UseEscapeKeyExample = () => {
  const [isOpen, setIsOpen] = useToggle(true);
  useEscapeKey(() => setIsOpen(false));

  return (
    <>
      <p>Hit escape to close the dropdown</p>
      <div>
        <div
          className="relative"
          sx={{
            p: 4,
            zIndex: 100,
            mb: '-5px',
            backgroundColor: 'nittanyNavy',
            color: 'white',
            borderRadius: 'sm',
          }}
        >
          Example dropdown
        </div>
        {isOpen && (
          <div
            className="flex-col"
            sx={{
              gap: 2,
              backgroundColor: 'white',
              p: 4,
              borderBottomRightRadius: 'sm',
              borderBottomLeftRadius: 'sm',
            }}
          >
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>Menu Item 3</div>
          </div>
        )}
      </div>
    </>
  );
};

const Template = () => {
  const [isToggle, setIsToggle] = useToggle(false);
  const { isXl } = useBreakpoints();

  return (
    <Flex direction="column" alignItems="center" gap={8}>
      <Flex
        extraSx={{
          backgroundColor: 'limestoneLight',
          p: 8,
          borderRadius: 'sm',
        }}
        direction="column"
        alignItems="center"
        gap={8}
      >
        <Heading variant={32}>useToggle hook example</Heading>
        <CtaButton
          hocId={exampleHocId}
          onClick={setIsToggle}
          variant="primaryFilled"
        >
          Click to toggle
        </CtaButton>
        {isToggle && (
          <Heading variant={24}>
            This text is shown or hidden by using the useToggle hook
          </Heading>
        )}
      </Flex>
      <Flex
        extraSx={{
          backgroundColor: 'limestoneLight',
          p: 8,
          borderRadius: 'sm',
          maxWidth: '60vw',
        }}
        direction="column"
        alignItems="center"
        gap={8}
      >
        <Heading variant={32}>useEscapeKey hook example</Heading>
        <UseEscapeKeyExample />
      </Flex>
      <Flex
        extraSx={{
          backgroundColor: 'limestoneLight',
          p: 8,
          borderRadius: 'sm',
          maxWidth: '60vw',
        }}
        direction="column"
        alignItems="center"
        gap={8}
      >
        <Heading variant={32}>useFlex hook example</Heading>
        <UseFlexExample direction="column" gap={4} />
        <Body>
          By using the useFlex hook along with spread operator, you can target a
          nested Flex component with props specifically for the Flex. This
          eliminates need to define all the FlexProps in the interface. You can
          just use props, then deconstruct any FlexProps that exist. Then pass
          them through the component.
        </Body>
      </Flex>
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {};
