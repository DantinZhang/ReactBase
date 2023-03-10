import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { userContext, tokenContext } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <userContext.Provider value={{name:'zzy', age: 18}}>
    <tokenContext.Provider value={'zzy1314'}>
      <App />
    </tokenContext.Provider>
  </userContext.Provider>
);
