import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import PlayAudio from './play-audio';

export default function Experiments() {
  let { path, url } = useRouteMatch();

  return (
      <div>
        <Switch>
          <Route path={`${url}/play-audio`}>
            <PlayAudio />
          </Route>
          <Route exact path={path}>
            <h1>Experiments</h1>
            <ol>
              <li>
                <Link to={`${url}/play-audio`}>PlayAudio</Link>
              </li>
            </ol>
          </Route>
        </Switch>
      </div>
  );
}