import React from 'react'

const Development = ({serviceDevelopment}) =>{
       
   
       const { heading,
            description,
            image,
            developmentFeature}= serviceDevelopment


    return(
        <section className="development-service-section pt-70 pb-70">
             <div className="section-title full-width">
                <span className="sub-title">{heading}</span>
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-8 col-md-12'>
                        <div className='row'>
                            {developmentFeature.map((feature)=> <div className='col-lg-6 col-md-12'>
                            <div className="single-solutions-box">
                                <h5>
                               {feature.title}
                                </h5>
                                <ul>
                                   { feature.devList.map((list)=> <li>
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
export default Development