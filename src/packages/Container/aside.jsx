import React from 'react';
import './aside.scss';

const VeeAside = (props) => {
  let { children, width, className } = props;

  width = width || '300px';

  const asideClass = () => {
    let classes = [];
    classes.push(`vee-aside`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }

  return (
    <aside className={asideClass()} style={{width: width}}>
        {children}
    </aside>
  );
}

export default VeeAside;
