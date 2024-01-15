import React from 'react';
import './table.scss';

const VeeTable = (props) => {
  let { children, className, columns, data } = props;

  const tableClass = () => {
    let classes = [];
    classes.push(`vee-table`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <div className={tableClass()}>
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default VeeTable;
