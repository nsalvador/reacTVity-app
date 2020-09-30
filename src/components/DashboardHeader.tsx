// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Dashboard</h1>
      <div className="page-header__actions">
        <Link className="btn" to="/search">
          Goto Search Page
        </Link>
      </div>
    </div>
  </div>
);

export default DashboardHeader;
