/*
 * @Author: qinsensen
 * @Date: 2020-06-23 15:32:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-25 22:38:56
 * @Description: 
 */ 
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        { renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
