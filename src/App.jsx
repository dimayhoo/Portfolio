import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import data from './data.json'; // qq How to import json object file in react?
import Expertise from './components/Expertise.jsx';

export default function App() {
  return (
    <div className='scroll-smooth'>
      <Header isName={true} />
      <Hero />
      {
        data.projects.map((project, i) => (
          <Overview key={i} data={project} />
        ))
      }
      <Expertise data={data.skills} />
    </div>
  )
}