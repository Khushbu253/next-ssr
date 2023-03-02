import React from 'react'
import logo from "../../assets/images/logo.png"
import footerMap from "../../assets/images/footer-map.png"
import { useRecoilState } from "recoil";
import Link from 'next/link';
import Image from 'next/image';

const Footer = ({footer}) => {
    
    const currentYear = new Date().getFullYear();
    const {addressLine1,addressLine2,footerText,phone,email}=footer


    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <Image src={logo} alt="logo" />
                            </a>
                            <p>{footerText}</p>

                            <ul className="social-link">
                                <li>
                                    <Link href="https://www.facebook.com/CybercomCreation" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/cybercomcreatio" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/company/cybercom-creation" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                    <li>
                                    <Link href="/about-us">
                                        Company
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link href="/services">
                                        Services
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/about-us">
                                    About Us
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Resources</h3>

                            <ul className="footer-links-list">
                                <li>
                                <Link to="/technology">
                                    Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" >
                                       Partnership
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                       Work
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/case-studies">
                                        Case Studies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                        {addressLine1}<br />{addressLine2}
                                </li>
                              {footer?.phone && <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+91-79-26769999">{phone}</a>
                                </li>} 
                              {footer?.email &&  <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:contact@cybecom.co.in">{email}</a>
                                </li>}
                                {/* <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">+55 785 4578964</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <a href="/" rel="noreferrer">Cybercom Creation</a> All rights reserved. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <Image src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;