import React from 'react';
import './row.scss';

const VeeRow = (props) => {
  const { children } = props;

  const rowStyle = (props) => {
    const { gutter, justify } = props;
    let styles = {};
    if(gutter) {
        styles = {
            ...styles,
            marginLeft: - gutter / 2 + 'px',
            marginRight: - gutter / 2 + 'px'
        }
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
    <div className="vee-row" style={rowStyle(props)}>
        {children}
    </div>
  );
}

export default VeeRow;
