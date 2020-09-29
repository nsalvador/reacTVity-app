import { useEffect, useState } from 'react';

import { currentUser, onAuthStateChanged } from '../firebase';
import { AuthType } from '../types';

const Auth = (): AuthType => {
  const [state, setState] = useState(() => {
    const user = currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setState({ initializing: false, user });
    });
    return () => unsubscribe();
  }, []);

  return state;
};

export default Auth;
