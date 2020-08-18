import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/_var.scss';

import Button from '@/packages/Button/button';

const App = () => {
    return (
        <Button></Button>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
