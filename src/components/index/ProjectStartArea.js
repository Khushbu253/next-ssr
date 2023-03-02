import Link from 'next/link'
import React from 'react'
import shape from '../../assets/images/shape/circle-shape1.png'

const ProjectStartArea = ({ProjectStartArea}) => {
   
    const {images, title, shortText, btnText, btnLink} = ProjectStartArea 

    return (
        <div className="project-start-area ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img 
                                src={images?.formats?.small?.url || images?.url} 
                                alt="project" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>{title}</h2>
                            {/* <p>{shortText}</p> */}
                            <p>Let’s connect, discuss your business and build it together with our 20 years of expertise and advanced skill set.</p>
                            <Link href={btnLink} className="default-btn">
                                <i className="flaticon-right"></i> 
                                {btnText}
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle-shape1">
                <img src={shape} alt="project" />
            </div>
        </div>
    )
}

export default ProjectStartArea;