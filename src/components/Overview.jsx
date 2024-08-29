import React from 'react'
import DoubleImageSection from './DoubleImageSection.jsx';

function Overview({ data, index }) {
  const colorVariants = {
    'blue': 'bg-blue-500',
    'black': 'bg-black'
  }


  return (
    <section id={`projects-${index}-section`} className='mt-16 relative px-14'>
        <div className={`-z-10 absolute left-0 top-0 h-screen w-full 
        ${colorVariants[data.background]}`}></div>
        <div className='flex pb-24 pt-32 text-white'>
            <div className='max-w-5xl'>
                <div>
                    <h2 className='subheader'>
                        <span className='font-semibold'>{data.title.main} </span>
                        {data.title.second}
                    </h2>
                </div>
                <article className='block mt-16 paragraph max-w-2xl'>{data.description}</article>
            </div>
            <div className='flex-1 flex flex-col items-end'>
                <div className='flex justify-between items-center flex-col h-full'>
                    <ul className='flex flex-col space-y-4 flex-1'>
                        <li className='property-list-item paragraph'>
                            <p>{data.properties[0]}</p>
                        </li>
                        <li className='property-list-item paragraph'>
                            <p>{data.properties[1]}</p>
                        </li>
                        <li className='property-list-item paragraph'>
                            <p>{data.properties[2]}</p>
                        </li>
                    </ul>
                    <div className='flex flex-col space-y-2 text-center'>
                        <a href={`${data.links[0].href}`} className='project-link'>
                            {data.links[0].name}
                        </a>
                        <a href={`${data.links[1].href}`} className='project-link'>
                            {data.links[1].name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <DoubleImageSection data={data.images}/>
    </section>
  )
}

export default Overview