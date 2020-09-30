// eslint-disable-next-line
import React from 'react';

import { AuthContextProvider } from '../context/auth';
import { Props } from '../types';
import useAuth from '../functions/auth';

const AuthProvider = ({ children }: Props) => {
  const { user } = useAuth();

  return <AuthContextProvider value={{ user }}>{children}</AuthContextProvider>;
};

export default AuthProvider;
