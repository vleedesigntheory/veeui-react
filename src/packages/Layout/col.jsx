import React, {useContext} from 'react';
import './col.scss';

import VeeRowContext  from './RowContext.jsx';

const VeeCol = (props) => {
  let { children, span, offset } = props;

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
  
  return (
    <VeeRowContext.Consumer>
        {
            value => (
                <div className={colClass()} style={{paddingLeft: value.gutter / 2 + 'px', paddingRight: value.gutter / 2 + 'px'}}>
                    {children} 
                </div>
            )
        }
        
    </VeeRowContext.Consumer>
  );
}

export default VeeCol;
