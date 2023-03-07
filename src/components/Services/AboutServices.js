import React from 'react'


const AboutServices = ({features}) =>{
    
    const {
        title,
        heading,
        description1,
        description2,
        bannerImage
    } = features
    return(
        <section className="about-area pt-70 pb-70">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <img src={bannerImage?.url} alt="about" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className='about-content'>
                            <span className='custom-sub-title'>{title}</span>
                            <h1>{heading}</h1>
                            <p>{description1}</p>
                            <p>{description2}</p>
                            {/* <div className='service-about-us-list'>
                                <h3 className='inner-title'>{subtitle}</h3>
                                <ul>
                                    {facts.map((fact)=>
                                             <li>{fact.label}</li>
                                    )}
                                </ul>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
                </div>
            </section>

    )
}
export default AboutServices