import React from 'react'

function ExpertiseList({ data }) {
  return (
    <ul className='vertical-iterating-line'>
        {data.map(skill => (
            <li key={skill.name}>
                <div className='vertical-line-element'>
                    <img src={skill.icon} alt="icon" width={42} height={42} />
                    <span className='max-w-[14rem]'>{skill.name}</span>
                </div>
                <div className="dot-circle my-8"></div>
            </li>)
        )}
    </ul>
  )
}

export default ExpertiseList