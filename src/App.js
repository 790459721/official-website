/*
 * @Author: qinsensen
 * @Date: 2020-06-23 15:32:02
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-23 17:45:09
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
