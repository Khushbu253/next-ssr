import React from 'react'

const PartnershipGrowth = ({partnershipGrowth}) => {

    const partnership=partnershipGrowth
    return (
        <React.Fragment>
        <section className='partnershipGrowth'>
         <div className='container'>
             <div className='row align-items-center'>
                 <div className='col-lg-6 col-md-12'>
                     <div className='about-image'>
                         <img src={partnership?.bannerImg?.url} alt="partneship-banner"></img>
                     </div>
                 </div>
                 <div className='col-lg-6 col-md-12'>
                     <div className='about-content'>
                         <div className='content'>
                             <span className='sub-title'>{partnership.title}</span>
                             <h1>{partnership.heading}</h1>
                             <ul className='features-list'>
                                 {
                                     partnership.partnerFeature.map((feature)=><li>
                                     <img src={feature?.icon?.url} alt="services"/>
                                     <h3>{feature.title}</h3>
                                     <p>{feature.subtitle}</p>
                                 </li>)
                                 }
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </section>
     </React.Fragment>
    )
}

export default PartnershipGrowth;