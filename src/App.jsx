import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

export default function App() {
  return (
    <div>
      <Header isName={true} />
      <Hero />
    </div>
  )
}