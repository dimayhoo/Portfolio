import React from 'react';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';

function Contact() {
  return (
    <section className='mt-32 bg-black
    px-14 h-screen text-white pt-20 relative'>
      <div className='flex flex-col justify-between h-full pb-48'>
        <h2 className='subheader text-8xl'>
          Nice to meet you.
        </h2>
        <div className='my-32 ml-12'>
          <ContactButton />
        </div>
        
        <SocialLinks />
      </div>
      <div className='absolute bottom-12 left-14 right-14 flex justify-between items-end'>
        <p className='paragraph'>
          © DmitrySavkov
        </p>
        <div className='w-20 aspect-square rounded-full bg-white'>
          <img src="" alt="back" />
        </div>
      </div>
    </section>
  )
}

export default Contact