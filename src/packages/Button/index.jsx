import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { color } from "../../styles/style";

const Mybutton = styled.button({
  color: '#fff',
  backgroundColor: color.$primary
});

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <Mybutton
      type="button"
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </Mybutton>
  );
};

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
