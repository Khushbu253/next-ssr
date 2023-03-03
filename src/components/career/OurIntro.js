import React from 'react'
const OurIntro = ({OurIntro}) => {
  

  const {heading,description,teamImage}= OurIntro
  
  return (
    <div className='OurIntro-wrapper'>
    <div className='container'>
      <div className='about-OurIntro'>            
        <div className='OurIntro-details'>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div> 
        <div className='Ourteam-image'>
          <img src={teamImage?.url} alt="ourteamimage-image"></img>
        </div>
      </div>
    </div>  
  </div>
  )
}

export default OurIntro
