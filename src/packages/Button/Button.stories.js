import React from 'react';
import { action } from "@storybook/addon-actions";
import { Button } from './index.jsx';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
