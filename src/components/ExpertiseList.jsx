

function ExpertiseList({ skill }) {
  return (
    <li className='double-skill'>
      <div className='skill relative group'>
        <img alt="logo" src={skill[0].icon} className="opacity-85" width={50} height={50} />
        <div className='live-preview-tooltip skill-tooltip bottom-[unset] -top-[3.75rem]'>
            <p>{skill[0].name}</p>
        </div>        
      </div>
      <div className='skill relative group'>
          <img alt="logo" src={skill[1].icon} className="opacity-85" width={50} height={50} />
          <div className='live-preview-tooltip skill-tooltip'>
              <p>{skill[1].name}</p>
          </div>
      </div>
    </li>
  )
}

export default ExpertiseList