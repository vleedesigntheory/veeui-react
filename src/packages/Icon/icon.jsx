import React from 'react';
import "@/styles/icon.css";
import './icon.scss';

const VeeIcon = (props) => {
  const { icon } = props;
  return (
    <i className={`iconfont icon${icon}`}></i>
  );
}

export default VeeIcon;
