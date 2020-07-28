import React from 'react';
import Header from './Header';
import '../styles/Layout.css';

const Layout = ({ children }) => (
  <div className='Main'>
    <Header />
    {children}
  </div>
);

export default Layout;