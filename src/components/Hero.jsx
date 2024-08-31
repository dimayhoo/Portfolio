import React from 'react'
import ContactButton from './ContactButton.jsx'

function Hero() {
  return (
    <section id="hero-section" className='pt-16 h-screen flex flex-col relative'>
        <div className="hidden sm:block absolute top-4 left-24 smaller-paragraph">dimayhoo.</div>
        <div className='px-4 sm:px-7 md:px-10 lg:px-12 xl:px-14 flex-1 md:mt-16 xl:mt-0 flex flex-col 
        space-y-12 justify-center sm:justify-normal'>
            <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-montserrat uppercase font-bold'>
                <h1>dmitry savkov</h1>
                <h1>fullstack dev</h1>
            </div>
            <p className='max-w-64 text-base sm:max-w-[22rem] sm:text-xl lg:max-w-md lg:text-2xl xl:max-w-xl xl:text-4xl font-medium'>
                I help people building websites according 
                to their needs and make this experience delightful.
            </p>
            <div>
                <ContactButton />
            </div>
        </div>
        <ul className='h-16 md:h-[5.5rem] self-end w-full bg-green-100
         flex items-center overflow-hidden horizontal-scroll-container'>
            <div className='flex items-center text-nowrap horizontal-scroller'>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Problem solving</p>
                </li>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Speed & performance</p>
                </li>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Decesion making</p>
                </li>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Genuine connections</p>
                </li>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Problem solving</p>
                </li>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Speed & performance</p>
                </li>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Decesion making</p>
                </li>
                <li className='paragraph iterating-list-item'>
                    <div className='dot-circle'></div>
                    <p className=''>Genuine connections</p>
                </li>
            </div>
        </ul>

    </section>
  )
}

export default Hero