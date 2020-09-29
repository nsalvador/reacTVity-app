// eslint-disable-next-line
import React from 'react';

import { signInWithPopup } from '../firebase';

const Login = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">ReacTVity</h1>
      <p>Subscribe to your favorite shows</p>
      <button className="btn" onClick={signInWithPopup}>
        Login with Google
      </button>
    </div>
  </div>
);

export default Login;
