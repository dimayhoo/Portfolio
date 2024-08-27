import React from 'react';
import data from '../data.json';

function SocialLinks() {
  return (
    <div className='flex items-center space-x-12 justify-start text-white'>
        {data.socialLinks.map(link => (
            <a key={link.name} href={link.href} 
            className='paragraph link text-3xl'>{link.name}</a>
        ))}
    </div>
  )
}

export default SocialLinks