import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from '../Footer';

function HomePage() {
  return (
    <>
      
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
     
    </>
  );
}

export default HomePage;

