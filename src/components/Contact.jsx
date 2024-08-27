import React from 'react';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';

function Contact() {
  return (
    <section className='mt-16 bg-black
    flex justify-center h-screen text-white pt-16'>
      <h2 className='subheader'>
        Nice to meet you.
      </h2>
      <ContactButton />
      <SocialLinks />
    </section>
  )
}

export default Contact