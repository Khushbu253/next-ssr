import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"


const ContactInfo = ({address}) => {
   
    const {addressLine1,addressLine2}=address

    return (
        <div className="contact-info-area contact-address pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Address</h3>
                            <p className='address'>{addressLine1}<br />{addressLine2}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Let’s Work Together</h3>
                            <p>Intl. : <a href="tel:+44457895789">+91-79-26769999</a></p>
                            <p>
                                {/* E-mail: */}
                                <a href="mailto:contact@cybercom.co.in">contact@cybercom.co.in</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>We’re Hiring</h3>
                            <p><a href="mailto:hr@cybercom.co.in">hr@cybercom.co.in</a></p>
                            <p><a href="tel:+91-8758007655">+91-8758007655</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo