// eslint-disable-next-line
import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from '../context/auth';
import { Props } from '../types';

const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: FunctionComponent;
  path: string;
  exact: boolean;
}) => {
  const { user } = useAuthContext();

  return <Route {...rest} component={(props: Props) => (!!user ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;
