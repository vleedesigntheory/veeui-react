import React from 'react';
import './main.scss';

const VeeMain = (props) => {
  let { children, className } = props;

  const mainClass = () => {
    let classes = [];
    classes.push(`vee-main`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <main className={mainClass()}>
        {children}
    </main>
  );
}

export default VeeMain;
