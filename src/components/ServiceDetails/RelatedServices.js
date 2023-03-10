import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import icon1 from '../../assets/images/services/service-icon1.png'
import icon2 from '../../assets/images/services/service-icon2.png'
import icon3 from '../../assets/images/services/service-icon3.png'

const RelatedServices = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <h2>More Services You Might Like</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box ">
                            <div className="icon">
                                <Image src={icon1} alt="about" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    Data Analytics
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <Link href="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <Image src={icon2} alt="about" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    AI & ML Development
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <Image src={icon3} alt="about" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    Data Science
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedServices