import React from 'react'


const Management = ({serviceManagement}) =>{
    
    const { heading,
         description,
         image,  managementFeatures }= serviceManagement
    return(
        <section className="development-service-section pt-70">
             <div className="section-title full-width">
                {/* <span className="sub-title">Development</span> */}
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-8 col-md-12'>
                        <div className='row'>
                            {managementFeatures.map((feature)=><div className='col-lg-6 col-md-12'>
                            <div className="single-solutions-box">
                                <h5>
                                {feature.title}
                                </h5>
                                <ul>
                                    {feature.mFeatureList.map((list)=><li>
                                    {list.listItem}
                                    </li>)}
                                </ul>
                            </div>
                            </div>)}
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <img src={image?.url} alt="development banner"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Management