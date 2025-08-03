import React from 'react'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Properties from './components/Properties.jsx';
import Reviews from './components/Reviews.jsx';
import Layout from './Layout.jsx';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home route with header + about shown */}
        <Route index element={
          <>
            <Header />
            <About />
            <Reviews />
          </>
        } />
        <Route path="Properties" element={<Properties />} />
      </Route>
    </Routes>
  )
}

export default App



