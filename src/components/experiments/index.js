import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import PlayAudio from './euclidean-band';

export default function Experiments() {
  let { path, url } = useRouteMatch();

  return (
      <div>
        <Switch>
          <Route path={`${url}/euclidean-band`}>
            <PlayAudio />
          </Route>
          <Route exact path={path}>
            <h1>Experiments</h1>
            <ol>
              <li>
                <Link to={`${url}/euclidean-band`}>PlayAudio</Link>
              </li>
            </ol>
          </Route>
        </Switch>
      </div>
  );
}