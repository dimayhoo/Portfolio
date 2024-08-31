import React from 'react';
import data from '../data.json';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';
import handleScroll from '../hooks/SmoothScroll';
import avatarBlack from '../../public/assets/avatar-black-compressed.jpg'

function Header() {
  return (
    <div className='z-50 fixed top-0 left-0 right-0 px-4 sm:px-7 md:px-10 lg:px-12 xl:px-14 
    flex items-center justify-between h-16 smaller-paragraph'>
        <div>
            <img className="rounded-full" src={avatarBlack} alt="avatar" width={30} height={30}/>
        </div>
        <div className='py-1 px-4 rounded-3xl bg-white bg-opacity-40'>
            <div className='mx-auto flex space-x-0 sm:space-x-2 md:space-x-6'>
                <a href="#projects-0-section" onClick={handleScroll} className='header-link'>
                    Works, 
                </a>
                <button className='header-link' popovertarget="about-me-popover">
                    About, 
                </button>
                <a href="mailto:dmitry_savkov@mail.ru" className='header-link'>
                    Contact
                </a>
            </div>
            <div id="about-me-popover" popover="auto" className='
            h-full fixed right-0 left-auto w-full lg:w-7/12 flex-col space-y-10 md:space-y-14 xl:space-y-20
            py-14 md:py-20 px-4 sm:px-7 md:px-10 lg:px-12 xl:px-14'>
                <div className='flex justify-between items-center'>
                    <img src={avatarBlack} alt="my avatar" className='aspect-square rounded-xl
                    w-24 xl:w-32 '/>
                    <button popovertarget="about-me-popover" popovertargetaction="hid"
                    className='border-[1px] border-black bg-white
                    hover:bg-black hover:text-white transition-all duration-300 rounded-[2rem]
                    px-8 py-2 xl:px-10 xl:py-3'>
                        Close
                    </button>
                </div>
                <h3 className='about-subheader'>{data.aboutMe.title}</h3>
                {data.aboutMe.description.map((item, i) => (
                    <div key={`item${i}`} className=''>
                        <h3 className='about-subheader mb-4'>{item.header}</h3>
                        <p className='text-gray-700 about-paragraph'>{item.text}</p>
                    </div>
                ))}
                <ContactButton />
                <SocialLinks color={'black'} textSize={'2xl'} />
            </div>
        </div>
    </div>
  )
}

export default Header