import React from 'react';
import './progress.scss';

const VeeProgress = (props) => {
  let { children, className, strokeWidth, percentage, color } = props;

  strokeWidth = strokeWidth || 6;
  percentage = percentage || 0;
  color = color || 'blue';

  const progressClass = () => {
    let classes = [];
    classes.push(`vee-progress`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }

  const barStyle = () => {
    let styles = {};
    if(percentage) {
        styles = {
            ...styles,
            width: percentage + '%'
        }
    }
    if(color) {
        styles = {
            ...styles,
            background: color
        }
    }
    return styles;
  }
  
  return (
    <div className={progressClass()}>
        <div className="vee-progress-bar">
            <div className="outer" style={{height: strokeWidth + 'px'}}>
                <div className="inner" style={barStyle()}></div>
            </div>
        </div>
    </div>
  );
}

export default VeeProgress;
