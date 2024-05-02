import React from "react";
import { jsx } from "theme-ui";
import { Meta, Story } from "@storybook/react";
import { BradTest, BradTestProps } from "@psu-flex/core-ui";
export default {
  title: "Core Composite/TextAndMedia/bradtest",
  component: BradTest,
} as Meta;

const Template: Story<BradTestProps> = (args) => <BradTest {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "John Smith",
  body: "Data Sciences 24, College of Information Sciences and Technology",
};
