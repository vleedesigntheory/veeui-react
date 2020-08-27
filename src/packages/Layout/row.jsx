import React from 'react';
import './row.scss';

const VeeRow = (props) => {
  let { children, gutter, justify } = props;

  gutter = gutter || 0;

  const rowStyle = () => {
    let styles = {};
    if(gutter) {
        styles = {
            ...styles,
            marginLeft: - gutter / 2 + 'px',
            marginRight: - gutter / 2 + 'px'
        };
        
    }
    if(justify) {
        let key = ['start', 'end'].includes(justify) ? `flex-${justify}` : justify;
        styles = {
            ...styles,
            justifyContent: key
        }
    }
    return styles;
  }

  return (
    <div className="vee-row" style={rowStyle()}>
        {children}
    </div>
  );
}

export default VeeRow;
