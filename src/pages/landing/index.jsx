import React from 'react';

import About from "./components/about"
import ContactUs from "./components/contact-us"
import Features from "./components/features"
import Hero from "./components/hero"


const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <About/> 
        <Features/>
        <ContactUs/>
    </div>
  )
}

export default LandingPage