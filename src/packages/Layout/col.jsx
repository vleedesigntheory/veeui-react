import React from 'react';
import './col.scss';

const VeeCol = (props) => {
  let { children, span, offset, gutter } = props;

  gutter = gutter || 0;
  span = span || 24

  const colClass = () => {
    let classes = [];
    if(span) {
        classes.push(`vee-col-${span}`);
    };
    if(offset) {
        classes.push(`vee-col-offset-${offset}`);
    }
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(type => {
        if(props[type]) {
            if(!Number(props[type])) {
                let obj = {}
                props[type].slice(1,-1).split(',').forEach(item => {
                    let [key, value] = item.split(':');
                    key.replace("\"","");
                    obj[key] = value;
                })
                
                const span = obj["'span'"],
                      offset = obj["'offset'"];
                span && classes.push(`vee-col-${type}-${span}`);
                offset && classes.push(`vee-col-${type}-offset-${offset}`);
            } else {
                classes.push(`vee-col-${type}-${props[type]}`);
            }
        }
    })
    return classes.join(' ');
  };

  const colStyle = () => {
    let styles = {};
    if(gutter) {
        styles = {
            ...styles,
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter /2 + 'px'
        }
    }
    return styles;
  }
  
  return (
    <div className={colClass()} style={colStyle()}>
        {children}
    </div>
  );
}

export default VeeCol;
