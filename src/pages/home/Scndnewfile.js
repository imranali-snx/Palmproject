import React from 'react'
import './ScndnewFile.css'
import TimeSquare from '../../images/Time.png'
import Team from '../../images/TimeIcon.png'
import Times from '../../images/Team.png'
import Security from '../../images/Security.png'
import Pay from '../../images/Pay.png'
import Engagement from '../../images/Engagement.png'




const Scndnewfile = () => {
  return (
<div className='scnd-component-container'>

        <div className='scnd-component-inner-container'>
 <div className='scnd-component-inner-container-first-section'>
  <div className='first-section-first-child'>
    <img src={TimeSquare} alt='ddd'/>
  </div>
  <div className='first-section-scnd-child'>
    <div className='content-section'>
      <div className='content-section-inner-component'>
        <img src={Times} alt=''/>
        <h3>Team Management</h3>
      </div>
      <p>Discover the new way to manage your team. All your people data is up to date and in one centrally stored place.</p>
     <a href='/'>Learn more</a>
    </div>

    <div className='content-section-inner-component downcomponents'>
        <img src={Team} alt=''/>
        <h3>Time Management</h3>
      </div>
      <div className='content-section-inner-component downcomponents'>
        <img src={Pay} alt=''/>
        <h3>Compensation Management</h3>
      </div>
      <div className='content-section-inner-component downcomponents'>
        <img src={Engagement} alt=''/>
        <h3>Talent Management</h3>
      </div>
      <div className='content-section-inner-component downcomponents'>
        <img src={Security} alt=''/>
        <h3>Regulatory Compliance</h3>
      </div>
  </div>
  
  </div>
  <div className='scnd-component-inner-container-scnd-section'>
  </div>
        
        </div>
    </div>
      )
}

export default Scndnewfile