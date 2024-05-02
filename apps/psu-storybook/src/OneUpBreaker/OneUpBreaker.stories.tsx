import React from "react";
import { jsx, ThemeUIProvider } from "theme-ui";
import { Meta, Story } from "@storybook/react";
import {
  OneUpBreakerBlueBackground,
  OneUpBreakerFifty,
  ThemeProvider,
} from "@psu-flex/psu-global-ui";
import { BackgroundWrapper } from "@psu-flex/psu-global-ui";

export default {
  title: "Global/OneUpBreaker",
  component: OneUpBreakerBlueBackground,
} as Meta;

const args = {
  title:
    "Lorem ipsum dolor sit amet consectetur. Et leo amet ac lectus faucibus.",
  description:
    "Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend.",
  link: {
    text: "Button Medium",
    url: "/",
  },
};

const OneUpBreakerBlueBackgroundTemplate: Story<
  typeof OneUpBreakerBlueBackground
> = (args) => (
  <BackgroundWrapper variant="white" hasFixedHeight={true} {...args}>
    <ThemeProvider>
      <OneUpBreakerBlueBackground
        link={{ text: "", url: "" }}
        title=""
        description=""
        {...args}
      />
    </ThemeProvider>
  </BackgroundWrapper>
);

const OneUpBreakerFityTemplate: Story<typeof OneUpBreakerBlueBackground> = (
  args
) => (
  <BackgroundWrapper variant="white" hasFixedHeight={true} {...args}>
    <ThemeProvider>
      <OneUpBreakerFifty
        link={{ text: "", url: "" }}
        title=""
        description=""
        {...args}
      />
    </ThemeProvider>
  </BackgroundWrapper>
);

export const BlueBackground = OneUpBreakerBlueBackgroundTemplate.bind({});
BlueBackground.args = args;

export const Fifty = OneUpBreakerFityTemplate.bind({});
Fifty.args = args;
