import React from 'react';
import './header.scss';

const VeeHeader = (props) => {
  let { children, className } = props;

  const headerClass = () => {
    let classes = [];
    classes.push(`vee-header`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <header className={headerClass()}>
        {children}
    </header>
  );
}

export default VeeHeader;
