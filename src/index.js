/*
 * @Author: qinsensen
 * @Date: 2020-06-23 15:32:02
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-23 16:18:54
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setRem } from './utils/util.rem';
import './style/common/rest.less'
setRem(750, 100)
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
