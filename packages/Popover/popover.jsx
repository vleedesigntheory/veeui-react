import React, { useState } from 'react';
import './popover.scss';

const on = (element, event, handler) => {
    element.addEventListener(event, handler, false);
}

const off = (element, event, handler) => {
    element.removeEventListener(event, handler, false);
}

const VeePopover = (props) => {
  let { children, className, content, title, placement, show, width, trigger } = props;

  show = show || false;

  const [visible, setVisible] = useState(false);
  let timer = null;

  // methods
  const toggle = () => {
    setVisible(visible = !visible);
  };  

  const handleDocumentClick = (e) => {
    if(this.$el.contains(e.target)) {
        return false;
    }
    setVisible(visible = false);
  };

  const handleMouseEnter = () => {
    clearTimeout(this.timer);
    setVisible(visible = true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
        setVisible(visible = false);
    }, 500);
  }


  const popOverClass = () => {
    let classes = [];
    classes.push(`vee-popover`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }

  const popOverContentClass = () => {
    let classes = [];
    classes.push(`vee-popover-content`);
    if(placement) {
        classes.push(`vee-popover-content-${placement}`)
    }
    return classes.join(' ');
  }
  
  return (
    <div className={popOverClass()}>
        {visible && 
            <div className={popOverContentClass()} onClick>
                {title && <h3>{title}</h3>}
                <>{content}</>
                <div className="arrow"></div>
            </div>
        }
        <>{children}</>
    </div>
  );
}

export default VeePopover;
