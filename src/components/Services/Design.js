import React from 'react'


const Design = ({design}) =>{
       const { title,
            heading,
            description,
            designFeatures}= design


    return(
        <section className="design-service-section pt-70 pb-70 bg-fafafb">
             <div className="section-title full-width">
                    <span className="sub-title">
                   {title}
                    </span>

                    <h2>{heading}</h2>
                    <p>{description}</p>
            </div>
                <div className='container'>
                    <div className="row">
                        {
                            designFeatures.map((feature)=> <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div className="single-solutions-box">
                                <h5>
                                    {feature.title}
                                </h5>
                                <ul>
                                    {feature.featureList.map((list)=> <li>
                                       {list.listItem}
                                    </li>)}
                                </ul>
                            </div>
                        </div>)
                        }
                </div>
            </div>
        </section>
    )
}
export default Design