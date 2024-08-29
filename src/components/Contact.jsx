import React from 'react';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';
import handleScroll from '../hooks/SmoothScroll';

function Contact() {
  return (
    <section id="contact-section" className='mt-32 bg-black
    px-14 h-screen text-white pt-20 relative'>
      <div className='flex flex-col justify-between h-full pb-48'>
        <h2 className='subheader text-8xl'>
          Nice to meet you.
        </h2>
        <div className='my-32 ml-12'>
          <ContactButton border={true}/>
        </div>
        
        <SocialLinks />
      </div>
      <div className='absolute bottom-12 left-14 right-14 flex justify-between items-end'>
        <p className='paragraph'>
          © DmitrySavkov
        </p>
        {/** qq How to create links to sections? */}
        <a href="#hero-section" onClick={handleScroll} className='w-20 flex items-center justify-center aspect-square rounded-full bg-white'>
          <svg className="w-8 h-8 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"/></svg>
        </a>
      </div>
    </section>
  )
}

export default Contact