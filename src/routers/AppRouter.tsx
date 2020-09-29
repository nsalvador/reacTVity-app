// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Search from '../pages/Search';
import Dashboard from '../pages/Dashboard';
import PublicRoute from '../routers/PublicRoute';
import PrivateRoute from '../routers/PrivateRoute';

const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" component={Login} exact={true} />
      <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
      <PrivateRoute path="/search" component={Search} exact={true} />
    </Switch>
  </Router>
);

export default AppRouter;
