import React from 'react'

function Header({ isName }) {
  return (
    <div className='z-0 fixed top-0 left-14 right-14 flex items-center h-16 text-xl'>
        <div>
            <img src="" />
        </div>
        {isName && <div className='flex-1'>
            dimayhoo
        </div>}
        <div className='py-1 relative px-4'>
            <div class="rounded-3xl absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>
            <div className='relative mx-auto z-10 flex space-x-6'>
                <a href="" className='header-link'>
                    Works, 
                </a>
                <a href="" className='header-link'>
                    About, 
                </a>
                <a href="dmitry_savkov@mail.ru" className='header-link'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header