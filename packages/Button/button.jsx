import React from 'react';
import './button.scss';
import { VeeIcon } from '../Icon';

const VeeButton = (props) => {
  let { className, children, type, icon, loading, onClick } = props;
  let iconPosition = props['icon-position'];

  type = type || '';
  iconPosition = iconPosition || 'left';
  loading = loading || false;

  const btnClass = () => {
    let classes = [];
    classes.push(`vee-button`);
    if(type) {
        classes.push(`vee-button-${type}`)
    }
    if(iconPosition) {
        classes.push(`vee-button-${iconPosition}`)
    }
    return classes.join(' ');
  }
  
  return (
    <button onClick={onClick} className={btnClass()}>
      { (icon && !loading) && <VeeIcon icon={icon}></VeeIcon>}
      { loading && <VeeIcon icon="loading"></VeeIcon> }
      <span>{children}</span>
    </button>
  );
}

export default VeeButton;
