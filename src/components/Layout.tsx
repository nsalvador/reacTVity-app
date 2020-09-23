// eslint-disable-next-line
import React, { FunctionComponent } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: FunctionComponent = ({ children }) => (
  <div className="layout-container">
    <div className="layout-content">
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
