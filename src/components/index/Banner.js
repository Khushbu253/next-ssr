import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ReactWOW from 'react-wow'

const Banner = ({data}) => {
    
    const {header, helpText, btnText, btnLink, image} = data
  return (
    <div className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>{header}</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>{helpText}</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link href={btnLink} className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        {btnText} <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="main-banner-image">
                                <img src={image?.formats?.small?.url || ''} alt="banner"/>
                                {/* <Image fluid={image.childImageSharp.fluid} /> */}
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
  )
}



export default Banner

