import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './Containers/App';
import { searchHeroes } from './reducers';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const store = createStore(searchHeroes, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkergit.unregister();

reportWebVitals();