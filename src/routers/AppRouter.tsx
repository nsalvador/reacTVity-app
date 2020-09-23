import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path="/" component={Login} exact={true} />
			<Route path="/dashboard" component={Dashboard} exact={true} />
			<Route path="/search" component={Search} exact={true} />
		</Switch>
	</Router>
);

export default AppRouter;
