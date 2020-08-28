import React from 'react';
import './button-group.scss';

const VeeButtonGroup = (props) => {
  let { className, children } = props;

  const btnGroupClass = () => {
    let classes = [];
    classes.push(`vee-button-group`);
    if(className) {
      classes.push(className)
    };
    return classes.join(' ');
  }
  
  return (
    <div className={btnGroupClass()}>
        {children}
    </div>
  );
}

export default VeeButtonGroup;
