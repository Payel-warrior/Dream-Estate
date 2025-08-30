import React from 'react'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Properties from './components/Properties.jsx';
import Reviews from './components/Reviews.jsx';
import SignUp from "./components/SignUp.jsx";
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx';
import {Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/pageWrapper.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {/* Home: smooth fade */}
          <Route
            index
            element={
              <PageWrapper variant="fade">
                <Header />
                <About />
                <Reviews />
              </PageWrapper>
            }
          />

          {/* Properties: slide up */}
          <Route
            path="Properties"
            element={
              <PageWrapper variant="slideUp">
                <Properties />
              </PageWrapper>
            }
          />

          {/* Contact: zoom in */}
          <Route
            path="Contact"
            element={
              <PageWrapper variant="zoom">
                <Contact />
              </PageWrapper>
            }
          />

          {/* SignUp: slide from right */}
          <Route
            path="SignUp"
            element={
              <PageWrapper variant="slideRight">
                <SignUp />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;




