import React from 'react';
import { action } from "@storybook/addon-actions";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { color } from "./style";
import Button from '../packages/Button/button';

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

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





