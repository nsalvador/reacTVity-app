// eslint-disable-next-line
import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { Props } from '../types';

const Layout = ({ children }: Props) => (
  <div className="layout-container">
    <div className="layout-content">
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
