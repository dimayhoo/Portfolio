import React from 'react';
import data from '../data.json';

function SocialLinks({ color='white', textSize='3xl' }) {
  return (
    <div className={`flex flex-col space-y-3 md:items-center md:flex-row sm:space-x-3 md:space-x-6 xl:space-x-12 justify-start 
    ${color === 'black' ? 'text-black' : 'text-white'}`}>
        {data.socialLinks.map(link => (
            <a key={link.name} href={link.href} 
            className={`link
            ${ textSize === '3xl' ? 'text-xl lg:text-2xl xl:text-3xl' 
              : 'text-lg lg:text-xl xl:text-2xl'}
            ${ color === 'black' ? 'after:bg-black before:bg-gray-400' : 'after:bg-white'}`}>{link.name}</a>
        ))}
    </div>
  )
}

export default SocialLinks