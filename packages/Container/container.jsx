import React, { useEffect } from 'react';
import './container.scss';

const VeeContainer = (props) => {
  let { className, children, isVertical } = props;
  
  isVertical = isVertical || true;

  useEffect(()=> {
      
  })

  const containerClass = () => {
    let classes = [];
    classes.push(`vee-container`);
    if(className) {
      classes.push(className)
    };
    if(isVertical) {
        classes.push(`isVertical`)
    }
    return classes.join(' ');
  }

  return (
    <section className={containerClass()}>
        {children}
    </section>
  );
}

export default VeeContainer;
