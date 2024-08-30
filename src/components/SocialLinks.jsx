import React from 'react';
import data from '../data.json';

function SocialLinks({ color='white', textSize='3xl' }) {
  return (
    <div className={`flex items-center space-x-12 justify-start 
    ${color === 'black' ? 'text-black' : 'text-white'}`}>
        {data.socialLinks.map(link => (
            <a key={link.name} href={link.href} 
            className={`paragraph link
            ${ textSize === '3xl' ? 'text-3xl' : ''}
            ${ color === 'black' ? 'after:bg-black before:bg-gray-400' : 'after:bg-white'}`}>{link.name}</a>
        ))}
    </div>
  )
}

export default SocialLinks