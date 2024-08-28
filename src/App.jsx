import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import data from './data.json'; 
import Expertise from './components/Expertise.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  // qq What is the best way to handle outside clicks using web popover api?

  return (
    <div className='scroll-smooth' >
      <Header isName={true} />
      <Hero />
      {
        data.projects.map((project, i) => (
          <Overview key={i} data={project} />
        ))
      }
      <Expertise data={data.skills} />
      <Contact />
    </div>
  )
}