import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers'
import BaseLayout from './components/layout/BaseLayout'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <BaseLayout>
        <App />
        </BaseLayout>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


