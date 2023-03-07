import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import shape from '../../assets/images/shape/circle-shape1.png'
import StartProjectBanner from '../../assets/images/start-project-portfolio.png'
const StartProject = ({startYourProject}) => {
    
    const {
        images, title, shortText, btnText, btnLink
    } = startYourProject 

    return (
        <div className="project-start-area custom-project-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <Image 
                                src={StartProjectBanner} 
                                alt="project" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>{title}</h2>
                            {/* <p>{shortText}</p> */}
                            <p>Are you ready to empower your business by taking the next big digital step? Connect with us in just a click!</p>
                            <Link href={btnLink} className="default-btn">
                                <i className="flaticon-right"></i> 
                                {btnText}
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export default StartProject;