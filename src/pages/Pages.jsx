import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';

export default function Pages() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/" component={ NotFound } /> */}
      </Switch>
    </main>
  );
}

