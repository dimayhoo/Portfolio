import { useRef, useEffect } from 'react'
import useObserverElement from '../hooks/ScrollAnimations.jsx';
import ExpertiseList from './ExpertiseList';

function Expertise({ data }) {
  const section = useRef();

  useEffect(() => {
    useObserverElement(section.current)
  }, [])

  const skills = [];

  for (let i = 0; i < data.length; i += 2) {
    skills.push([data[i], data[i + 1]]);
  }

  return (
    <section ref={section} className='mt-16 w-full bg-violet-700
    px-14 pt-32 h-screen text-white flex flex-col justify-between'>
      <h2 className='subheader'>Expertise</h2>
      <div className='mt-8 paragraph'>
        <p className='text-gray-100 relative max-w-lg after:absolute after:left-0 
        after:w-0.5 after:bg-white after:top-0 pl-4 after:h-full'>
          The illiterate of the future will not be the person who cannot read. It will be the person who does not know how to learn.
        </p>
        <p className='ml-6 mt-2 text-xl text-gray-200'>— Alvin Toffler</p>
      </div>
      <ul className='pb-2 flex flex-1 items-center'>
        <div className='relative space-x-2 flex justify-center'>
          {skills.map((item, i) => (
            <ExpertiseList key={'skill' + i} skill={item} />
          ))}
          {/** minue two because of x space by parent */}
          <div className="absolute inset-y-0 -left-2 w-24 bg-gradient-to-r from-violet-700 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-violet-700 to-transparent pointer-events-none"></div>
        </div>
      </ul>
    </section>
  )
}

export default Expertise