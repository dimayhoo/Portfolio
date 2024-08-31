import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import data from './data.json'; 
import Expertise from './components/Expertise.jsx';
import Contact from './components/Contact.jsx';

export default function App() {

  return (
    <div className='scroll-smooth' >
      <Header isName={true} />
      <Hero />
      {
        data.projects.map((project, i) => (
          <Overview key={i} data={project} index={i} />
        ))
      }
      <Expertise data={data.skills} />
      <Contact />
    </div>
  )
}