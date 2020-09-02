import React, { Component } from 'react';
import './sass/app.scss';

import { withRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Experiments from './components/experiments';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/experiments">
            <Experiments />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
