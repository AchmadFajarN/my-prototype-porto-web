import React from 'react';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Project from './Project';

const Main = () => {
  return (
    <main className='bg-primary'>
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  )
}

export default Main