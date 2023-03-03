import React from 'react'
// import { graphql, useStaticQuery } from "gatsby"
import starIcon from '../../assets/images/star-icon.png'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Clientimage1 from "../../assets/images/career/Clientimage1.png"
import Clientimage2 from "../../assets/images/career/Clientimage2.png"
import Clientimage3 from "../../assets/images/career/Clientimage3.png"
import Loadable from '@loadable/component'
import Link from 'next/link';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))


const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 4,
        }
    }
};



const TeamMember = ({teamMembers}) => {

    const {
        subTitle, title, shortText, teamCard, socialLinks
    } = teamMembers 
    
    return (
        <section className="scientist-area bg-f1f8fb pt-70 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="team" /> 
                        {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>
            </div>
            <OwlCarousel className="Feedback-slider owl-carousel owl-theme adustTeamCarousel" {...options}> 

            
                    {teamCard.map(card => {
                        const {socialLinks} = card
                        return (
                            <div className="col-lg-6 col-sm-3" key={card.id}>
                             
                                <div className="single-scientist-item-box">
                                    <div className="image">
                                        
                                        <img 
                                            src={card.image?.formats?.small?.url || card.image?.url} 
                                            alt="Team Image" 
                                        />
                                        <ul className="social">
                                            {socialLinks && socialLinks.map(item => {
                                                return (
                                                    <li key={item.id}>
                                                        <Link href={item.link} className="d-block">
                                                            <i className={item.icon}></i>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h3>{card.name}</h3>
                                        <span>{card.designation}</span>
                                    </div>
                                </div>
                              
                            </div>
                        )
                    })}
            
                            </OwlCarousel>
        </section>
    )
}

export default TeamMember;
