import React from 'react';
import ReactDOM from 'react-dom';
import Map from './js/screens/Map/index';
import reportWebVitals from './reportWebVitals';
import initStore from './js/core/store';
import { Provider } from 'react-redux';
import './styles/main.scss';

const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Map />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
