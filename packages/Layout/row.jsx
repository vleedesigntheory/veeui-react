import React, { useEffect } from 'react';
import './row.scss';
import VeeRowContext  from './RowContext.jsx';

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
  useEffect(() => {
    console.log('1')
  console.log('row gutter', gutter);
  console.log('2')
  })
  

  return (
    <div className="vee-row" style={rowStyle()}>
        <VeeRowContext.Provider value={{gutter}}>
          {children}
        </VeeRowContext.Provider>
    </div>
  );
}

export default VeeRow;
