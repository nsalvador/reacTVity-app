// eslint-disable-next-line
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from '../context/auth';
import { Props, FunctionComponentType } from '../types';

const PublicRoute = ({ component: Component, ...rest }: FunctionComponentType) => {
  const { user } = useAuthContext();

  return (
    <Route {...rest} component={(props: Props) => (!!user ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
  );
};

export default PublicRoute;
