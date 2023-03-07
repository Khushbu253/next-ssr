import React from 'react'

const Project = ({projects}) => {
    const workSection1= projects
    
    return (
        <React.Fragment>
            <div className="our-mission-area pt-70 pb-100 work-project-page">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content custom-width">
                                {/* <span className="sub-title">
                                   {workSection1.title}
                                </span> */}
                                    <h1>{workSection1.heading}</h1>
                                    <p>{workSection1.description}</p>

                                    <ul className="our-mission-list mb-0">
                                        {workSection1.services.map(service => (
                                            <li key={service.id}>
                                                <i className={service.icon}></i>
                                                {service.service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-image">
                                 <img src={workSection1.bannerImg?.url} />
                                {/* <img src={ProjectBannerPortfolio} alt="projectBanner"></img> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Right Image Style */}
        </React.Fragment>
    )
}

export default Project;