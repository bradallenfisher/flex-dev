import React from "react";
import { jsx } from "theme-ui";
import { Meta } from "@storybook/react";
import { BlockQuote } from "@psu-flex/core-ui";
import exampleImage from "./test-assets/example-picture.png";
export default {
  title: "Core Composite/TextAndMedia/BlockQuote",
  component: BlockQuote,
} as Meta;

const Template = (args) => (
  <BlockQuote imageSrc={args.withImage ? exampleImage : null} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  withImage: true,
  quote:
    "Penn State offers a vibrant and inclusive campus community, providing numerous opportunities for students to engage in academic, social, and extracurricular activities.”",
  name: "John Smith",
  details: "Data Sciences ‘24, College of Information Sciences and Technology",
};
