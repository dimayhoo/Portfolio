import React from 'react';
import ExpertiseList from './ExpertiseList';

function Expertise({ data }) {
  const median = data.length / 2; // length of data is even

  const firstHalf = data.slice(0, median);
  const secondHalf = data.slice(median);

  return (
    <section className='mt-16 w-full bg-[#ffd3c5]
    flex items-center justify-center h-screen text-black'>
        <div className='flex'>
            <ExpertiseList data={firstHalf} />
            <p className='text-5xl font-normal my-auto mx-24'>
                Expertise
            </p>
            <ExpertiseList data={secondHalf}/>
        </div>
    </section>
  )
}

export default Expertise