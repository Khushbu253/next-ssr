import React from "react"
const TechnologySection = ({technologySection}) => {
  const {
      toolsTech: { description, title, subtext, tools, technologyBanner },
  } = technologySection
  return (
    <>
    <section className="about-area pt-70 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <h1>{title}</h1>
              <p>{description}</p>
              <p>{subtext}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="contact-image">
            <img src={technologyBanner?.url} alt="TechnologyChallenge" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="technology-area pt-100 pb-70">
      <div className="container">
        {tools.map(tool => (
          <>
            <div className="section-title">
              <h2>{tool?.title}</h2>
              <p>{tool?.description}</p>
            </div>
            <div className="technology-part pt-80 pb-80">
              <div className="technology-grid">
                {tool?.mobileToolsIcons.map((mobileIcon)=>(
                  
                  <div className="box">
                    <span className="tooltip">{mobileIcon.caption}</span>
                    <div className="image-tooltip-block">
                    <img src={mobileIcon?.url} alt="technology"></img>
                    
                  </div>
                
                </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  </>
  )
}
export default TechnologySection
