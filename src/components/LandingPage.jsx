import React from "react";
import { Navbar } from './Navbar'
import { Landing } from './Landing'
import { Footer } from './footer'

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};
