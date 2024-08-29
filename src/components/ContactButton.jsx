import React from 'react'

const ContactButton = ({ border=false }) => {
  return (
    <div>
      {/** qq What is the problem with hiding absolute positioned element? */}
        <a href="mailto:dmitry_savkov@mail.ru" className={`max-w-80 
        justify-center animated-to-top px-6 py-3 flex items-center
        border-[1px] border-black rounded-3xl bg-white text-black text-xl
        ${border === true ? 'after:border-white after:border-[1px]' : false} `}>
            <p className='font-medium'>dmitry_savkov@mail.ru</p>
        </a>
    </div>
  )
}

export default ContactButton