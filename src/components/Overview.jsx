import { useRef, useEffect } from 'react'
import DoubleImageSection from './DoubleImageSection.jsx';
import useObserverElement from '../hooks/ScrollAnimations.jsx';

function Overview({ data, index }) {
  const colorVariants = {
    'blue': 'bg-blue-500',
    'black': 'bg-black'
  }

  const section = useRef();

  useEffect(() => {
    useObserverElement(section.current);
  }, [])
  


  return (
    <section ref={section} id={`projects-${index}-section`} className='mt-16 relative px-4 sm:px-7 md:px-10 lg:px-12 xl:px-14'>
        <div className={`-z-10 absolute left-0 top-0 h-screen w-full 
        ${colorVariants[data.background]}`}></div>
        <div className='flex flex-col items-start md:items-stretch md:flex-row pb-8 sm:pb-12 md:pb-16  lg:pb-20 xl:pb-24 pt-32 text-white'>
            <div className='max-w-5xl'>
                <div>
                    <h2 className='subheader'>
                        <span className='font-semibold'>{data.title.main} </span>
                        {data.title.second}
                    </h2>
                </div>
                <article className='block mt-7 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 paragraph'>{data.description}</article>
            </div>
            <div className='flex-1 flex flex-col items-end'>
                <div className='flex justify-between items-center flex-col h-full'>
                    <ul className='hidden md:flex flex-col space-y-4 flex-1'>
                        <li className='property-list-item'>
                            <p className='paragraph'>{data.properties[0]}</p>
                        </li>
                        <li className='property-list-item'>
                            <p className='paragraph'>{data.properties[1]}</p>
                        </li>
                        <li className='property-list-item'>
                            <p className='paragraph'>{data.properties[2]}</p>
                        </li>
                    </ul>
                    <div className='flex mt-7 space-x-4 md:mt-0 md:space-x-0 md:flex-col md:space-y-2 md:text-center'>
                        <a href={`${data.links[0].href}`} className='project-link'>
                            {data.links[0].name}
                        </a>
                        <a href={`${data.links[1].href}`} className='project-link relative group'>
                            <div className='live-preview-tooltip'>
                                <p>Loading is slow because of using free hosting.</p>
                            </div>
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