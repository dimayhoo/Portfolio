import React from 'react'

function Header({ isName }) {
  return (
    <div className='z-50 fixed top-0 left-14 right-14 flex items-center justify-between h-16 text-xl'>
        <div>
            <img src="" alt="avatar" width={20} height={20}/>
        </div>
        <div className='py-1 px-4 rounded-3xl bg-white bg-opacity-40'>
            <div className='mx-auto flex space-x-6'>
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