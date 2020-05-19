import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';

import "./sass/main.sass";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers/allReducers';

const store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>, 
  document.getElementById('root')
);
