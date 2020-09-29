// eslint-disable-next-line
import React from 'react';

import AppRouter from '../routers/AppRouter';
import AuthProvider from '../providers/auth';

const App = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

export default App;
