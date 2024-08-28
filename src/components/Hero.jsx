import React from 'react'
import ContactButton from './ContactButton.jsx'

function Hero() {
  return (
    <section className='pt-16 h-screen flex flex-col relative'>
        <div className="absolute top-4 left-24 text-xl">dimayhoo.</div>
        <div className='px-14 flex-1'>
            <div className='text-9xl font-montserrat uppercase font-bold'>
                <h1>dmitry savkov</h1>
                <h1>fullstack dev</h1>
            </div>
            <p className='max-w-xl text-4xl  my-12'>
                I help people building websites according 
                to their needs and make this experience delightful.
            </p>
            <div>
                <ContactButton />
            </div>
        </div>
        <ul className='h-[5.5rem] self-end w-full bg-green-100
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