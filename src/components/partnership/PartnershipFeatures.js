import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"


const PartnershipFeatures = ({partnershipFeatures}) =>{


    const partnership=partnershipFeatures
    const{content}=partnership
return(
    <React.Fragment>
    <section className="aboutUs-Features bg-fafafb pt-70">
        <div className="section-title">
            {/* <span className="sub-title">
               {partnership.title}
            </span> */}
            <h2>{partnership.heading}</h2>
        </div>
        <div className="container">
            <div className='pb-70 about-us-CustomFeature partnership-customFeatures'>
                <div className="row align-items-center custom-mb-20">
                <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <h4>{content[0].heading}</h4>
                                <p>{content[0].text1}</p>
                                <p>{content[0].text2}</p>
                             </div>
                             <div className='about-tag-line'>
                                <p className='about-tag-lineText'>{content[0].smallText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={content[0]?.image?.url} alt="AboutFeatures1" />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={content[1]?.image?.url} alt="AboutFeatures2" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                            <h4>{content[1].heading}</h4>
                                <p>{content[1].text1}</p>
                               
                            </div>
                            <div className='about-tag-line'>
                                <p className='about-tag-lineText'>{content[1].smallText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-70 about-us-CustomFeature'>
                <div className="row align-items-center custom-mb-20">
                <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                            <h4>{content[2].heading}</h4>
                                <p>{content[2].text1}</p>
                                <p>{content[2].text2}</p>
                            </div>
                            <div className='about-tag-line'>
                                <p className='about-tag-lineText'>{content[2].smallText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={content[2]?.image?.url} alt="AboutFeatures1" />
                        </div>
                    </div>
                </div>
                {/* <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={content[3]?.image?.url} alt="AboutFeatures2" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                            <h4>{content[3].heading}</h4>
                                <p>{content[3].text1}</p>
                                <p>{content[3].text2}</p>
                            </div>
                            <div className='about-tag-line'>
                                <p className='about-tag-lineText'>{content[3].smallText}</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
</React.Fragment>
    )
}
export default PartnershipFeatures;