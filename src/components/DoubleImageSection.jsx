import React from 'react'

function DoubleImageSection({data}) {
  return (
    <section className='flex flex-col space-y-16 px-14 h-[200vh]'>
        <div className='rounded-lg flex-1'>
            <div>
                <img alt="image from project" />
            </div>
        </div>
        <div className='flex space-x-16 rounded-lg'>
            <div className='flex-1'>
                <div>
                    <img alt="image from project" />                
                </div>                
            </div>
            <div className='flex-1'>
                <div>
                    <img alt="image from project" />
                </div>
            </div>
        </div>
        <div className='rounded-lg flex-1'>
            <div>
                <img alt="image from project" />
            </div>
        </div>
    </section>
  )
}

export default DoubleImageSection