import Link from 'next/link'
import React from 'react'


const Consulting = ({serviceConsulting}) =>{
      
   
   
       const { title,
            heading,
            description,
            consultFeature}= serviceConsulting
   
    

    return(
        <section className="consulting-section pt-70 pb-70">
             <div className="section-title full-width">
                    <span className="sub-title">
                       {title}
                    </span>

                    <h2>{heading}</h2>
                    <p>{description}</p>
            </div>
            <div className='container'>
            <div className="row">
                    {consultFeature.map((feature)=> (
                        <div className="col-lg-4 col-sm-6" >
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <i>
                                        <img src={feature?.icon?.url} alt="feature-image"></img>
                                        
                                    </i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        {feature.title}
                                    </Link>
                                </h3>
                            
                                <ul>
                                {
                                    feature.list.map((item)=> <li>
                                    {item.listItem}
                                </li>)
                                }
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Consulting