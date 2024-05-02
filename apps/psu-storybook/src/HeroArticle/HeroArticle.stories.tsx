import React from "react";
import { jsx, ThemeUIProvider } from "theme-ui";
import { Meta, Story } from "@storybook/react";
import { HeroArticle as HeroArticleComponent } from "@psu-flex/psu-global-ui";

export default {
  title: "Global/HeroArticle",
  component: HeroArticleComponent,
  argTypes: {
    variant: {
      options: ["limestoneMaxLight", "slateMaxLight", "white"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template = (args) => (
  <div>
    <HeroArticleComponent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Penn State Global Alumni Spotlight: Pooja Mallipamula",
  subHeading:
    "“I did creative stuff in college, but I wasn’t allowed to fully pursue that,” she said. ",
  leftButtonLabel: "Global Programs",
  rightButtonLabel: "Creative projects",
};
