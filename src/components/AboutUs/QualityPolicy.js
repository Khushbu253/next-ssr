import React from "react"
import starIcon from "../../assets/images/star-icon.png"


const QualityPolicy = (props) => {


  const {  aboutUsPage } = props
  return (
    <React.Fragment>
      {/* Service Left Image Style */}
      <div className="about-area pt-70 pb-70 qualityPolicy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">Policy</span>

                  <h2>Quality Policy</h2>
                  <p>
                    In our industry quality of the service is determined by
                    sustainable, scalable and successful performance of the
                    solution delivered to the client.
                  </p>
                  <ul className="about-list mb-0">
                    { aboutUsPage.policies.map(policy => (
                      <li key={policy.id}>
                        <i className="flaticon-tick"></i>
                        {policy.Policy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                {/* <Image fluid={servicesOne.image?.formats?.small?.url || servicesOne.image?.url} /> */}
                <img
                  src={
                    aboutUsPage.policyImage?.formats?.small?.url ||
                    aboutUsPage.policyImage?.url
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default QualityPolicy
