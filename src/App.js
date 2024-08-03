import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './views/auth/SignIn';
import Admin from './layouts/admin';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/signin" />
      </Switch>
    </Router>
  );
};

export default App;
