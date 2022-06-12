import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../Checkbox";

import CheckboxDocs from "./CheckboxDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "<Components/Checkboxes/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocs,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: <div>checkbox</div>,
};
