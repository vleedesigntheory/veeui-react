import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            这是一个React App
        </div>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
