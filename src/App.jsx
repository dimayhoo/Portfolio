import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import data from './data.json'; 
import Expertise from './components/Expertise.jsx';
import Contact from './components/Contact.jsx';

// qq Storing assets images folder in order to use links to the items inside it form other files on deployment. What is the problem at all? What are the two solutions? 
export default function App() {
  // qq What is the best way to handle outside clicks using web popover api?

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