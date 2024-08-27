import React from 'react'
import ContactButton from './ContactButton.jsx'

function Hero() {
  return (
    <section className='pt-16 h-screen flex flex-col relative'>
        <div className="absolute top-4 left-52 text-xl">dimayhoo</div>
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
        {/** qq How to align a div at the bottom of a section that is 100vh in height? */}
        <ul className='h-[5.5rem] self-end w-full bg-green-100 flex items-center'>
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
        </ul>

    </section>
  )
}

export default Hero