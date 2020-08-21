import React from 'react';
import './button.scss';
import { VeeIcon } from '../Icon';

const VeeButton = (props) => {
  console.log(props);
  const { children, type, icon, loading, onClick } = props;
  const iconPosition = props['icon-position'];
  
  return (
    <button onClick={onClick} className={`vee-button vee-button-${type} vee-button-${iconPosition}`}>
      { (icon && !loading) && <VeeIcon icon={icon}></VeeIcon>}
      { loading && <VeeIcon icon="loading"></VeeIcon> }
      <span>{children}</span>
    </button>
  );
}

export default VeeButton;
