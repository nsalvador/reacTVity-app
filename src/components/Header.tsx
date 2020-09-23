// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>ReacTVity</h1>
          </Link>
          <button className="btn btn--outline">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
