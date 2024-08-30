

function ExpertiseList({ skill }) {
  return (
    <li className='double-skill'>
      <div className='skill'>
        <img alt="logo" src={skill[0].icon} className="opacity-85" width={50} height={50} />        
      </div>
      <div className='skill'>
          <img alt="logo" src={skill[1].icon} className="opacity-85" width={50} height={50} />
      </div>
    </li>
  )
}

export default ExpertiseList