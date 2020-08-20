import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import VeeButton from '@/packages/Button';

const App = () => {
    return (
      <div className="vee-app">
          <ul>
            <li>
              <h3>按钮</h3>
              <span className="vee-break"></span>
              <VeeButton>默认按钮</VeeButton>&nbsp;
              <VeeButton type="primary">普通按钮</VeeButton>&nbsp;
              <VeeButton type="warning">警告按钮</VeeButton>&nbsp;
              <VeeButton type="danger">危险按钮</VeeButton>&nbsp;
              <VeeButton type="info">提示按钮</VeeButton>&nbsp;
              <VeeButton type="success">成功按钮</VeeButton>&nbsp;
            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
          </ul>
      </div>
      
    );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
