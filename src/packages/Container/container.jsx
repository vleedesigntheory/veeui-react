import React, { useEffect } from 'react';
import './container.scss';

const VeeContainer = (props) => {
  let { children, isVertical } = props;
  
  isVertical = isVertical || true;

  useEffect(()=> {
      console.log(children)
  })

  const containerClass = () => {
    let classes = [];
    classes.push(`vee-container`);
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
