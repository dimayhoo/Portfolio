import React from 'react';
import data from '../data.json';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';
import handleScroll from '../hooks/SmoothScroll';
import avatarBlack from '../assets/avatar-black-compressed.jpg'

function Header() {
  return (
    <div className='z-50 fixed top-0 left-14 right-14 flex items-center justify-between h-16 text-xl'>
        <div>
            <img className="rounded-full" src={avatarBlack} alt="avatar" width={30} height={30}/>
        </div>
        <div className='py-1 px-4 rounded-3xl bg-white bg-opacity-40'>
            <div className='mx-auto flex space-x-6'>
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
            h-full fixed right-0 left-auto w-7/12 flex-col space-y-20
            py-20 px-14 paragraph'>
                <div className='flex justify-between items-center'>
                    <img src={avatarBlack} alt="my avatar" className='aspect-square rounded-xl' width={120} height={120}/>
                    <button popovertarget="about-me-popover" popovertargetaction="hid"
                    className='border-[1px] border-black px-10 py-3 bg-white
                    hover:bg-black hover:text-white transition-all duration-300 rounded-[2rem]'>
                        Close
                    </button>
                </div>
                <h3 className='about-subheader'>{data.aboutMe.title}</h3>
                {data.aboutMe.description.map((item, i) => (
                    <div key={`item${i}`} className=''>
                        <h3 className='about-subheader mb-4'>{item.header}</h3>
                        <p className='text-gray-700'>{item.text}</p>
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