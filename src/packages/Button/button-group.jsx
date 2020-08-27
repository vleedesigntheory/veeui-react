import React from 'react';
import './button-group.scss';

const VeeButtonGroup = (props) => {
  let { children } = props;
  
  return (
    <div className="vee-button-group">
        {children}
    </div>
  );
}

export default VeeButtonGroup;
