import React from 'react';
import './date-range-picker.scss';

const VeeDateRangePicker = (props) => {
  let { children, className } = props;

  const dateRangePickerClass = () => {
    let classes = [];
    classes.push(`vee-date-range-picker`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <div className={dateRangePickerClass()}>
        {children}
    </div>
  );
}

export default VeeDateRangePicker;
