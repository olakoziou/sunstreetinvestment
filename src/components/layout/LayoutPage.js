import React from 'react';
import { Switch, Route, HashRouter, withRouter } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import { useFirestoreConnect } from 'react-redux-firebase';

function LayoutPage() {
  useFirestoreConnect();
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default withRouter(LayoutPage);
