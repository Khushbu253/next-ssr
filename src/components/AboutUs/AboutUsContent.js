import React from 'react'



const AboutUsContent = ({aboutContent}) => {
    const {
        aboutImg,
        heading,
        shortDesc,
        goals,
        optionlist,
    } = aboutContent

    return (
        <section className="about-area">
        {/* <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="about-image">
                        <img 
                            src={aboutImg?.formats?.small?.url || aboutImg?.url}
                            alt="feature" 
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about-content">
                        <div className="content">
                            <span className="sub-title">
                                About Us
                            </span>
                            <h2>{heading}</h2>
                            <p>{shortDesc}</p>
                            <ul className="features-list">
                                {optionlist.map(opt => {
                                    return(
                                        <li key={opt.id}>
                                            <img 
                                                src={opt.iconImg?.formats?.small?.url || opt.iconImg?.url}
                                                alt="feature" 
                                            />
                                            <h3>{opt.header}</h3>
                                            <p>{opt.subheading}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    

        <div className="container">
            <div className="about-inner-area pb-70">
                <div className="row">
                    {goals.map(goal => {
                        const {list} = goal
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={goal.id}>
                                <div className="about-text">
                                    <h3>{goal.heading}</h3>
                                    {( goal.heading === "Mission"  || goal.heading ==="Vision") &&  <p>{goal.shortDesc}</p>}
                                    
                                 { goal.heading !=="Mission"  && goal.heading !=="Vision" && <ul className="features-list">
                                        {list && list.map(lst => {
                                            return (
                                                <li key={lst.id}>
                                                    <i className="flaticon-tick"></i> {lst.name}
                                                </li>
                                            )
                                        })}
                                    </ul>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/* <div className="circle-shape1">
            <img src={shape1} alt="banner" />
        </div> */}
    </section>
    )
}

export default AboutUsContent;