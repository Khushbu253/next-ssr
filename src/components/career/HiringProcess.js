import React from 'react'

const HiringProcess = ({HiringProcess}) => {
    

  const {title,heading,description,hiringFeatures}= HiringProcess

  return (
    <div className='HiringProcess-section'>
    <div className='container'>
      <div className="section-title">
          {/* <span className='sub-title'>{title}</span> */}
          <h2>{heading}</h2>
          <p>{description}</p>
      </div>
      <div className='HiringProcess-steps'>
          <div className='row'>
              {hiringFeatures.map((feature)=><div className='col-md-3'>
                  <div class="Process-step">
                      <div class="icon">
                          <img src={feature?.icon?.url} alt="stepiconOne"></img>
                      </div>
                      <h3>{feature.heading}</h3>
                      <p>{feature.feature}</p>
                  </div>
              </div>)}
          </div>
      </div>
    </div>
  </div>
  )
}

export default HiringProcess
