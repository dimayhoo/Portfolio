import React from 'react';
import data from '../data.json';

function SocialLinks() {
  return (
    <div className='flex items-center space-x-6 justify-center'>
        {data.socialLinks.map(link => {
            <a href={link.href} className='paragraph'>{link.name}</a>
        })}
    </div>
  )
}

export default SocialLinks