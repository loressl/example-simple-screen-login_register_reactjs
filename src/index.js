import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageBase from './pages/PageBase/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PageBase} exact/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
