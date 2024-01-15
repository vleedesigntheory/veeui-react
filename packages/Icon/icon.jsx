import React from 'react';
import "../styles/icon.css";
import './icon.scss';

const VeeIcon = (props) => {
  const { className, icon } = props;

  const iconClass = () => {
    let classes = [];
    classes.push(`vee-icon iconfont`);
    if(className) {
      classes.push(className);
    };
    if(icon) {
      classes.push(`icon${icon}`);
    }
    return classes.join(' ');
  }

  return (
    <i className={iconClass()}></i>
  );
}

export default VeeIcon;
