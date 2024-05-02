import React from "react";
import { jsx, ThemeUIProvider } from "theme-ui";
import { Meta, Story } from "@storybook/react";
import { StatsList, ThemeProvider } from "@psu-flex/psu-global-ui";
import { BackgroundWrapper } from "@psu-flex/psu-global-ui";

export default {
  title: "Global/StatsList",
  component: StatsList,
} as Meta;

const args = {
  title: "Your opportunities are unlimited",
  description:
    "Penn State is a community inspired by pushing past limitations while exploring real-world opportunities like entrepreneurship, philanthropy, research, internships and more.",
  link: {
    text: "See Our Impact",
    url: "/",
  },
  cards: [
    {
      id: 1,
      title: "140+ Countries Represented",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      id: 2,
      title: "9000+ Students Across 24 Campuses",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      id: 3,
      title: "11,500+ International Community",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      id: 4,
      title: "70+ Internation Academic Interships",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      id: 5,
      title: "70+ Internation Academic Interships",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      id: 6,
      title: "70+ Internation Academic Interships",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      id: 7,
      title: "70+ Internation Academic Interships",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      id: 8,
      title: "70+ Internation Academic Interships",
      description:
        "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
  ],
};

const Template: Story<typeof StatsList> = (args) => (
  <BackgroundWrapper variant="nittanyNavy" hasFixedHeight={true} {...args}>
    <ThemeProvider>
      <StatsList
        cards={[]}
        link={{ text: "", url: "" }}
        title=""
        description=""
        {...args}
      />
    </ThemeProvider>
  </BackgroundWrapper>
);

export const Default = Template.bind({});
Default.args = args;
