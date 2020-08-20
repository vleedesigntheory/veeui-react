import React from 'react';
import './button.scss';

const VeeButton = (props) => {
  console.log(props);
  const { children, type } = props;
  return (
    <button className={`vee-button vee-button-${type}`}>
      {children}
    </button>
  );
}

export default VeeButton;
