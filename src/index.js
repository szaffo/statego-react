import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import { reducer } from './reducers/allReducers';
import {socketMiddleware} from "./middlewares/socketMiddleware";
import {registerListenersOnSocket} from "./socket/client";

// Import stylesheets
import "semantic-ui-css/semantic.min.css"
import "./sass/main.sass";
import {roundMiddleware} from "./middlewares/roundMiddleware";
import {readyMiddleware} from "./middlewares/readyMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, 
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(socketMiddleware, roundMiddleware, readyMiddleware))
);

registerListenersOnSocket(store);

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>, 
  document.getElementById('root')
);
