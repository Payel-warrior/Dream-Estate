import React from 'react';
import Navbar from './components/Navbar';
// import Header from './components/Header';
// import About from './components/About';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      {/* <Header />
      <About /> */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;