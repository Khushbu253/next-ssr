import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
const Data = ({serviceDataSection}) =>{
const { heading,
         description,
         image, dataFeature} = serviceDataSection

    return(
        <section className="development-service-section pt-70 pb-70 bg-fafafb">
             <div className="section-title full-width">
                {/* <span className="sub-title">Development</span> */}
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-lg-5 col-md-12'>
                        <img src={image?.url} alt="development banner"></img>
                    </div>
                    <div className='col-md-7'>
                        <div className='row'>
                            {dataFeature.map((feature,index)=>
                               <div className={(index===0 || index ===1) ? 'col-md-12' : 'col-lg-6 col-md-12'}>
                               <div className="single-solutions-box">
                                   <h5>
                                  {feature.title}
                                   </h5>
                                   <ul>
                                    {feature.dataFeatureList.map((list)=>  <li>
                                       {list.listItem}
                                       </li>)}
                                   </ul>
                               </div>
                               </div>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Data