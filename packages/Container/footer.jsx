import React from 'react';
import './footer.scss';

const VeeFooter = (props) => {
  let { children, className } = props;
  
  const footerClass = () => {
    let classes = [];
    classes.push(`vee-footer`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }

  return (
    <footer className={footerClass()}>
        {children}
    </footer>
  );
}

export default VeeFooter;
